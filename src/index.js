
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix || matrix.length===0) {
        return [];
    } else {
        let newArr = [];
        for (let i=1; i<matrix.length; i+=2){
            matrix[i].reverse();
        }
        newArr = matrix.join(',');
        return newArr.split(',');
    }
  
}
