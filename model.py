import urllib2
import simplejson

def get_api_stuff(url):
	#retrieves information from the api
	req = urllib2.Request(url)
	opener = urllib2.build_opener()
	f = opener.open(req)
	data = simplejson.load(f)
	return data['response']['data']

def get_geocodes(i):
	data = get_api_stuff("http://www.streethub.com/api/challenge")
	address = data[i]['address']
	postcode = data[i]['postcode']
	pc = '&components=postal_code:' + postcode
	addr = address.replace(' ', '+')
	# addr += '+' + postcode
	url_geo = "http://maps.googleapis.com/maps/api/geocode/json?address=%s%s&sensor=false&region=GB" %(addr, pc)
	response = urllib2.urlopen(url_geo)
	json_geocode = response.read()
	return json_geocode
