# 🎲 Dicee Game

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=GitHub%20Pages&logoColor=white)](https://pages.github.com/)


A fun and simple dice game built using **HTML**, **CSS**, and **JavaScript**, where two virtual dice roll on each page refresh — and the higher roll wins!

Perfect for beginners practicing DOM manipulation and random number generation in JavaScript.

---

## 🌐 Live Demo

Live Link: [https://ash-the-k.github.io/Dicee-Game/](https://ash-the-k.github.io/Dice-Game/)

---

## 🎯 About the Project

This Dicee Game is a lightweight project created as part of a web development learning journey. Every time you refresh the page, the dice images change based on randomly generated numbers, and the game automatically declares the winner.

---

## ✨ Features

* **Automatic Dice Roll**: Numbers are generated on each refresh
* **Winner Detection**: Declares Player 1, Player 2, or a Draw
* **Dynamic Images**: Dice images update using `setAttribute()`
* **Minimal UI**: Clean layout with simple, modern typography
* **No Dependencies**: Pure HTML, CSS, and vanilla JavaScript

---

## 🛠️ Technologies Used

* **HTML5** – Game structure
* **CSS3** – Styling and visual layout
* **JavaScript (ES6+)** – Random number generation & DOM updates
* **Google Fonts** – Indie Flower & Lobster
* **Font Awesome** – GitHub icon in footer

---

## 🎮 How It Works

1. **Page loads / refreshes**
2. JavaScript generates two random numbers between **1 and 6**
3. Dice images change dynamically using template strings
4. Conditional logic decides who won
5. Header text updates accordingly

---

## 📁 Project Structure

```
Dicee/
├── index.html          # Main HTML page
├── styles.css          # Game styling
├── script/
│   └── index.js        # JavaScript logic for dice roll
└── images/
    ├── dice1.png
    ├── dice2.png
    ├── dice3.png
    ├── dice4.png
    ├── dice5.png
    └── dice6.png
```

---

## 🚀 Installation & Setup

1. Clone or download this repository
2. Ensure the folder structure matches the paths used in `index.html`
3. Open **index.html** in your browser
4. Refresh the page to play!

---

## 🔧 Key JavaScript Concepts

* **Math.random()** for number generation
* **DOM selection** (`querySelector`)
* **Dynamic attribute update** (`setAttribute`)
* **Conditional logic** for winner decision
* **TextContent updates** for UI messaging

---

## 👨‍💻 Author

**Ashlesh Kanchan**

* GitHub: [@ash-the-k](https://github.com/ash-the-k)

---

⭐ **Refresh the page and let the dice decide!** ⭐
