import urllib2
import simplejson

req = urllib2.Request("http://www.streethub.com/api/challenge")
opener = urllib2.build_opener()
f = opener.open(req)
data = simplejson.load(f) 


def get_store_address(url):
	#retrieves stores addresses from the api
	req = urllib2.Request(url)
	opener = urllib2.build_opener()
	f = opener.open(req)
	data = simplejson.load(f) 
	addresses = []
	if data['meta']['type'] == 'store':
	#to check if there are data about stories
		for i in range(0, data['meta']['total']):
			addresses.append(data['response']['data'][i]['address'])
		return addresses

def geocode_address(url):
	#retrieves latitudes and longitudes using Google Map api
	print url
	req = urllib2.Request(url)
	opener = urllib2.build_opener()
	f = opener.open(req)
	data = simplejson.load(f)
	geo = []
	for element in data['results']:
		for key in element.iterkeys():
			if key == 'geometry':
				lat = data['results'][data['results'].index(element)][key]['location']['lat']
				lng = data['results'][data['results'].index(element)][key]['location']['lng']
				geo.append((lat, lng)) 			
	return geo