const express = require("express");
const router = express.Router();
const {
  getAllPomo,
  getTodayPomo,
  setPomo,
} = require("../controllers/pomoController");

const { protect } = require("../middleware/authMiddleware");

router.route("/today").get(protect, getTodayPomo).post(protect, setPomo);
router.route("/all").get(protect, getAllPomo);

module.exports = router;
