let inc = document.getElementById("increment");

let dec = document.getElementById("decrement");

let res = document.getElementById("reset");

let c = 0;

function reset()
{
    let op = document.getElementById("output");
    c = 0;
    op.textContent = `COUNT : 0`;
}
function increment()
{
    let op = document.getElementById("output");
    c = c + 1;
    op.textContent = `COUNT : ${c}`;
}
function decrement()
{
    let op = document.getElementById("output");
    c = c - 1;
    op.textContent = `COUNT : ${c}`;
}

inc.onclick = increment;
dec.onclick = decrement;
res.onclick = reset;