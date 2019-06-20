// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a 
// function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) 
// should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings
//  differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

function cleanRoom(arr) {
	var numNum = [];
	var strNum = [];
	for (var i = 0; i < arr.length; i++) {
		if (typeof(arr[i]) === "string") {
			strNum.push(arr[i]);
		}
		else {
			numNum.push(arr[i]);
		}
	}
	numNum = clean(numNum);
	strNum = clean(strNum);
	if (numNum.length === 0) {
		return strNum;
	}
	else if (strNum.length === 0) {
		return numNum;
	}
	else {
		var res = [];
		res.push(strNum);
		res.push(numNum);
		return res;
	}
} 

function clean(arr) {
	arr.sort((a,b) => a-b);
	var res = [];
	var prev = arr[0];
	var dupCnt = 1;

	for (var i = 1; i < arr.length; i++) {
		if (arr[i] === prev) dupCnt++;
		else {
			if (dupCnt === 1) {
				res.push(prev);
				if (i === arr.length - 1) {
					res.push(arr[i]);
				}
			}
			else {
				res.push(new Array(dupCnt).fill(prev));
			}
			dupCnt = 1;
			prev = arr[i];
		}
	}
	return res;
}

// TODO

// Question 2: Write a javascript function that takes an array of numbers and a target number. The function 
// should find two different numbers in the array that, when added together, give the target number. 
// For example: answer([1,2,3], 4)should return [1,3]

// Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that
//  if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.

