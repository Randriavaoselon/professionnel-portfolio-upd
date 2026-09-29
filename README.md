# Avenir Tech — Portfolio (React + Vite)

Version React du portfolio Django `portfolio_intelligent`, avec un design **identique** au template d'origine
(les feuilles CSS `style.css`, `header.css`, `footer.css` et `realisation.css` sont reprises telles quelles).

## Démarrage

```bash
npm install
cp .env.example .env      # puis adapter VITE_API_URL en production
npm run dev               # http://localhost:5173
npm run build             # build de production dans dist/
npm run preview           # prévisualiser le build
npm run lint
```

## Structure

```
src/
├── assets/images/        # images importées (hashées par Vite)
├── components/
│   ├── layout/           # Header, Sidebar, Footer, ScrollTopButton
│   └── sections/         # Hero, Skills, SkillsModal, About, Services,
│                         # Realisations, Presentation, Contact
├── data/                 # contenu séparé de l'UI (site, skills, projects)
├── hooks/                # useHeaderScroll, useScrollThreshold, useTypewriter, useBodyScrollLock
├── services/             # contactService.js (appel API)
├── styles/               # CSS d'origine + react-overrides.css
└── utils/                # publicUrl.js
public/                   # favicon, CV (pdf), vidéo d'introduction
```

## Correspondance avec le template Django

| Django (templates/static)              | React                                              |
| -------------------------------------- | -------------------------------------------------- |
| `_hero-section.html` + `textTypingEffet.js` | `Hero.jsx` + `useTypewriter`                  |
| `_language-skill.html` + `_modal.html` + `modal.js` | `Skills.jsx` + `SkillsModal.jsx`      |
| `_realisations-section.html` + `realisation.js` | `Realisations.jsx` + `data/projects.js`   |
| `_presentation-section.html` + `videos.js` | `Presentation.jsx`                            |
| `_contact-section.html` + `contact.js` | `Contact.jsx` + `services/contactService.js`       |
| `header.js` / `scrollTop.js`           | `useHeaderScroll` / `useScrollThreshold`           |

## Formulaire de contact / API Django

Le formulaire envoie `POST {VITE_API_URL}/api/contact/` en JSON
(`company_name`, `subject`, `email`, `message`) et attend `{ "message": "..." }` en réponse.

- **Dev** : le proxy Vite relaie `/api` vers `VITE_DEV_API_TARGET` (défaut `http://127.0.0.1:8000`).
- **Prod** (Vercel + Render) : définir `VITE_API_URL` dans Vercel et autoriser l'origine du frontend
  côté Django avec `django-cors-headers` (`CORS_ALLOWED_ORIGINS`).
- Le jeton CSRF n'est plus envoyé : l'endpoint DRF doit accepter les requêtes anonymes
  (`authentication_classes = []`, `permission_classes = [AllowAny]`).

## Notes

- `introduction.mp4` d'origine était un pointeur **Git LFS** (133 octets) : la vidéo utilise donc `introduction.webm`.
  Pour ajouter un MP4, placez-le dans `public/videos/` et ajoutez une `<source>` dans `Presentation.jsx`.
- Le compteur du slider affiche le vrai nombre de projets (le template affichait `/4` en dur).
- Icônes : Font Awesome 6.0.0 via CDN, comme dans le template.
