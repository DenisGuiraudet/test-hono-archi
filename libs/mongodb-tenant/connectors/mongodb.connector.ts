import { createConnection, type Connection } from 'mongoose'

// Taken from: https://github.com/ProMehedi/bun-hono-api-starter

// https://www.mongodb.com/developer/products/atlas/multiple-mongodb-connections-in-a-single-application/

// TODO: I have no idea how to optimize the open/close connection to 600 different DB 🥲

let connection!: Connection

export async function installMongodbConnector(): Promise<void> {
    try {
        const mongoUri = Deno.env.get('MONGO_URI')
        if (!mongoUri) {
        throw new Error('Missing MONGO_URI in environment variables')
        }
    
        // https://mongoosejs.com/docs/api/connection.html#Connection.prototype.useDb()
        connection = await createConnection(mongoUri, {
            autoIndex: true,
            maxPoolSize: 10,
        }).asPromise();
    
        console.log(`✅ MongoDB Connected: ${connection.host}`)
    } catch (err: any) {
        console.error(`❌ MongoDB Connection Error: ${err.message}`)
        process.exit(1) // Exit on failure
    }
}

export function getMongodbConnection(dbName: string): Connection {
    if (!connection) {
        throw new Error('MongoDB connection is not established')
    }
    
    return connection.useDb(dbName, {
        useCache: true,
    });
}
