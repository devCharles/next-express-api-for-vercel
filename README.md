# NEXT + EXPRESS API ROUTES

This repo shows a way to write an API using [express](https://expressjs.com/) and expose it using [next api routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes)

## How it works?

### 📁 The backend folder

Holds the express source code
<br/>

- The `server.js` file exports the express app to be used

### 📁 The pages/api folder

This folder has only one file `[[...all]].js` that is going to be the entrypoint for the whole API
<br/>
This is a [optional catch-all route](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes#optional-catch-all-segments) that has a handler, this handler has 2 responsibilities

- Start the db connection (mongo/mongoose)
- Bypass request and response to the express server once the db connection is established

### Pitfall

Because we are using the next api folder **ALL EXPRESS ROUTES NEED TO BE PREFIXED WITH `/API`**

so all routers need to be mounted prefixing /api like in the server file

```javascript
const express = require("express");

const kodersRouter = require("./routes/koders.router");
const generationsRouter = require("./routes/generations.router");

const app = express();
app.use(express.json());

app.use("/api/koders", kodersRouter);
app.use("/api/generations", generationsRouter);

app.get("/api", (req, res) => {
  res.json({
    ok: true,
    message: "/api",
  });
});

module.exports = app;
```
