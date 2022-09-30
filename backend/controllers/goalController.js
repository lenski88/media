const asyncHandler = require("express-async-handler");

// @desc get goals
// @route  GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) =>
  res.status(200).json({ message: "get goal" })
);

// @desc set goals
// @route  POST /api/goals
// @access Private
const postGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("text has not been sended");
  }
  res.status(200).json({ message: "post goal" });
});

// @desc update goal
// @route  PUT /api/goals/:id
// @access Private
const putGoal = asyncHandler(async (req, res) =>
  res.status(200).json({ message: `put goal id ${req.params.id}` })
);

// @desc delete goal
// @route  DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) =>
  res.status(200).json({ message: `delete goal id ${req.params.id}` })
);

module.exports = {
  getGoals,
  postGoals,
  putGoal,
  deleteGoal,
};
