import urllib2
import simplejson


def get_api_stuff(url_api):
    """ Retrieves information from json format given a URL.
    Here, retrieves data from StreetMap Challenge API """
    req = urllib2.Request(url_api)
    opener = urllib2.build_opener()
    content= opener.open(req)
    data_api = simplejson.load(content)
    return data_api['response']['data']

def get_geocodes(i):
    """ Retrieves geocodes for each store.
    Uses Google Maps API, gets coordinates from addresses """
    data = get_api_stuff("http://www.streethub.com/api/challenge")
    # From StreetMap Challenge API, retrieve address & postcode
    address = data[i]['address']
    list_addr = address.split(" ")
    if len(list_addr) >= 5:
        list_addr.reverse()
        list_addr = list_addr[:5]
        list_addr.reverse()
    address2 = ",".join(str(x) for x in list_addr)
    postcode = data[i]['postcode']
    pc = '&components=postal_code:' + postcode
    addr = address2.replace(',', '+')
    # Format Google Maps API geocode URL to add address and postcode
    url_geo = "http://maps.googleapis.com/maps/api/geocode/json?address=%s%s&sensor=false&region=GB" %(addr, pc)
    response = urllib2.urlopen(url_geo)
    json_geocode = response.read()
    return json_geocode

def get_lat_lng(geocode):
    """ Retrieves latitudes and longitudes.
    Uses the results from Google Map geocode search """
    # req = urllib2.Request(geocode)
    # opener = urllib2.build_opener()
    # content= opener.open(req)
    geocode_data = simplejson.load(geocode)
    print geocode_data 
    return geocode_data 
