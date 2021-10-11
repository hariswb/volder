# volder
[![Codecov Coverage](https://img.shields.io/codecov/c/github/devSupporters/volder/master>.svg?style=flat-square)](https://codecov.io/gh/devSupporters/volder/)
[![CI](https://github.com/devSupporters/volder/actions/workflows/main.yml/badge.svg)](https://github.com/devSupporters/volder/actions/workflows/main.yml)
[![Package Size](https://img.shields.io/bundlephobia/minzip/volder?label=package%20size)](https://www.npmjs.com/package/volder)
[![Downloads](https://img.shields.io/npm/dm/volder)](https://www.npmjs.com/package/volder)
[![Version](https://img.shields.io/npm/v/volder)](https://www.npmjs.com/package/volder)
[![License](https://img.shields.io/npm/l/volder)](https://github.com/devSupporters/volder/blob/main/LICENSE)

**volder** is a powerful JavaScript schema builder for value parsing and validation. Define a schema and validate values, volder schema are extremely simple to use, it has custom error messages, custom types, nested schemas.

## Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [Custom error messages](#Custom-error-messages)
- [Custom type validator](#Custom-type-validator)
- [Nested schemas](#Nested-schemas)
- [Options table](#Options-table)
- [Contributing](#Contributing)

## Installation
`npm install --save volder`

## Usage
You can create and validate volder schema objects by:

```js
import Volder from 'volder';

const person = new Volder({
  name: {
    type: String,
    min: 4,
    trim:true,
    required: true
  },
  age: {
    type: Number,
    max: 100
  }
});
const [isValidPerson, errors] = person.validate({name:"lion", age:23})
```
 - return isValidPerson true if an object are valid otherwise false
 - if there are error or something wrong return errors object with his option name otherwise return empty object **{}** 
 - throw an error if validate function paramatere other than object

## Custom error messages
You Can Define you custom error messages by:

```js
const person = new Volder({
  name: {
    type: [String, "person name shoulde a string"],
    min: [4, "must at least 4 characters"] ,
    required: [true, "name is important"]
  },
  age: {
    type: [Number, "your age can not be a string"],
    max: [100, "age at most 100 years"]
  },
  other:  {
    type: [null, "'other' can be anything than object and array"]
    avoid:  [Object, Array],
    required:false
  }
});
```

## Custom type validator
You Can Define you custom types by adding a validator functions that returns a **boolean**:

```js
import isEmail from "package";
import isValidPassword from "package";

const user = new Volder({
  username: String, // use this trick by just add type as option value
  email: {
    type: [isEmail, "Email is invalid"],
    max: 100
  },
  password: isValidPassword
});
```

## Nested schemas
You Can Define Nested volder schemas by:
```js
import Volder from 'volder';

const person = new Volder({ name: String, age:  Number})
const user = new Volder({
  email:  { type: String, trim: true },
  person: schema1
});

const [isValid, errors] = person.validate({person:{name:"lion", age:23}, email:"test@test.com"})
```

## Options Table

