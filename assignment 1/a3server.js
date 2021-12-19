let data = {
    Match_Title: "Chennai Super Kings Vs Mumbai Indians",
    Match_Date: "12/09/2021",
    Venue: "chinaswamy stadium",
    Score: 190,
    Over: 19.4,
    Wicket:4
}

const http = require('http').createServer();
const PORT = process.env.PORT || 8080;

http.listen(PORT,()=>{
    console.log(`litening on port ${PORT}`);
});

const io = require('socket.io')(http);

io.on('connect',(socket)=>{
    socket.emit("message",data)
}).on('error',(error)=>{
    console.log(error);
});