const itemInput = document.querySelector('#item-input');
const addItemButton = document.querySelector('#add-item');
const itemList = document.querySelector('#item-list');
const status = document.querySelector('#status');

function addItem() {
    const text = itemInput.value.trim();
    if (!text) {
        status.textContent = 'Type an item before adding it.';
        return;
    }

    const listItem = document.createElement('li');
    listItem.textContent = text;
    itemList.append(listItem);
    itemInput.value = '';
    status.textContent = `${itemList.children.length} item(s) added.`;
}

addItemButton.addEventListener('click', addItem);
itemInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') addItem();
});
