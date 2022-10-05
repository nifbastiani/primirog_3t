
let tabuada = 2;


function escreva(){
    document.write(tabuada+ " x 1 = "+(tabuada*1)+"<br>");
    document.write(tabuada+ " x 1 = "+(tabuada*2)+"<br>");
    document.write(tabuada+ " x 1 = "+(tabuada*3)+"<br>");
    document.write(tabuada+ " x 1 = "+(tabuada*4)+"<br>");
    document.write(tabuada+ " x 1 = "+(tabuada*5)+"<br>");
    document.write(tabuada+ " x 1 = "+(tabuada*6)+"<br>");
    document.write(tabuada+ " x 1 = "+(tabuada*7)+"<br>");
    document.write(tabuada+ " x 1 = "+(tabuada*8)+"<br>");
    document.write(tabuada+ " x 1 = "+(tabuada*9)+"<br>");
    document.write(tabuada+ " x 1 = "+(tabuada*10)+"<br>");
}

let lista = ["Terra", "Marte", "Saturno", "Jupiter", "Vênus", "Mercúrio"];

function mostralista(){
    document.write("Tamanho da lista " + lista.length + "<br>")
    document.write("Planeta " + lista[4])
    for(let i= 0; i < 5; i ++){
    document.write("Planeta " + lista[i] + "<br>");
    }
}

function repete(){
    for(let i = 1; i <= 10; i++){
        document.write("Valor do i =" + i + "br");
        for(let j = 1; j <=10; j++){
           document.write(i+" x " + j + " = " +(i*j)+"<br>");
        }
    }
}
