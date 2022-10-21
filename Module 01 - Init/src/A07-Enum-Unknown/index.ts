enum Cores {
  VERMELHO = 11, // 0
  AZUL = 12, // 1
  PRETO = 13,
  ROXO = 'roxo',
}
/* console.log(Cores.VERMELHO);
console.log(Cores[11]);
console.log(Cores.ROXO); */

/* Unknown é anterior ao tipo any */
let x: unknown;

x = 100;
x = 'Luiz';
x = '10';
x = 900;
const y = 800;

if (typeof x === 'number') console.log(x + y);
