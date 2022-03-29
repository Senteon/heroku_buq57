from flask import *
from flask_cors import CORS, cross_origin

app = Flask(__name__, static_folder="app/build", static_url_path='')
#CORS(app, support_credentials=True)

@app.route('/<name>', methods=["GET"])
#@cross_origin(supports_credentials=True)
def name(name: str):
    if (name == "Bilal"):
        return {"response" : "Quraishi"}
    else:
        return {"response" : "User Not Found"}

#@cross_origin(supports_credentials=True)
@app.route("/")
def index():
    return send_from_directory(app.static_folder, "index.html")

if __name__ == "__main__":
    app.run(host="0.0.0.0")