import express, { Request, Response, Router } from "express";

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
    res.send({ message: "visit endpoint /songs to get song info." });
});

router.post("/", (req: Request, res: Response) => {
    res.redirect("/");
});

export default router;
