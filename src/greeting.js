export function createPage (){
    console.log("Funcao carregada!");
    const container = document.getElementById("content");
    container.innerHTML = `
    <div class="top">
    <div class="topText"> seu restaurante gaucho tradicional!</div>
    <div class="topImage"> - </div>
    </div>

    <div class="mid">

    <div class="midText">As receitas mais famosas do estado mais bairrista do pais!</div>

    <div class="midContainer">
        <div class="midImage1">1</div>
        <div class="midImage2">2</div>
        <div class="midImage3">3</div>
        <div class="midImage4">4</div>
    </div>

    </div>
    <div class="bot">
        Contato e endereco
    </div>
    `;
}






