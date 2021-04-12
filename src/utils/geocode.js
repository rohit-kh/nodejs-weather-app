const request = require('request')

const geocode = (address, callback) => {
	const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoicm9oaXRraGF0cmlpbiIsImEiOiJja245NmtzZTIwejE0MnBuejMyYnU5eWkzIn0.l4DkWzvJnEvYHWMpL-q8UA&limit=1';
	request({url, json: true}, (error, {body}) => {
		if(error){
			callback('Unable to connect to the location service!', undefined)
		}else if(body.features.length === 0){
			callback('Unable to find location. Try another search.', undefined)
		}else{
			callback(undefined, {
				latitude: body.features[0].center[1],
				longnitude: body.features[0].center[0],
				location: body.features[0].place_name
			})
		}
	})
}

module.exports = geocode