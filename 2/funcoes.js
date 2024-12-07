function adicionarItem() {
  const newItemInput = document.getElementById("novoItem");
  const itemList = document.getElementById("itemLista"); // Corrected ID

  if (newItemInput && itemList) { // Check if elements exist
    const newItemText = newItemInput.value;

    if (newItemText !== "") {
      const newListItem = document.createElement("lista"); // Use 'li' for list items
      newListItem.textContent = newItemText;
      itemList.appendChild(newListItem);
      newItemInput.value = "";
    }
  }
}