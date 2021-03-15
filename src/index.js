module.exports = function towelSort(matrix) {
  if(!matrix){return [];}
    let result = [];
    matrix.forEach((item, index) => {
        if (index % 2 == 1) {
            item = item.reverse();
        }
        item.forEach(el => result.push(el))
    })

    return result;
}