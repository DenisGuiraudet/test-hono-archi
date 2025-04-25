import { installMongodbConnector } from "@/libs/mongodb-tenant/connectors/mongodb.connector.ts";

export async function installMongodbTenant() {
    await installMongodbConnector()
}
