import { Router } from "express";

import { createAnnouncement,getAnnouncement } from "../controllers/announcement.contoller.js";

const announcementRouter = Router();

announcementRouter.post("/createAnnouncement",createAnnouncement);
announcementRouter.get("/getAnnouncement",getAnnouncement);


export { announcementRouter };
