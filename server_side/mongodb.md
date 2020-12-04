# MongoDB

## Understanding MongoDB

MongoDB can have one or more databases on one database server.
Each database can hold one or more collections.
A collection is like a table in a sequel database (as in SQL, or MySQL).
In one collection there can be one or more documents. These hold the data pieces stored in the database.

The Databases, collections and documents are Implicitly created, for the user when data is stored.

## Runing simple commands in the CMD

1. The default server port is 27017
   you can change that with --port 27018 (or any other you prefer)
2. to run in my comp: go to cmd: run command mongo

```
C:\Users\Natalie>mongo
```

3. a database is not created before we start entering data in it. Only after we add data the database is created.

```
use flight
switched to db flight
```

now that we switched to the flight db we can add a collection named "flightData" and add a document to it (a document is always reffered with {} brakets). These are JSON documents.
for example: a json file includes an array of objects:

```
[
    {
        "name":"Shon",
        "age":34
    },
    {"name":"ron",
    "age":45}
]
```

each of these objects are mongodb documents.

When adding one document to the "flightData" collection we get:

```
db.flightsData.insertOne({"name":"Ron","age":34})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5fc8e89cf541cd9b3dd02561")
}
```

automatically it gets an **id** of type "ObjectId". This is another type of data, supported by mongo, not only strings, boolians and numbers.

Now we can query the flightsData:

```
db.flightsData.find()
{ "_id" : ObjectId("5fc8e89cf541cd9b3dd02561"), "name" : "Ron", "age" : 34 }
```

## JSON vs BSON

Mongodb uses BinaryJSON for storing data. We will only see JSON because MongoDb drivers compile the JSON to BSON and back. Its better than JSON and can store ObjectID that is a datatype that is not supported by JSON.

## Asigning new Ids to documents

We can also assing ids on our own that are npt of the type ObjectId so log as the key is exactly "\_id".

```
 db.flightsData.insertOne({_id:"ronda_id","name":"Ronda", address:54})
{ "acknowledged" : true, "insertedId" : "ronda_id" }
> db.flightsData.find()
{ "_id" : ObjectId("5fc8e89cf541cd9b3dd02561"), "name" : "Ron", "age" : 34 }
{ "_id" : ObjectId("5fc8ebacf541cd9b3dd02562"), "name" : "Ron", "age" : 34, "address" : 54 }
{ "_id" : "ronda_id", "name" : "Ronda", "address" : 54 }
```

## Create Read Update Delete = CRUD, Operations

Updating a new key in a document that has the key pair of "name":"Ron":

```
db.flightsData.updateOne({name:"Ron"},{$set:{marker:"delete"}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
```

Delete one document:

```
db.flightsData.deleteOne({_id:"ronda_id"})
{ "acknowledged" : true, "deletedCount" : 1 }
```

Update all documents in the flightsData collection:

```
db.flightsData.updateMany({},{$set:{marker:"todelete"}})
{ "acknowledged" : true, "matchedCount" : 2, "modifiedCount" : 2 }
```

We can also delete all the documents:

```
db.flightsData.deleteMany({})
{ "acknowledged" : true, "deletedCount" : 2 }
> db.flightsData.find()
>
```

To insert many documents at once we need to insert an array of documents:

```
> db.flightsData.insertMany([{name:123},{name:456}])
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("5fc8f429f541cd9b3dd02563"),
                ObjectId("5fc8f429f541cd9b3dd02564")
        ]
}
>
```

### Complicated search

Lets find documents that their name is grater than 120:

```
db.flightsData.find({name:{$gt:120}})
{ "_id" : ObjectId("5fc8f429f541cd9b3dd02563"), "name" : 123 }
{ "_id" : ObjectId("5fc8f429f541cd9b3dd02564"), "name" : 456 }
```

## Update vs UpdateOne/UpdateMany

UpdateOne/UpdateMany will be accepted commants without the "{$set:{}}" part, but update will work. This is because a simple update changes the whole document with the document inserted:

```
db.flightsData.find();
{ "_id" : ObjectId("5fc8f429f541cd9b3dd02563"), "age" : "rrr" }
{ "_id" : ObjectId("5fc8f429f541cd9b3dd02564"), "name" : 456, "age" : 55 }
> db.flightsData.update({name:456},{age:35})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.flightsData.find();
{ "_id" : ObjectId("5fc8f429f541cd9b3dd02563"), "age" : "rrr" }
{ "_id" : ObjectId("5fc8f429f541cd9b3dd02564"), "age" : 35 }
```

Thus to be sure in what we are doing we should use "replaceOne"...

## Cursor Object

We created a new collection called passengers with allot of documents inside it. When we want to see all the documents entered with the `find()` command we can see that not all of them are printed but a final line is printed with "type "it" for more"

```
 db.passengers.find().pretty()
{
        "_id" : ObjectId("5fc90256f541cd9b3dd02565"),
        "name" : "Max Schwarzmueller",
        "age" : 29
}
{
        "_id" : ObjectId("5fc90256f541cd9b3dd02566"),
        "name" : "Manu Lorenz",
        "age" : 30
}
.....
{
        "_id" : ObjectId("5fc90256f541cd9b3dd02578"),
        "name" : "Albert Twostone",
        "age" : 68
}
Type "it" for more
> it
{
        "_id" : ObjectId("5fc90256f541cd9b3dd02579"),
        "name" : "Gordon Black",
        "age" : 38
}
{
        "_id" : ObjectId("5fc90278f541cd9b3dd0257a"),
        "name" : "Max Schwarzmueller",
        "age" : 29
}....
```

this will continue till all the documents are printed.
This is because the "find()" give us a "cursor" object not the entire collection that can be huge!
A cursor object is an object with allot of metadata behind it that allos us to cycle through the results that was found. This is why we can only use the "pretty()" command on "find()" but not on "findOne()" that only returns one thins and not an amount of them.

## Projection

This is a practice in which you filter the data you query on the mongoDb server so the data you send to your backend server or front end server is smaller and this will not impact your bandwidth.
say we want to get all the documents but only with the "name" field:

```
 db.passengers.find({},{name:1}).pretty()
{
        "_id" : ObjectId("5fc90256f541cd9b3dd02565"),
        "name" : "Max Schwarzmueller"
}
{ "_id" : ObjectId("5fc90256f541cd9b3dd02566"), "name" : "Manu Lorenz" }
{ "_id" : ObjectId("5fc90256f541cd9b3dd02567"), "name" : "Chris Hayton" }
{ "_id" : ObjectId("5fc90256f541cd9b3dd02568"), "name" : "Sandeep Kumar" }
{ "_id" : ObjectId("5fc90256f541cd9b3dd02569"), "name" : "Maria Jones" }
{ "_id" : ObjectId("5fc90256f541cd9b3dd0256a"), "name" : "Alexandra Maier" }
{ "_id" : ObjectId("5fc90256f541cd9b3dd0256b"), "name" : "Dr. Phil Evans" }
{ "_id" : ObjectId("5fc90256f541cd9b3dd0256c"), "name" : "Sandra Brugge" }
{ "_id" : ObjectId("5fc90256f541cd9b3dd0256d"), "name" : "Elisabeth Mayr" }
{ "_id" : ObjectId("5fc90256f541cd9b3dd0256e"), "name" : "Frank Cube" }
{ "_id" : ObjectId("5fc90256f541cd9b3dd0256f"), "name" : "Karandeep Alun" }
{ "_id" : ObjectId("5fc90256f541cd9b3dd02570"), "name" : "Michaela Drayer" }
{ "_id" : ObjectId("5fc90256f541cd9b3dd02571"), "name" : "Bernd Hoftstadt" }
{ "_id" : ObjectId("5fc90256f541cd9b3dd02572"), "name" : "Scott Tolib" }
{ "_id" : ObjectId("5fc90256f541cd9b3dd02573"), "name" : "Freddy Melver" }
{ "_id" : ObjectId("5fc90256f541cd9b3dd02574"), "name" : "Alexis Bohed" }
{ "_id" : ObjectId("5fc90256f541cd9b3dd02575"), "name" : "Melanie Palace" }
{ "_id" : ObjectId("5fc90256f541cd9b3dd02576"), "name" : "Armin Glutch" }
{ "_id" : ObjectId("5fc90256f541cd9b3dd02577"), "name" : "Klaus Arber" }
{ "_id" : ObjectId("5fc90256f541cd9b3dd02578"), "name" : "Albert Twostone" }
Type "it" for more
```

Here the first param in find() was an empty documents, so that we will get all, the second one is for projection, get the name, 1- for all the names that are in the documents.
Since the id is printed by default it is also included, to exclude it:

```
 db.passengers.find({},{name:1,_id:0}).pretty()
{ "name" : "Max Schwarzmueller" }
{ "name" : "Manu Lorenz" }
{ "name" : "Chris Hayton" }
{ "name" : "Sandeep Kumar" }
{ "name" : "Maria Jones" }
{ "name" : "Alexandra Maier" }
{ "name" : "Dr. Phil Evans" }
{ "name" : "Sandra Brugge" }
{ "name" : "Elisabeth Mayr" }
{ "name" : "Frank Cube" }
{ "name" : "Karandeep Alun" }
{ "name" : "Michaela Drayer" }
{ "name" : "Bernd Hoftstadt" }
{ "name" : "Scott Tolib" }
{ "name" : "Freddy Melver" }
{ "name" : "Alexis Bohed" }
{ "name" : "Melanie Palace" }
{ "name" : "Armin Glutch" }
{ "name" : "Klaus Arber" }
{ "name" : "Albert Twostone" }
Type "it" for more
```

## Embeded Documents

These are simply nested documents inside existing documents.

## Working with Nested Arrays and Documents

### Nested Arrays

```
 db.passengers.updateOne({name:"Klaus Arber"},{$set:{hobbies:["riding","coocking","swiming"]}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.passengers.findOne({name:"Klaus Arber"}).hobbies
[ "riding", "coocking", "swiming" ]
```

Mongo is smart enough to search documents according to one element in an array and fetch the whole document:

```
db.passengers.find({hobbies:"coocking"}).pretty()
{
        "_id" : ObjectId("5fc90256f541cd9b3dd02577"),
        "name" : "Klaus Arber",
        "age" : 53,
        "hobbies" : [
                "riding",
                "coocking",
                "swiming"
        ]
}
{
        "_id" : ObjectId("5fc90256f541cd9b3dd02578"),
        "name" : "Albert Twostone",
        "age" : 68,
        "hobbies" : [
                "drawing",
                "coocking"
        ]
}
```

### Nested documets

Adding nested documents:

```
 db.flightsData.updateMany({},{$set:{status:{price:23,available:true,hours:10}}})
{ "acknowledged" : true, "matchedCount" : 2, "modifiedCount" : 0 }
> db.flightsData.find({}).pretty()
{
        "_id" : ObjectId("5fc8f429f541cd9b3dd02563"),
        "age" : "rrr",
        "status" : {
                "price" : 23,
                "available" : true,
                "hours" : 10
        }
}
{
        "_id" : ObjectId("5fc8f429f541cd9b3dd02564"),
        "age" : 35,
        "status" : {
                "price" : 23,
                "available" : true,
                "hours" : 10
        }
}
```

searching according to a nested document's key:

```

```
