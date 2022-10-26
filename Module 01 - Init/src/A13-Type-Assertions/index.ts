// Como um typecast ou coercion, o type assertion é uma forma de forçar o compilador a aceitar um tipo diferente do que ele normalmente aceitaria.
/* Recomendado */
const body = document.querySelector('body');
if (body) body.style.background = 'red';

// Type assertion
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

// HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa';
input.focus();

/* Não é recomendado */
// Non-null assertion (!)
const body2 = document.querySelector('body')!;
body2.style.background = 'red';

// Type assertion
const body4 = document.querySelector('body') as unknown as number;
