const express = require("express");
const app = express();



app.get('/', serveHTML);
function serveHTML(req, res) {
    res.sendFile(__dirname + '/assets/index.html');
}


app.use(express.static('assets'))







const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('The app is listening on port ' + port)
});