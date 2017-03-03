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

console.log('tables = ' + JSON.stringify(tables));
console.log('waitlist = ' + JSON.stringify(waitlist));

module.exports = function(app) {
	app.get('/api/tables', function(req, res) {
		console.log('__ENTER /api/tables__');

		res.json(tables);
	});

	app.get('/api/waitlist', function(req, res) {
		console.log('__ENTER waitlist__');
		
		res.json(waitlist);
	});
};
