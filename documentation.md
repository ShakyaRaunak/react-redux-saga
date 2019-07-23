https://auth0.com/blog/beyond-create-react-app-react-router-redux-saga-and-more/

    $ npx create-react-app react-todo


#### Installing and Configuring Prettier

Prettier is an opinionated code formatter that you can use to help you keep the code style of your project consistent. If you configure Prettier properly, any software developer will be able to jump right into your project and start coding without worrying about code format. Then, when they save their modifications (or when they commit them), Prettier will make sure the code is formatted correctly.

    $ npm install husky lint-staged prettier

This will make NPM install three libraries:

* `husky and lint-staged`: Together, these libraries will allow you to register an NPM script as a githook (this way Prettier will run right before the developer commits a new code).
* `prettier`: This is the JavaScript formatter you want to use.

The first property, `husky`, will make `lint-staged` run on Git's pre-commit phase. The second property, `lint-staged`, indicates what exactly NPM must run on this phase. The third property, `prettier`, changes the default configuration of Prettier to use `singleQuote` instead of double quotes.


#### Installing and Configuring React Bootstrap

The next thing you can do is to install and configure React Bootstrap. This library is a *specialization* of the Bootstrap toolkit. As Bootstrap depends on jQuery to run some components, the React community decided that it would be a good idea to remove this dependency and rebuild Bootstrap to integrate with React tightly. That's how React Bootstrap was born.

    $ npm install react-bootstrap bootstrap


#### Installing PropTypes

> PropTypes exports a range of validators that can be used to make sure the data you (your React components) receive is valid.

    $ npm install --save prop-types


#### Installing Redux and Integrating It with React

    $ npm install --save redux react-redux

The first one, `redux`, is Redux itself and the second one, `react-redux`, is a library that offers React bindings for Redux.


#### Integrating React Components with Redux

After defining Redux elements (actions, reducers, and the store), the next thing you can do is to define the React components that will use these elements. First, you will create two new directories:

* `./src/components`: This is where you will create your Presentational Components (that is, components that are not aware of Redux).
* `./src/containers`: This is where you will create Container Components (that is, components that tightly integrate to Redux).

To be able to present the to-do items, you will create two Presentation Components: `ToDo` and `ToDoList`. As their names state, the first one will render a single to-do item, while the second one will render a list of to-do items.




#### Managing Side Effects on React with Redux Saga

Now that you have an application that can rely on a single source of truth when it comes to state management. However, one big gap of Redux is that this library does not handle well side effects (like those that AJAX requests provoke). To be able to handle this kind of side effect, you can use Redux Saga.

    $ npm i redux-saga




