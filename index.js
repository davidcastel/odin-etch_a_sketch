const CREATE_TABLE = (tsize = 16) => {
    const parent = document.querySelector('#grid-template');

    for (let row = 0; row < tsize; row++) {
        let tr = document.createElement('tr');
        for (let col = 0; col < tsize; col++) {
            let td = document.createElement('td');
            tr.appendChild(td);
        }
        parent.appendChild(tr);
    }
}

const HOVER_TABLE = () => {
    const BLOCKS = document.querySelectorAll('td');

    BLOCKS.forEach(block => {
        block.addEventListener('mouseover', () => {
            block.classList.add('active');
        })
    })
}

const GET_USER_GRID_SIZE = () => {
    const FORM = document.getElementById('gridSizeForm');
    const MAX = 100;
    FORM.addEventListener('submit', (e) => {
        e.preventDefault();
        const SIZE = FORM.elements['size'].value;
        if (SIZE > MAX) return -1;
        return SIZE;
    })
}

CREATE_TABLE();
HOVER_TABLE();
