const {Pool} = require('pg')

const config = {
    host: '10.255.30.82',
    port: 5433,
    database: 'fintech',
    user: 'fintech',
    password: 'fintech'
}

const pool = new Pool(config)

pool.on('connect', async client => {
    console.log('conectou')
  })

// the pool will emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens
/*pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  console.log('event error db')
  process.exit(-1)
})*/

pool.connect()

module.exports = pool

