function gettime()
{
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();

    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
        
    console.log(day+ "/" + month + "/" + year + " " + h + ":" + m + ":" + s);
}

        
setInterval(() => {
    console.clear();
    gettime();
}, 1000);
