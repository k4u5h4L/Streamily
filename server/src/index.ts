// main server file

import express, { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";

import logger from "./middleware/logger";

import root from "./routes/root";
import songs from "./routes/songs";

const app: Application = express();
const PORT = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(logger);

app.use("/", root);

app.use("/songs", songs);

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
