const AppError = require('../utils/AppError');
const sqliteConnection = require('../database/sqlite');
const { hash, compare } = require('bcryptjs');

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body;
    const requiredFieldsEmpty = !name || !email || !password;

    const database = await sqliteConnection();

    if (requiredFieldsEmpty) {
      throw new AppError('name, email e password são campos obrigatórios.');
    }

    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);

    if (!isValidEmail) {
      throw new AppError('Este não é um e-mail válido.');
    }

    const checkIfEmailExists = await database.get(
      'SELECT * FROM users WHERE email = (?)', [email]
    );

    if (checkIfEmailExists) {
      throw new AppError('Este e-mail já está em uso.');
    }

    const hashedPassword = await hash(password, 8);

    await database.run(
      `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`,
      [name, email, hashedPassword]
    );

    return response.status(201).json();
  }

  async update(request, response) {
    const { name, email, password, old_password: oldPassword } = request.body;
    const { id } = request.params;

    const database = await sqliteConnection();
    const user = await database.get('SELECT * FROM users WHERE id = (?)', [id]);

    if (!user) {
      throw new AppError('Este usuário não está cadastrado.');
    }

    const checkIfEmailExists = await database.get(
      'SELECT * FROM users WHERE email = (?)', [email]
    );

    if (checkIfEmailExists && checkIfEmailExists.id !== user.id) {
      throw new AppError('Este e-mail já está em uso.');
    }

    user.name = name ?? user.name;
    user.email = email ?? user.email;

    if (password && !oldPassword) {
      throw new AppError('Você precisa informar a senha antiga para definir a nova.');
    }

    if (password && oldPassword) {
      const checkIfPasswordMatch = await compare(oldPassword, user.password);

      if (!checkIfPasswordMatch) {
        throw new AppError('A senha antiga não corresponde a senha informada.');
      }

      user.password = await hash(password, 8);
    }

    await database.run(`
      UPDATE users SET
      name = ?,
      email = ?,
      password = ?,
      updated_at = DATETIME('now')
      WHERE id = ?`,
      [user.name, user.email, user.password, id]
    );

    response.json();
  }
}

module.exports = UsersController;
