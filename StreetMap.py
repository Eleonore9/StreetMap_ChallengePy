#!/home/eleonore/Documents/Elleestaunord/env/bin/python
# -*- coding=UTF-8 -*-
import os, sys
from flask import Flask, flash, render_template, redirect, request 
from flask import url_for, session, send_from_directory
import model, json
import urllib, urlparse


app = Flask(__name__)
app.secret_key = 'this_is_my_not_so_secret_key'
app.config.update(
	DEBUG = True,
)


@app.route('/')
def index():
	url = "http://www.streethub.com/api/challenge"
	data = model.get_api_stuff(url)
	names = []
	oh = []
	for i in range(19):
		names.append(data[i]['name'])
		oh.append(data[i]['oh'])
		with open(os.path.join('./static/js/json/', 'data' + str(i) + '.json'), 'w') as outfile:
			json.dump(model.get_geocodes(i), outfile)
	info = zip(names, oh)
	return render_template("index.html", info=info)


if __name__ == "__main__":
	port = int(os.environ.get("PORT", 5000))
	app.run(host='0.0.0.0', port=port)


