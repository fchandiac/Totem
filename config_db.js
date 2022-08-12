const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, './config.json')

/**
 * Importa config de './src/config.json' y exporta los parametros. 
 */

const rawdata = fs.readFileSync(filePath)
const config = JSON.parse(rawdata);

const user_name = config.user_name
const password = config.password
const database = config.database
const host = config.host
const dialect = config.dialect
const data_port = config.data_port

module.exports = {
    user_name,
    password,
    database,
    host,
    dialect,
    data_port
}