
# 🎬 Movie Explorer

**Discover your next favorite show.** Movie Explorer is a responsive React web application for browsing and searching TV shows, viewing ratings and release dates, and exploring show details in a clean, cinema-inspired interface.

<p align="center">
  <a href="https://my-movie-explorer-ivory.vercel.app/">🌐 Live Demo</a> ·
  <a href="https://github.com/imamrakib354/My-Movie-Explorer">💻 GitHub Repository</a>
</p>

## 📸 Preview

![Movie Explorer homepage](./public/movie%20explorer.png)

## ✨ Features

- **Cinematic homepage:** Full-screen hero banner with a prominent **Explore Movies** button.
- **Explore shows:** Browse a responsive grid of TV shows fetched from the TVMaze API.
- **Search:** Search for shows by name using the search bar and button.
- **Show cards:** See each show's poster, title, premiere date, and average rating when available.
- **Details modal:** Open a popup with a larger image, genres, rating, premiere date, and summary.
- **Responsive design:** Layouts adapt across mobile, tablet, and desktop screens.
- **Client-side routing:** Navigate between Home and Movies without full page reloads.
- **Loading fallback:** React `Suspense` displays a loading message while the initial shows request is pending.

## 🛠️ Tech Stack

| Technology | Purpose |
| --- | --- |
| **React 19** | Component-based user interface, state management, and `use()` |
| **JavaScript (JSX)** | Application logic and components |
| **React Router 7** | Client-side navigation and nested layout |
| **Tailwind CSS 4** | Responsive styling and visual effects |
| **Vite 8** | Development server and production build |
| **TVMaze API** | TV show information and search results |
| **Vercel** | Deployment and hosting |

## 🌐 API Integration

Movie Explorer uses the free [TVMaze API](https://www.tvmaze.com/api) for show data.

| Feature | Endpoint |
| --- | --- |
| Browse shows | `GET https://api.tvmaze.com/shows` |
| Search shows | `GET https://api.tvmaze.com/search/shows?q=QUERY` |

API requests are handled in `src/services/movieApi.js` using JavaScript's built-in `fetch()` function. No API key is required for these endpoints.

## 📁 Project Structure

```text
movie-explorer/
├── public/
│   ├── favicon.svg
│   └── movie explorer.png
├── src/
│   ├── assets/                 # Images and logos
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── MovieCard.jsx
│   │   ├── Nav.jsx
│   │   └── seeDetails.jsx
│   ├── layouts/
│   │   └── MainLayout.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Movies.jsx
│   ├── services/
│   │   └── movieApi.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## 🚀 Getting Started

**Prerequisites:** Install a version of Node.js compatible with Vite 8 and npm.

1. **Clone the repository**

   ```bash
   git clone https://github.com/imamrakib354/My-Movie-Explorer.git
   cd My-Movie-Explorer
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. Open the local URL printed in your terminal (typically `http://localhost:5173`).

### Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Check the project using Oxlint |

## 🧠 What I Practiced

- Fetching data from an external REST API with `async` / `await` and `fetch()`.
- Using React 19's `use()` API with `Suspense` to load data.
- Managing search inputs, search results, and selected shows with `useState`.
- Passing data and event handlers between parent and child components through props.
- Building reusable cards and a conditional details modal.
- Creating responsive layouts with Tailwind CSS.
- Setting up nested routes with React Router.

## 💡 Ideas for Future Improvements

- Add error handling and clearer empty-search states.
- Add genre filters and sorting options.
- Support favorites or a personal watchlist.
- Add search-as-you-type with debouncing.
- Add skeleton loading states for movie cards.

## 👨‍💻 Author

**Imam Hossain Rakib**

GitHub: [@imamrakib354](https://github.com/imamrakib354)

---

**Made with React, Tailwind CSS, and the TVMaze API.**
