# 🌸 CAHIER DES CHARGES FONCTIONNEL & TECHNIQUE
## Site Web E-Commerce & Expérience Beauté — Maison Diodio Glow Skin

---

## 1. CONTEXTE & OBJECTIFS STRATÉGIQUES

### 1.1 Présentation de l'Entreprise
* **Entité :** Maison Diodio Glow Skin (Fondée par Mame Diarra Thiam)
* **Secteur :** Cosmétiques, soins dermatologiques, blanchiment doux, bien-être et institut de beauté.
* **Slogan officiel :** *« Un teint meilleur pour toutes les carnations »*
* **Implantation :** Ouest-Foire à côté de la station Elton (VDN), Guédiawaye, Dakar, Sénégal.
* **Présence actuelle :** Forte notoriété sur TikTok, Instagram et WhatsApp avec des dizaines de milliers d'abonnés.

### 1.2 Problématique Actuelle
* **Saturation de WhatsApp :** Prise de commandes manuelle chronophage, erreurs de stocks, captures de reçus de paiement compliquées à rapprocher.
* **Perte de commandes :** Délais de réponse longs en période de pointe entraînant l'abandon de paniers.
* **Manque de centralisation :** Absence d'un canal unique où les clientes découvrent l'ensemble des 121 produits et passent commande de manière autonome 24h/24.

### 1.3 Objectifs de la Plateforme
1. **Digitaliser et fluidifier 100% des ventes :** Permettre aux clientes de commander en 3 clics, à Dakar, dans les régions et à l'international.
2. **Sublimer l'image de marque :** Proposer une expérience esthétique haut de gamme (Pink Glam, Or Champagne & Marbre) alignée sur le décor physique de ses instituts.
3. **Mettre en valeur le capital confiance :** Exploiter les shootings officiels des égéries (Fatou Ndiaye & Kiné Ndiaye Rose) et les photos de l'équipe officielle en tenue rose.
4. **Automatiser les encaissements et la logistique :** Intégration native des paiements Wave Business, Orange Money et de la livraison Tiak-Tiak / DHL.

---

## 2. CHARTE GRAPHIQUE & IDENTITÉ VISUELLE

### 2.1 Palette Chromatique (Pink Glam & Glow)
* **Rose Signature / CTA (`#B8236B` & `#E91E63`) :** Utilisé pour les boutons d'achat direct, le panier actif et les éléments d'interaction majeurs.
* **Rose Douceur / Poudré (`#F195BD` & `#FDECF3`) :** Utilisé pour les fonds de cartes, les badges de catégories et l'arrière-plan de navigation.
* **Or Champagne (`#C5A059` / `#D4AF37`) :** Rappel du luxe, utilisé pour les bordures d'accentuation, médaillons, étoiles d'avis et liserés.
* **Noir Prune Velours (`#1A0510`) :** Texte principal et typographies fortes, apportant un contraste noble et reposant pour les yeux.

### 2.2 Typographie
* **Titres & Identité :** Police Serif raffinée (*Playfair Display* ou *Cinzel*).
* **Corps de texte & Interface :** Police Sans-Serif épurée (*Poppins* ou *Montserrat*), ultra lisible sur smartphone.

### 2.3 Style des Composants UI
* Rayon de courbure des cartes et boutons : `16px` à `24px` (formes douces et modernes).
* Ombres portées délicates : diffusion rosée subtile (`box-shadow: 0 10px 25px rgba(184, 35, 107, 0.12)`).
* Packshots produits : images au ratio 1:1, studio clair sur marbre blanc et rose, **sans affichage de prix sur l'image**.

---

## 3. ARCHITECTURE DE L'INFORMATION & NAVIGATION

### 3.1 La Barre de Navigation (Navbar Fixe)
La barre de navigation reste accessible en permanence (sticky header) et comporte :
* **Logo Officiel :** Médaillon or et noir `logo.jpg` cliquable (retour à l'accueil).
* **Onglets principaux :**
  1. **Accueil :** Page vitrine, héro bannière, diagnostic de carnation, bestsellers.
  2. **Produits :** Catalogue e-commerce complet avec filtres et recherche.
  3. **Équipe :** Présentation du personnel en tenues roses officielles, institut et expertise.
  4. **Collaboration :** Galerie des égéries (Fatou Ndiaye, Kiné Ndiaye Rose) et leurs rituels beauté.
  5. **Contact :** Localisation (Ouest-Foire), standard téléphonique, prise de rendez-vous institut.
* **Outils d'interaction rapide :**
  * Barre de recherche instantanée.
  * Bouton Panier avec badge numérique dynamique du nombre d'articles.
  * Bouton d'accès direct WhatsApp.

---

## 4. DÉTAIL DES PAGES & SECTIONS

### 4.1 Page d'Accueil (Home)
1. **Barre d'Annonce Supérieure :** « *Livraison express à Dakar en 2h • Paiement Wave & Orange Money • Expédition mondiale DHL* ».
2. **Hero Banner Immersive :**
   * Photographie officielle de Diodio présentant les produits phares (`banniere_diodio.jpg`).
   * Titre accrocheur : *« Révélez l'Éclat de Votre Peau avec la Maison Diodio »*.
   * Boutons d'action : `Découvrir nos Gammes` & `Commander sur WhatsApp`.
3. **Le Diagnostic des 12 Carnations (« Trouvez Votre Gamme ») :**
   * Grille interactive des 12 types de peaux (Gamme Golden Men, Black Skin, Caramel, VitC, Collagène, SuperGlow, Extra, Urgence, 3Jours, Peeling, Réparateur, Baby Glow).
   * Un clic filtre instantanément les produits recommandés pour la cliente.
4. **Section Bestsellers / Duos Incontournables :**
   * Mise en avant du *Duo 3Jours (Savon Noir & Gel Douche)*, des *Packs Collagène* et des *Packs Quintos*.
5. **Preuve Sociale & Témoignages :** Avis clientes vérifiés, engagement qualité et conseils dermatologiques.

### 4.2 Page / Section Produits (Catalogue Interactif)
* **Moteur de recherche & Filtres :**
  * Filtre par catégorie : *Tous, Laits de Corps, Gels de Douche, Savons de Corps, Gommages, Crèmes Visage, Sérums, Huiles, Soins Spécifiques & Anti-Quintos*.
  * Filtre par gamme / carnation.
* **Fiches Produits :**
  * Photo haute définition du packshot dédié.
  * Titre officiel du produit.
  * Sélecteur de format si applicable (Petit Modèle - PM / Grand Modèle - GM).
  * Affichage du prix en FCFA (ex: *8.000 FCFA* ou *15.000 FCFA*).
  * Bouton `Ajouter au Panier` avec animation visuelle de confirmation.
* **Modal Fiche Détail :** Clic sur un produit pour voir ses conseils d'utilisation, ingrédients clés et bienfaits.

### 4.3 Page / Section Équipe (Institut & Maison de Beauté)
* **Valorisation humaine :** Intégration des photos officielles de l'équipe vêtue de l'uniforme rose brodé.
* **Les Pôles de la Maison :**
  * *Les Spécialistes Soins Visage & Corps* (conseils sur-mesure).
  * *Le Centre d'Appels & Téléconseil* (suivi des commandes, standard `33.844.15.15`).
  * *Le Pôle Logistique & Expédition* (emballage sécurisé et livraison tiak-tiak rapide).
* **Visite virtuelle de l'Institut :** Espace Ouest-Foire à côté de la station Elton, horaires d'ouverture (10h - 19h, du lundi au samedi).

### 4.4 Page / Section Collaboration (Nos Égéries & Ambassadrices)
* **Espace Ambassadrices d'exception :**
  * **Fatou Ndiaye & la Gamme Black Skin :** Galerie photo issue du shooting dans le bain aux bougies et aux soins teint noir.
  * **Kiné Ndiaye Rose & la Gamme Collagène :** Galerie photo avec les coffrets de luxe, les sérums et gels de douche teint clair.
* **Fonctionnalité « Shoppez le Look / La Routine » :** Bouton direct sous les photos des égéries pour commander en un clic la routine complète utilisée par l'ambassadrice.

### 4.5 Page / Section Contact & Commande Express
* **Informations & Canaux Officiels :**
  * Téléphone Centre d'Appels : `33.844.15.15`
  * WhatsApp Dakar : `78.546.69.69`
  * Lignes Régions Sénégal : `77.778.43.43`
  * Ligne International : `77.381.46.46`
  * Prise de RDV Institut : `70.616.71.19`
* **Formulaire de message rapide :** Nom, téléphone, choix du sujet (Commande, Conseil produit, Réclamation, Partenariat).
* **Plan d'accès interactif :** Carte et indications visuelles (*Ouest-Foire VDN, Dakar*).

---

## 5. SPÉCIFICATIONS FONCTIONNELLES E-COMMERCE

### 5.1 Gestion du Panier (Cart Drawer)
* Panier rétractable latéral sans rechargement de page.
* Ajustement des quantités (+ / -) et suppression d'articles.
* Calcul en temps réel du sous-total en FCFA.
* Sauvegarde automatique dans le `localStorage` (la cliente ne perd pas son panier si elle quitte la page).

### 5.2 Tunnel de Commande (Checkout Localisé)
Formulaire simplifié en 3 étapes :
1. **Coordonnées :** Nom complet, Numéro WhatsApp (obligatoire pour le livreur).
2. **Zone de Livraison :**
   * *Zone Dakar :* Sélection du quartier (Ouest-Foire, Almadies, Guédiawaye, Plateau, etc.) + Champ « Indication précise pour le livreur Tiak-Tiak » (ex: derrière la pharmacie, en face de la mosquée).
   * *Régions du Sénégal :* Choix de la ville (Thiès, Mbour, Saint-Louis, etc.) + point relais ou domicile.
   * *International (DHL) :* Choix du pays avec calcul automatique des frais (ex: France/USA 35.000 F pour 0 à 2,5 kg).
3. **Mode de Règlement :**
   * **Wave Business :** Compte certifié `Diodio GLOW Skin`.
   * **Orange Money :** Numéro officiel `+221 78 451 09 09`.
   * **Paiement à la Livraison (Cash on Delivery) :** Strictement réservé à la zone de Dakar (comme spécifié dans les consignes de la boutique).

### 5.3 Confirmation & Automatisation WhatsApp
* À la validation de la commande :
  * Génération automatique d'un message préformaté vers le numéro WhatsApp de Diodio :
    * *« Bonjour Maison Diodio, je souhaite valider ma commande n°DG-XXXX : 1x Lait Caramel (GM), 1x Savon Noir 3Jours. Total : 25.000 FCFA. Adresse : Ouest-Foire... Paiement : Wave »*.
  * Affichage d'un reçu numérique à l'écran imprimable ou téléchargeable.

---

## 6. SPÉCIFICATIONS TECHNIQUES DE LA MAQUETTE

* **Langages :** HTML5 sémantique, CSS3 moderne (Flexbox, CSS Grid, Variables), JavaScript ES6+ vanilla (ultra léger, sans dépendance lourde).
* **Performance & Compatibilité :** 
  * Optimisation 100% Mobile (priorité smartphone où sont 90% des clientes de Diodio).
  * Vitesse de chargement quasi-instantanée.
* **Données Produits :** Catalogue connecté au fichier JavaScript `produits_diodio.js` (121 produits catalogués avec prix et images).

---

## 7. FONCTIONNALITÉ BONUS « EFFET WOW » POUR LA PRÉSENTATION

* **Bouton switch « Mode Démo / Espace Gérante Diodio » :**
  * Un onglet discret permettant de montrer à Diodio l'écran d'administration :
    * Les commandes entrantes du jour.
    * Le chiffre d'affaires cumulé en direct.
    * L'état des livraisons (*En préparation*, *Remis au livreur*, *Livré*).
  * **Impact :** Cet écran démontre immédiatement la valeur ajoutée financière et organisationnelle du projet pour son entreprise.
