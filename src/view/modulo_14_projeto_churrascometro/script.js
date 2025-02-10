const calc_btn = document.getElementById('calc_btn');

const carne = document.getElementById('carne');
const cerveja = document.getElementById('cerveja');
const bebida = document.getElementById('refri');

function calcular() {
  let adultos = document.getElementById('adultos').value;
  let criancas = document.getElementById('criancas').value;
  let duracao = document.getElementById('duracao').value;
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

  carne.innerHTML = `${qtd_carne / 1000} Kg de Carne`;
  cerveja.innerHTML = `${Math.ceil(qtd_cerveja / 355)} Latas de Cerveja`;
  bebida.innerHTML = `${Math.ceil(qtd_bebida / 2000)} Garrafas de Bebida`;
}

calc_btn.addEventListener('click', calcular);