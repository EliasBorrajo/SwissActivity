# SwissActivity 🇨🇭

> **Find an outdoor activity anywhere in Switzerland in under a minute.**
> 
> **Stack :** Vanilla JS • HTML5 • CSS3 — zero build‑step

---

## 📚 Project Overview

SwissActivity is a tiny single‑page web app created during a **one‑day open‑data hackathon** at HES‑SO Valais‑Wallis (module *Web Dev Basics / Open Data*, 17 Dec 2022 & 7 Jan 2023).

**Challenges addressed**

* Visitors (or locals) struggle to discover nearby cultural or outdoor events, especially in mountain cantons such as Valais.
* Existing portals don’t combine **live weather** with **event listings**.
* Many public APIs are fragmented or temporarily offline.

**Solution in 60 minutes**

1. Lets you **search for a Swiss city** (auto‑complete on 2 152 localities).
2. Pulls **up‑to‑date events & activities** within **30 km** of that location.
   *Current prototype uses a small ********************************************fictitious dataset******************************************** because the intended MySwitzerland Open Data API was unavailable during the sprint.*
3. Shows the **current weather** so you know whether to pack sunscreen or a raincoat.

All logic runs client‑side — no build tools, servers or frameworks.

---

## 🧪 Technologies Used

| Layer / Purpose | Tool / Library              | Notes                                                                   |
| --------------- | --------------------------- | ----------------------------------------------------------------------- |
| **Language**    | JavaScript                  | Modules & fetch                                                         |
| **Markup**      | HTML5                       | Semantic tags                                                           |
| **Styles**      | CSS3 (+ Flexbox / CSS vars) | Responsive & dark mode                                                  |
| **APIs**        | OpenWeather Map             | Live weather (requires free key)                                        |
|                 | *Fictitious Events DB*      | Placeholder until a cultural‑event API (e.g. MySwitzerland) is restored |


---

## 🎯 Learning Objectives

* Practice rapid prototyping with raw browser technologies.
* Consume and aggregate **open‑data APIs** (events + weather).
* Apply **accessibility** basics (ARIA, contrast, keyboard navigation).
* Deliver a functional MVP within hackathon time constraints.

---

## 🔧 Features

* 🔍 **Debounced city search** with keyboard navigation.
* 📅 **Activity list** (title · place · price) sorted by date.
* ☀️ **Weather widget** (icon, temperature, description).
* 📱 **Responsive design** → navbar collapses under 768 px.
* ♿ **A11y** → semantic HTML, skip‑link, proper contrast.
* 🌓 **Dark‑mode toggle** via CSS custom properties.



---

## 📘 Documentation & Assets

| Item                               | Status                     |
| ---------------------------------- | -------------------------- |
|                                    |                            |
| Hackathon report (PDF)             | ✅ Included in repo         |
| Mock‑ups / screenshots             | ✅ In `/docs/mockups/`      |
| API key example file (`config.js`) | ✅ Provided (keys redacted) |
|                                    |                            |

---

## ✅ Tests & Validation

* Manual verification on latest **Chrome**, **Firefox**, **Safari Mobile**.


---

## 📌 Success Criteria Table

| Criterion                              | Status     | Notes                         |
| -------------------------------------- | ---------- | ----------------------------- |
| City search auto‑complete              | ✅ Done     | 2 152 localities, fuzzy match |
| Weather fetched & rendered             | ✅ Done     | OpenWeather current endpoint  |
| Activities displayed                   | 🟡 Partial | Placeholder dataset           |
| Responsive layout (mobile < 768 px)    | ✅ Done     | Navbar hamburger              |
| Dark‑mode switcher                     | ✅ Done     | CSS vars                      |
| Accessibility (WCAG AA contrast, ARIA) | 🟡 Partial | Some forms need labels        |
| Documentation (README + report)        | ✅ Done     | Report PDF attached           |
|                                        |            |                               |

---

## 🔒 Security Notice

A historical version of `scripts/callAPI.js` leaked an OpenWeather key. The key has been **revoked**. Keep new secrets in `scripts/config.js` (git‑ignored) or inject via environment variables at deploy time.

---

## 👤 Authors

* **Elias Borrajo**
* **Milena Lonfat**
* **Jonathan Bourquin**
* **Jérémie Dellea**

---

## 🎓 Academic Info

*Course:* **Introduction to Open Concepts & Hackathon (IIG 605\_3)**
*Professor:* Alexandre Cotting
*School:* HES‑SO Valais‑Wallis — Institute of Information Systems
*Semester:* Autumn 2022‑2023


---

> MIT Licence — see [`LICENSE.md`](LICENSE.md)
