import { GitHubUser } from './GitHubUser.js'

export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root);
    this.load();
  }

  load() {
    this.users = JSON.parse(localStorage.getItem("@github-favorites:")) || [];
  }

  save() {
    localStorage.setItem("@github-favorites:", JSON.stringify(this.users));
  }

  async add(entry) {
    try {
      const userExists = this.users.find(user => user.login === entry);
      if (userExists) throw new Error("Este usuário já está adicionado.")

      const user = await GitHubUser.search(entry);
      if (user.login === undefined) throw new Error("Usuário não encontrado!")

      this.users = [user, ...this.users];
      this.update();
      this.save();

    } catch (error) {
      alert(error.message);
    }
  }

  delete(entry) {
    const filteredUsers = this.users.filter(user => user.login !== entry.login);
    this.users = filteredUsers;
    this.update();
    this.save();
  }
}

export class FavoritesView extends Favorites {
  constructor(root) {
    super(root);

    this.tbody = this.root.querySelector("table tbody");

    this.update();
    this.onAdd();
  }

  onAdd() {
    const addButton = this.root.querySelector(".search button");
    addButton.onclick = () => {
      this.setInputValue();
    };

    document.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        this.setInputValue();
      }
    });
  }

  setInputValue() {
    const input = this.root.querySelector(".search input");
    this.add(input.value);

    input.value = '';
  }

  update() {
    this.removeAllTr();
    this.users.forEach(user => {
      const row = this.createRow(user.login, user.name, user.public_repos, user.followers);

      row.querySelector(".remove").onclick = () => {
        const isOk = confirm("Você tem certeza que deseja remover este usuário?");

        isOk ? this.delete(user) : false;
      };

      this.tbody.append(row);
    });    
  }

  createRow(login, name, publicRepos, followers) {
    const tr = document.createElement('tr');
    const content = `
    <td class="user">
    <img src="https://github.com/${login}.png" alt="Imagem de ${name}" />
    <a href="https://github.com/${login}" target="_blank">
    <p>${name}</p>
    <span>${login}</span>
    </a>
    </td>
    <td class="repositories">${publicRepos}</td>
    <td class="followers">${followers}</td>
    <td>
    <button class="remove">&times;</button>
    </td>
    `;
    tr.innerHTML = content;
    return tr;
  }

  removeAllTr() {
    this.tbody.querySelectorAll('tr')
      .forEach((tr) => {
        tr.remove();
    });
  }
}