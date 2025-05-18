# Infinite Scroll with React + Typescript

This project demonstrates how to implement **infinite scrolling** in a React application using a simple API (`https://dummyjson.com/posts`). As the user scrolls near the bottom of the page, more posts are automatically fetched and rendered — until all available posts are loaded.

---

## 🚀 Features

- Infinite scroll without external libraries
- Scroll event listener
- Loading indicator
- Clean and reusable code
- debounced scroll event listener to avoid over triggering of scroll event

---

## 📦 Tech Stack

- [React](https://reactjs.org/)
- TypeScript
- Fetch API
- Functional components with Hooks (`useState`, `useEffect`, `useRef`)

---

## 🧠 How It Works

1. Initial posts are fetched on load.
2. A scroll event listener detects when the user nears the bottom of the page.
3. If there are more posts to fetch, a new request is triggered.
4. The scroll listener stops fetching when all posts are loaded.

To ensure it doesn't over-fetch:
- A check compares the number of posts already fetched with the total number available.
- `useRef` is used to store up-to-date post and total values without relying on stale state.

---

## 🛠️ Getting Started

### Prerequisites

- Node.js and npm/yarn installed

### Installation

```bash
git clone https://github.com/yourusername/infinite-scroll-react.git
cd infinite-scroll-react
npm install
npm run dev
