# StarWars

[Star Wars](https://moe-starwars.netlify.app)

## Project Specifications

### Objective
- This task is designed to provide an opportunity for you to demonstrate general JavaScript and UI development knowledge in the sense that you: write clean, structured, readable and maintainable code create simple application components and building blocks understand fetching, transforming and aggregating data from external APIs maintain a well designed application state craft a pleasant user experience

### Task
Create a small app using React that lists the names of Star Wars movies in a dropdown and the opening crawl of the selected movie below the selection along with a list of the characters that appear in that movie.

### General requirements:
- The UI should have a basic theme of black and yellow; visual design is low in the priority list
- Movie names in the dropdown to be sorted by release date from earliest to newest
- There should be no movie selected initially and the app should show the Star Wars logo instead of movie information
- The opening crawl of the selected movie should be animated, a simple scrolling marquee text would be sufficient
- Keep your application source code on a public Github repository
- Provide a live demo url (Codesandbox, Glitch, Netlify, Zeit Now, Heroku and Github Pages are good options).

### Data requirements:
- The data should be fetched online from https://swapi.dev
- Loading indicators should be shown in proper places while fetching data
- Error messages should be shown if there are any errors
- If you encounter CORS errors connecting to SWAPI, use a free online CORS proxy, like http://anyorigin.com/, for example, you can call https://swapi.dev/api/films without CORS issues using http://anyorigin.com/go?url=https://swapi.dev/api/films

### Character list requirements:
All characters that appear in that movie should be listed showing name, gender, and height in the form of a table.

Gender can be shown as an icon or abbreviation to save horizontal space.

Character list can be sorted by clicking on the table headers.
Clicking on the same header twice toggles the sort order by the field between ascending and descending.

There should also be a gender filter selection right above the list so that either all characters are listed or only the selected gender are listed.

The last row of the table should show the total number of characters currently visible on the list.

The last row should also show the sum of the heights of the characters currently visible.

The sum of heights should be shown both in cm and in feet/inches in parenthesis, for example, 170 cm (5ft/6.93in)

Please feel free to ask questions before or during working on this task and remember to share with us the Github repository and live demo urls.

This is not a test. This is a chance for us to know you better and your chance to see how Paystack engineers typically work.

After submitting, you will receive feedback as Github issues, might be asked to make some changes, also possibly create or review a pull request.

May the force be with you! :)
