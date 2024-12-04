const input = document.querySelector('input');
const checkboxes = document.querySelectorAll('.checkbox');
const deleteButtons = document.querySelectorAll('.deleteButtons');
const form = document.querySelector('form');
const list = document.querySelector('ul');
const warning = document.querySelector('#warning');
let inputText = '';
let i = 0;

input.oninput = () => {
    inputText = input.value;
};

form.onsubmit = (e) => {
    e.preventDefault();
    let id = `item-${i}`;
    list.innerHTML += `
    <li id="${id}">
        <div class="checkbox" onclick=changeCheckbox("${id}")>
            <img src="./img/checkbox.svg" alt="checkbox">
        </div>
        <p>${inputText}</p>
        <div class="delete-button" onclick=deleteItem("${id}")>
            <img src="./img/bin.svg" alt="bin icon">
        </div>
    </li>`;
    i++;
    input.value = '';
};

function deleteItem(itemId) {
    document.querySelector(`#${itemId}`).remove();
    warning.style.display = 'flex';
}

function changeCheckbox(itemId) {
    document.querySelector(`#${itemId} .checkbox`).classList.toggle('checkboxOnClick');
}

function deleteWarning() {
    warning.style.display = 'none';
}