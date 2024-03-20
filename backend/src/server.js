import app from "./app.js";
import env from "./util/validateEnv.js";
import mongoose from "mongoose";

// Connect to MongoDB and Start Server
const port = env.PORT;

mongoose
  .connect(env.MONGO_CONNECTION_STRING)
  .then((result) => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server listening on localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
