var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
var Server = require('mongodb-core').Server
var assert = require('assert');
var Schema = mongoose.Schema;

var fs = require('fs');
var dbFile = fs.readFileSync('db.json');
var dbsName = JSON.parse(dbFile)
var backup = require('mongodb-backup');



// console.log('ddddd',window.atob('hareRAM'))

// console.log(Buffer.from('Hello World!').toString('base64'));
// console.log(Buffer.from('SGVsbG8gV29ybGQhSGVsbG87Jy8gV29ybGQhSGVsbG8gV29ybGQhSGVsbG8gV29ybGQhSGVsbG8gV29ybGQhSGVsbG8gV29ybGQhSGVsbG8gV29ybGQhSGVsbG8gV29ybGQhSGVsbG8gV29ybGQhSGVsbG8gV29ybGQhSGVsbG8gV29ybGQhSGVsbG8gV29ybGQhSGVsbG8gV29ybGQhSGVsbG8gV29ybGQhSGVsbG87Jy8gV29ybGQhSGVsbG8gV29ybGQhSGVsbG8gV29ybGQhSGVsbG8gV29ybGQhSGVsbG8gV29ybGQhSGVsbG8gV29ybGQhSGVsbG8gV29ybGQhSGVsbG8gV29ybGQhSGVsbG8gV29ybGQhSGVsbG8gV29ybGQhSGVsbG8gV29ybGQhSGVsbG8gV29ybGQhSGVsbG8gV29ybGQhSGVsbG8gV29ybGQhSGVsbG8gV29ybGQhSGVsbG8gV29ybGQhSGVsbG8gV29ybGQhSGVsbG8gV29ybGQhSGVsbG8gV29ybGQh', 'base64').toString());
//

async function  dbAdd(values){
	dbsName.dbs.push(values)

	var  fsres =  await fs.writeFile('db.json', JSON.stringify(dbsName,null,2), function (err) {
		if (err){
			return {err : err }
		}else{
			return {message : "done"}

		}
		return fsres
	});
}

async function connectDb_V2 (v,res) {

      // console.log('bhaskar',dbName)
      console.log('v.collection',v)

      await mongoose.connect('mongodb://'+v.uri+v.collection,{ useNewUrlParser: true },(error)=>{
        if (!error) {
          console.log('MongoDB Connection Succeeded.')
        }
        else {
          console.log('Error in DB connection : ' + error)
          res.send({'Error': error})
        }
      });
      await mongoose.connection.db.listCollections().toArray(async function (err, names) {
        console.log('names',names)
        if(err){
          res.send({'Error': err})
        }else{
          res.send(names)

        }

      })
      mongoose.connection.close()





}
function connectDb1 (dbId,res) {

	dbsName.dbs.map(async function(v){

		if(v.id == dbId){
			// console.log('bhaskar',dbName)
			console.log('v.collection',v.collection)

			await mongoose.connect('mongodb://'+v.uri+v.collection,{ useNewUrlParser: true },(error)=>{
				if (!error) {
					console.log('MongoDB Connection Succeeded.')
				}
				else {
					console.log('Error in DB connection : ' + error)
					res.send({'Error': error})
					 }
				});
				await mongoose.connection.db.listCollections().toArray(async function (err, names) {
				console.log('names',names)
if(err){
	res.send({'Error': err})
}else{
				res.send(names)

}

			})
				mongoose.connection.close()


		}

	})
}




function dbDocumentConnect(cName,dName,limit,res){
if (limit < 20 || limit == undefined || limit == null) {
	console.log('vvvvvvvvvvvvvvvvvvvvvvvvvvvvvv',limit)
	limit = 20
}

	if(cName != undefined && dName != undefined){

	// console.log('req.body',req.body)
	dbsName.dbs.map(async function(v){

		if(v.id == dName){
			await mongoose.connect('mongodb://'+v.uri+v.collection,{ useNewUrlParser: true },(err)=>{
				if (!err) {
					console.log('MongoDB Connection Succeeded.')
				}
				else {
					console.log('Error in DB connection : ' + err) }
				});




        console.log("Mongoose default connection is open to ");
const dummySchema = await new mongoose.Schema({
  // createdBy: String,
  // subject: String
},{collection: cName});
mongoose.models = {}
			const MyModel = mongoose.model(cName, dummySchema);

			await MyModel.find({}, function (err, docs) {
				console.log('llllllllllllllllllll',docs)
				console.log('errerrerr',err)
				res.send(docs)
				mongoose.connection.close()

			}).limit(limit);











			
			




mongoose.connection.on('connected',async function(){	
        console.log("Mongoose default connection is open to ");
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

			}).limit(limit);

    });
 mongoose.connection.on('error', function(err){
        console.log("Mongoose default connection has occured "+err+" error");
    });

    mongoose.connection.on('disconnected', function(){
    	mongoose.connection.close()
        console.log("Mongoose default connection is disconnected");

    });

    process.on('SIGINT', function(){
        mongoose.connection.close(function(){
            console.log(termination("Mongoose default connection is disconnected due to application termination"));
            process.exit(0)
        });
    });


				mongoose.connection.close()



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
}




function dbBackup(values,res) {

	dbsName.dbs.map(async function(v){

		if(v.id == values.dName){

backup({
  uri: 'mongodb://'+v.uri+v.collection, // mongodb://<dbuser>:<dbpassword>@<dbdomain>.mongolab.com:<dbport>/<dbdatabase>
  collections: [ values.cName ],
  parser : "json",
  root: __dirname,
  callback: function(err) {

    if (err) {
      console.error(err);
  	res.send(err)


    } else {
      console.log('__dirname',__dirname);

      console.log('finish');
      res.send('finish')
    }
  }
});
}
})
}




async function dbDocumentConnect_V2(values,res){
  var cName = values.cName, dName = values.dName, limit = values.limit, sort = values.sort, find = values.find, findSearch = {}

  if (limit < 1 || limit > 200 || limit == undefined || limit == null) {
    limit = 20
  }


  if(typeof find.value === 'string' && typeof find == 'object' && find.findType == 'String'){
    findSearch = {[find.key]: new RegExp('^' + find.value.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') + '$', 'i')}
// findSearch = {[find.key]: new RegExp(find.value, 'i')}

    if(find.value == 'false' || find.value == 'true'){
      findSearch = {[find.key]: JSON.parse(find.value)}

    }

  }
  if(find.findType == 'ID'){
    findSearch = {[find.key]: mongoose.Types.ObjectId(find.value)}

  }if(find.findType == 'Number'){
    findSearch = {[find.key]: parseInt(find.value)}

  }


  if(cName != undefined && dName != undefined){


        var con = mongoose.createConnection();
        var connecting = function(err){
          console.log("Please Wait connecting \t"+con.readyState);
        };
        var disconnecting = function(err){
          console.log("Please Wait Disconnecting \t"+con.readyState);
        };
        var connected = function(err){
          console.log("Connection Connected\t"+con.readyState);
        };
        var disconnected= function(err){
          console.log("Connection DisConnected \t"+con.readyState);
        };

        console.log('yyyyyyyyyyy',findSearch)
        con.on("connecting",connecting);
        con.on("disconnecting",disconnecting);
        con.on("connected",connected);
        con.on("disconnected",disconnected);
        con.openUri('mongodb://'+values.uri+values.collection,{ useNewUrlParser: true });



        const dummySchema = await new mongoose.Schema({
          // createdBy: String,
          // subject: String
        },{collection: cName});

        const MyModel = con.model(cName, dummySchema);
        let records = {data:'',details:{}}
        await MyModel.count(findSearch, function (err, count) {
          // console.log('llllllllllllllllllll',docs)
          records.details = {count:count}
          console.log('ppppppppppppppppppppppppppppppppppppppppppppppp',count)
          // res.send(docs)
          // con.connection.close()

        }).sort(sort).explain().then(console.log);

        await MyModel.find(findSearch, function (err, docs) {
          // console.log('llllllllllllllllllll',docs)
          // console.log('errerrerr',err)
          records.data = docs
          res.send(records)
          // con.connection.close()

        }).sort(sort).limit(limit)
        // .explain().then(console.log);



  }

}
function dbDocumentConnect2(values,res){
  var cName = values.cName, dName = values.dName, limit = values.limit, sort = values.sort, find = values.find, findSearch = {}

  if (limit < 1 || limit > 200 || limit == undefined || limit == null) {
    limit = 20
  }


  if(typeof find.value === 'string' && typeof find == 'object' && find.findType == 'String'){
    findSearch = {[find.key]: new RegExp('^' + find.value.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') + '$', 'i')}
// findSearch = {[find.key]: new RegExp(find.value, 'i')}

    if(find.value == 'false' || find.value == 'true'){
      findSearch = {[find.key]: JSON.parse(find.value)}

    }

  }
  if(find.findType == 'ID'){
    findSearch = {[find.key]: mongoose.Types.ObjectId(find.value)}

  }if(find.findType == 'Number'){
    findSearch = {[find.key]: parseInt(find.value)}

  }


  if(cName != undefined && dName != undefined){

    dbsName.dbs.map(async function(v){

      if(v.id == dName){
        var con = mongoose.createConnection();
        var connecting = function(err){
          console.log("Please Wait connecting \t"+con.readyState);
        };
        var disconnecting = function(err){
          console.log("Please Wait Disconnecting \t"+con.readyState);
        };
        var connected = function(err){
          console.log("Connection Connected\t"+con.readyState);
        };
        var disconnected= function(err){
          console.log("Connection DisConnected \t"+con.readyState);
        };

        console.log('yyyyyyyyyyy',findSearch)
        con.on("connecting",connecting);
        con.on("disconnecting",disconnecting);
        con.on("connected",connected);
        con.on("disconnected",disconnected);
        con.openUri('mongodb://'+v.uri+v.collection,{ useNewUrlParser: true });



        const dummySchema = await new mongoose.Schema({
          // createdBy: String,
          // subject: String
        },{collection: cName});

        const MyModel = con.model(cName, dummySchema);
        let records = {data:'',details:{}}
        await MyModel.count(findSearch, function (err, count) {
          // console.log('llllllllllllllllllll',docs)
          records.details = {count:count}
          console.log('ppppppppppppppppppppppppppppppppppppppppppppppp',count)
          // res.send(docs)
          // con.connection.close()

        }).sort(sort).explain().then(console.log);

        await MyModel.find(findSearch, function (err, docs) {
          // console.log('llllllllllllllllllll',docs)
          // console.log('errerrerr',err)
          records.data = docs
          res.send(records)
          // con.connection.close()

        }).sort(sort).limit(limit)
        // .explain().then(console.log);



      }
    })
  }

}








router.post('/',  async function (req, res) {

	var body = req.body
	var reqFor = body.for
	var values = body.values

	
	if(reqFor == 'dbAdd'){
		values.id = dbsName.dbs.length + 1
		dbsName.dbs.push(values)

		await fs.writeFile('db.json', JSON.stringify(dbsName,null,2), function (err) {
			if (err){
				res.send({err : err })
			}else{
		res.send({message : "done",data:JSON.stringify(dbsName.dbs)})
				

			}
		});
	}



	if(reqFor == 'dbUpdate'){
		var objIndex = dbsName.dbs.findIndex((obj => obj.id == values.id))
		dbsName.dbs[objIndex].name = values.name
		dbsName.dbs[objIndex].uri = values.uri
		dbsName.dbs[objIndex].collection = values.collection
		dbsName.dbs[objIndex].for = values.for
		dbsName.dbs[objIndex].public = values.public

// return false
await fs.writeFile('db.json', JSON.stringify(dbsName,null,2), function (err) {
	if (err){
		res.send({err : err })
	}else{
		res.send({message : "done",data:JSON.stringify(dbsName.dbs)})
	}
});
}

if(reqFor == 'dbConnect'){

	
	// connectDb1 (values.id, res)
  connectDb_V2(values, res)
		// res.send({message : "connect"})
		

	}
	if(reqFor == 'dbDocumentConnect'){
// 			res.send(sampleJson)

// return false
// 	dbBackup(values, res)


	dbDocumentConnect_V2 (values,  res)
	// dbDocumentConnect2 (values,  res)

	}
	if(reqFor == 'getCollection'){

	dbDocumentConnect2 (values, res)

	}
	if(reqFor == 'dbBackup'){

	dbBackup(values.id, res)

	}





return false

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







router.get('/', async function(req, res, next) {
	// console.log('aaaaaaaaa')
	res.render('sparkDbs', {locals: {
		title: 'ES6',
		// dbsList : JSON.stringify(dbsName.dbs),
		baseData : JSON.stringify(dbsName.dbs)
	}});
});




module.exports = router;
