# SwissActivity 🇨🇭🎉

> *Find an outdoor activity anywhere in Switzerland in under a minute.*
> **Stack :** Vanilla JS + HTML5 + CSS3 · zero build‑step.

---

## 1. About the challenge

⏱️ 6**0 minutes, one static site, 2 open-source APIs — that was the deal.**
During a coding sprint at HES‑SO (module *Web dev basics / Open Data*), our trio built a micro‑web‑app that:

1. Lets you **search for a Swiss city** (auto‑complete on 2 000+ localities).
2. Queries two public APIs ↓ and returns **up‑to‑date events & activities** within **30 km** of that location.
3. Displays the **current weather** in the same view so you know if you’ll need sunscreen or a raincoat.

All of that without any framework, transpiler or backend — just plain browser tech.

| Data source         |  Notes                                    |
| ------------------- |  ---------------------------------------- |
| **openagenda.com**  |  Free cultural‑event API (all CH cantons) |
| **OpenWeather Map** |  Current conditions, icons & temp         |

*(Both services offer **************************free API keys**************************; plug yours in ************************`scripts/config.js`************************.)*

---

## 2. Features

* 🔍 **City search** with debounced input & keyboard navigation.
* 📅 **Activity list** (title · place · price) sorted by date.
* ☀️ **Weather widget** (icon + temp + short description).
* 📱 **Responsive layout**: flexbox navigation bar collapses into a hamburger on < 768 px.
* ♿ **A11y**: semantic HTML, ARIA labels, proper contrast.
* 🌓 **Dark‑mode toggle** (CSS custom‑props).

---

## 3. Folder structure

```
.
├── index.html          # Landing page (search)
├── cityActivity.html   # Results page
├── aboutUs.html        # Project & team info
├── scripts/
│   ├── api.js          # Fetch wrappers (OpenAgenda + weather)
│   ├── autocomplete.js # Simple fuzzy‑match for city list
│   └── utils.js        # Helpers (debounce, templating …)
├── ressources/
│   ├── cities.json     # 2 152 Swiss localities + coords
│   └── img/            # Icons & logo
└── css/
    └── styles.css      # Single stylesheet
```

> **Tip :** you can open `index.html` directly in your browser or use a mini‑HTTP server (`npx serve`, `python -m http.server`) if CORS blocks the API.

---

## 4. Security notice

⚠️ **Heads‑up :** the file `scripts/callAPI.js` used to hold an OpenWeather API key in clear text. That key is now **revoked**, but publicly committing secrets is a bad practice.

> **How to fix**
> • Move keys to `scripts/config.js` (already git‑ignored) or inject them via environment variables.

---

## 5. Authors

* **Elias Borrajo**
* **Milena Lonfat**
* **Jonathan Bourquin**

## 8. License

MIT — see [`LICENSE.md`](LICENSE.md).

## 9. Acknowledgements

Built at the *“Swiss Open‑Data Sprint”* (Fall 2023) — thanks to the [opendata.swiss](https://opendata.swiss) & [OpenAgenda](https://openagenda.com) communities for their awesome free APIs!
