
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

console.log('left before:', backpack.strapLength.left);
backpack.newStrapLength(10, 23);
console.log('left after:', backpack.strapLength.left);
