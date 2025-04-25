import { installMongodbConnector } from "./connectors/mongodb.connector.ts";

export async function installMongodbTenant() {
    await installMongodbConnector()
}
