import { GithubUser } from "./GithubUser.js";

export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root);
    this.load();
  }

  load() {
    this.users = JSON.parse(localStorage.getItem("@gitfav:")) || [];
  }

  save() {
    localStorage.setItem("@gitfav:", JSON.stringify(this.users));
  }

  async add(entry) {
    try {
      const userExists = this.users.find(user => user.login === entry);

      if (userExists) {
        throw new Error("Este usuário já está na sua lista de favoritos.");
      }

      const user = await GithubUser.search(entry);

      if (user.login === undefined) {
        throw new Error(
          "Usuário não encontrado, por favor, verifique o username."
        );
      }

      this.users = [user, ...this.users];
      this.update();
      this.save();
    } catch (error) {
     alert(error.message);
    }
  }

  delete(entry) {
    const filteredUsers = this.users.filter(user => user.login !== entry);
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
    const favoriteButton = this.root.querySelector(".search button");
    favoriteButton.onclick = () => {
      this.setInputValue();
    }

    document.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        this.setInputValue();
      }
    });
  }

  setInputValue() {
    const input = this.root.querySelector(".search input");

    this.add(input.value);
    
    input.value = "";
  }

  createUserEmptyList() {
    const isUserListEmpty = this.users.length === 0;

    if (isUserListEmpty) {
      const row = document.createElement("tr");
      const content = `
        <td colspan="4">
          <div>
            <img src="./assets/sad-star.svg" alt="" />
            <h2>Nenhum favorito ainda</h2>
          </div>
        </td>
      `;

      row.innerHTML = content;
      row.classList.add("no-content");

      this.tbody.appendChild(row);
    }
  }

  update() {
    this.clearTableRows();
    this.createUserEmptyList();

    this.users.forEach((user) => {
      const row = this.createRow(user);

      row.querySelector('.remove').onclick = () => {
        const isOk = confirm("Deseja realmente deletar este usuário dos favoritos?");

        isOk ? this.delete(user.login) : false;
      };

      this.tbody.appendChild(row);
    });
  }

  createRow({ login, name, followers, public_repos }) {
    console.log(login)
    const row = document.createElement("tr");
    const content = `
      <td class="user">
        <img
          src="https://github.com/${login}.png"
          alt="Imagem de ${name}"
        />
        <a href="https://github.com/${login}">
          <p>${name}</p>
          <span>/${login}</span>
        </a>
      </td>
      <td class="repositories">${public_repos}</td>
      <td class="followers">${followers}</td>
      <td>
        <button class="remove">Remover</button>
      </td>
    `;

    row.innerHTML = content;
    return row;
  }

  clearTableRows() {
    const rows = this.tbody.querySelectorAll("tr");
    rows.forEach((row) => row.remove());
  }
}
