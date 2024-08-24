import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateRoleTable1680567890124 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Create the 'roles' table
        await queryRunner.createTable(
          new Table({
              name: 'roles',
              columns: [
                  {
                      name: 'id',
                      type: 'int',
                      isPrimary: true,
                      isGenerated: true,
                      generationStrategy: 'increment',
                  },
                  {
                      name: 'name',
                      type: 'varchar',
                      length: '255',
                      isNullable: false,
                      isUnique: true,
                  },
              ],
          }),
          true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Drop the 'roles' table
        await queryRunner.dropTable('roles');
    }
}
