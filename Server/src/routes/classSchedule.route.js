import { Router } from "express";

import { createClassSchedule,getSchedule } from "../controllers/classSchedule.controller.js";


const scheduleRouter = Router();

scheduleRouter.post("/createSchedule",createClassSchedule);
scheduleRouter.get("/getSchedule", getSchedule);


export { scheduleRouter };
