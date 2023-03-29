import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class Equipment1648796514403 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "equipment",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "uuid",
          },
          {
            name: "nameEquipment",
            type: "varchar",
          },
          {
            name: "typeEquipment",
            type: "varchar",
          },
          {
            name: "priceEquipment",
            type: "varchar",
          },
          {
            name: "nameClient",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("equipment");
  }
}