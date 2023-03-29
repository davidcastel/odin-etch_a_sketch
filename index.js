const CREATE_TABLE = () => {
    const parent = document.querySelector('#grid-template');

    const tsize = 16;
    
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

CREATE_TABLE();
HOVER_TABLE();