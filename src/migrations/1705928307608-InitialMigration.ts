import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1705928307608 implements MigrationInterface {
    name = 'InitialMigration1705928307608'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cart" ("id" SERIAL NOT NULL, "codigo" character varying NOT NULL, "nome" character varying NOT NULL, "itens" json NOT NULL, "primeiraImagem" character varying NOT NULL, "troco" character varying NOT NULL, "valorEntregue" character varying NOT NULL, "status" character varying NOT NULL DEFAULT 'Preparando', CONSTRAINT "PK_c524ec48751b9b5bcfbf6e59be7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sandwich" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "category" character varying NOT NULL DEFAULT 'Lanches', "price" numeric(5,2) NOT NULL, "img" character varying NOT NULL, CONSTRAINT "PK_d44bd95405bea7833c4b9345917" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "extra" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "price" numeric(5,2) NOT NULL, "description" character varying NOT NULL, "img" character varying NOT NULL, CONSTRAINT "PK_8fc120df4bf1abcc21fc90a0a0a" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "extra"`);
        await queryRunner.query(`DROP TABLE "sandwich"`);
        await queryRunner.query(`DROP TABLE "cart"`);
    }

}
