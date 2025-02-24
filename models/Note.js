const mongoose = require("../db/conn");
const { Schema } = mongoose;

const Note = mongoose.model(
  "Note",
  new Schema(
    {
      tarefa: {
        type: String,
        required: true,
      },
      categoria: {
        type: String,
        required: true,
      },
      concluido: {
        type: Boolean,
        required: true,
      },
    },
    { timestamps: true }
  )
);

module.exports = Note;
