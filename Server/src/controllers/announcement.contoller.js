import { Announcement } from "../models/announcement.model.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const createAnnouncement = asyncHandler(async (req, res) => {
  const { message, eventDate } = req.body;

  if ([message, eventDate].some((field) => field.toString().trim() === "")) {
    throw new ApiError(400, "All fields are required");
  }

  const announcement = await Announcement.create({
    message,
    eventDate,
  });

  return res
      .status(201)
      .json(new ApiResponse(201, announcement, "Announcement Created!!"));
});

const getAnnouncement  =asyncHandler(async(req,res)=>{
const allAnnouncement = await Announcement.find().sort({createdAt:-1})

 if(!allAnnouncement){
        throw new ApiError(409,"Not found!!")
    }

     return res
    .status(200)
    .json(new ApiResponse(200, allAnnouncement, "Announcement fetched"));

})

export { createAnnouncement ,getAnnouncement};
