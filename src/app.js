document.addEventListener('DOMContentLoaded', () => {
    displayItems();
});

function addItem() {
    const itemInput = document.getElementById('itemInput');
    const itemText = itemInput.value.trim();
    
    if (itemText === '') {
        alert('Digite um item para adicionar!');
        return;
    }

    const items = JSON.parse(localStorage.getItem('items')) || [];
    items.push({ text: itemText, completed: false });
    localStorage.setItem('items', JSON.stringify(items));

    itemInput.value = '';
    displayItems();
}

function displayItems() {
    const itemList = document.getElementById('itemList');
    itemList.innerHTML = '';

    const items = JSON.parse(localStorage.getItem('items')) || [];
    
    items.forEach((item, index) => {
        const li = document.createElement('li');
        if (item.completed) {
            li.classList.add('completed');
        }
        
        li.innerHTML = `
            <span onclick="toggleComplete(${index})">${item.text}</span>
            <button class="remove-btn" onclick="removeItem(${index})">Remover</button>
        `;
        
        itemList.appendChild(li);
    });
}

function toggleComplete(index) {
    const items = JSON.parse(localStorage.getItem('items')) || [];
    items[index].completed = !items[index].completed;
    localStorage.setItem('items', JSON.stringify(items));
    displayItems();
}

function removeItem(index) {
    const items = JSON.parse(localStorage.getItem('items')) || [];
    items.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(items));
    displayItems();
}
