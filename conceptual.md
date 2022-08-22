### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  
  - React Router enables navigation among various components in a React Application, changing the browser URL and keeps the UI in sync with the URL.

- What is a single page application?

  - Single Page Application is a web app that loads single page documents and then updates the body content. Sites that exclusevily use client side routing are single-page applications

- What are some differences between client side and server side routing?

  - Client side handles mapping between URL bar  and  page user sees via browser rather than via Server. Server side is the traditional pattern and decides what HTML to return based on the URL requested

- What are two ways of handling redirects with React Router? When would you use each?

  - Use the Redirect component, useful when you want to get to one that you shouldnt have gone to so it redirects you to another.
  - Calling .push method on the history object. Useful when you have finished logging in and redirects you to another page

- What are two different ways to handle page-not-found user experiences using React Router? 

  - You can create a 404 page when redirected or you can redirect back to the homepage.

- How do you grab URL parameters from within a component using React Router?
  
  - By using the useParams hook which stores info on the URL parameters

- What is context in React? When would you use it?
  - Context is Universal data across your application. You can use it for Prop drilling, instead of repition of passing down from Parent to child or from child to parent. This is also useful for global themes and shared data.

- Describe some differences between class-based components and function
  components in React.

  - Class Components define state as an instance property or in a constructor. Since you are using class, you would have to use the this and the bind function.
  - Function components is alot simpler to use and easier to read than Class components, taking away constructors, this, and bind functions. Function now come with hooks, which dont work inside of Class and they let use state and other React features.

- What are some of the problems that hooks were designed to solve?

  - Hooks are functions that let you “hook into” React state and lifecycle features from function components. You can create custom hooks and put into any of your components.
