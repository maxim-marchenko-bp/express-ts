import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from "typeorm";

export class CreateUserTable1680567890123 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Create the 'users' table
        await queryRunner.createTable(
          new Table({
              name: 'users',
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
                      isNullable: false,
                  },
                  {
                      name: 'username',
                      type: 'varchar',
                      isNullable: false,
                  },
                  {
                      name: 'email',
                      type: 'varchar',
                      isNullable: false,
                  },
                  {
                      name: 'password',
                      type: 'varchar',
                      isNullable: false,
                  },
                  {
                      name: 'age',
                      type: 'int',
                      isNullable: true,
                  },
                  {
                      name: 'gender',
                      type: 'enum',
                      enum: ['m', 'f', 'u'],
                      isNullable: true,
                  },
              ],
          }),
          true
        );

        // Create the 'user_roles_role' junction table for Many-to-Many relationship
        await queryRunner.createTable(
          new Table({
              name: 'user_roles_role',
              columns: [
                  {
                      name: 'userId',
                      type: 'int',
                      isPrimary: true,
                  },
                  {
                      name: 'roleId',
                      type: 'int',
                      isPrimary: true,
                  },
              ],
          }),
          true
        );

        // Add foreign keys to the 'user_roles_role' table
        await queryRunner.createForeignKey(
          'user_roles_role',
          new TableForeignKey({
              columnNames: ['userId'],
              referencedColumnNames: ['id'],
              referencedTableName: 'users',
              onDelete: 'CASCADE',
          })
        );

        await queryRunner.createForeignKey(
          'user_roles_role',
          new TableForeignKey({
              columnNames: ['roleId'],
              referencedColumnNames: ['id'],
              referencedTableName: 'roles', // Assuming 'role' table is already created
              onDelete: 'CASCADE',
          })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Drop foreign keys first
        const userRolesTable = await queryRunner.getTable('user_roles_role');
        const foreignKeyUser = userRolesTable!.foreignKeys.find(fk => fk.columnNames.indexOf('userId') !== -1);
        const foreignKeyRole = userRolesTable!.foreignKeys.find(fk => fk.columnNames.indexOf('roleId') !== -1);

        if (foreignKeyUser) {
            await queryRunner.dropForeignKey('user_roles_role', foreignKeyUser);
        }

        if (foreignKeyRole) {
            await queryRunner.dropForeignKey('user_roles_role', foreignKeyRole);
        }

        // Drop the 'user_roles_role' table
        await queryRunner.dropTable('user_roles_role');

        // Drop the 'users' table
        await queryRunner.dropTable('users');
    }
}
