
# Instruction d'installation
## Prérequis
|Outil|version|
|----|----|
|PostgreSQL|16|
|Java|21|
|NodeJS|20|
|maven|3.8.6|
Vous devez avoir d'installé une base de données PostgreSQL.
Après avoir installé la base de données PostgreSQL, vous devez configurer dans le fichier `back/src/main/resources/application.properties` les identifiants de connexion à votre base de données.

## Lancer le projet
Lancez le backend en utilisant la commande :
`mvn spring-boot:run`
Lancez le front-end en utilisant la commande :
`npm start`