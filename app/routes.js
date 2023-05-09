const {getAll, getById,  add, edit, del} = require('./output/output.controller')
const {validatePost} = require('./middleware')

exports.attach = (app) => {

    app.get("/output", [getAll]);
    app.get("/output/:id", [getById]);

    app.post('/output', [validatePost, add]);

    app.patch('/output/:id', [validatePost, edit]);

    app.del('/output/:id', [del]);
    
}