type MapStringCallback = (item: string) => string;

function mapString(array: string[], callbackfn: MapStringCallback): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    newArray.push(callbackfn(item));
  }

  return newArray;
}

const abc = ['a', 'b', 'c'];
const abcUpperCase = mapString(abc, (item) => item.toUpperCase());

console.log(abcUpperCase);
console.log(abc);
