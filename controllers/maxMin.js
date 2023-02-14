// function to find the maximum element of each row.
function maximumInRow(mat,n,m) {
	let maximumValues = []
	for (let i = 0; i < n; i++) {

		let minm = mat[i][0];

		for (let j = 1; j < m; j++) {
			if (mat[i][j] > minm) {
				minm = mat[i][j];
			}
		}
        maximumValues.push(`${minm}`)
	}
    return maximumValues;
}

// function to find the minimum element of each column.
function minimumInCol(mat,n,m) {
    let minimumValues = []
	for (let i = 0; i < m; i++) {
		let minm = mat[0][i];

		for (let j = 1; j < n; j++) {
			if (mat[j][i] < minm) {
				minm = mat[j][i];
			}
		}
        minimumValues.push(`${minm}`)
	}
	return minimumValues;
}

const maximumAndMinimumInMatrix = (req, res) => {

    let n = 3, m = 3;
    let mat = [
	    [5, 16, 20],
	    [9, 11, 18],
	    [15, 16, 17]
    ];


    const maximums = maximumInRow(mat, n, m);
    console.log('maximum values in each row: ', maximums);

    const minimums = minimumInCol(mat, n, m);
    console.log('minimum values in each column: ', minimums);


    /** To get element that is present in both maximum in rows and minimum in columns */
    const combinedArrays = maximums.concat(minimums);

    const toFindDuplicates = combinedArrays => combinedArrays.filter((item, index) => combinedArrays.indexOf(item) !== index)
    const duplicateElement = toFindDuplicates(combinedArrays);

    console.log('duplicated: ', duplicateElement)

    res.send(`
        <h2>Matrix Solution</h2>
        <br>
        <h3>Matrix: </h3>
        <p>[5, 16, 20]</p>
        <p>[9, 11, 18]</p>
        <p>[15, 16, 17]</p>
        <br>
        <h3>Maximum Values in Rows: </h3> ${maximums}
        <br>
        <h3>Minimum Values in Columns: <h3> ${minimums}
        <br>
        <h2>Output</h2>
        <b>${duplicateElement}</b>
        <hr>
        <h2>Complexity Analysis</h2>
        <b>Time Complexity: O(n*m), </b> <p> as we are using nested for loops to traverse the Matrix</p>
        <b>Auxiliary Space: O(1), </b><p>as we are not using any extra space.</p>
    `)
};

module.exports = {
    maximumAndMinimumInMatrix
};