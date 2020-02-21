
exports.min = function min (arr) {
  return arr && arr.length ? Math.min(...arr) : 0;
}

exports.max = function max (arr) {
  return arr && arr.length ? Math.max(...arr) : 0;
}

exports.avg = function avg (arr) {
  return arr && arr.length ? arr.reduce((sum, num) => sum + num)/arr.length : 0;
}
