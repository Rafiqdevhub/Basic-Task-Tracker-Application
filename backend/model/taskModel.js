const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["completed", "not completed"],
      default: "not completed",
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
