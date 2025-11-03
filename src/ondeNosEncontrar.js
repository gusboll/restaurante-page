export function ONEPage (){
    console.log("Onde nos encontrar carregado!");
    const container = document.getElementById("content");
    container.innerHTML = ``;
    container.innerHTML = `
    <div class="top">
    <div class="topText"> Onde nos encontrar</div>
    <div class="topImage"> FotoDaFrenteDoRestaurante </div>
    </div>

    <div class="mid">

    <div class="midText">Rua 123, bairro 456 - Mogi das Cruzes/SP - Cep 12345-678</div>

    </div>
    `;
}