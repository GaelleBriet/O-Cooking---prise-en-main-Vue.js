## Installation

## Vérification et modification des variables d'environnement

On commence par copier le fichier `.env.example` en `.env` :

```bash
cp .env.example .env
```

On va utiliser une base de données au sein d'un environnement de développement sur Docker.  
On modifie quelques variables dans le fichier `.env` :

```bash
DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=o-cooking
DB_USERNAME=dockerphp
DB_PASSWORD=secret
```

## Lancement de l'environnement de développement via Docker

Oo lance :
```bash
docker-compose up --build -d
```

On peut ensuite se connecter au conteneur et installer les dépendances avec Composer, et installer notre clé d'application (si besoin) :

```bash
docker-compose exec web zsh
```

```bash
composer install

# La commande suivante est optionnelle si l'on a déjà une clé d'application :
@ key:generate

chmod -R o+w storage .env
```

## Migrations et *seeding* de la base de données

On peut faire une migration toute fraiche de la base de données. Mais avant cela, on va utiliser la méthode `run()` du fichier `database/seeders/DatabaseSeeder.php`.

On peut lancer la migration et le *seeding*, en même temps :

```bash
@ migrate:fresh --seed
```

---

L'application Laravel devrait être disponible à l'adresse [http://localhost:8090](http://localhost:8090) ou l'adresse de votre machine (sur le bon port).
