# Directives — Site Phycocyanine (basé sur AstroWind)

## CONTEXTE

Ce projet est un fork d'AstroWind (Astro + Tailwind) adapté pour un site d'information sur la phycocyanine avec affiliation discrète.

- **Cible** : Femmes 35-65 ans cherchant des infos santé fiables
- **Objectif** : Informer, capturer des emails, rediriger vers des produits affiliés
- **Ton** : Expert accessible, rassurant, pas commercial

Ce n'est PAS une landing page de vente agressive. C'est un site éditorial avec monétisation subtile.

---

## STRUCTURE DU SITE

### Pages à créer/adapter

1. **Accueil** (`/`)
   - Hero sobre (titre + sous-titre + 2 CTA)
   - Section "Qu'est-ce que la phycocyanine" (texte + image)
   - 3 bénéfices clés (pas une grille de 6 features tech)
   - Derniers articles (3 cards)
   - Section produit recommandé (1 seul, subtil)
   - FAQ (4-6 questions)
   - CTA newsletter
   - Footer simple

2. **Guide complet** (`/guide`)
   - Article long format sur la phycocyanine
   - Table des matières
   - Sections bien structurées

3. **Blog** (`/blog`)
   - Liste des articles (layout AstroWind existant, c'est bien)
   
4. **Articles individuels** (`/blog/[slug]`)
   - Garder le layout AstroWind existant
   - Ajouter un encart produit en fin d'article

5. **Produits** (`/produits`)
   - 3-4 produits recommandés
   - Fiches simples : photo, nom, description, lien affilié

6. **Pages légales**
   - Mentions légales
   - Politique de confidentialité

---

## THÈME VISUEL

### Couleurs (remplacer le thème AstroWind par défaut)
```css
:root {
  --color-primary: #5B7A6B;      /* Vert sauge - accent principal */
  --color-primary-dark: #4A6358; /* Vert sauge foncé - hover */
  --color-background: #FFFFFF;   /* Fond principal */
  --color-background-alt: #FAFAF8; /* Fond sections alternées */
  --color-text: #1A1A1A;         /* Texte principal */
  --color-text-muted: #6B7280;   /* Texte secondaire */
  --color-border: #E5E7EB;       /* Bordures */
}
```

### Ce qui change par rapport au thème par défaut
- Supprimer le bleu/violet → tout en vert sauge
- Forcer le light mode uniquement (désactiver dark mode)
- Fond blanc, pas de fond sombre

### Typographie

**Titres** : Playfair Display (Google Fonts)
- H1 : 48px, font-weight 600
- H2 : 32px, font-weight 600  
- H3 : 24px, font-weight 500

**Corps** : Inter (Google Fonts)
- Taille : 17px
- Line-height : 1.7

Ajouter dans le `<head>` :
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@500;600;700&display=swap" rel="stylesheet">
```

---

## COMPOSANTS À MODIFIER

### Hero (src/components/widgets/Hero.astro)

Remplacer par :
```
[Espace généreux]

        La Phycocyanine
        
Le guide complet sur le pigment bleu
aux propriétés antioxydantes

[Découvrir le guide]   [Voir les produits →]

[Espace]
```

- Supprimer l'image abstraite de l'astronaute
- Fond blanc uni ou très légère teinte crème
- Titre en Playfair Display, centré
- Pas d'animation complexe

### Features (src/components/widgets/Features.astro)

Transformer en "Bénéfices de la phycocyanine" :
- Maximum 3 items, pas 6
- Icônes simples (pas les icônes tech)
- Texte orienté bénéfices santé :
  - "Antioxydant puissant"
  - "Soutien du système immunitaire"  
  - "Énergie naturelle"

### FAQs (src/components/widgets/FAQs.astro)

Garder le layout actuel (propre), adapter le contenu :
- "Qu'est-ce que la phycocyanine ?"
- "Quelle différence avec la spiruline ?"
- "Comment choisir sa phycocyanine ?"
- "Y a-t-il des effets secondaires ?"
- "Quelle posologie recommandée ?"

### Footer (src/components/widgets/Footer.astro)

Simplifier radicalement :
```
Phycocyanine.fr

Accueil | Guide | Blog | Produits | Contact

Mentions légales | Politique de confidentialité

© 2025 - Tous droits réservés
```

Supprimer le méga-footer multi-colonnes corporate.

### Header (src/components/widgets/Header.astro)

- Logo texte simple : "Phycocyanine" (pas de logo image pour l'instant)
- Navigation : Accueil | Guide | Blog | Produits
- CTA : "Recevoir le guide" (vert sauge)
- Supprimer le toggle dark mode

---

## SECTIONS À AJOUTER

### Section Newsletter

Créer un composant `Newsletter.astro` :
```
───────────────────────────────────
Fond : crème (#FAFAF8)

    Recevez le guide gratuit
    "Bien choisir sa phycocyanine"

    [Votre email]  [Recevoir →]

    ✓ Gratuit  ✓ Sans spam

───────────────────────────────────
```

Formulaire qui envoie vers Brevo (API ou Formspree).

### Section Produit Recommandé

Créer un composant `ProductHighlight.astro` :
```
───────────────────────────────────
Fond : blanc avec bordure légère

Notre sélection

[Photo]    Phycocyanine Premium - Marque X
           
           Description factuelle, pas de superlatifs.
           Format, posologie, origine.
           
           [Découvrir ce produit →]

───────────────────────────────────
```

Un seul produit, pas une grille.

---

## IMAGES

### À utiliser (chercher sur Unsplash/Pexels)
- Spiruline en poudre ou en comprimés
- Bassins de culture de spiruline (vert intense)
- Gros plan phycocyanine (bleu profond)
- Femmes 40-55 ans, naturelles, lumière douce
- Nature : eau claire, végétation

### À éviter
- Photos fitness/gym
- Sourires forcés stock photos
- Images trop "labo médical froid"
- Tout ce qui fait "complément alimentaire discount"

### Format
- WebP pour la performance
- Ratio 16:9 pour les articles
- Ratio 1:1 pour les produits

---

## INTÉGRATIONS

### Google Analytics 4

Dans `src/components/common/BasicScripts.astro` ou équivalent :
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Brevo (formulaire newsletter)

Option simple avec Formspree :
```html
<form action="https://formspree.io/f/XXXXX" method="POST">
  <input type="email" name="email" placeholder="Votre email" required>
  <button type="submit">Recevoir le guide</button>
</form>
```

Puis configurer Formspree pour forward vers Brevo.

Option directe API Brevo : créer une API route Astro si besoin.

---

## FICHIERS À SUPPRIMER (nettoyage)

Après fork, virer :
- Les démos inutiles (`/homes/saas`, `/homes/startup`, `/homes/mobile-app`, `/homes/personal`)
- Les pages landing exemples
- Les images placeholder (astronaute, etc.)
- Le contenu blog exemple (garder la structure)

---

## TON ÉDITORIAL

### Faire
- Vouvoiement
- Phrases courtes et claires
- Citer des sources quand possible
- "Peut contribuer à", "reconnu pour", "traditionnellement utilisé"
- Parler des bénéfices ressentis

### Ne pas faire
- Superlatifs vides ("révolutionnaire", "miracle")
- Promesses médicales ("guérit", "soigne")
- Ton agressif commercial
- Majuscules pour emphase

### Exemples de titres
✅ "Qu'est-ce que la phycocyanine ?"
✅ "Les bienfaits de la phycocyanine sur l'organisme"
✅ "Comment bien choisir sa phycocyanine ?"

❌ "La phycocyanine va RÉVOLUTIONNER votre santé !"
❌ "10 bienfaits INCROYABLES que vous devez connaître"

---

## CHECKLIST AVANT DÉPLOIEMENT

- [ ] Dark mode désactivé
- [ ] Couleurs en vert sauge (pas de bleu/violet)
- [ ] Typo Playfair + Inter appliquées
- [ ] Hero simplifié (pas d'image abstraite)
- [ ] Footer simplifié
- [ ] Formulaire newsletter fonctionnel
- [ ] Google Analytics configuré
- [ ] Images en WebP
- [ ] Contenu relu (pas de lorem ipsum)
- [ ] Mentions légales présentes
- [ ] Test mobile OK

---

## COMMANDES UTILES
```bash
# Install
npm install

# Dev
npm run dev

# Build
npm run build

# Preview build
npm run preview
```

Déploiement Vercel : push sur main, Vercel détecte Astro automatiquement.
