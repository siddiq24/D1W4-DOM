const table = document.getElementById('data-table');

// a. Tambahkan baris Charlie
const tbody = table.querySelector('tbody');
const newRow = document.createElement('tr');
newRow.innerHTML = '<td>Charlie</td><td>92</td>';
tbody.appendChild(newRow);

function getData(id, data) {
    return table.querySelector((data == undefined) ?
     `tbody>tr:nth-of-type(${id})` :
     `tbody>tr:nth-of-type(${id})>td:nth-of-type(${data})`
    )
}

// b. Ubah nilai Bob
const bob = getData(2, 2);
bob.textContent = '89';


// c. Tambahkan class ke Alice
const alice = getData(1);
alice.className = 'top-scorer'


// d. Tambahkan footer dengan rata-rata
const tfoot = document.createElement('tfoot');

const average = (()=>{
    return (parseInt(getData(1,2).textContent)+
    parseInt(getData(2,2).textContent)+
    parseInt(getData(3,2).textContent))/3

})()

tfoot.innerHTML = `<tr><td>Average</td><td>${average}</td></tr>`;
table.appendChild(tfoot);