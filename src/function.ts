// todo: function
function create(): number {
  return 2;
}
console.log(create())

// todo: arrow function
const create2 = (): string => "Hello World!";
console.log(create2())

// todo: menggunakan void
function add(x: number, y:number): void{
  const z: number = x + y
  console.log("Hasilnya adalah: ", z)
}
add(10, 20)

// todo: tanpa void
function add2(a: number, b: number): string {
  return `${a} ditambahkan ${b} hasilnya: ${a + b}`
}

const result = add2(20, 30)
console.log(result)

/**
 * todo: catatan untuk running typescript
 *  cara running program dengan perintah
 * tsc && node bundle/function.js
 */