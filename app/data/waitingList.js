// ===============================================================================
// DATA
// Below data will hold all of the waitlist tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

console.log('__IMPORT waitingList.js__');

var waitingArray = [
	{
		routeName: "Zhenya",
		name: "Z",
		role: "Master",
		age: 900,
		forcePoints: 2000
	}, {
		routeName: "Anya",
		name: "Xena",
		role: "Ruler",
		age: 200,
		forcePoints: 1200
	}
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = waitingArray;
