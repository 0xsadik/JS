// https://stackoverflow.com/questions/958908/how-do-you-reverse-a-string-in-place-in-javascript

// implementation - 1

// function reverse(s) {
//     var o = '';
//     for (var i = s.length - 1; i >= 0; i--) 
//         o += s[i];
//         return o;
    
// }
// console.log(reverse('torikus'));


// implementation - 2

function reverse(s) {
    var o = [];
    for (var i = s.length - 1, j = 0; i >= 0; i--, j++)
      o[j] = s[i];
    return o.join('');
  }
  
console.log(reverse('torikus'));