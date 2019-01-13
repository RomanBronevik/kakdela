let createError = require('http-errors');

function handle (req, res, next) {
  next(createError(404));
}

module.exports = handle;
