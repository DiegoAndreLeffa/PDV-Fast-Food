import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1705663918328 implements MigrationInterface {
    name = 'InitialMigration1705663918328'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cart" ("id" SERIAL NOT NULL, "codigo" character varying NOT NULL, "nome" character varying NOT NULL, "itens" json NOT NULL, "primeiraImagem" character varying NOT NULL, "troco" character varying NOT NULL, "valorEntregue" character varying NOT NULL, "status" character varying NOT NULL DEFAULT 'Preparando', CONSTRAINT "PK_c524ec48751b9b5bcfbf6e59be7" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "cart"`);
    }

}
