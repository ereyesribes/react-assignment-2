# First assignment for the "React - The Complete Guide" course

In this assignment We explore both the basics of conditional rendering as well as rendering of lists in React

## So what does this do?

This application presents to the user a text input into which the user can type.

Next, this application displays a simple card with the text "Text long enough" if the input is longer than 3 characters, and "Text too short" if the input is shorter.

## How can I see this in action?

Just run
### `npm start`
from the project's root folder. A browser window with the application should pop up shortly after.

## What was the assignment anyway?

The assignment was defined by our instructor as follows:

1. Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).
2. Create a new component (=> ValidationComponent) which receives the text length as a prop
3. Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)
4. Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).
5. Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.
6. When you click a CharComponent, it should be removed from the entered text.
