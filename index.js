
try {
    const app = require('./app/api')
    const port = 8080
    const name = 'fintech-back'
    app.listen(port, function() {
        console.log('%s listening at %s', name, port);
    });
} catch (error) {
    console.log('INDEX ERR', error)
}
 
