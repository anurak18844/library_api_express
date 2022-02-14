const express = require("express");
const router = express.Router();
const memberController = require("../controllers/memberController");
const auth = require("../middleware/auth");

router.get("/", memberController.getMembers);
router.get("/:id", memberController.getMemberById);
router.get("/id/:id", memberController.getMemberByMemberId);
router.post("/register", auth, memberController.register);
// router.post("/login", memberController.login);
router.delete("/:id", auth,memberController.deleteMember);
router.put("/:id", auth,memberController.editWholeMember);

module.exports = router;