### Problem Statement:

You are given a task to build a simple React application that renders a list of items. The data should be fetched from a public API, and you are required to implement a search functionality that filters the displayed items based on the user input.

Here's a step-by-step breakdown of the task:

1. Create a new React application using `create-react-app`.
2. Use the `fetch` function or `axios` library to get data from the public API: https://jsonplaceholder.typicode.com/posts.
3. Display the list of items (posts) on the page.
4. Above the list, create a text input field.
5. Implement a functionality where, as the user types in the input field, the list filters in real-time to only display items that contain the user's input in the title.

Make sure to handle and display errors gracefully if the data cannot be fetched.

**Bonus Points**:

- Implement debounce functionality to limit the number of searches per second.
- Make your application visually appealing and well-organized.
- Ensure your code is clean, well-commented, and follows best practices.

This problem tests your ability to work with external APIs, manage state, handle user input, and implement real-time filtering in a React application.