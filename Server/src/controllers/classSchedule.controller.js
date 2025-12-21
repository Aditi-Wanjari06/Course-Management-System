import { ClassSchedule } from "../models/classSchedule.model.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const createClassSchedule = asyncHandler(async (req, res) => {
  const { subject, teacher, time, day } = req.body;

  if (!subject || !teacher || !time || !day) {
    throw new ApiError(400, "All fields are required");
  }

  const schedule = await ClassSchedule.create({
    subject,
    teacher,
    time,
  });

  
    return res
      .status(201)
      .json(new ApiResponse(201, schedule, "Schedule Created!!"));
});

const getSchedule = asyncHandler(async(req,res)=>{
    const schedules = await ClassSchedule.find().sort({time:1})

    if(!schedules){
        throw new ApiError(409,"Schedule not found!!")
    }

     return res
    .status(200)
    .json(new ApiResponse(200, schedules, "Schedule fetched"));
})

export {createClassSchedule,getSchedule}
