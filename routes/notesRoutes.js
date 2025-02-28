const router = require("express").Router();
const notesController = require("../controllers/notesController");

router.get("/", notesController.gelAllNotes);
router.post("/", notesController.createNote);
router.delete("/:id", notesController.deleteNote);
router.put("/:id", notesController.updateNoteById);

module.exports = router;
