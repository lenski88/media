// @desc get goals
// @route  GET /api/goals
// @access Private
const getGoals = (req, res) => res.status(200).json({ message: "get goal" });

// @desc set goals
// @route  POST /api/goals
// @access Private
const postGoals = (req, res) => res.status(200).json({ message: "post goal" });

// @desc update goal
// @route  PUT /api/goals/:id
// @access Private
const putGoal = (req, res) =>
  res.status(200).json({ message: `put goal id ${req.params.id}` });

// @desc delete goal
// @route  DELETE /api/goals/:id
// @access Private
const deleteGoal = (req, res) =>
  res.status(200).json({ message: `delete goal id ${req.params.id}` });
module.exports = {
  getGoals,
  postGoals,
  putGoal,
  deleteGoal,
};
