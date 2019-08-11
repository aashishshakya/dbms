(()=> {

// __aa = modal add db data print activeDB f
// __ab = adddb button click
// __ac = dbconnection fun
// __ad dbEdit f
// __ae dbAdd f

var sortDBType = {'_id':-1},
findByDB = {}
var dummy2 = ["aute","ipsum","proident","amet","sunt","sint","ullamco"],
    dummy3 =[{
        "tags": [
            "consectetur",
            "exercitation",
            "do",
            "non",
            "reprehenderit",
            "ut",
            "sit"
        ],
        "friends": [
            {
                "id": 33333,
                "name": "Lesley Gentry"
            },
            {
                "id": 1,
                "name": "Mcbride Welch"
            }
        ],
	},
        {
            "tags": [
                "reprehenderit",
                "ut",
                "sit"
            ],
            "friends": [
                {
                    "id": 0,
                    "name": "Lesley Gentry"
                }
            ],
        }
    ];

var dummy = [
{
	"_id": "5d45ef6750106b3fcde1c640",
	"index": 0,
	"guid": "439436b6-5e17-4cad-89bf-b77fbfb402ea",
	"isActive": false,
	"balance": "$2,718.90",
	"picture": "http://placehold.it/32x32",
	"age": 30,
	"eyeColor": "brown",
	"name": "Combs Doyle",
	"gender": "male",
	"company": "QUILCH",
	"email": "combsdoyle@quilch.com",
	"phone": "+1 (958) 491-2097",
	"address": "515 Brevoort Place, Silkworth, Florida, 910",
	"about": "Excepteur ullamco deserunt laborum consectetur do cillum aliqua est elit aute. Velit labore irure nisi adipisicing reprehenderit exercitation Lorem. Cillum nulla Lorem cillum reprehenderit officia incididunt magna proident et commodo sint consequat adipisicing exercitation. Ut cupidatat consectetur exercitation velit magna nulla non. Voluptate enim nostrud consequat in irure laboris laboris ipsum dolor nostrud mollit voluptate eiusmod ipsum. Id duis do elit laborum adipisicing.\r\n",
	"registered": "2016-01-02T06:31:24 -06:-30",
	"latitude": 18.892767,
	"longitude": -175.717494,
	"tags": [
	"consectetur",
	"exercitation",
	"do",
	"non",
	"reprehenderit",
	"ut",
	"sit"
	],
	"friends": [
	{
		"id": 0,
		"name": "Lesley Gentry"
	},
	{
		"id": 1,
		"name": "Mcbride Welch"
	},
	{
		"id": 2,
		"name": "Lizzie Romero"
	}
	],
	"greeting": "Hello, Combs Doyle! You have 1 unread messages.",
	"favoriteFruit": "strawberry"
},
{
	"_id": "5d45ef670f003952083b37b2",
	"index": 1,
	"guid": "61976785-75b0-426c-af86-fb084f8819bb",
	"isActive": true,
	"balance": "$3,219.13",
	"picture": "http://placehold.it/32x32",
	"age": 27,
	"eyeColor": "green",
	"name": "Maggie Alston",
	"gender": "female",
	"company": "ZYTREK",
	"email": "maggiealston@zytrek.com",
	"phone": "+1 (974) 456-3194",
	"address": "987 Sumner Place, Grantville, Vermont, 475",
	"about": "Nisi Lorem anim id duis magna magna et. Minim veniam quis incididunt ullamco ea sunt Lorem nostrud. Magna cupidatat ipsum cupidatat fugiat et quis veniam enim eiusmod et anim qui mollit. Ullamco cupidatat et voluptate anim eiusmod ullamco nisi sit ut ea ut veniam. Sit eu tempor ut id id amet nulla mollit. Cupidatat id sunt ex magna magna elit nostrud. Amet voluptate aliqua ullamco reprehenderit qui cupidatat laboris nostrud occaecat aliqua ullamco sint.\r\n",
	"registered": "2019-07-20T10:01:14 -06:-30",
	"latitude": -42.303257,
	"longitude": -53.262668,
	"tags": [
	"amet",
	"ad",
	"nostrud",
	"consectetur",
	"consequat",
	"labore",
	"qui"
	],
	"friends": [
	{
		"id": 0,
		"name": "Thelma Moore"
	},
	{
		"id": 1,
		"name": "Carolina Slater"
	},
	{
		"id": 2,
		"name": "Inez Joyner"
	}
	],
	"greeting": "Hello, Maggie Alston! You have 8 unread messages.",
	"favoriteFruit": "banana"
},
{
	"_id": "5d45ef67ec880fd1e16b53d7",
	"index": 2,
	"guid": "f3f3e64e-4a8b-4ddc-bd9a-a8a52b060b47",
	"isActive": true,
	"balance": "$1,950.88",
	"picture": "http://placehold.it/32x32",
	"age": 31,
	"eyeColor": "green",
	"name": "Sadie Fernandez",
	"gender": "female",
	"company": "TALKOLA",
	"email": "sadiefernandez@talkola.com",
	"phone": "+1 (960) 493-2936",
	"address": "303 Berriman Street, Dalton, Virginia, 4543",
	"about": "Culpa ea minim eiusmod Lorem elit. Ex pariatur adipisicing irure est in adipisicing tempor sint ut culpa ea pariatur. Adipisicing magna mollit dolor cupidatat nostrud minim labore ex ea ex cillum commodo cupidatat. Do in laborum in laboris est laboris id amet culpa consequat commodo minim. Amet ut ex consectetur pariatur et deserunt.\r\n",
	"registered": "2017-10-20T02:49:43 -06:-30",
	"latitude": -53.666977,
	"longitude": -92.419541,
	"tags": [
	"ut",
	"enim",
	"amet",
	"ut",
	"elit",
	"cupidatat",
	"veniam"
	],
	"friends": [
	{
		"id": 0,
		"name": "Barbra Black"
	},
	{
		"id": 1,
		"name": "Floyd Bullock"
	},
	{
		"id": 2,
		"name": "Kline Bray"
	}
	],
	"greeting": "Hello, Sadie Fernandez! You have 4 unread messages.",
	"favoriteFruit": "apple"
},
{
	"_id": "5d45ef6729e37fcd1e2715ce",
	"index": 3,
	"guid": "99e553ba-509b-4594-8d95-2ff32209388f",
	"isActive": false,
	"balance": "$1,166.20",
	"picture": "http://placehold.it/32x32",
	"age": 27,
	"eyeColor": "green",
	"name": "Vincent Rosario",
	"gender": "male",
	"company": "COMBOT",
	"email": "vincentrosario@combot.com",
	"phone": "+1 (872) 474-3787",
	"address": "368 Osborn Street, Colton, Montana, 9596",
	"about": "Aliquip dolor dolore do et sint id incididunt ad et. Sint minim voluptate anim commodo adipisicing dolor veniam deserunt sint est. Exercitation veniam culpa eiusmod ad cupidatat non cupidatat. Exercitation occaecat minim est aliquip officia ut do esse aliqua sint veniam.\r\n",
	"registered": "2018-04-19T09:41:31 -06:-30",
	"latitude": 81.467739,
	"longitude": 3.738386,
	"tags": [
	"aute",
	"ipsum",
	"proident",
	"amet",
	"sunt",
	"sint",
	"ullamco"
	],
	"friends": [
	{
		"id": 0,
		"name": "Delaney Burgess"
	},
	{
		"id": 1,
		"name": "Britt Hayes"
	},
	{
		"id": 2,
		"name": "Aurora Odom"
	}
	],
	"greeting": "Hello, Vincent Rosario! You have 8 unread messages.",
	"favoriteFruit": "banana"
},
{
	"_id": "5d45ef6725271da7d74b2e19",
	"index": 4,
	"guid": "a5b27216-c829-454f-aba7-a6863113f37f",
	"isActive": false,
	"balance": "$3,387.54",
	"picture": "http://placehold.it/32x32",
	"age": 29,
	"eyeColor": "green",
	"name": "Maude Bates",
	"gender": "female",
	"company": "OTHERWAY",
	"email": "maudebates@otherway.com",
	"phone": "+1 (923) 457-2898",
	"address": "936 Orange Street, Lorraine, Iowa, 5703",
	"about": "In laboris ullamco cupidatat voluptate. Sit labore ullamco eiusmod nisi aliqua ex cillum deserunt et officia in id. Non est amet cillum occaecat consequat aliqua nostrud officia labore elit. Dolore proident excepteur dolor qui ut ad ipsum ad sunt ipsum. Sunt nisi tempor consectetur officia qui do culpa. Ipsum veniam reprehenderit consectetur velit aute veniam ex dolor. Sint minim aliqua nulla pariatur cupidatat.\r\n",
	"registered": "2016-04-16T11:16:32 -06:-30",
	"latitude": -1.31428,
	"longitude": -84.388462,
	"tags": [
	"dolor",
	"in",
	"esse",
	"Lorem",
	"laboris",
	"in",
	"sunt"
	],
	"friends": [
	{
		"id": 0,
		"name": "Felicia Hardin"
	},
	{
		"id": 1,
		"name": "Rene Johnston"
	},
	{
		"id": 2,
		"name": "Lacey Boone"
	}
	],
	"greeting": "Hello, Maude Bates! You have 6 unread messages.",
	"favoriteFruit": "strawberry"
},
{
	"_id": "5d45ef6733b88185005e5c89",
	"index": 5,
	"guid": "5398a66e-c14a-4133-bced-8266b8db8c38",
	"isActive": true,
	"balance": "$1,966.24",
	"picture": "http://placehold.it/32x32",
	"age": 33,
	"eyeColor": "brown",
	"name": "Edwina Walsh",
	"gender": "female",
	"company": "INJOY",
	"email": "edwinawalsh@injoy.com",
	"phone": "+1 (881) 490-2688",
	"address": "993 Stryker Street, Lafferty, Wisconsin, 3561",
	"about": "Adipisicing quis cupidatat occaecat cillum aute. Velit fugiat ea duis commodo consectetur incididunt minim excepteur ex et. Non dolor anim culpa eiusmod incididunt sit voluptate cillum in excepteur officia tempor. Laboris cillum aliqua tempor nisi. Consequat aliqua ut laborum dolore ad ea adipisicing nulla enim. Nostrud culpa officia velit pariatur consequat qui. Amet labore ullamco amet Lorem aliquip incididunt et et mollit.\r\n",
	"registered": "2018-06-29T06:31:13 -06:-30",
	"latitude": -56.256668,
	"longitude": -75.787355,
	"tags": [
	"voluptate",
	"aliqua",
	"id",
	"ea",
	"cillum",
	"non",
	"cupidatat"
	],
	"friends": [
	{
		"id": 0,
		"name": "Vargas Serrano"
	},
	{
		"id": 1,
		"name": "Caitlin Lowery"
	},
	{
		"id": 2,
		"name": "Sallie Jackson"
	}
	],
	"greeting": "Hello, Edwina Walsh! You have 2 unread messages.",
	"favoriteFruit": "banana"
}
]


function __aa(data,type){
					// console.log('dddddddddddddddddddd',data)

					var btnS1 = 'Edit', btnS2 = 'Connect', btnS3 = 'Delete', addClass = '', class1 = '',class3 = '';
					if(type == 'add'){
						addClass = 'addingDB'
					}

					$('#model .modelBox .__table').remove()
					$('#model .modelBox').append('<table class="__table '+addClass+'"><tr><th>Name</th><th>URI</th><th>Collection</th><th>Tag</th><th>Public</th><th>Status</th><th>Action</th></tr></table>')
					data.map(function(v){
						if(v.name == '' && v.uri === ''){
							btnS1 = 'Test'
							btnS2 = 'Add'
							btnS3 = 'Cancel'
							class1 = 'activeEdit'
							class3 = 'btnCancel'
						}

						$('#model .modelBox .__table').append('<tr class="'+class1+'" data-for="'+v.id+'" ><td placeholder="Name*">'+v.name+'</td><td placeholder="URI*">'+v.uri+'</td><td placeholder="Collection*">'+v.collection+'</td><td placeholder="Tag">'+v.for+'</td><td><input type="checkbox" checked='+v.public+' disabled></td><td>N/A</td><td><button class="editDB">'+btnS1+'</button><button class="btn'+btnS2+'" >'+btnS2+'</button><button class="'+class3+'">'+btnS3+'</button></td></tr>')
					})
					$('#model .modelBox .__table tr:not(.activeEdit) td').append(
						$('<div>').addClass('mask')
						)

					if(type == 'add'){
// setTimeout(function(){
	$('#model .modelBox .__table').addClass('activeEditTable')
	$('#model .modelBox .__table.activeEditTable .activeEdit td:nth-child(-n+4)').attr('contenteditable', true)

  // },1000)
  btnCancel()
}
__ac()
__ad()
__ae()
}
////////////////////////////////////////////////////////////////////////////////////////
function __ab(baseData){

	$('#addDB').click(function(){
		var myElement = {
			collection: "",
			createdUser: "Ashish",
			for: "",
				name: "",
			public: true,
			uri: ""
		}
		var newBaseData = baseData.slice();

		newBaseData.push(myElement)

		// console.log('baseData',baseData)
		// console.log('newBaseData',newBaseData)
		__aa(newBaseData,'add')
// if (tt == 'add'){

// tt = ''
// }else{
//   __aa(baseData)
// tt = 'add'
// }


})
}
////////////////////////////////////////////////////////////////////////////////////////
function __ac(){
	$('.btnConnect').click(function(){
		// console.log('This is for db connection')
	})
}
////////////////////////////////////////////////////////////////////////////////////////
function __ad(){
	$('.editDB').click(function(){
		var th = $(this)

		$(this).parents('table').find('tr').removeClass('activeEdit')
		$(this).parents('table').addClass('activeEditTable')
		$('.activeEditTable .mask').remove()
		th.parents('tr').addClass('activeEdit')
		$('.activeEditTable tr:not(.activeEdit) td').append('<div class="mask"></div>')

// $('.activeEditTable tr:not(.activeEdit) td').append('<div class="mask"></div>')
setTimeout(function(){
	$('.activeEditTable').addClass('anim')
	th.text('Update').removeClass('editDB').addClass('btnUpdate')
	th.next('button').text('Cancel').addClass('btnCancel')
	$('.activeEditTable .activeEdit td:nth-child(-n+4)').attr('contenteditable', true)
	btnCancel()
	__ae()
}, 100);

})
}
////////////////////////////////////////////////////////////////////////////////////////
function __ae(){
	$('.btnAdd, .btnUpdate, .btnConnect').click(async function(){
		var name = $(this).parents('tr').find('td[placeholder = "Name*"]').text();
		var uri = $(this).parents('tr').find('td[placeholder = "URI*"]').text();
		var collection = $(this).parents('tr').find('td[placeholder = "Collection*"]').text();
		var tag = $(this).parents('tr').find('td[placeholder = "Tag"]').text();
		var id = $(this).parents('tr').attr('data-for')
		var public = true;
		var createdUser = "Testing"
		var className = $(this).attr('class')
		if (name.trim() == '' || uri.trim() == '' || collection.trim() == ''){
			alert('Value CAnt be blank')
		}else{

			var data = {name,uri,collection,for:tag,public,createdUser,id}
			var values ;
			if(className == 'btnUpdate'){
				values = {	"for": "dbUpdate", 	values : data }
			}

			if(className == 'btnAdd'){
				values = {	"for": "dbAdd",	values : data}
			}

			if(className == 'btnConnect'){
				values = {	"for": "dbConnect",	values : data}
			}
			if(values){
				dbHTTP('post','/',JSON.stringify(values),function(data){
					// console.log('data',JSON.parse(data.data))

					__aa(JSON.parse(data.data))
					// location.reload();
				})
			}

		}


	})
}
////////////////////////////////////////////////////////////////////////////////////////
function __dbUpdate(){
	$('.dbUpdate').click(function(){
		alert()
	})
}
////////////////////////////////////////////////////////////////////////////////////////
function btnCancel(){
	$('.btnCancel').click(function(){
//     $(this).parents('table').find('tr').removeClass('activeEdit')
// $(this).parents('table').removeClass('activeEditTable')
// $(this).text('Connect').removeClass('btnCancel')
// $(this).prev('button').text('Edit').removeClass('dbUpdate').addClass('editDB')
__aa(baseData)

})

}
////////////////////////////////////////////////////////////////////////////////////////
function __btnConnect(){
	$('.btnConnect').click(function(){

	})
}
////////////////////////////////////////////////////////////////////////////////////////
function openModal(){
	$('.openModal').click(function(){
		$('#model').show()
	})
	$('.closeModel').click(function(){
		$('#model').hide()
	})
}

////////////////////////////////////////////////////////////////////////////////////////

function getCollection(){
	$('#db').change(function(){
		findByDB = {}
		$('.clearFilter').removeClass('enable')

		var id = $(this).val()

		if(id !== 'none' ){
			loading('show','Connection Loading...')
			$('#Collection').empty();
			$('#Collection').append($('<option>', {
				value: 'Loading...',
				text : 'Loading...'
			}));
			$('#getData').attr('disabled',true)
			collection(id)

		}
	})
	$('#Collection').change(function(){
		findByDB = {}
		$('.clearFilter').removeClass('enable')

		console.log('findByDBfindByDB',findByDB)
	})

	function collection(id){
		var data = {id}
		var values = {"for": "dbConnect",	values : data};

		dbHTTP('post','/',JSON.stringify(values),function(resultData){
			loading('hide','Done')

			$('#Collection').empty();
			resultData.map(function(v){

				$('#Collection').append($('<option>', {
					value: v.name,
					text : v.name
				}));

			})

			$('#getData').attr('disabled',false)

		})
	}



	$('#getData').click(function(){
		var dName = $('#db').val()
		var cName = $('#Collection').val()

		if(dName !== '' && dName != ''){
			loading('show','Data Loading... ')
			getDBData()
		}


	})

}

////////////////////////////////////////////////////////////////////////////////////////

function loading(type,msg){
	if(type == 'show'){
		$('.footer .msg').text(msg)
		$('.footer').removeClass('hide')
		$('.footer .loader').removeClass('opc0')

	}else{
		$('.footer .msg').text(msg)
		$('.footer .loader').addClass('opc0')

		setTimeout(function(){
			$('.footer').addClass('hide')

		},2000)

	}
}

////////////////////////////////////////////////////////////////////////////////////////

function getDBData(){
	console.log('1111')
	var dName = $('#db').val()
	var cName = $('#Collection').val()
	var limit = parseInt($('#nod').val())
	var data = {dName:dName,cName:cName,limit,sort:sortDBType,find:findByDB}
	var values = {  "for": "dbDocumentConnect", values : data}
	dbHTTP('post','/',JSON.stringify(values),function(resultData){
		loading('hide','Done')

		dbloadData = resultData.data
		$('.tRecords').text(resultData.details.count)
		$('#asd').html(json2Table(resultData.data))

		sortDoc()
		findBy()

	})
}

////////////////////////////////////////////////////////////////////////////////////////
function sortDoc(){
	$('.sort').click(function(){

		if($(this).hasClass('desc')){
			$(this).removeClass('desc')
			$(this).addClass('asc').text('as')
			var sortKey = $(this).parents('th').find('h4').text()
			var sortValue = 1
			sortDBType = {[sortKey]:sortValue}
			loading('show','Data Loading... ')

			getDBData()

		}else if($(this).hasClass('asc')){
// console.log('sasd')
$(this).removeClass('asc')
$(this).addClass('desc').text('de')
var sortKey = $(this).parents('th').find('h4').text()
var sortValue = -1
sortDBType = {[sortKey]:sortValue}
loading('show','Data Loading... ')

getDBData()
}else{
	$(this).removeClass('asc')

	$(this).addClass('desc').text('de')
	var sortKey = $(this).parents('th').find('h4').text()
	var sortValue = -1
	sortDBType = {[sortKey]:sortValue}
// console.log('ddd',$(this).parents('th').find('h4').text())
		// console.log('aaa',sortDBType)
		loading('show','Data Loading... ')

		getDBData()
	}
	addSortBy()
})
}

////////////////////////////////////////////////////////////////////////////////////////
let ttable = 0;

function json2Table(json) {

	ttable += 1


	let keys = []
	if(json.length !== undefined && typeof json == 'object'){

		json.map(v =>{
			var key = Object.keys(v)

			keys = [...new Set(keys.concat(key))]
  // keys = Object.assign(keys, key)

})
		var table = $('<table class="__table rowDataTable" data-table="'+ttable+'"><tr></tr></table>');
		keys.map(allKeys=>{
  // console.log(v)
  var class1 = '';
  var class2 = '';

  Object.keys(sortDBType).forEach(function(key) {
// console.log('key',key)

if(key == allKeys){
// console.log('allKeys',allKeys)
if(sortDBType[allKeys] == -1){
	class1 = 'desc'
	class2 = 'activeTh'

}else{
	class1 = 'asc'
	class2 = 'activeTh'

}

}else{
	class1 = ''
	class2 = ''

}

})

  $(table).find('tr').append('<th class="'+class2+'"><h4>'+allKeys+'</h4><div class="queryAction"><div class="__ib find"><span class="">&#9906;</span></div><div class="__ib sort '+class1+'"><span class="asc">&#8657;</span><span class="ascdesc">&#8661;</span><span class="desc">&#8659;</span></div></div></th>')



})

	}
	json.map(function(v,i){
		var tableN = table.attr('data-table')
		table = table.append('<tr data-table="'+tableN+'" data-row="'+i+'"></tr>')
		keys.map(vkey=>{
			table.find('[data-table="'+tableN+'"][data-row="'+i+'"]').append('<td data-for="'+vkey+'" data-row="'+i+'">'+undefined+'</td>')
			for(var name in v) {
				var value = v[name];

				if(vkey == name){
        	// console.log('111111111111111111111111',value)
        	// console.log('dddddddddddddddddddddddd',vkey)
        	// console.log('2222222222222222222222222',typeof value)
        	if(value !== null && typeof value == 'object' && value.length !== undefined  && typeof value[0] == 'object'){

        		$(table).find('[data-for="'+vkey+'"][data-row="'+i+'"]').html(json2Table(value))
// $(table).find('[data-for='+vkey+'][data-row='+i+']').text('value')

}else if (value !== null && value.length === undefined && typeof value == 'object') {
  // console.log('string',value)
  $(table).find('[data-for="'+vkey+'"][data-row="'+i+'"]').html(json2Table([value]))



}else{
	$(table).find('[data-for="'+vkey+'"][data-row="'+i+'"]').text(value)

}



}




}
})

	})


	return table
}

////////////////////////////////////////////////////////////////////////////////////////
function addSortBy(){
	// console.log('Object.keys(sortDBType)',Object.keys(sortDBType)[0])
	$('.sortBy').empty()
	$('.sortBy').append('<li><div class="__ib">'+Object.keys(sortDBType)[0]+'</div><div class="__ib">'+sortDBType[Object.keys(sortDBType)[0]]+'</div></li>')
}
////////////////////////////////////////////////////////////////////////////////////////

function findBy(){
	console.log('hi')
	$('.find').click(function(){
		console.log('222222222222')

		$('#findModel,#modelBg').fadeIn()
		$('#findValue').val('')
		var key = $(this).parents('th').find('h4').text()
		var paretskeyLength = $(this).parents('table').length
		console.log('keykeykey',key)
		var  paretskey = [] ;
		for (var i = 0; i < paretskeyLength-1; i++) {
			paretskey.push($(this).parents('table').parent('td').eq(i).attr('data-for'))
		}
		// console.log('dddddddddddddddparetskey2',paretskey2.join('.')+'.'+key)
		// console.log('keykeykey2',$(this).parents('table').parent('td').parents('table').parent('td').attr('data-for'))
		// console.log('paretskeyLength',paretskeyLength)
		// var paretskey = $(this).parents('table').parent('td').attr('data-for')

		if(paretskeyLength > 1){
			// key = paretskey+'.'+key
			key = paretskey.join('.')+'.'+key
		}

		console.log('kkkkkk',key)
		$('#findModel h3').html('Find in <b class="bKey">'+key+'</b> Column')

	})



}

function findData(){

	$('#findSearch').click(function(){
		var key = $('#findModel .bKey').text()
		console.log('key',key)
		var findType = $("input:radio[name=findType]:checked").val()
		var findValue = $('#findValue').val()
		findByDB = {}
		if (findValue != null && findValue != '') {
			findByDB = {key,findType,value:findValue}
			$('.clearFilter').addClass('enable')
  	// console.log('suces',findByDB)
  	loading('show','Data Loading... ')
  	getDBData()
// return false

}else{
  	// console.log('canc',person)
  }
  console.log('findByDB',findByDB)

})

	$('#modelBg,#findCancel').click(function(){
		$('#findModel,#modelBg').fadeOut()

	})


}

////////////////////////////////////////////////////////////////////////////////////////
function clearFilter(){
	$('.clearFilter').click(function(){
		console.log('ddddd',$(this).hasClass('enable'))
		if($(this).hasClass('enable')){
			$(this).removeClass('enable')
			findByDB = {}
			loading('show','Data Loading... ')

			getDBData()

		}

	})
}
////////////////////////////////////////////////////////////////////////////////////////
function jsonHTMLView(){
	$('.jsonView').click(function(){
		$('#asd').empty()
		$('#asd').html('<pre>'+JSON.stringify(dbloadData, undefined, 2)+'</pre>')
    // $('#asd').html('<pre>'+JSON.stringify(dbloadData,  null, '\t')+'</pre>')
})
	$('.arrayView').click(function(){
		$('#asd').empty()
		$('#asd').html(json2DView(dbloadData))
		// $('#asd').html(jsonDView(dbloadData))
    // $('#asd').html('<pre>'+JSON.stringify(dbloadData,  null, '\t')+'</pre>')
})
	$('.tableView').click(function(){
		$('#asd').empty()
		$('#asd').html(json2Table(dbloadData))

	})

}
////////////////////////////////////////////////////////////////////////////////////////
    function json2DView(json) {
        if(Array.isArray(json)){
            var html = $('<ul class="__arrayUl"></ul>'), li;
            $.each(json, function(key,value){
                li = html.append('<li><span class="value __ib __va-t"></span></li>')
                if( typeof value === "object"){
                    li.children().last().find('.value').append(json2DView(value));
                }
                else {
                    li.children().last().find('.value').text(value);
                }

            })
            return html
        }
        var html = $('<ul class="__objectUl"></ul>'), li;
        // for( i in json) {
        $.each(json, function(key,value){
            li = html.append('<li><span class="key __ib __va-t">'+key+'</span> <span class="colun __ib __va-t">:</span> <span class="value __ib __va-t"></span></li>')
            if( typeof value === "object"){
                li.children().last().find('.value').append(json2DView(value));
            }
            else {
                li.children().last().find('.value').text(value);
            }

        })
        return html;
    }
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////



$(document).ready(function () {
	__aa(baseData)
	__ab(baseData)
	openModal()
	jsonHTMLView()
	getCollection()
	addSortBy()
	clearFilter()
	findData()

})


})()