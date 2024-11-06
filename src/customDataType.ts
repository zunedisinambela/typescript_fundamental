type typeFriend = {
  name: string;
  isJob?: true; // todo: artinya data ini optional untuk di isi
  age: number;
};
let myFriends: typeFriend;

myFriends = {
  name: "Zunedi",
  age: 26,
};
console.log({ myFriends });

/**
 * todo: catatan untuk running typescript
 *  cara running program dengan perintah
 * tsc && node bundle/customDataType.js
 */
