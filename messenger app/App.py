from builtins import print

from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route("/")
def home():
    print("Homepage requested!")
    return render_template("index.html")

@app.route("/test")
def test():
    return "Flask backend is working!"

if __name__ == "__main__":
    app.run(debug=True)