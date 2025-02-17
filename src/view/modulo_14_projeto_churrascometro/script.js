let imputAdultos = document.getElementById("adultos");
let imputCriancas = document.getElementById("criancas");
let imputDuracao = document.getElementById("duracao");

let calc_btn = document.getElementById("calc_btn");

let resultado = document.getElementById("result");

function calcular() {
  let adultos = imputAdultos.value == "" ? 0 : parseInt(imputAdultos.value);
  let criancas = imputCriancas.value == "" ? 0 : parseInt(imputCriancas.value);
  let duracao = imputDuracao.value == "" ? 0 : parseInt(imputDuracao.value);

  if (duracao < 6) {
    var gm_carne = 400;
    var gm_cerveja = 1200;
    var gm_bebida = 1000;
  } else {
    var gm_carne = 650;
    var gm_cerveja = 2000;
    var gm_bebida = 1500;
  }

  criancas *= 0.5;

  let qtd_carne = (adultos + criancas) * gm_carne;
  let qtd_cerveja = adultos * gm_cerveja;
  let qtd_bebida = (adultos + criancas) * gm_bebida;

  resultado.innerHTML = `<p>${qtd_carne / 1000} Kg de Carne</p>`;
  resultado.innerHTML += `<p>${Math.ceil(
    qtd_cerveja / 355
  )} Latas de Cerveja (355ml)</p>`;
  resultado.innerHTML += `<p>${Math.ceil(
    qtd_bebida / 2000
  )} Garrafas de Bebida (2l)</p>`;
}

calc_btn.addEventListener("click", calcular);
