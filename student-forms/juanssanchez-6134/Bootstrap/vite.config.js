import { Server } from 'http'

const path = require('path')

export default{
    root: path.resolve(__dirname, 'src'),
    resolve: {
        alias: {
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap')
        }
    },
    server: {
        port: 8081,
        hot: true
    }
}
