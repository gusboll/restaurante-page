export function sobrePage (){
    console.log("Sobre carregado!");
    const container = document.getElementById("content");
    container.innerHTML = ``;
    container.innerHTML = `
    <div class="top">
    <div class="topText"> Sobre</div>
    <div class="topImage"> FotoDoRestaurante </div>
    </div>

    <div class="mid">

    <div class="midText">O restaurante foi aberto em 1900 e bolinha e pipipi</div>

    </div>
    `;
}