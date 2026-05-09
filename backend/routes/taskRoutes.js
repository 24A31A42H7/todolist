const express = require("express");
const router = express.Router();
const controller = require("../controllers/taskController");

router.get("/", controller.getTasks);
router.post("/", controller.addTask);
router.delete("/:id", controller.deleteTask);
router.put("/:id", controller.toggleTask);

module.exports = router;