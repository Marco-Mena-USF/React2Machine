What is the purpose of the React Router?

React Router helps us navigate between different parts of our web application. It makes it easy to show different components based on the URL, creating a smooth and interactive user experience.
What is a single page application?

A single page application (SPA) is a website or web app that loads a single HTML page and dynamically updates the content as the user interacts with it, without having to reload the entire page. It makes things faster and more seamless.
What are some differences between client side and server side routing?

Client-side routing happens in the browser and doesn't require a server request for each page change. Server-side routing involves requesting new pages from the server each time, which can be slower.
What are two ways of handling redirects with React Router? When would you use each?

You can use the Redirect component or the history object to handle redirects. Use Redirect when you want to redirect based on a condition, and use the history object when you want to redirect programmatically, like after a successful form submission.
What are two different ways to handle page-not-found user experiences using React Router?

You can use the <Switch> component to render a default "Not Found" page when no other routes match. Another way is to have a wildcard route (<Route path="*" component={NotFound} />) that catches any unknown paths and displays a "Not Found" component.
How do you grab URL parameters from within a component using React Router?

You can use the useParams hook provided by React Router to get URL parameters. For example, let { id } = useParams(); will give you the id parameter from the URL.
What is context in React? When would you use it?

Context in React is like a global object that can hold values accessible to many components. You use it when you want to avoid "prop drilling," passing data through many components. It's handy for things like themes, user authentication, or other shared data.
Describe some differences between class-based components and function components in React.

Class-based components use ES6 classes and have lifecycle methods. Function components are simpler and are introduced in React with the introduction of hooks. Hooks allow function components to have state and lifecycle-like features.
What are some of the problems that hooks were designed to solve?

Hooks were introduced to address issues like state management, lifecycle methods, and code reuse in function components. Before hooks, these functionalities were primarily available in class components, making the code more complex and harder to maintain. Hooks simplify and make these features available in a more straightforward way for function components.