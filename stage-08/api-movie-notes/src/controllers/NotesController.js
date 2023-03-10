const AppError = require('../utils/AppError');
const knex = require('../database/knex');

class NotesController {
  async index(request, response) {
    let notes = await knex('movie_notes').select([
      'id',
      'title',
      'description',
      'rating',
      'user_id'
    ]);

    const tagsQuery = await knex('movie_tags').select(['note_id', 'name']);

    for (const note of notes) {
      const filteredTags = tagsQuery.filter(tag => note.id === tag.note_id);
      let tags = [];

      for (const tag of filteredTags) {
        tags.push(tag.name);
      }

      Object.assign(note, { tags: tags });
    }

    return response.json(notes);
  }

  async create(request, response) {
    const { title, description, rating, tags } = request.body;
    const { id } = request.params;

    const checkIfFieldsAreInvalid = !title || !description || !rating || !tags;
    console.log(checkIfFieldsAreInvalid)
    const ratingRange = rating < 1 || rating > 5;

    if (ratingRange) {
      throw new AppError('A classificação precisa estar entre 1 e 5.');
    }

    if (checkIfFieldsAreInvalid) {
      throw new AppError('Os campos title, description, rating e tags, são obrigatórios.');
    }

    const noteId = await knex('movie_notes').insert({
      title,
      description,
      rating,
      user_id: id
    });

    const tagsInsert = tags.map(name => {
      return {
        note_id: noteId,
        user_id: id,
        name
      }
    });

    await knex('movie_tags').insert(tagsInsert);

    return response.json();
  }

  async show(request, response) {
    const { id } = request.params;

    const note = await knex('movie_notes').where({ id });
    const tags = await knex('movie_tags').where({ note_id: id})
    return response.json({
      note,
      tags
    });
  }

  async delete(request, response) {
    const { id } = request.params;

    await knex('movie_notes').where({ id }).delete();

    return response.json();
  }
}

module.exports = NotesController;
