# Destructuring object in a function

Say we have a function that returns an object from the data it gets:

```javascrypt
function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}
```

the call:

```javascrypt
createData('Nigeria', 'NG', 200962417, 923768)
```

will return:  
{name: "Nigeria", code: "NG", population: 200962417, size: 923768, density: 217.54641533372015}
