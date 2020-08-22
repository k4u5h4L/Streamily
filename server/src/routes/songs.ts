import express, { Request, Response, Router } from "express";

import songs from "../data/songData";

const router: Router = express.Router();

router.get("/:upperLimit", (req: Request, res: Response) => {
    const upperLimit = <number>parseInt(req.params.upperLimit);
    console.log(`upperLimit: ${upperLimit}, type is ${typeof upperLimit}`);
    console.log(songs.slice(upperLimit - 5, upperLimit));

    res.send(songs.slice(upperLimit - 5, upperLimit));
});

router.post("/", (req: Request, res: Response) => {
    res.redirect("/");
});

export default router;
