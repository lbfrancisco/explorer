const knex = require('../database/knex');

class TagsController {
  async index(request, response) {
    const tags = await knex('movie_tags').select('*');
    return response.json(tags);
  }

  async show(request, response) {
    const { id } = request.params;

    const tags = await knex('movie_tags').where({ id });
    return response.json(tags);
  }
}

module.exports = TagsController;
