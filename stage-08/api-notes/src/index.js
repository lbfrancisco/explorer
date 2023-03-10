require("express-async-errors");

const migrations = require("./database/migrations");

const AppError = require("./utils/AppError");
const express = require("express");
const routes = require("./routes");

migrations();

const app = express();
app.use(express.json());
app.use(routes);
app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({ 
      status: "error",
      message: error.message 
    });
  }

  console.log(error);

  return response.status(500).json({
    status: "error",
    message: "Internal Server Error"
  })
});

const _PORT = 3000;
app.listen(_PORT, () => console.log("Server is running on port http://localhost:" + _PORT));