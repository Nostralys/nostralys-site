# 🌌 Frostfall Saga – Frontend

> Interface web officielle du RPG tactique **Frostfall Saga**  
> Réalisé en **Angular 17**, déployé automatiquement sur **GitHub Pages**, connecté à un backend Quarkus.

---

## 📛 Badges

[![Deploy GitHub Pages](https://img.shields.io/github/deployments/ton-org/ffs-site-frontend/github-pages?label=github%20pages)](https://ton-org.github.io/ffs-site-frontend/)
![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)
![ESLint](https://img.shields.io/badge/linting-eslint-blue.svg)
![Quality Check](https://github.com/ton-org/ffs-site-frontend/actions/workflows/quality.yml/badge.svg)

---

## 🛠️ Stack technique

- ⚙️ Angular 17 (SCSS, Routing, Mode strict)
- 🧪 Karma + Jasmine + Istanbul
- 🧹 ESLint + Prettier + Husky (lint-staged)
- 🔄 Déploiement via GitHub Pages (`gh-pages`)
- 📦 PNPM pour la gestion de paquets

---

## 🚀 Scripts utiles

```bash
pnpm start               # Serveur dev
pnpm build               # Build prod
pnpm test                # Tests unitaires
pnpm run test:coverage   # Tests + couverture + seuil 80%
pnpm lint                # Linter
pnpm lint:fix            # Linter + fix
pnpm format              # Formatage Prettier
pnpm run deploy          # Déploiement GitHub Pages
```

## 🧱 Structure du projet

```text
src/
├── app/
│   ├── core/       # Auth, Interceptors, services globaux
│   ├── shared/     # Composants, pipes, directives réutilisables
│   ├── features/   # Modules fonctionnels (admin, blog, etc.)
│   ├── pages/      # Pages publiques
├── assets/         # Images, icônes, JSON
├── environments/   # Fichiers d'env
```

## 🧪 Qualité

Outil | Rôle
ESLint | Linter Angular + TypeScript
Prettier | Formatage SCSS, HTML, TS
Karma + Jasmine | Tests unitaires + couverture
Istanbul | Analyse de couverture
Husky + lint-staged | Pre-commit automatique
GitHub Actions | CI pour lint + test + seuils

## ✅ Contribution
### 📌 Règles

* Branche : **``feature/...``, ``fix/...``, ``refactor/...``**
* ❌ Pas de commit direct sur ``main``
* ✅ Respect du formatage + qualité avant push

## ✅ Checklist PR
* Tests OK (``pnpm test``)
* Linter OK (``pnpm lint``)
* Formatage OK (``pnpm format``)
* Couverture ≥ 80% (``pnpm run test:coverage``)
* PR lisible et bien nommée

## 🚀 Déploiement
Le site est déployé automatiquement via GitHub Actions sur la branche gh-pages
Accès : https://ton-org.github.io/ffs-site-frontend/

## 👥 Équipe
* 👤 Antoine Duquenne / [@addevep](https://github.com/addevep)
* 👤 Alexandre Sparton / [@ASparton](https://github.com/ASparton)
