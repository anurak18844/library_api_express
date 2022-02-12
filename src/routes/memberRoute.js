const express = require("express");
const router = express.Router();
const memberController = require("../controllers/memberController");
const auth = require("../middleware/auth");

router.get("/", memberController.getMembers);
router.get("/:id", memberController.getMemberById);
router.post("/register", memberController.register);
// router.post("/login", memberController.login);
router.delete("/:id", memberController.deleteMember);
router.put("/:id", memberController.editWholeMember);
module.exports = router;