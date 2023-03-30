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

const GENERATE_USER_SIZE_TABLE = () => {
    const btn = document.getElementById('enter');
    
    const size = document.querySelector('#size');
    btn.addEventListener('click', () => {
        const parent = document.querySelector('#grid-template');

        while (parent.hasChildNodes()) {
            parent.removeChild(parent.firstChild);
        }

        CREATE_TABLE(size.value);
        HOVER_TABLE();
    })
}

CREATE_TABLE();
HOVER_TABLE();
GENERATE_USER_SIZE_TABLE();