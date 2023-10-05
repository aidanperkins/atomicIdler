from flask import Flask

app = Flask(__name__)

@app.route("/")
def idleGame():
    html = ""
    htmlfile = open("myhtmlstuff.html", "r")
    for line in htmlfile :
        html += line

    return html