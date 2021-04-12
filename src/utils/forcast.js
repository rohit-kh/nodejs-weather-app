const request = require('request')

const forcast = (latitude, longnitude, callback) => {
	const geocode = latitude+','+longnitude
	const url = 'http://api.weatherstack.com/current?access_key=3b98ea642f3b97c5ed21ab785b797c6d&query=' + geocode;
	request({url, json: true}, (error, {body}) => {
	if(error){
		callback('Unable to connect to the weather service!', undefined);
	}else if(body.error){
		callback('Unable to find location!', undefined);
	}else{

		const data = body.current.weather_descriptions[0] + 
		'. It is currently ' + body.current.temperature + ' degree out.' + 
		' There is a ' + body.current.precip + '% chance of rain. ';
		callback(undefined, data);
	}
	
})
}


module.exports = forcast