
// Custom file imports
import { EquipmentType, EquipmentLocation, Equipment } from "@entities";

export const config = {
  db: {
  entities: [EquipmentType, EquipmentLocation, Equipment],
    type: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    schema: process.env.DB_SCHEMA,
  },
};
