const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/file.html');
})

app.post('/multiplefileupload', function (req, res) {
    req.files.pic.forEach(item => {
        item.mv(__dirname + "/./images/" + item.name, function (error, data) {
            if (error) res.json(error);
        })
    });
    res.json("done");
});

app.post('/fileupload', function (req, res) {
    req.files.pic.mv(__dirname + "/./images/" + req.files.pic.name,function(error,data){
        if(error) res.json(error);
        else res.json("Successfull");
    })
});

app.listen(8000);