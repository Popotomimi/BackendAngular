// Model
import Note from "../models/Note.js";

export async function gelAllNotes(req, res) {
  try {
    const notes = await Note.find();
    return res.status(200).json(notes);
  } catch (error) {
    return res.status(500).json({ message: "Erro ao buscar as notas!" });
  }
}

export async function createNote(req, res) {
  const { tarefa, categoria, concluido } = req.body;

  if (!tarefa || !categoria || !concluido) {
    return res
      .status(400)
      .json({ message: "Todos os campos são obrigátorios!" });
  }

  try {
    const data = req.body;
    const note = await Note.create(data);
    return res.status(201).json(note);
  } catch (error) {
    return res.status(500).json({ message: "Erro ao criar a nota!" });
  }
}

export async function deleteNote(req, res) {
  const { id } = req.params;

  try {
    await Note.findByIdAndDelete(id);
    return res.status(200).json({ message: "Nota deletada com sucesso!" });
  } catch (error) {
    return res.status(500).send({ message: "Erro ao deletar a nota!" });
  }
}

export async function updateNoteById(req, res) {
  const { id } = req.params;
  const { concluido } = req.body;

  if (concluido === undefined) {
    return res
      .status(400)
      .json({ message: "O campo 'concluido' é obrigatório!" });
  }

  try {
    const note = await Note.findByIdAndUpdate(id, { concluido }, { new: true });
    return res.status(200).json(note);
  } catch (error) {
    return res.status(500).json({ message: "Erro ao atualizar a nota!" });
  }
}
