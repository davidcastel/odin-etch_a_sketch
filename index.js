const parent = document.querySelector('#grid-template');

const size = 16;

for (let row = 0; row < size; row++) {
    let tr = document.createElement('tr');
    for (let col = 0; col < size; col++) {
        let td = document.createElement('td');
        tr.appendChild(td);
    }
    parent.appendChild(tr);
}