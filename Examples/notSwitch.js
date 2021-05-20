const adversario = 'Hulk'

const disfraces = {
  'Iron-man': () => 'Magneto',
  Thor: () => 'Odin',
  Hulk: () => 'Thanos',
  Lobezno: () => 'Magneto'
}

const loki_default = 'loki'

const loki = disfraces[adversario] ? disfraces[adversario]() : loki_default;
//or
const loki1 = disfraces[adversario]() || loki_default;

console.log(loki);
console.log(loki1);
