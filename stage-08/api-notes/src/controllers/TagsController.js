const knex = require("../database/knex");

class TagsController {
  async index(request, response) {
    const { id } = request.params;
    
    const tags = await knex("tags").where({ user_id: id });
    response.json(tags);
  }
}

module.exports = TagsController;