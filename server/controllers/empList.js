

var connection = require('./../config');

module.exports.listData=function(req,res){
  connection.query('select * from users', (err,result) => {
    if(err) throw err;
    console.log("hoo")
    console.log(result)
    res.end(JSON.stringify(result));
    // res.render('viewlist',{result});
    // console.log('inside viewlist')
  })
}
