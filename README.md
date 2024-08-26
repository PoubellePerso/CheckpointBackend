# Lancer le Projet

## Prérequis

Assurez-vous d'avoir les éléments suivants installés sur votre machine :

-   Node.js
-   npm (Node Package Manager)
-   Make

## Étapes pour lancer le projet

1. **Cloner le dépôt**

Clonez le dépôt sur votre machine locale :

```sh
git clone <URL_DU_DEPOT>
cd <NOM_DU_DEPOT>
```

2. **Installer les dépendances**

Utilisez la commande `make` pour installer toutes les dépendances nécessaires :

```sh
make install
```

2. **Lancer le serveur en mode développement**

Pour démarrer le serveur en mode développement, exécutez :

```sh
make dev
```

Cela lancera le serveur et vous pourrez accéder à l'application à l'adresse http://localhost:4000.

Commandes Makefile

-   `make format` : Formate le code en utilisant Prettier.
-   `make lint` : Vérifie le code avec ESLint.
-   `make check` : Exécute les commandes de formatage et de linting.
-   `make install` : Installe les dépendances du projet.
-   `make dev` : Démarre le serveur en mode développement.
-   `make init` : Installe les dépendances et démarre le serveur en mode développement.

Pour plus de détails, consultez le fichier Makefile.
