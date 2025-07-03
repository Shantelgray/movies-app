## Getting Started

Follow the steps below to run the application locally:

### Clone the Repository

```bash
git clone git@github.com:Shantelgray/movies-app.git
```

Navigate to the Project Directory

```bash
cd movies-app
```

Install Dependencies

```bash
npm install
```

Start the JSON Server (Mock Backend)

```bash
npm run server
```

Start the React Application

```bash
npm start
```

Open in Browser

Visit: http://localhost:3000 to use the application.

# CineGalaxy - Movie Recommendation App

## Project Overview

**CineGalaxy** is a movie recommendation application where movie lovers can explore, manage, and personalize a collection of films. Users can flip through movie cards, view detailed descriptions, and sort or search through the gallery by genre, rating, or year.

---

## 🚀 Features

### Feature 1: Enter into the Movie Collection

**User Story**: When I open the app, I want to click a button on the homepage that shows me a gallery of movie posters. Then, when I click on a movie, the poster flips to reveal a brief description on the back.

- Homepage displays app title and movie images
- Clicking a button navigates to the Movie Collection page
- Clicking a poster flips it to reveal details

---

### Feature 2: Displaying the Collection and the NavBar

**User Story**: Clicking a Movie Card, I expect to view its description, year, image, and genre.

- Movie Cards show movie name and image
- Data is fetched from a local server
- Uses React components like `MovieCard` and `MovieList`
- `useState` and `useEffect` manage state
- NavBar includes links to Home, Favorites, Ratings, and Genres using React Router

---

### Feature 3: Movie Card Details

**User Story**: Click a Movie Card to flip and see more information.

- Flip animation reveals description, year, genre, and rating
- Movie data sourced from local server

---

### Feature 4: Sort Movie Collection

**User Story**: Sort movies by genre or year.

- Sorting logic implemented using `useState`
- Users sort using buttons/dropdowns

---

### Feature 5: Search Collection

**User Story**: Explore movies by title using search.

- Implements search using `useState`
- Input field and button for easy interaction

---

### Feature 6: Manage Favorites, Ratings, and Genre

**User Story**: Navigate via NavBar to explore favorites, ratings, and genres.

- `FavoritePage` for favorite movies
- `RatingPage` to sort by rating
- `GenrePage` to explore by genre
- All views fetch from local server

---

### Feature 7: Add New Movies

**User Story**: Add a new movie to the collection.

- Form modal includes all movie fields
- Submits data via `POST` request
- Updates UI with new movie

---

## Usage

- Explore the homepage to learn about the collection and click "Enter Collection" to view movies.
- Navigate through different pages using the navigation bar (Movies, Favorites, Ratings, Genres).
- Use Search functionalities on the Movie Collection page to find specific movies by title.
- Use Sort functionalities to display movies by genre or year.
- Click on a movie to view more details including title, year, genre, rating, and description. Navigate back using the "Back" button.
- Add new movies to the collection using the button on the Movie Collection page.
