import { initClient } from './client'
import { runServer } from './server'

async function implement() {
    if (process.env.NODE_ENV === 'server') {
        runServer()
    }
    if (process.env.NODE_ENV === 'client') {
        initClient()
    }
}
implement()
