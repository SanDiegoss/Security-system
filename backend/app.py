from flask import Flask
from flask import request
import flask

from sqlalchemy import Column
from flask_sqlalchemy import SQLAlchemy

import sqlalchemy
import pymysql

import json
import os
from dataclasses import dataclass

# create the extension
db = SQLAlchemy()

@dataclass
class Log(db.Model):
	id : int
	date : int
	message : str

	id = Column(sqlalchemy.Integer, primary_key=True)
	date = Column(sqlalchemy.Integer)
	message = Column(sqlalchemy.String(256))

@dataclass
class Room(db.Model):
	id : int
	name : str
	status : int

	id = Column(sqlalchemy.Integer, primary_key=True)
	name = Column(sqlalchemy.String(256))
	status = Column(sqlalchemy.Integer)

# take config (connectiong string)
with open("config.json", "r") as jsonfile:
	data = json.load(jsonfile)
	connection_string = data["connection_string"]
	static_folder = data["static_folder"]


# create the app
app = Flask(__name__, static_url_path='', static_folder=static_folder)

# configure MySQL
app.config["SQLALCHEMY_DATABASE_URI"] = connection_string

# initialize the app with the extension
db.init_app(app)

with app.app_context():
	db.create_all()

# api
@app.route("/api/GetRooms", methods = {"GET"})
def GetRoooms():
	rooms = db.session.query(Room).all()
	return flask.jsonify(rooms), 200

@app.route("/api/GetLogs", methods = {"GET"})
def GetLogs():
	logs = db.session.query(Log).all()
	return flask.jsonify(logs), 200

@app.route("/api/GetLogsCount", methods = {"GET"})
def LogsCount():
	count = db.session.query(Log).count()
	return flask.jsonify(count), 200

@app.route("/api/AddLog", methods = {"POST"})
def AddLog():
	if not request.is_json:
		return 'BAD REQUEST', 400

	if "message" not in request.json or "date" not in request.json:
		return 'BAD REQUEST', 400

	message = request.json["message"]
	date = request.json["date"]

	log = Log(
		message = message,
		date = date
	)
	db.session.add(log)
	db.session.commit()
	db.session.refresh(log)

	return flask.jsonify(log.id), 200

@app.route("/api/SetStatus", methods = {"POST"})
def SetStatus():
	if not request.is_json:
		return 'BAD REQUEST', 400

	if "id" not in request.json or "status" not in request.json:
		return 'BAD REQUEST', 400

	id = request.json["id"]
	status = request.json["status"]

	is_exists = db.session.query(db.exists().where(Room.id == id)).scalar()
	
	if not is_exists:
		return 'BAD REQUEST', 400

	room = db.session.query(Room).filter(Room.id == id).one()

	room.status = status
	db.session.commit()

	return flask.jsonify(id), 200


# react-app (SPA) default routing
@app.route("/")
def default():
	return flask.send_file(static_folder + os.sep + 'index.html')

#  starting...
if __name__ == '__main__':
	app.run(threading=True)
