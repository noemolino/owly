# 📚 Owly - Ricerca Libri

Un'app web realizzata in Vanilla JS che permette di cercare libri per categoria utilizzando le API di [Open Library](https://openlibrary.org/).

## 🚀 Funzionalità
- Ricerca per categoria
- Visualizzazione titoli e autori
- Descrizione dettagliata del libro

## 🛠️ Tecnologie
- JavaScript (Vanilla)
- Axios
- Lodash
- Webpack
- HTML/CSS


# 📚 Owly - Ricerca Libri

Owly è un'applicazione web che permette di cercare libri per categoria tramite le API pubbliche di [Open Library](https://openlibrary.org/). Progettata in **Vanilla JavaScript**, è pensata per essere leggera, semplice e accessibile, con una UI minimale ma funzionale.

---

## 🚀 Funzionalità

- 🔍 Ricerca libri per categoria (es. fantasy, science_fiction, etc.)
- 📖 Visualizzazione titoli e autori
- 📝 Visualizzazione descrizione dettagliata del libro al clic
- ⬆️ Toggle descrizione: mostra/nascondi con bottone interattivo

---

## 🛠️ Tecnologie

- **JavaScript (Vanilla)**
- **Axios** per le chiamate HTTP
- **Lodash** per la gestione sicura dei dati dalle API
- **Webpack** per il bundling del progetto
- **HTML5 / CSS3**

---

## 📁 Struttura del progetto

owly/
│
├── 📁 assets/
│   ├── 📁 css/            # Stili dell’app
│   │   └── styles.css
│   │
│   ├── 📁 js/             # File JavaScript
│   │   └── app.js         # Entry point
│   │
│   ├── 📁 img/            # Immagini usate
│   │   └── favicon.ico
│   │   └── logo_owly.png
│   │   └── github.png
│   │   └── linkedin.png
│
├── 📁 dist/               # Output generato da Webpack
│   └── bundle.js
│
├── 📄 index.html          # File HTML principale
├── 📄 webpack.config.js   # Configurazione Webpack
├── 📄 .gitignore          # File per ignorare elementi nel versionamento
├── 📄 package.json        # Gestione pacchetti e script
├── 📄 README.md           # Documentazione progetto

---
## ▶️ Demo Online

👉 [Provala qui](https://owly-noemimolino.netlify.app/)

---

## ✅ Avvio in locale

Clona il repository e installa le dipendenze:

```bash
git clone https://github.com/noemolino/owly.git
cd owly
npm install
npm run build
npm run start