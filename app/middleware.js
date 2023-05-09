const validateJsonSchema = require('jsonschema').validate;

const postSchema = {
    "id":"/post",
    "type":"object",
    "properties":{
        "mensage":{
            "type":"string",
            "required":true,
            "message": "Erro no campo mensage",
            "minLength": 2
        },
        "value":{
            "type":"string",
            "required":true,
            "message": "Erro no campo value",
            "minLength": 1
        }
    }
};


exports.validatePost = (req, res, next) => {
    console.log(req.body, typeof req.body)
    let result = validateJsonSchema(req.body, postSchema);
    if (result.valid) {
        next();
    } else {
        let errors = [];
        for (let error of result.errors) {
            errors.push(error.schema.message || error.message );
        }
        //console.log(result)
        console.error(400, {code: 'VALIDATION', message: errors.join(',')})
        res.send(400, {code: 'VALIDATION', message: errors.join(',')});
    }
}