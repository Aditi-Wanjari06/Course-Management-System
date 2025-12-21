import { Router } from "express";

import { createAnnouncement,getAnnouncement } from "../controllers/announcement.contoller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const announcementRouter = Router();

announcementRouter.post("/createAnnouncement",verifyJWT, createAnnouncement);
announcementRouter.get("/getAnnouncement", verifyJWT,getAnnouncement);


export { announcementRouter };
