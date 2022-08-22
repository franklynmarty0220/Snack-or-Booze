function unroll(squareArray) {
    let result = [];

    if(squareArray.length === 0){
        return result;
    }

    let startRow = 0;
    let startColumn = 0;

    let endRow = squareArray.length -1;
    let endColumn = squareArray.length - 1;

    while (startColumn < endColumn && startRow < endRow) {
        
        //Go through columns
        for(let i = startColumn; i <= endColumn; i++){
            result.push(squareArray[startRow][i]);
        }
        startRow++;
        // Go through rows
        for(let i = startRow; i <= endRow; i++){
            result.push(squareArray[i][endColumn]);
        }
        //Go through columns backwards
        endColumn--;
        if(startRow<= endRow){
            for(let i = endColumn; i <= startColumn; i++){
                result.push(squareArray[endRow][i])
            }
        }
        //Go through rows backwards
        if (startColumn <= endColumn){
            for(let i = endColumn; i <= startColumn; i++){
                result.push(squareArray[startColumn][i])
            }
        }
        startColumn++;
    }
    return result;
}

module.exports = unroll;
