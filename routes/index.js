var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// await JSON.stringify(data)
let data =[]

async function mngCon(dbName) {

	// body...
	await mongoose.connect('mongodb://localhost:27017/'+dbName,{ useNewUrlParser: true },(err)=>{
		if (!err) {
			console.log('MongoDB Connection Succeeded.')
// console.log(mongoose.connection.db.collection('AccessControl').find())

}
else {
	console.log('Error in DB connection : ' + err) }
});

	var abc =  await mongoose.connection.db.listCollections().toArray(async function (err, names) {

		data =  names;
		console.log('aaaaaaaaaaaaaaaaaaaaaaa',data)
		mongoose.connection.close()

// return data

})





}

router.get('/', async function(req, res, next) {
	res.render('index', {locals: {
		title: 'ES6',
		data : 'ddd',
		cdb : 'mngCon'
	}});
});

router.post('/', async function (req, res) {


	console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',req.body)

	var dbName = req.body.db ;

if(dbName != undefined){

	// await mongoose.connect('mongodb://localhost:27017/'+dbName,{ useNewUrlParser: true },(err)=>{
	// 	if (!err) {
	// 		console.log('MongoDB Connection Succeeded.')
	// 	}
	// 	else {
	// 		console.log('Error in DB connection : ' + err) }
	// 	});

await mongoose.connect('mongodb://localhost:27017/'+dbName,{ useNewUrlParser: true },(err)=>{
		if (!err) {
			console.log('MongoDB Connection Succeeded.')
		}
		else {
			console.log('Error in DB connection : ' + err) }
		});

	

	await mongoose.connection.db.listCollections().toArray(async function (err, names) {
		res.send(names)
		mongoose.connection.close()

})

}
if(req.body.cName != undefined && req.body.dName != undefined){


MongoClient.connect('mongodb://localhost:27017', function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
 
  const db = client.db(req.body.dName);

const collection = db.collection(req.body.cName);
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
		res.send(docs)

    // callback(docs);
  });

 
  client.close();
});


// 	await mongoose.connect('mongodb://localhost:27017/'+req.body.dName,{ useNewUrlParser: true },(err)=>{
// 		if (!err) {
// 			console.log('MongoDB Connection Succeeded.')
// 		}
// 		else {
// 			console.log('Error in DB connection : ' + err) }
// 		});
// var kittySchema = new mongoose.Schema({name:String});
// mongoose.model(req.body.cName,kittySchema).find({},(e,d)=>{
// console.log('data',d)
// });


////////////////////////////////


// var server = new mongodb.Server("localhost", 27017, {});
// new mongodb.Db(req.body.dName, server, {}).open(function (error, client) {
//   if (error) throw error;
//   var collection = new mongodb.Collection(client, req.body.dName);
//   collection.find({}, {limit:10}).toArray(function(err, docs) {
//     console.dir(docs);
//   });
// });













///////////////////////////////////////








// console.log(Kitten)


// 	await mongoose.connection.db.listCollections().toArray(async function (err, names) {
// 		res.send(names)
// 		mongoose.connection.close()

// })
// console.log(mongoose.connection.db.collection(req.body.cName).find())
// mongoose.connection.db.collection(req.body.cName).find({},	function(e,data){
// res.send(data);
// })

// abc.find({}, function (err, users) {
// 	console.log('users',users)
//         res.send(users);
//     });

}
	

})



module.exports = router;
