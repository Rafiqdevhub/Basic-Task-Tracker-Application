const express = require("express");
const taskController = require("../controller/taskController");

const router = express.Router();

router.get("/getTasks", taskController.getAllTasks);
router.post("/createTask", taskController.createTask);
router.get("/getTask/:id", taskController.getTaskById);
router.put("/updateTask/:id", taskController.updateTask);
router.delete("/delete/:id", taskController.deleteTask);

module.exports = router;
