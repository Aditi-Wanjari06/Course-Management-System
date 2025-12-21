import { Router } from "express";

import { createClassSchedule,getSchedule } from "../controllers/classSchedule.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const scheduleRouter = Router();

scheduleRouter.post("/createSchedule",verifyJWT ,createClassSchedule);
scheduleRouter.get("/getSchedule",verifyJWT, getSchedule);


export { scheduleRouter };
