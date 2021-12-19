const readline = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
});

console.log("enter data");
readline.question('enter data',t => {
    console.log(t);
    readline.close();
});
