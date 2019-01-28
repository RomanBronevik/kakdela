import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1548535311231 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        queryRunner.createTable(new Table({
            name: "users",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true
                },
                {
                    name: "username",
                    type: "varchar",
                },
                {
                    name: "email",
                    type: "varchar",
                    isNullable: true
                },
                {
                    name: "password",
                    type: "varchar",
                    isNullable: true
                },
                {
                    name: "last_login",
                    type: "timestamp",
                    isNullable: true
                },
                {
                    name: "is_banned",
                    type: "boolean",
                    isNullable: true
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()",
                    isNullable: true
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
