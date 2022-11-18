/**
 * Create a class for the backpack object type
 */

import Backpack from "./backpack.js";
import Book from "./book.js"

const everydayPack = new Backpack (
    "Everyday Backpack", 
    30,
    "grey",
    15,
    26,
    26,
    false
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);

// title, author, pagenumber, readstatus

const fanush = new Book (
    "Fanush",
    "mouri morium",
    353,
    "Finished",
);

console.log(fanush);


const hridmajar = new Book (
    "Tomay hrid majhare rakhbo",
    "mouri moruom",
    210,
    "Finished"
);
console.log(hridmajar);

const amazon = new Book (
    'amazonia',
    'jani na',
    430,
    'still reading',
);
console.log(amazon);