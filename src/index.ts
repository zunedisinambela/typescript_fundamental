let nama: string = "Zunedi Sinambela";
let umur: number = 26;
let isMale: boolean = true;

/**
 * todo: variabel pacarSaya bisa di isi number dan juga string
 */
let pacarSaya: number | string | boolean

pacarSaya = true

/**
 * array biasa
 * todo: variabel pacarKamu semua di dalam array hanya boleh tipe data string
 */
let pacarKamu: string[]
pacarKamu = ["Angela", "Nana"]

// tuple array
let address: [number, string]
address = [2, "Jl. Majapahit"]

console.log({ nama });
console.log({ umur });
console.log({ isMale });
console.log({ pacarSaya });
console.log({ pacarKamu });
console.log({ address });

/**
 * todo: catatan untuk running typescript
 *  cara running program dengan perintah
 * tsc && node bundle/index.js
 */
