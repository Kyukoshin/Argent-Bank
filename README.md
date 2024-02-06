# Projet n°13 - Développeur Applications Javascript React

# ArgentBank

> Projet 13 - Utilisez une API pour un compte utilisateur bancaire avec React

<p align="center">
  <img src="https://user.oc-static.com/upload/2020/08/14/1597410191519_image2.png">
</p>

> INTRODUCTION

Remede Agency est une agence spécialisée dans le développement d'applications web et je suis chargé pour le compte de notre nouveau client ArgentBank :

- de créer une application web complète et responsive avec React permettant aux clients de se connecter et de gérer leurs comptes et leur profil.
- fournir un document décrivant les endpoints API proposés pour les transactions, en utilisant Swagger / OpenAPI, et permettant :
  - de visualiser toutes leurs transactions pour le mois en cours, groupées par compte ;
  - de visualiser les détails d'une transaction dans une autre vue ;
  - d'ajouter, de modifier ou de supprimer des informations sur une transaction.

## 💻 Technologies used

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=css,react,ts,github,html,js,mongodb,nodejs,postman,redux,regex,vercel,vscode" />
  </a>
</p>

## 📚 API Documentation

Once you have started the backend and local environment, you can visit :

- http://localhost:3001/api-docs

## 🚀 Backend Installation

### Prerequisites

Argent Bank uses the following tech stack:

- [Node.js v12](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

Please make sure you have the right versions and download both packages. You can verify this by using the following commands in your terminal:

```bash
# Check Node.js version
node --version

# Check Mongo version
mongo --version
```

### Instructions

1. Fork this repo
2. Clone the repo onto your computer
3. Open a terminal window in the cloned project
4. Run the following commands:

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev:server

# Populate database with two users
npm run populate-db
```

Your server should now be running at http://locahost:3001 and you will now have two users in your MongoDB database!

## Populated Database Data

Once you run the `populate-db` script, you should have two users in your database:

### Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

### Steve Rogers

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`

## 🚀 Frontend installation

- Install NodeJS : [NodeJS](https://nodejs.org/en/)
- Clone the repo : `git clone https://github.com/JaRoD41/argentbank.git`
- Install dependencies : `npm install`
- Launch the server : `npm start`
- I recommend using [VSCode](https://code.visualstudio.com/) with [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extension

## 📝 Todo

- Using React
- Using the provided API
- Using Redux and Redux ToolKit
- Responsive design
- Modelize an API
- Interact with an API using Postman
- Using Swagger and OpenAPI to create a complete API documentation
- Using Git and GitHub for versioning

## 📝 Expected deliverables

- A TXT file containing the URL of the GitHub repository
- A YAML file containing the API documentation using Swagger
