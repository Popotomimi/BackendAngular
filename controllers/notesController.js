// Model
import Note from "../models/Note.js";

export async function gelAllNotes(req, res) {
  try {
    const notes = await Note.find();
    return res.status(200).json(notes);
  } catch (error) {
    return res.status(500).send("Erro ao buscar as notas!");
  }
}

export async function createNote(req, res) {
  const { tarefa, categoria, concluido } = req.body;

  if (!tarefa || !categoria || !concluido) {
    return res.status(400).send("Todos os campos são obrigátorios!");
  }

  try {
    const data = req.body;
    const note = await Note.create(data);
    return res.status(201).send(note);
  } catch (error) {
    return res.status(500).send("Erro ao criar a nota!");
  }
}

export async function deleteNote(req, res) {
  const { id } = req.params;

  try {
    await Note.findByIdAndDelete(id);
    return res.status(200).send("Nota deletada com sucesso!");
  } catch (error) {
    return res.status(500).send("Erro ao deletar a nota!");
  }
}
