//      accessing object properties using dot (.) notation


const backpack = {
    name: 'everyday backpack',
    volume: 30,
    color: 'grey',
    pocketNum: 15,
    strapLength: {
        left: 26,
        right: 26,
    },
    lidOpen: false,
    toggleLid: function(lidStatus) {
        this.lidOpen = lidStatus;
    },
    newStrapLength: function(lengthLeft, lengthRight) {
        this.strapLength.left = lengthLeft;
        this.strapLength.right = lengthRight;
    },
};

console.log("The backpack object :", backpack);
console.log("The pocketNum value:", backpack.pocketNum);
console.log("Strap length l:", backpack.strapLength.left);
