const board = document.getElementById("board");

for (let i = 0; i < 64; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    let warna;
    if(Math.floor(i/8)%2===1){
        warna = (i%2==1)?"white":"black"
    }else{
        warna = (i%2==1)?"black":"white"
    }
    cell.style.backgroundColor = warna
    board.appendChild(cell);
}