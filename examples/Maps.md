# Maps

## Reading/ Studying material:

1. WesBos Beginner JS: lesson 44
2. Pre-course videos: lesson 3.4
3. MDN documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

**Questions**:

**Data**:

```
const keys=["id", "name","username","email","phone","website"]

const values=[1,"Leanne Graham","Bret","Sincere@april.biz"]

```

1. Use the `new` key-word to create a Map object using the data. Write max two lines of code.

**solution**

```
//wrong
const myMap=new Map([keys,values])
//correct
const myMap=new Map(kays.map((key,index)=>[key,values[index]]))
```

---

2. get and change the "username"
   **solution**

```
myMap.set("username","alice")
myMap.get("username")
```

---

````
"company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"}
      ```
````

3. Add another key named "company" and extract the name of the company from the updated Map object. Use 2 lines of code.

**solution**

```
myMap.set("company",company).name
```

4. convert the Map object to a regular object

```
const myObj=Object.fromEntries(myMap)
```

5. We have decided to add another entry to the Map object this way:

```
myMap.newEnrey={"address": {"street": "Kulas Light","suite": "Apt.556"}
```

Explain what and **why** will the next lines print in the console:

```
1 > myMap.get(newEntry);
2 > myMap.newEntry;
```

1- will result in a ReferenceError:
As Map is an object after all, we could set "newEntry" as a property to it using the generic Object interface. As such, it does not interact with the Map data structure and not available through its methods.
