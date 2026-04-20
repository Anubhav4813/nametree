# 🌳 Nametree

An algorithm that generates unique identifiers using rules, patterns, and randomness.

## What it does

Nametree produces unique, human-readable names/identifiers by combining structured rules with controlled randomness — useful for generating usernames, project names, entity IDs, or anything that needs to be both unique and readable.

## Tech Stack

- **Backend** — Node.js + Express (`Index.js`)
- **Algorithm** — Python (`name_generator.py`)
- **Frontend** — HTML, CSS, Vanilla JS (`public/`)

## Getting Started

### Prerequisites

- Node.js (v18+)
- Python 3.x

### Installation

```bash
git clone https://github.com/Anubhav4813/nametree.git
cd nametree
npm install
```

### Run

```bash
node Index.js
```

Then open `http://localhost:3000` in your browser.

## Project Structure

```
nametree/
├── public/
│   ├── Index.html
│   ├── app.js
│   └── style.css
├── Index.js           # Express server
├── name_generator.py  # Core name generation algorithm
├── package.json
└── .gitignore
```

## How it works

The name generator uses a combination of:
- **Rules** — predefined patterns and structures
- **Patterns** — syllable/word templates
- **Randomness** — controlled random selection to ensure uniqueness

## Author

**Anubhav Gahlawat**  
[GitHub](https://github.com/Anubhav4813) · [LinkedIn](https://linkedin.com/in/anubhav-gahlawat-3a5376373) · [Link](https://nametree.onrender.com/)


## License

MIT
