# Custom Element CLI

This is a simple CLI tool that can quickly create Javascript templates for 
v1-spec custom elements.

## Installation

To install, simply run:

```CLI
npm i -g create-element-cli
```

## Creating an Element

To create an element, run the following:

```CLI
create-element [element-name]
```

This will create `[element-name].js` in the folder where the command was run, 
where `[element-name]` is the name of the literal element that you want to
create.

## Create a Module

To create an element as it's own project/module, run the following:

```CLI
create-element --module [element-name]
```

This will create: 

- [element-name].js
- readme.md
- demo.html
- .gitignore

in your current working directory.


## Build & Scope an element

To uglify and scope a custom element so that it's usuable for the browser, run the following:

```CLI
create-element --buid [element-name]
```

This command will look for `[element-name].js` in the current directory and produce the a `[element-name].min.js` file in the same directory. 
