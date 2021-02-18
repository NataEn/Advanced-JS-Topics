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
