import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js"
import farmerRoutes from "./routes/farmerRoutes.js"
import cropRoutes from "./routes/cropRoutes.js"

// Initialize express
const app = express();



// config .env
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


// sets port 5001 to default or otherwise specified in the environment variables and initialize
const PORT = process.env.PORT || 5000;

//declare user route path
app.use("/api/v1/user", userRoutes);

//declare farmer route path
app.use("/api/v1/farmer/", farmerRoutes );

//declare crop route path
app.use("/api/v1/crop/", cropRoutes );

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
     console.log(`Server Running on Port: http://192.168.8.100:${PORT}`)
      //console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));