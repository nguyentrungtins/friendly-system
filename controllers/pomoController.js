const asyncHandler = require("express-async-handler");

const Pomo = require("../models/pomoModel");
const User = require("../models/userModel");

// @desc    Get All pomos
// @route   GET /api/pomos
// @access  Private
const getAllPomo = asyncHandler(async (req, res) => {
  const pomos = await Pomo.find({ user: req.user.id });

  res.status(200).json(pomos);
});

// @desc    Set pomo
// @route   POST /api/pomos
// @access  Private
const setPomo = asyncHandler(async (req, res) => {
  if (!req.body.type) {
    res.status(400);
    throw new Error("Please add a type field");
  }
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  const pomo = await Pomo.create({
    user: req.user.id,
    type: req.body.type,
    date: today,
  });

  res.status(200).json(pomo);
});

// function isToday(dateParameter) {
//   var today = new Date();
//   return (
//     dateParameter.getDate() === today.getDate() &&
//     dateParameter.getMonth() === today.getMonth() &&
//     dateParameter.getFullYear() === today.getFullYear()
//   );
// }
// @desc    Set pomo
// @route   POST /api/pomos
// @access  Private
const getTodayPomo = asyncHandler(async (req, res) => {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  // console.log("Is today ? ", isToday(new Date())); // true
  const pomo = await Pomo.find({ user: req.user.id, date: { $gte: today } });
  res.status(200).json(pomo);
});

module.exports = {
  getAllPomo,
  setPomo,
  getTodayPomo,
};
