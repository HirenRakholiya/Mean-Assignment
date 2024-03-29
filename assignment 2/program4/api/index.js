const express = require('express');
const index = express();
const mongoose = require('mongoose');
const expressFileupload = require('express-fileupload');

const fs = require('fs')

const cors = require('cors')
index.use(cors())

mongoose.connect('mongodb://localhost/mylib', { useNewUrlParser: true, useUnifiedTopology: true }, (error) => console.log(error));

const userSchema = new mongoose.Schema({
    name: String,
    address: String,
    email: String,
    password: String,
    gender: String
})

const UserModel = mongoose.model('ur', userSchema)

index.use(express.json())

index.get('/displayPic/:img', (req, res) => {
    res.sendFile(__dirname + '/Public/images/' + req.params.img)
})

const VerifyToken = (req, res, next) => {
    var jwt = require('jsonwebtoken');
    jwt.verify(req.headers.authorization.split(' ')[1],'shhhhh', function (err, data) {
        if(data) {
            next()
        }
        else
        {
            return res.status(400).json(err)
        }
    });
}

index.get('/display', VerifyToken, (req, res) => {
    UserModel.find({}).then(data => {
        return res.status(200).json(data)
    }).catch(error => {
        return res.status(400).json(error)
    })
})

index.post('/insert',VerifyToken,(req, res) => {

    const data = new UserModel({
        name: req.body.name,
        address: req.body.address,
        email: req.body.email,
        password: req.body.password,
        gender: req.body.gender
    })

    data.save().then(data => {
        return res.status(200).json(data)
    }).catch(error => {
        return res.status(400).json(error)
    })
})

index.get('/delete/:id',VerifyToken,(req, res) => {
    UserModel.deleteOne({ _id: req.params.id }).then(data => {
        return res.sendFile('D:/Sem/assignment2/p4/f_Assignment2_4/' + 'display.html')
    }).catch(error => {
        return res.status(400).json(error)
    })
})

index.get('/displayBy/:id',VerifyToken,(req, res) => {
    UserModel.findOne({ _id: req.params.id }).then(result => {
        return res.status(200).json(result)
    }).catch(error => {
        return res.status(400).json(error)
    })
})

index.post('/update/:id',VerifyToken,(req, res) => {
    UserModel.updateOne({ _id: req.params.id }, {
        $set: {
            name: req.body.name,
            address: req.body.address,
            email: req.body.email,
            password: req.body.password,
            gender: req.body.gender
        }
    }, (err, data) => {
        if (err) res.status(400).json(err)
        else res.status(200).json(data)
    })
})

index.post('/login',(req, res) => {
    UserModel.find({ email: req.body.email, password: req.body.password }).then(result => {
        var jwt = require('jsonwebtoken');
        var token = jwt.sign({ user: result },'shhhhh');
        return res.status(200).json(token)
    }).catch(err => {
        return res.status(400).json(err)
    })
})

index.listen(5000)