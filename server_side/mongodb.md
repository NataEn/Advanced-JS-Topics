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
