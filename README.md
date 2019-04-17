# Small Potatoes

[Small Potatoes](https://small-potatoes.firebaseapp.com/) is a trivia game where users can select a trivia category and level of difficulty and play a ten question round of trivia. Users can keep playing to beat their best score and time.

## Tech Used

This app uses the following technologies:

* [React](https://reactjs.org/): bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
* [Redux](https://redux.js.org/)
* APIs:
    * [Open Trivia Database](https://opentdb.com/api_config.php)
    * [GIPHY API](https://developers.giphy.com/docs/)
* CSS Framework: [Bulma](https://www.npmjs.com/package/react-bulma-components)
* Hosting: [Firebase](https://firebase.google.com/)

## Challenges

### Labeling answers as correct/incorrect

When designing the interface for each question in the trivia game, I wanted a simple way to designate whether a selected answer was correct/incorrect. I decided to color code the answers: green for correct and red for incorrect. Upon selecting an answer, I wanted the correct answer to color code to green, the selected incorrect answer (if applicable) to color code to red, the score to increase (if the user selected the right answer) and to prevent any further answer selection.

The issue I ran into when implementing this was that, after the color coding for correct/incorrect answers displayed, the user could continue clicking on answers until all the incorrect answers were coded red. As the color coding was being handled by Redux, I needed to prevent the dispatch after the initial answer was selected. Thus, I implemented a local function in the React component which would run through the array of answers and find an instance of an answer being selected. A dispatch would only be sent in the case that the *find()* method returned undefined.

After showcasing the site, I received the feedback that the color coding would be meaningless to a colorblind user. To alternatively display correct/incorrect answers, I added a check mark and "x" icon to the interface.

### Tracking game time & updating My Stats page

To add complexity to the game beyond tracking the users score, I wanted to implement a timer to track game play time. I initially found the *simple-stopwatch* library but found it difficult to implement with React. Upon further exploration, I came across the *EasyTimer.js* library which integrated into React easily and allowed me to track the time in the Game-Page component and dispatch it to Redux upon selecting the "Final Score" button on the last question.

When it came to creating the My Stats page, I wanted to track the best time for a user but also the overall time a user had been playing. To achieve this, I needed to convert the string of a user's current time (in hh:mm:ss format) to seconds so that it could be added to the previous total time. I discovered the *hh-mm-ss* library which made quick work of the conversion to seconds and back to the display string.
