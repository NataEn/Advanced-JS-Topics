# Networking Issues

## CORS

A policy intended to maintain security while requesting data between different resources (different web origins).
Every time a CORS request is done, the browser attaches an `Origin` header with the value of the domain it was sent from.

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

this returns a promise that resolves to the "Hello world!" text.
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

When some code in the browser issues a `GET` request from moo.com to foo.com, the browser in the headers to that HTTP-request will add the origin/ the domain of the origin, the servers of foo.com will respond and will return a response. For CORS to happen, the headers of the response have to include `Access-Control-Allow-Origin` if the value of that header is the same as `moo.com` (or just all with `*`), then the browser lets that response propagate through the moo.com application/ parses it back to Javascript and let it run.
If foo.com returns a header with a different domain, than the browser blocks that response to arrive.

Important point: The response is blocked not the request. This is why we address this differently with every kind of HTTP request (GET, PUT,DELETE..).

Since GET will not change anything in the server side, than the importance is with what returned.
If PUT is done, than, the server will receive the request, analyse it do whatever it needs to do and issue the response will get blocked, foo.com has already made changes. As this is problematic, CORS sends a pre-flight request- http request with the method `options`. Thus when issuing a PUT request, the browser will first send `OPTIONS` request to foo.com, additionally to `Access- Control-Request-Method:PUT`, this is to "allow" moo.com to make changes in foo.com.
Foo.com issues a response:
Access-Control-Allow-Origin:moo.com
Access-Control-Allow-Methods:[PUT]

Two headers are sent by foo.com, with the list of methods that are allowed.
Now, that the origin and the methods are correct, the browser can issue the PUT response: Origin:moo.com, now it will work similarly to the GET request:
moo.com sends a PUT request: Origin:moo.com, then foo.com sends: Access-Control-Allow-Origin:moo.com
and so on.

### Testing tools

A good site to test corse: <http://test-cors.org/>

It tests both client and server and lets you see different responses to different requests.

## JSONP

This is a tool that came **before** CORS policy standard, and was also a pseudo-standard to retrieve data from a different domain.

Limitations: it only works with GET Not PUT, POST, DELETE

But, you can query different browsers with GET request.

If we get a JSONP data from a server, it would wrap it in a function:

```
cbFunction([
  {
    "id":1,
    "first_name":"Bob",
    "last_name":"Black",
  }
])

```

So this is JSON looking like javascript.
Wrapping JSON in a function makes it available to be accessed from another domain, since a regular `<script></script>` tag, in the HTML, does not have any limitations it can pull another script from. So it doesn't need to adhere to the `same origin policy` that and AJAX request needs. You could include a `script` from any domain and the browser will allow it.

### So how do we use it?

The code above actually shows a call of a function `someFunction` with a parameter given to it- the param that holds the data that we require.

Now, we need to create, in the HTML, a `script` tag that defines what does that function do with the data it holds.

```
<!DOCTYPE html>
<html lan="en">
<head>
  <meta charset="UTF-8">
  <title></title>
  <script>
  function cbFunction(json){
    console.log(json);
  }
</script>
<script src="jsonp.js"></script>
</head>
</html>

```

Under the tag that holds the definition of the expected function, we add another tag to load the JSONP file from the server. As it loads it is being executed immediately.

JQuary, for instance, uses this vary same technique.

In the Network part of the browser, under XHR tab, where you can see the AJAX requests and responses, there will be nothing, but under the JS tab there will be the file, as it is requested as a script, or in the ALL tab.
The trick is loading a JS file and not making an API request
