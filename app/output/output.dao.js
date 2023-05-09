const pool = require('../common/postgres.mixins')

exports.getAll = async () =>{
    const query = 'select * from outputs'
    return executeQuery(query)
}

exports.getById = async (id) =>{
    const query = `select * from outputs where id=${id}`
    return executeQuery(query)
}

exports.add = async (data) =>{
    if(!data)
        throw 'add Erro data is empty'

    const query = 'INSERT INTO public.outputs (msg,value) VALUES ($1,$2);'
    return executeQuery(query, data)
}

exports.edit = async (id, data) =>{
    if(!data || !id)
        throw 'add Erro data or id is empty'
        
    const query = `UPDATE public.outputs SET msg=$1, value=$2 WHERE id=${id}`
    return executeQuery(query, data)
}

exports.del = async (id) =>{
    if(!id)
        throw 'add Erro data or id is empty'
        
    const query = `DELETE FROM public.outputs WHERE id=${id};`
    return executeQuery(query)
}

async function executeQuery (query, data = []) {
    try {
        const res = await pool.query(query, data)
        return res.rows
    } catch (error) {
        console.log('Deu ruim exectQuery')
        throw error
    }
    
}