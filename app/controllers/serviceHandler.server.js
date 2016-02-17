'use strict';
function ServiceHandler () {

	var months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
		];

	this.convertTime = function (req, res) {
		// set initial return values to null
		var naturalLanguageDate = null;
		var unixDate = null;

		// parse query string from the request
		var strDate = decodeURI(req.params.query);
		var date;

		// if the query is text, not a number, set date
		// note that if the string is not a valid input to Date(), the date object will return Invalid Date
		if (isNaN(strDate)) {
			//date from natural language input
			date = new Date(strDate);
		} else {
			//date from unix timestamp *1000 to make milliseconds
			date = new Date(+strDate*1000);
		}
		// the code below only runs if the date object is valid, otherwise the outputs are returned as null
		if(date.getTime()){
			unixDate = date.getTime()/1000;
			naturalLanguageDate =
			months[date.getMonth()] +" " +
			date.getDate() + ", " +
			date.getFullYear();
		}

		res.json({"unix":unixDate,"natural":naturalLanguageDate});
	};

}

module.exports = ServiceHandler;
