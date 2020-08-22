// main server file

import express, { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app: Application = express();
const PORT = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
