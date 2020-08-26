import { Request, Response, NextFunction } from "express";

const logger = (req: Request, res: Response, next: NextFunction): void => {
    console.log(`Endpoint hit: ${req.url}`);
    // console.log(req.url);

    next();
};

export default logger;
