import secrets
from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# Feel free to use your own keys instead
app.config["SECRET_KEY"] = secrets.token_hex(16) 
app.config["JWT_SECRET_KEY"] = secrets.token_hex(16)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///compfree.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

CORS(app)

db = SQLAlchemy(app)

import routes
