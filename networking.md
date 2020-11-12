## CORS

A policy intended to maintain security while requesting data between different resources.
Lets see an example by creating a simple web server with Express framework:
follow first steps and installation on [https://expressjs.com/en/starter/installing.html]

```
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
```

To get the text sent by this simple server, in the browser's developers tool:

```
fetch("http://localhost:3080/").then(a=>a.text()).then(res=>console.log(res));
```

this returns a promis that resolves to the "Hello world!" text.
Here we are requesting the text resource from the same origin (localhost:3000); No CORS issues here.
But, if we were to request this text from another site, say run the fetch command from [https://www.wikipedia.org/] we would encounter a CORS error, like so:

```
Access to fetch at 'http://localhost:3080/' from origin 'https://www.wikipedia.org' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
VM13:1 GET http://localhost:3080/ net::ERR_FAILED
```

To overcome this, we need to allow the origin, [https://www.wikipedia.org] to access [http://localhost:3080/] by using the CORS nodejs middleware module:

```
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3080;

app.get("/", cors(), (req, res) => {
 res.send("Hello World!");
});

app.listen(port, () => {
 console.log(`Example app listening at http://localhost:${port}`);
});
```

now you access the text on [http://localhost:3080/], there is no CORS error
