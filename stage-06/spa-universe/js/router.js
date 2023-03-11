export class Router {
  routes = {};

  add(routeName, url) {
    this.routes[routeName] = url;
  }

  route(event) {
    event = event || window.event;
    event.preventDefault();

    window.history.pushState({}, "", event.target.href);

    this.handle();
  }

  handle() {
    const { pathname } = window.location;
    const route = this.routes['/' + String(pathname.split("/").slice(-1))] || this.routes[404];
    const selected = String(route.split("/")[2]).toLowerCase();
    let oldSelected = selected;

    fetch(route)
    .then(data => data.text())
    .then(html => {
      const app = document.querySelector("#app");
      app.innerHTML = html;
      
      const body = document.querySelector(`body`);
      const newSelected = document.querySelector(`.${selected}`);
      oldSelected = body.classList[0];

      if (selected === oldSelected) return;

      for (const sel of document.querySelectorAll('.selected')) {
        sel.classList.remove('selected');
      }
      
      newSelected.classList.add('selected');

      body.classList.add(selected);
      body.classList.remove(oldSelected);
    });
  }
}