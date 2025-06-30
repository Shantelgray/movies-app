#MovieCard
As a Movie Lover, I want to explore and manage movies in a digital collection.

Feature 1: Enter the Collection

User Story:
Upon launching the app, I want to access the movie collection by clicking a button on the homepage to view a display of movie posters.

Details:

    Implement a homepage displaying the app title and MovieCards.

    Clicking the button navigates users to the MovieApp page, enabling seamless exploration of the movie collection.

Feature 2: Display the Collection and NavBar

User Story:
Once on the MovieApp page, I want to view movie cards and navigate using a NavBar.

Details:

    Implement movie cards displaying each movie with details such as the title, description, and year.

    Fetch data from a local server to populate cards using components like MovieCard and MovieList.

    Use React hooks like useState and useEffect for state management.

    Implement a NavBar with links to MovieApp, Favorites, Ratings, and Watchlist pages using React Router for smooth navigation.

Feature 3: Movie Details

User Story:
Clicking on a movie card, I want to navigate to a detailed view showing the movie’s synopsis, release year, image, genre, and rating.

Details:

    Use React Router to dynamically render the MovieDetailsPage based on the movie ID.

    Display comprehensive movie information sourced from the movie data.

Feature 4: Sort Collection

User Story:
On the MovieApp page, I want to sort movies by title, description, or release year.

Details:

    Implement sorting functionality using React state.

    Provide intuitive UI controls like buttons or dropdowns to allow sorting by different criteria.

Feature 5: Search Collection

User Story:
On the MovieApp page, I want to search movies by title or rating.

Details:

    Implement search functionality using React state.

    Include user-friendly UI controls such as input fields and buttons for searching movies.

Feature 6: Manage Favorites, Ratings, and Watchlist

User Story:
From the NavBar, I want to explore and manage my favorite movies, ratings I’ve given, and my watchlist.

Details:

    Create a FavoritesPage to display movies the user has marked as favorite.

    Create a RatingsPage to show movies with user ratings and allow editing ratings.

    Create a WatchlistPage for movies the user plans to watch.

    Store and manage these lists locally or synced with a backend.

    Fetch and display relevant movie data on each page.

Feature 7: Add New Movies

User Story:
I want to add a new movie to my collection by filling out a form.

Details:

    Implement a form modal with input fields matching movie attributes.

    Use a POST request to update the local server or database upon submission.

    Ensure the new movie appears immediately on the MovieExhibit page.

Feature 8: Delete Movies

User Story:
I want to delete movies from my collection if I no longer want them listed.

Details:

    Add delete buttons on movie cards or detail pages.

    Confirm deletion to prevent accidental removals.

    Remove the movie from the local server or database via DELETE request.

    Update UI to reflect the removal instantly.
