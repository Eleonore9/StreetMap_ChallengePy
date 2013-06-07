#!/home/eleonore/Documents/Elleestaunord/env/bin/python
# -*- coding=UTF-8 -*-
import os, sys
from flask import Flask, flash, render_template, redirect, request 
from flask import url_for, session, send_from_directory
import model
import urllib, urlparse


app = Flask(__name__)
app.secret_key = 'this_is_my_not_so_secret_key'
app.config.update(
	DEBUG = True,
)

@app.route("/")
def index():
	addresses = model.get_store_address("http://www.streethub.com/api/challenge")
	#get a list containing all stores addresses
	list_geocode = []
	for address in addresses:
	#for each store address get the latitude and longitude
		addr = address.replace(' ', '+')
		addr += '+London'
		#build the url using Google api and addresses founds with StreetHub api
		url = urlparse.urlunparse( ("http", "maps.googleapis.com/maps/api/geocode",'json?address=', addr,'&sensor=false&region=GB', "") )
		# url = urlparse.urlunparse( ("http", "maps.googleapis.com/maps/api/geocode",'json?address=oxford+street+London','&sensor=false', "", "") )
		list_geocode.append(model.geocode_address(url))
	print list_geocode
	return render_template("index.html", list_geocode=list_geocode)



if __name__ == "__main__":
	port = int(os.environ.get("PORT", 5000))
	app.run(host='0.0.0.0', port=port)


