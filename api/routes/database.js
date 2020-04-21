// var express = require("express");
// var router = express.Router();
// var mysql = require("mysql");
// const bodyParser = require('body-parser');
// var result;
//
// const con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "password",
//     database: 'mydb'
// });
//
//
// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
// });
//
// // let sql = 'SELECT * FROM content';
// //
// // con.query(sql, (error, results, fields) => {
// //     if (error) {
// //         return console.error(error.message);
// //     }
// //     console.log(results);
// //     result = results;
// // });
// //
// // router.get("/", function(req, res, next) {
// //     res.send(result);
// // });
// const app = express();
//
// app.get('/',(req,res) => {
//     let data = {text: req.body.text};
//     let sql = "SELECT * FROM content WHERE contentname = ? OR contenttile = ?";
//     let query = con.query(sql, data,(err, results) => {
//         if(err) throw err;
//         res.send(query);
//     });
//     }
// );
//
// app.listen(3000, () => {
//     console.log("Working");
// });
//
// module.exports = router;