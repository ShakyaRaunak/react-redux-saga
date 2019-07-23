https://auth0.com/blog/beyond-create-react-app-react-router-redux-saga-and-more/

    $ npx create-react-app react-todo


#### Installing and Configuring Prettier

Prettier is an opinionated code formatter that you can use to help you keep the code style of your project consistent. If you configure Prettier properly, any software developer will be able to jump right into your project and start coding without worrying about code format. Then, when they save their modifications (or when they commit them), Prettier will make sure the code is formatted correctly.

    $ npm install husky lint-staged prettier

This will make NPM install three libraries:

* `husky and lint-staged`: Together, these libraries will allow you to register an NPM script as a githook (this way Prettier will run right before the developer commits a new code).
* `prettier`: This is the JavaScript formatter you want to use.




