var apiKey = "a65dbb2240a449bd8e7183620242804";

function atualizaDadosCidade(dadosRetorno){
    let dadosTempoCidade = JSON.parse(this.responseText);
    console.log(dadosTempoCidade);
    let cityCard = document.getElementById(dadosTempoCidade.location.name+"Card");
    let cityName = cityCard.querySelector(".cityName");
    cityName.innerHTML = dadosTempoCidade.location.name;
    let cityTemp = cityCard.querySelector(".temp");
    cityTemp.innerHTML = dadosTempoCidade.current.temp_c + "&deg;";

    let condicao = cityCard.querySelector(".condition");
    condicao.innerHTML = '<span>Clima</span><span>'+dadosTempoCidade.current.condition.text+'</span>';

    let sensTerm = cityCard.querySelector(".sensacao");
    sensTerm.innerHTML = "<span>Sensação Térmica</span><span>"+dadosTempoCidade.current.feelslike_c+"</span>";

}

function populaPagina(){
    let cds = document.getElementsByClassName("cityName");
    for (let i = 0;i < cds.length;i+=1){
        let nomeCidade = cds[i].innerHTML;
        let reqSite = new XMLHttpRequest();
        reqSite.addEventListener('load',atualizaDadosCidade);
        reqSite.open("GET","http://api.weatherapi.com/v1/current.json?key="+apiKey+"&q="+nomeCidade+"&aqi=no&lang=pt");
        reqSite.send();
    }
}