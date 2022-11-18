/**
 * 
 * Creating classes:
 * 
 * Class declaration: class Name {}
 * class expression: const  Name = class  {}
 */


class Backpack {
    constructor(
        // defines parameters:
        name, 
        volume,
        color,
        pocketNum,
        strapLengthL,
        strapLengthR,
        lidOpen
    ) {
        // define properties:
        this.name = name;
        this.volume = volume;
        this.color = color;
        this.pocketNum = pocketNum;
        this.strapLength = {
            left: strapLengthL,
            right: strapLengthR,
        };
        this.lidOpen = lidOpen;
    }
    // add methods like normal functions:
    toggleLid(lidStatus) {
        this.lidOpen = lidStatus;
    }
    newStrapLength(lengthLeft, lengthRight) {
        this.strapLength.left = lengthLeft;
        this.strapLength.right = lengthRight;
    }
}

export default Backpack;