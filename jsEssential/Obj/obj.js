/*
            objects are typically constants 
            
            we can chnage the properties of the object inside the container. we cannot remove
            or replace the object from the container.
*/


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
backpack.volume = 40;
console.log(backpack);