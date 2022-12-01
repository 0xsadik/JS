
function skier(name, sound) {
    return {
        name: name, 
        sound: sound,
        powderYell: function() {
            let yell = this.sound.toUpperCase();
            console.log(`${yell}! ${yell}!`);
        }
    };
}
console.log(skier("sendy", "woo").name)
console.log(skier("sendy", "woo").sound)
skier("sendy", "woo").powderYell();