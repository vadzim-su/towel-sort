
// You should implement your task here.

module.exports = function towelSort(matrix) {
  var newArr = []
  if (!matrix) return ([])
  else {
    for (var i = 0; i < matrix.length; i++) {
      if (i % 2) {
        matrix[i] = matrix[i].reverse('')
      }
      for (var j = 0; j < matrix[i].length; j++) {
        newArr.push(matrix[i][j])
      }
    }
    return (newArr)
  }

}

