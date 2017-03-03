// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

console.log('__IMPORT tableData.js__');

var tableArray = [
	{
		routeName: "yoda",
		name: "Yoda",
		role: "Jedi Master",
		age: 900,
		forcePoints: 2000
	}, {
		routeName: "darthmaul",
		name: "Darth Maul",
		role: "Sith Lord",
		age: 200,
		forcePoints: 1200
	}, {
		routeName: "obiwankenobi",
		name: "Obi Wan Kenobi",
		role: "Jedi Master",
		age: 55,
		forcePoints: 1350
	}
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = tableArray;
