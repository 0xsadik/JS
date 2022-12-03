
var myObj = {
    name: 'javaScript',
    founder: 'Brendan Eich',
    etd: '1995',
    ranking: 1
};

// jodi key guloke array akare pete cai
var keys = Object.keys(myObj);
// jodi value guloke array akare pete cai
var values = Object.values(myObj);
// jodi key ebong value uvoikei array akare pete cai.
var both = Object.entries(myObj);
console.log(keys);
console.log(values);
console.log(both);