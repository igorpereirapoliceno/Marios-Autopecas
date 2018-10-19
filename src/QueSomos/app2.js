// EVIAR MSG WHATSAPP
var meuNumero = "5521984623153";

function enviarWhatsapp() {
    window.location = "https://api.whatsapp.com/send?phone=" + meuNumero + "&text=marca%20" + $("#marcas option:selected").text() + "%0AModelo%20" + $("#carros option:selected").text() + "%0AAno%20" + $("#anos option:selected").text();
}
//FIM ENVIR WHATSAPP

//API MARCAS DE CARROS
$.get("http://fipeapi.appspot.com/api/1/carros/marcas.json", function (marcas, status) {
    // console.log(marcas[0]);
    var tamanho = marcas.length;

    for (var i = 0; i < tamanho; i++) {
        document.getElementById("marca").innerHTML += "<option value='" + marcas[i].id + "'>" + marcas[i].name + "</option>";
    }
});
$("#marca").change(function () {
    var htmlModelo = "<option value=''>Selecione o modelo</option>";
    $.get("http://fipeapi.appspot.com/api/1/carros/veiculos/" + $("#marca").val() + ".json", function (modelos, status) {
        var tamanho = modelos.length;
        for (var i = 0; i < tamanho; i++) {
            htmlModelo += "<option value='" + modelos[i].id + "'>" + modelos[i].name + "</option>";
        }
        document.getElementById("modelo").innerHTML = htmlModelo;
    });
});
$("#modelo").change(function () {
    var htmlAno = "<option value=''>Selecione o ano</option>";
    $.get("http://fipeapi.appspot.com/api/1/carros/veiculo/" + $("#marca").val() + "/" + $("#modelo").val() + ".json", function (anos, status) {
        var tamanho = anos.length;
        for (var i = 0; i < tamanho; i++) {
            htmlAno += "<option value='" + anos[i].id + "'>" + anos[i].name + "</option>";
        }
        document.getElementById("ano").innerHTML = htmlAno;
    });
});
//API MARCAS DE CARROS

// Fim Google Maps

// $('.bloco-produtos').on('click',function(){
//     var display = $(this).children('p');
//     if(display.css('display') == 'none') {
//         display.css('display', 'block');
//         // display.animate({display: 'block'}, 500);
//     } else {
//         display.css('display', 'none');
//         // display.animate({display: 'none'}, 500);
//     }


// POpover-------------
$(function () {
    $('[data-toggle="popover"]').popover()
})


// ALTERAR TEXTO QUEM SOMOS

var textt = document.querySelector('#texto-HMarios');
var btnHistoria = document.querySelector('.btnHistoria');
var btnVisao = document.querySelector('.btnVisao');
var btnValores = document.querySelector('.btnValores');
var btnMissao = document.querySelector('.btnMissao');
var texto = textt.textContent;

btnVisao.addEventListener('click', function () {
    document.getElementById('texto-HMarios').innerHTML = 'Tornar-se referência na reposição automotiva.';
    textt.classList.add('marios')

});

btnMissao.addEventListener('click', function () {
    document.getElementById('texto-HMarios').innerHTML = 'Solucionar o problema dos nossos clientes, proporcionando-lhes uma esperiência agradável de compra. Nosso lema é " Aqui além de clientes fazemos amigos".';

});
btnValores.addEventListener('click', function () {
    document.getElementById('texto-HMarios').innerHTML = 'Atendimento: Oferecer o melhor atendimento possível aos nossos clientes, tendo como foco a busca de solução de seu problema. Transparência: Lidar com todos de forma clara e objetiva. Comprometimento: Cumprir com tudo que é combinado e com seus deveres perante os diversos públicos (clientes, colaboradores, fornecedores e instituições públicas).';
});

btnHistoria.addEventListener('click', function () {
    document.getElementById('texto-HMarios').innerHTML = 'A Mário`s AutoPeças, surgiu em findos de 2006, após uma pesquisa de mercado mostrar que existia uma lacuna no setor de reposição automotiva na zona oeste do Rio de Janeiro. Os clientes desta região eram carentes de uma loja que lhes oferecesse bom atendimento, produtos de qualidade e preço justo. Através de parcerias com os maiores e melhores distribuidores de auto peças do Rio de Janeiro. A Mário`s, através do sistema "Just in Time", mantém um excelente estoque, regular, para as mais diversas montadoras.';
});