const {getAll, getById, add, edit, del} = require('./output.dao')

exports.getAll = async (req, res) => {
    const outputs = await getAll()

    const resp = {
        outputs,
        status: true
    }
    //console.log(resp)
    res.send(200, resp)
}

exports.getById = async (req, res) => {
    const {id} = req.params

    const outputs = await getById(id)

    const resp = {
        outputs,
        status: true
    }
    res.send(200, resp)
}


exports.add = async (req, res) => {
    const {mensage, value} = req.body

    const result = await add([mensage, value])

    res.send(201)
}

exports.edit = async (req, res) => {
    const {mensage, value} = req.body
    const {id} = req.params

    const result = await edit(id, [mensage, value])

    res.send(202)
}

exports.del = async (req, res) => {
    const {id} = req.params
    const result = await del(id)

    res.send(200)
}