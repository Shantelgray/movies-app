Movie Recommendations:

As a movie fan, I want to discover and manage a personalized collection of recommended films.

Feature 1: Enter in to the Movie Collection
User Story: When I open the app, I want to click a button on the homepage that shows me a gallery of movie posters. Then, when I click on a movie, the poster flips to reveal a brief description on the back.
Details:

1.  Implement a homepage displaying the app title and images
2.  Clicking the button navigates users to the Movie App page, exploring the movie recommedation collection.

Feature 2: Displaying the Collection and the NavBar
User Story: Clicking on an Movie Card, I expect to navigate to a detailed view showing its description, year, image and genre of the movie.

Details: 1. Implement Movie Card displaying each piece with details such as the Movie Name and Movie Title. 2. Fetch data from a local server to populate cards using components like MovieCard and MovieList. 3. Use useState and useEffect hooks for state management. 4. Implement a NavBar with links to Movie , FavoritePage, RatingsPage, and GenrePage using React Router for smooth navigation.

Feature 3: Movie Card Details
User Story: Click on the Movie Card to flip so that user can see the description, year, image, and genre of the movie.

Details:

1. Use React Router to dynamically render the MoviePage based on Movie ID, displaying information sourced from the Movies data.

Feature 4: Sort Movie Collection
User Story: on the MoviePage showuld sort through the genre and the year.

Details: 1. Implement sorting functionality using useState. 2. Use intuitive UI controls like buttons or dropdowns to allow users to sort Movie based on different criteria.

Feature 5: Search Collection
User Story: On MoviePage, user are to explore by the title of the movie.

Details: 1. Implement search functionality using useState 2. Include user-friendly UI controls such as input fields and buttons to facilitate searching based on specified criteria.

Feature: 6: Manage Favortie, Rating, and Genre
User Story: From the Movie page, I want to explore favorite, rating, and genres using the NavBar.

Details: 1. Navigate to FavoritePage to explore artworks categorized by favorites. 2. Navigate to RatingPage to explore artworks categorized by ratings. 3. Navigate to GenrePage to explore artworks categorized by genres. 4. Display Movies using data fetched from the server.

Feature: Add New Artworks
User Story: User to add a Movie to there movie collection

Details: 1. Implement a form modal with input fields matching the database structure. 2. Use a POST request to update the local server upon submission. 3. Ensure the new artwork appears on the MoviePage.

Feature: Delete a Movie
User Story: User to delete a movie from the movie collection.

Details: 1. Use a Delete request to update the local server upon submission. 2. Ensure that the Movie deletes off the MoviePage.
