#!/usr/bin/env bash
# exit on error
set -o errexit

# Instalação de dependências
yarn

# Compilação do projeto
yarn build

# Execução das migrações
yarn typeorm migration:run -d dist/data-source

# Copia arquivos SQL para a pasta dist
./node_modules/.bin/copyfiles -u 1 src/*.sql dist/

# Muda para o diretório dist
cd dist

# Executa o script SQL
node scriptSql
