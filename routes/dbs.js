var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
var Server = require('mongodb-core').Server
const assert = require('assert');
// const dbsName = require('../db.json');
const Schema = mongoose.Schema;

const fs = require('fs');
var dbFile = fs.readFileSync('db.json');

var dbsName = JSON.parse(dbFile)

// console.log(dbsName)





// console.log('dbsName',dbsName)


router.post('/',  function (req, res) {
	var dbName = req.body.db;
	var cName = req.body.cName;
	var dName = req.body.dName;

console.log('dbName',dbName)
	if(dbName != undefined){

		dbsName.dbs.map(async function(v){

			if(v.name == dbName){
				console.log('bhaskar',dbName)
				console.log('v.collection',v.collection)

				await mongoose.connect('mongodb://'+v.uri+v.collection,{ useNewUrlParser: true },(err)=>{
					if (!err) {
						console.log('MongoDB Connection Succeeded.')
					}
					else {
						console.log('Error in DB connection : ' + err) }
					});
				console.log('11111111111111names')


				await mongoose.connection.db.listCollections().toArray(async function (err, names) {
				console.log('names',names)

			res.send(names)
			mongoose.connection.close()

		})

			}

		})
	}




		if(cName != undefined && dName != undefined){

console.log('req.body',req.body)
dbsName.dbs.map(async function(v){

if(v.name == dName){
await mongoose.connect('mongodb://'+v.uri+v.collection,{ useNewUrlParser: true },(err)=>{
					if (!err) {
						console.log('MongoDB Connection Succeeded.')
					}
					else {
						console.log('Error in DB connection : ' + err) }
					});
console.log('cName',cName)
const dummySchema = await new mongoose.Schema({
  // createdBy: String,
  // subject: String
},{collection: cName});
const MyModel = mongoose.model(cName, dummySchema);

 await MyModel.find({}, function (err, docs) {
 console.log('llllllllllllllllllll',docs)
 console.log('errerrerr',err)
 res.send(docs)
			mongoose.connection.close()

});

	return false
	await MongoClient.connect('mongodb://'+v.uri+v.collection,{ useNewUrlParser: true },(err,client)=>{
		// MongoClient.connect('mongodb://'+v.uri, function(err, client) {
			assert.equal(null, err);
			console.log("Connected successfully to serverrrrrrrrrrrrrrrrrrrrrr");

			const db = client.db(v.collection);
			console.log("Cddddddddddddddddddhhhhhhhhhhhhh",db);

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

}

	})

	}

	

})






// const url = 'mongodb://spark_report:f956173c7aece81c6af2@10.60.40.239:27017,10.60.40.228:27017,10.60.40.241:27017/spark_report?authSource=spark_report&replicaSet=rs0';

// // Database Name
// const dbName = 'spark_report';

// // Use connect method to connect to the server
// MongoClient.connect(url, { useNewUrlParser: true } , function(err, client) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");

//   const db = client.db(dbName);
// // show collections;
//   db.getCollectionNames().toArray(function(err, collections){

// console.log('collections',collections)
//   })
//   console.log(ram)

//   client.close();
// });










router.get('/', async function(req, res, next) {
	console.log('aaaaaaaaa')
	res.render('dbs', {locals: {
		title: 'ES6',
		// dbsList : JSON.stringify(dbsName.dbs),
		baseData : JSON.stringify(dbsName.dbs)
	}});
});




module.exports = router;
