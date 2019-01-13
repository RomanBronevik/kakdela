let express = require('express');

function handle (err, req, res, next) {
    if (app.get('env') === 'development') {
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        // render the error page
        res.status(err.status || 500);
        res.render('error');
    } else {
        res.send(500);
    }
}

module.exports = handle;

