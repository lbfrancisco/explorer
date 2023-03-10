let shoppingList = [];

for(let i = 0; i < 10; i++) {
  let itemAmount = shoppingList.length + 1;
  let item = prompt(`Adicione o item ${itemAmount} a lista de compras:`);
  shoppingList.push(item);
}

alert(`Sua lista de compras possui: ${shoppingList.join(', ')}`);