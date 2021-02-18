## On the Browser

1. in the window search line write: `javascript:alert("dd")` press Enter key and you'll see the alert message appearing.

## Linting and Syntax

### linting and rearranging code tools

a. [https://eslint.org/demo],
eslint configurations-[https://medium.com/wearelaika/javascript-eslint-global-configuration-setup-vscode-599cbfc81eb5]
b. [https://prettier.io/playground/]
c. eslint and prettier wes-bos config - https://github.com/wesbos/eslint-config-wesbos
d. eslint global config: https://medium.com/wearelaika/javascript-eslint-global-configuration-setup-vscode-599cbfc81eb5

### variable naming conventions

a. preferred use: CamelCase (myGreatVar); kebabCase (my-great-var) is not allowed
b. Capital letters only for Classes

## Data Types

JavaScript Data types: SNOBUSN- String, Number,Object,Boolean,Undefined,Symbol,Null

### Floating point math

in the browser console:

```
window.location=`https://${0.1+0.2}.com`)
```

### **Symbol data-type**

For unique identifiers in JavaScript

## Time

**Resources**

1. Current time- https://epoch.now.sh/

## Functions

1. function expression- when we store a function in a variable:

```
const fun=function(){
   return "I am a function expression"
}
```

2. when we declare a function (`function functionName(){}`) it is being hoisted up to the upper part of the code so we can technically write its execution call before we declare it.
