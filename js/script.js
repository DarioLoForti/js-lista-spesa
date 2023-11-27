const lista = ["pasta", "guanciale", "olio", "sale", "pomodoro pelato", "pecorino" ];

const lista_spesa = document.getElementById("lista-spesa");

let i =0;

while(i<lista.length){
    const li = document.createElement("li");
    li.innerText = lista[i];
    i++;
    lista_spesa.appendChild(li);

}