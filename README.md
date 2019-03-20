# i18n Vue Internationlization Project

## Setup

This project was created using the Vue CLI tool. It started up a simple prototyping application.

Two core dependencies to get translations to work are `i18next`, and `@panter/vue-i18next`.
The other dependency is `moment.js`, but thats more just to show how date formatting can be configured.

Run `npm install` and `npm run serve` to start this application.

## Repo Folder Structure

```text

|-- README.md
|-- src
    |-- components
        |-- content
            |-- Contact.vue
            |-- Home.vue
            |-- Login.vue
        |-- navigation
            |-- Menu.vue
    |-- i18n
        |-- locales
            |-- en
                |-- _common.js
                |-- navigation.js
                |-- index.js
            |-- es
                |-- _common.js
                |-- navigation.js
                |-- index.js
            |-- index.js
        |-- index.js
    |-- App.vue
    |-- main.js
```

## The What

This uses the i18next library to add translation files to our Vue App. This app can toggle between english and spanish.

## The Why

Internationalization is important - everyone will tell you that. But also, it's really awesome to see all your app's copy in just a few files. No more digging around through your DOM elements to change text - you just update one of the dictionary files. That's it.

## The How

It works by using an i18next Vue wrapper by @panter/vue-i18next. Then just writing a small config file (see ./src/i18n folder) and creating the dictionary files. That's all.