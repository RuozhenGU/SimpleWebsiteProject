from flask import Flask, render_template, send_file, request, send_from_directory

app = Flask(__name__)

links = {
	"github": "https://www.github.com",
	"facebook": "https://www.facebook.com",
	"linkedin": "https://www.linkedin.com",
	"baidu": "https://baidu.com"
}

@app.route('/', methods=["GET", "POST"])
def index():

	if request.method == "POST" :  #post request
		# with open("resume.pdf", "rb") as f:
		return send_file("./resume.pdf", attachment_filename="resume.pdf", as_attachment=True)

	else: #get request
		return render_template("index.html", links=links)


if __name__ == '__main__':
	app.run(debug=True, host='0.0.0.0')