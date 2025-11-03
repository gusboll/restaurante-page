export function oGauchoPage (){
    console.log("O Gaucho carregado!");
    const container = document.getElementById("content");
    container.innerHTML = ``;
    container.innerHTML = `
    <div class="top">
    <div class="topText"> O gaucho</div>
    <div class="topImage"> FotoDumVeioGaucho </div>
    </div>

    <div class="mid">

    <div class="midText">A historia do gaucho contada tintin por tintin</div>

    </div>
    `;
}