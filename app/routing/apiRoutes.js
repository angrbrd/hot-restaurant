// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");

// Import the tableData and waitingList
var tables = require('../data/tableData.js');
var waitlist = require('../data/waitingList.js');

// ===============================================================================
// ROUTING
// ===============================================================================

// console.log('tables = ' + JSON.stringify(tables));
// console.log('waitlist = ' + JSON.stringify(waitlist));

// Define the maximum number of tables available
var maxTables = 5;

// Define the api routes
module.exports = function(app) {
	// Return the currently reserved tables
	app.get('/api/tables', function(req, res) {
		console.log('__ENTER /api/tables__');

		res.json(tables);
	});

	// Return the current waitlist
	app.get('/api/waitlist', function(req, res) {
		console.log('__ENTER /api/waitlist__');
		
		res.json(waitlist);
	});

	// Add a new reservation
	app.post('/add', function(req, res) {
		console.log('__ENTER /add__');

		// Capture the reservation object
		var newReservation = req.body;

		if(tables.length < maxTables) {
			tables.push(newReservation);
			res.json({status: 'OK', location: 'tables'});
		} else {
			waitlist.push(newReservation);
			res.json({status: 'OK', location: 'waitlist'});
		}
	});

	// Clear the reserved tables and the waitlist
	app.get('/clear', function(req, res) {
		console.log('__ENTER /clear__');

		tables = [];
		waitlist = [];

		res.json({status: 'OK', message: 'Reservation and waitlist cleared.'});
	});
};
