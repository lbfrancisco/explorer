let menu;
let stock = [];

while (menu !== 3) {
  menu = Number(prompt('Olá usuário! Digite a opção desejada: \n\n 1. Cadastrar um item na lista \n 2. Mostrar itens cadastrados \n 3. Sair do programa'));
  
  switch(menu) {
    case 1:
      let newItem = prompt('Digite o nome do item a ser cadastrado:');
      alert(`${newItem} cadastrado com sucesso!`);
      stock.push(newItem);
      break;
    case 2:
      stock.length !== 0 ? alert(stock.join(', ')) : alert('Não existem itens cadastrados!');
      break;
    case 3:
      alert('Você saiu do programa.');
      break;
    default: 
      alert('Essa opção não existe.');
      break;
  }
}