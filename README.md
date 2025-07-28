# Bienvenue dans le dépôt GesEvenement-App !

Cette application est construite avec [technologies] pour offrir une plateforme moderne et réactive pour la gestion d'événements.

🚀 **Prérequis**
Avant de configurer le projet, assurez-vous d'avoir les éléments suivants installés :

- Node.js (v14 ou supérieur)
- Git (pour le contrôle de version)
- API Backend GesEvenement (doit être en cours d'exécution pour une fonctionnalité complète)

⚙️ **Instructions de configuration**
1️⃣ **Clonez le dépôt**
git clone https://github.com/firasmhemdi/GesEvenement-App.git
cd GesEvenement-App
2️⃣ Installez les dépendances
npm install
3️⃣ Configurez les variables d'environnement
Créez un fichier .env dans le répertoire racine :

API_BASE_URL=http://localhost:3000/api/v1
AUTH_TOKEN=your-auth-token
4️⃣ Démarrez le serveur de développement
npm run dev
Le serveur de développement se lancera. Visitez http://localhost:3000 pour voir l'application.
🧩 Structure du projet

gesevenement-app/
├── backend/               # Code backend
├── frontend/              # Code frontend
│   ├── components/        # Composants réutilisables
│   ├── pages/             # Pages de l'application
│   └── styles/            # Styles globaux
└── README.md              # Documentation du projet
📚 Fonctionnalités clés

Système d'authentification : Connexion et gestion des utilisateurs.
Gestion des événements : Créez, mettez à jour et gérez les événements.
Gestion des réservations : Créez et gérez des réservations.
Interface utilisateur réactive : Optimisée pour les ordinateurs de bureau et les appareils mobiles.
🛠️ Technologies utilisées

Node.js - Serveur JavaScript
Express - Framework pour les applications web
MySql - Base de données 
React - Bibliothèque pour construire des interfaces utilisateur
📝 Scripts disponibles
npm run dev:	Démarre le serveur de développement
npm run build:	Prépare l'application pour la production
npm run start:	Démarre le serveur de production
🌍 Intégration API
L'application frontend se connecte à l'API Backend GesEvenement. Assurez-vous que le backend est en cours d'exécution pour activer toutes les fonctionnalités.

🤝 Contributions
Forkez le dépôt
Créez une branche de fonctionnalité (git checkout -b feature/ma-fonctionnalite)
Commitez vos modifications (git commit -m 'Ajout d'une nouvelle fonctionnalité')
Poussez vers la branche (git push origin feature/ma-fonctionnalite)
Ouvrez une Pull Request

📢 Retour d'information et support
Si vous trouvez des bugs ou des problèmes, veuillez ouvrir une issue sur GitHub.

🔗 Ressources connexes

Documentation de l'API GesEvenement
Documentation de Node.js
📜 Licence
Ce projet est sous licence MIT - voir le fichier LICENSE pour plus de détails.

🚀 Bon codage avec GesEvenement-App !
