let adultos = document.getElementById('adultos');
let criancas = document.getElementById('criancas');
let duracao = document.getElementById('duracao');

let calc_btn = document.getElementById('calc_btn');

let carne = document.getElementById('carne');
let cerveja = document.getElementById('cerveja');
let bebida = document.getElementById('refri');

function calcular() {
  let qtd_carne = adultos.value + criancas.value * (duracao.value / 2);

  let qtd_cerveja = adultos.value * duracao.value;

  let qtd_bebida = adultos.value * duracao.value + criancas.value * (duracao.value / 2);

  carne.innerHTML = `${qtd_carne / 1000} Kg de Carne`;
  cerveja.innerHTML = `${Math.ceil(qtd_cerveja / 355)} Latas de Cerveja`;
  bebida.innerHTML = `${Math.ceil(qtd_bebida / 2000)} Garrafas de Bebida`;
}

calc_btn.addEventListener('click', calcular);