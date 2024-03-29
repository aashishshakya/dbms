(()=> {
// e.stopImmediatePropagation();
// __aa = modal add db data print activeDB f
// __ab = adddb button click
// __ac = dbconnection fun
// __ad dbEdit f
// __ae dbAdd f
//   console.log('localStorage.getItem()',localStorage.getItem('items'))
//   console.log('localStorage.getItem()2',crypt(localStorage.getItem('items'),'d'))
//   console.log('localStorage.getItem()3',JSON.parse(crypt(localStorage.getItem('items'),'d')))
//   console.log('11111',storageItems('local','get'))
//   console.log('11111',storageItems('session','get'))

  // const getItemsLocal = JSON.parse(localStorage.getItem('items'))
  const getItemsLocal = storageItems('local','get')
  // const getItemsSession = JSON.parse(sessionStorage.getItem('items'))
  const getItemsSession = storageItems('session','get')

  let itemsLocalArray = getItemsLocal ? getItemsLocal : [];
  let itemsSessionArray = getItemsSession ? getItemsSession : [];
  let itemsNoArray = [];
  let itemsArray = itemsNoArray.concat(itemsSessionArray, itemsLocalArray);

  const _storage = ['NoStorage','LocalStorage','SessionStorage']
  let dbTableHeading=[
    {heading:'Name',editable:true},
    {heading:'URI',editable:true},
    {heading:'Collection',editable:true},
    {heading:'Web Storage',editable:true},
    {heading:'Status',editable:false},
    {heading:'Action',editable:false},
  ]

  // localStorage.setItem('items', JSON.stringify(itemsLocalArray))
  // console.log('items',data)
  var tabArray = [{
    active:false,
    did:null,
    cid:null,
    id:1,
    windowId:1,
    resultData:[],
    sortDBType : {'_id':-1},
    findByDB : {},
    keys:[],
    limit:20
  }]
  const sortType = [{name:'ASC',value:1},{name:'DESC',value:-1}]
  var dropDownData = [];

var sortDBType = {'_id':-1},
findByDB = {}
function __aa(data,type){
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
		// __aa(newBaseData,'add')
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

					// __aa(JSON.parse(data.data))
					// location.reload();
				})
			}

		}


	})
}
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
function btnCancel(){
	$('.btnCancel').click(function(){
//     $(this).parents('table').find('tr').removeClass('activeEdit')
// $(this).parents('table').removeClass('activeEditTable')
// $(this).text('Connect').removeClass('btnCancel')
// $(this).prev('button').text('Edit').removeClass('dbUpdate').addClass('editDB')
// __aa(baseData)

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
  function loader(th, type){
    if(type == 'show'){
      th.find('.loader2').remove()
      th.prepend('<i class="loader2"></i>')
    }else{
      th.find('.loader2').remove()

    }
  }
  
  function dataLoader(_window,type) {
    var selector = selectorWindow(_window,'c')
    if(type === 'show'){
      selector.find('.dataLoader').remove()
      selector.append(`
<div class="dataLoader">
<ul class="bg-pulse">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</div>
`)
    }else{
      selector.find('.dataLoader').remove()
    }

  }

////////////////////////////////////////////////////////////////////////////////////////

function getDBData(){
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
	$('.sort span').click(function(e){
    e.stopImmediatePropagation();
    var _window = getWindow($(this),'c');
    var windowIndex = tabArrayWindowIndex(_window)
    var dName = tabArray[windowIndex].did
    var cName = tabArray[windowIndex].cid
    var sortDBType = tabArray[windowIndex].sortDBType
    var find = tabArray[windowIndex].findByDB
    var limit = tabArray[windowIndex].limit

    var sortKey = $(this).closest('th').find('h4').text()
    var paretskeyLength = $(this).parents('table').length;
    var  paretskey = [] ;
    for (var i = 0; i < paretskeyLength-1; i++) {
      paretskey.push($(this).parents('table').parent('td').eq(i).attr('data-for'))
    }
    if(paretskeyLength > 1){
      sortKey = paretskey.join('.')+'.'+sortKey
    }
    // _getDBData(dName,cName,20,_window,sortDBType,find)
    // console.log('className', $(this).attr('class'))
// return false
		if($(this).hasClass('desc')){
			$(this).parent().removeClass('desc')
			// $(this).addClass('asc').text('as')
			var sortValue = 1
			sortDBType = {[sortKey]:sortValue}
			// loading('show','Data Loading... ')

      _getDBData(dName,cName,limit,_window,sortDBType,find)

    }
		if($(this).hasClass('asc')){
$(this).parent().removeClass('asc')
// $(this).addClass('desc').text('de')
// var sortKey = $(this).parents('th').find('h4').text()
var sortValue = -1
sortDBType = {[sortKey]:sortValue}
// loading('show','Data Loading... ')

      _getDBData(dName,cName,limit,_window,sortDBType,find)

}
	// 	else{
	// $(this).removeClass('asc')
  //
	// $(this).addClass('desc').text('de')
	// var sortKey = $(this).parents('th').find('h4').text()
	// var sortValue = -1
	// sortDBType = {[sortKey]:sortValue}
	// 	loading('show','Data Loading... ')
  //
  //     _getDBData(dName,cName,20,_window,sortDBType,find)
  //
  //   }
	// addSortBy()
})
}
//////////////////////////////////////////////////////////////////////////////////
  function addDBDetails(){
  $('.addDB').click(function (e) {
    e.stopImmediatePropagation();
    // localStorage.setItem('items', JSON.stringify(itemsLocalArray))

    // alert()
    $('#modelBg').show()
    mappingRowDbs()

  })



    function mappingRowDbs() {
    $('body .dbModal').remove()
      $('body').append(`<div class="dbModal"><h3 class="heading">Your Data Base Details</h3> <span class="closeModel">X</span><div class="dbTable"><table class="__table"><thead><tr></tr></thead><tbody></tbody></table></div><span class="addDBRow _btn">Add Row</span></div>`)
      dbTableHeading.map(function (v,i) {
        $('.dbModal .__table thead tr').append('<th>'+v.heading+'</th>')
      })
      itemsNoArray.concat(itemsSessionArray, itemsLocalArray).map(function (v,i) {
        $('.dbModal .__table tbody').prepend('<tr data-for="'+v.id+'"><td>'+v.name+'</td><td>'+v.uri+'</td><td>'+v.collection+'</td><td>'+v.storageFor+'</td><td><span class="CheckStatus link"></span></td><td><span class="editDbDetail _btn">Edit</span></td></tr>')

      })
      addDBRow()
      editDbDetail()
      checkStatus()
      $('.closeModel').click(function (e) {
        e.stopImmediatePropagation();
        $('#modelBg').hide()
        $('.dbModal').remove()

      })
    }

    function addDBRow() {

      $('.addDBRow').click(function (e) {
        e.stopImmediatePropagation();
        $(this).addClass('hide')

        var uniqueId  = Math.floor(new Date().valueOf() * Math.random())
        // alert()
        $('.dbModal .__table tbody').prepend($('<tr data-for="'+uniqueId+'">'))

        dbTableHeading.map(function (v,i) {
          if(v.heading === 'Web Storage'){
            $('.dbModal .__table tbody tr').first().append('<td data-for="storage">'+createCustomSelect(_storage,_storage[1])+'</td>')
            return false
          }
          if(v.heading === 'Status'){
            $('.dbModal .__table tbody tr').first().append('<td data-for="CHECK" width="50"><span class="CheckStatus link"></span></td>')
            return false
          }
          if(v.heading === 'Action'){
            $('.dbModal .__table tbody tr').first().append('<td><span class="saveDbDetail _btn">Save</span><span class="cancelDbDetail _btn">Cancel</span></td>')
            return false
          }
          $('.dbModal .__table tbody tr').first().append('<td data-for="'+v.heading+'" ><textarea placeholder="'+v.heading+'*'+'" ></textarea></td>')

        })

        saveDbDetails()
      })
    }

    function editDbDetail() {

      $('.editDbDetail').click(function (e) {
        e.stopImmediatePropagation();
        // $(this).addClass('hide')
        var id = $(this).closest('tr').attr('data-for')
        var items = itemsNoArray.concat(itemsSessionArray, itemsLocalArray)
        var found = items.find(function(e) {
          return e.id === id;
        });
        // console.log('items',items)
        // console.log('found',found)
        $(this).closest('tr').after(`<tr data-for="${found.id}" >
<td data-for="Name"><textarea placeholder="Name*" value="">${found.name}</textarea></td>
<td  data-for="URI"><textarea placeholder="URI*" value="">${found.uri}</textarea></td>
<td data-for="Collection"><textarea placeholder="Collection*" value="">${found.collection}</textarea></td>
<td  data-for="storage" >${createCustomSelect(_storage,found.storageFor)}</td>
<td  data-for="status" ><span class="CheckStatus link"></span></td>
<td><span class="saveDbDetail _btn">Update</span><span class="cancelDbDetail _btn">Cancel</span></td>
</tr>`)
        var removeData =  $(this).closest('tr[data-for='+found.id+']').detach()
        saveDbDetails()

        // console.log('items',items);
        // console.log('id',typeof id);
        // console.log('found',found);

        // alert(id)
return false

        $('.dbModal .__table tbody').prepend($('<tr data-for="'+uniqueId+'">'))

        dbTableHeading.map(function (v,i) {
          if(v.heading === 'Web Storage'){
            $('.dbModal .__table tbody tr').first().append('<td data-for="storage">'+createCustomSelect(_storage,_storage[1])+'</td>')
            return false
          }
          if(v.heading === 'Status'){
            $('.dbModal .__table tbody tr').first().append('<td data-for="CHECK" width="50"><span>Check Status</span></td>')
            return false
          }
          if(v.heading === 'Action'){
            $('.dbModal .__table tbody tr').first().append('<td><span class="saveDbDetail _btn">Save</span></td>')
            return false
          }
          $('.dbModal .__table tbody tr').first().append('<td data-for="'+v.heading+'" ><textarea placeholder="'+v.heading+'*'+'" ></textarea></td>')

        })

        // saveDbDetails()

        // addDBRow()
        // editDbDetail()
      })

    }
function checkStatus() {

  $('.dbModal').on('click','.CheckStatus',async function (e) {
    e.stopImmediatePropagation();
    var id = $(this).closest('tr').attr('data-for')
    var data = '';
    var th = $(this)
    if($(this).hasClass('link')){
      loader($(this), 'show')
      $(this).removeClass('link')
      data = await _getCollection(id)
      loader($(this), 'hide')
      console.log(data)
      if(data === 'error'){
        $(this).addClass('wrong')
        setTimeout(function () {
          th.removeClass('wrong').addClass('link')
        },2000)
      }else {
        $(this).addClass('right')
        setTimeout(function () {
          th.removeClass('right').addClass('link')
        },2000)
      }
    }
  })
}

    
    function saveDbDetails() {
      $('body').on('click','.saveDbDetail',function (e) {
        e.stopImmediatePropagation();
        var id, name, uri, collection, storageFor
        id = $(this).closest('tr').attr('data-for')
        name = $(this).closest('tr').find('[data-for=Name] textarea').val()
        collection = $(this).closest('tr').find('[data-for=Collection] textarea').val()
        uri = $(this).closest('tr').find('[data-for=URI] textarea').val()
        storageFor = $(this).closest('tr').find('[data-for=storage] .current').text()

        var dbJson = {
          id,
          name,collection,uri,
          storageFor,
          collections:[]
        }
        if (name.trim() == '' || uri.trim() == '' || collection.trim() == ''){
          alert('Value Can not be blank.')
          return false
        }
        // console.log('name',name)
        // console.log('collection',collection)
        // console.log('uri',uri)
        // console.log('storage',storageFor)

        // var ls = JSON.parse(localStorage.getItem('items'))
        // var ss = JSON.parse(sessionStorage.getItem('items'))
        var ls = storageItems('local','get')
        var ss = storageItems('session','get')
        var new_itemsLocalArray = (ls?ls:[]).filter(function (e) {
          return e.id !== id
        })
        var new_itemsSessionArray = (ss?ss:[]).filter(function (e) {
          return e.id !== id
        })
        var new_itemsNoArray = (itemsNoArray).filter(function (e) {
          return e.id !== id
        })

        itemsSessionArray = new_itemsSessionArray
        itemsLocalArray = new_itemsLocalArray
        itemsNoArray = new_itemsNoArray
        if(storageFor === _storage[0]){
          itemsNoArray.push(dbJson)
          // sessionStorage.setItem('items', JSON.stringify(itemsSessionArray))
          // localStorage.setItem('items', JSON.stringify(itemsLocalArray))
        }
        if(storageFor === _storage[1]){


          // itemsSessionArray.push(dbJson)
          // sessionStorage.setItem('items', JSON.stringify(itemsSessionArray))
          itemsLocalArray.push(dbJson)
          // localStorage.setItem('items', JSON.stringify(itemsLocalArray))
        }
        if(storageFor === _storage[2]){
          // itemsLocalArray = new_itemsLocalArray
          // localStorage.setItem('items', JSON.stringify(itemsLocalArray))
          // itemsSessionArray = new_itemsSessionArray
          itemsSessionArray.push(dbJson)
          // sessionStorage.setItem('items', JSON.stringify(itemsSessionArray))
        }

        // console.log('new_itemsLocalArrayyyyy',new_itemsLocalArray)
        // console.log('new_itemsLocalArrayyyyy',crypt(JSON.stringify(new_itemsLocalArray),'e'))
        // console.log('ddddd',crypt(crypt(JSON.stringify(new_itemsLocalArray),'e'),'d'))
        // sessionStorage.setItem('items', crypt(JSON.stringify(itemsSessionArray),'e'))
        // localStorage.setItem('items', crypt(JSON.stringify(itemsLocalArray),'e'))
        storageItems('local','set',itemsLocalArray)
        storageItems('session','set',itemsSessionArray)
        dropDownData = concatItemsData()
        mappingRowDbs()
      })
      $('body').on('click','.cancelDbDetail',function (e) {

        mappingRowDbs()

      })
    }
    
  }
////////////////////////////////////////////////////////////////////////////////////////

  function tableView(_window,w){
    var selector = selectorWindow(_window,'c')
    selector.find('.dataBox').empty()
    selector.find('.dataBox').html(json2Table(w,_window))
    sortDoc()
    findBy()
  }
let ttable = 0;
  let ram = [];

function json2Table(json,_window) {
  var windowIndex = tabArrayWindowIndex(_window)
var sortDBType = tabArray[windowIndex].sortDBType



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
  var class1 = '';
  var class2 = '';

  Object.keys(sortDBType).forEach(function(key) {

if(key == allKeys){
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

  $(table).find('tr').append('<th class="'+class2+'"><h4 class="'+class1+'">'+allKeys+'</h4><div class="queryAction"><div class="__ib find" tooltip="Find In '+allKeys+'" flow="down"><span class="findIcon" >&#9906;</span></div><div class="__ib sort '+class1+'" ><span class="asc" tooltip="'+allKeys+' Order By Ascending" flow="down">&#8675;</span><span class="desc" tooltip="'+allKeys+' Order By Descending" flow="down">&#8673;</span></div></div></th>')



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
        	if(value !== null && typeof value == 'object' && value.length !== undefined  && typeof value[0] == 'object'){

        		$(table).find('[data-for="'+vkey+'"][data-row="'+i+'"]').html(json2Table(value,_window))
// $(table).find('[data-for='+vkey+'][data-row='+i+']').text('value')

}else if (value !== null && value.length === undefined && typeof value == 'object') {
  $(table).find('[data-for="'+vkey+'"][data-row="'+i+'"]').html(json2Table([value],_window))



}else{
	$(table).find('[data-for="'+vkey+'"][data-row="'+i+'"]').text(value)

}



}




}
})

	})


  var tabArrayIndex = tabArrayWindowIndex(_window)
  tabArray[tabArrayIndex].keys = [...new Set(keys.concat(tabArray[tabArrayIndex].keys))]

  // tabArray[tabArrayIndex].resultData = resultData
  // console.log('ramramramramramram',tabArray )

  // ram = keys
  // console.log('kkkkkkkkkk',ram )
  // console.log('ttablettablettable',ttable )

	return table
}

////////////////////////////////////////////////////////////////////////////////////////
function addSortBy(){
	$('.sortBy').empty()
	$('.sortBy').append('<li><div class="__ib">'+Object.keys(sortDBType)[0]+'</div><div class="__ib">'+sortDBType[Object.keys(sortDBType)[0]]+'</div></li>')
}
////////////////////////////////////////////////////////////////////////////////////////

function findBy(){
	$('.find,.filterIcon').click(function(e){
    e.stopImmediatePropagation();
    if($(this).hasClass('filterIcon'))
    {
$(this).toggleClass('active')
    }
    var _window = getWindow($(this),'c');
    var selector = selectorWindow(_window, 'c')
    var heading = $(this).closest('th').children('h4').text()
    selector.find('.filterIcon').addClass('active')
    selector.addClass('showFilter')
    // const json_getAllKeys = (tabArray[0].resultData) => (
    //   tabArray[0].resultData.reduce((keys, obj) => (
    //     keys.concat(Object.keys(obj).filter(key => (
    //       keys.indexOf(key) === -1))
    //     )
    //   ), [])
    // )
// console.log('json_getAllKeys',json_getAllKeys)
// 		$('#findModel,#modelBg').fadeIn()
// 		$('#findValue').val('')
		var key = $(this).parents('th').find('h4').text()
		var paretskeyLength = $(this).parents('table').length
		var  paretskey = [] ;
		for (var i = 0; i < paretskeyLength-1; i++) {
			paretskey.push($(this).parents('table').parent('td').eq(i).attr('data-for'))
		}
		if(paretskeyLength > 1){
			key = paretskey.join('.')+'.'+key
		}
    selector.find('.filterWindow .searchBy .current').text(key)

    // console.log('keykeykey',key)
		// $('#findModel h3').html('Find in <b class="bKey">'+key+'</b> Column')

	})



}

function findData(){

	$('.findSearch').click(function(e){
    e.stopImmediatePropagation()
    var _window = getWindow($(this),'c')
    var selector = selectorWindow(_window,'c')
    var findInCollection = selector.find('.searchBy.actionBox .current').text();
    var sortCollection = selector.find('.sortBy.actionBox [data-type=collection] .current').text();
    var findValue = selector.find('.searchBy.actionBox .findBox .findValue').val();
    var orderValue = selector.find('.sortBy.actionBox [data-type=order] .current').text();
    var findType = selector.find('.searchBy.actionBox .findType input:radio[name=findType'+_window+']:checked').val()
    var limit = selector.find('.limitBy.actionBox .rangeValue').text()
    var windowIndex = tabArrayWindowIndex(_window)
    var dName = tabArray[windowIndex].did
    var cName = tabArray[windowIndex].cid
    var sort = {[sortCollection]:orderValue === 'ASC' ? 1 : -1}
    var find  = findInCollection === 'N/A' || findInCollection.trim().length === 0 || !findValue ? {} : {key:findInCollection,findType,value:findValue.toString()}
    _getDBData(dName,cName,parseInt(limit),_window,sort,find)

})

	$('.findCancel').click(function(e){
    e.stopImmediatePropagation()
    var _window = getWindow($(this),'c')
    var selector = selectorWindow(_window,'c')
    selector.removeClass('showFilter')
    selector.find('.filterIcon').removeClass('active')
  })


}

////////////////////////////////////////////////////////////////////////////////////////
function clearFilter(){
	$('.clearFilter').click(function(){
		if($(this).hasClass('enable')){
			$(this).removeClass('enable')
			findByDB = {}
			loading('show','Data Loading... ')

			getDBData()

		}

	})
}
////////////////////////////////////////////////////////////////////////////////////////
function jsonHTMLView(w){
	$('.jsonView').click(function(e){
    e.stopImmediatePropagation();
    var _window = getWindow($(this),'c')
    jsonView(_window,w)
})
	$('.arrayView').click(function(e){
    e.stopImmediatePropagation();
    var _window = getWindow($(this),'c')
    arrayView(_window,w)
})
	$('.tableView').click(function(e){
    e.stopImmediatePropagation();
    var _window = getWindow($(this),'c')
    tableView(_window,w)
    // var selector = selectorWindow(_window,'c')
    // selector.find('.dataBox').empty()
    // selector.find('.dataBox').html(json2Table(w))
	})

}
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
	function renderDBList(dbsList){
        dbsList.map(function(v){
            $('#content .content .navBox .navHeader .navHeading .dropdown .liBox').append($('<li class="liDb" data-id="'+v.id+'">').html('<h4 class="liDbName">'+v.name+'</h4>'));
        })
	}
////////////////////////////////////////////////////////////////////////////////////////
  let windowNo = 1
  function createContentBox(){
  $('#content').prepend($('<div />',{
    class : 'content window'+windowNo,
    'data-window' : windowNo,
    html : `<div class="navBox toggle">
      <div class="navHeader">
          <button class="navHeading"><h3 class="__ib heading">Select DB</h3>
        <ul class="dropdown">
            <div class="liBox">
            </div>
        </ul>
      </button></div>
      <div class="navCollectionBox"></div>
      <div class="navFooter"><span class="download">Download</span></div></div><div class="dataInfo"><span class="infoTotal">Total : 12231</span></div><div class="dataBox"></div>`
  }))
    $('#headerContent ul.windowTabUl').append('<li class="tab'+windowNo+'" data-tab="'+windowNo+'"><div class="dname">********</div><hr><div class="cname">*********</div></li><li class="addTab" >+</li>')
    renderDBList(baseData)
    liDBSelect()
    // stayRightBox()
    windowNo ++
  }
//////////////////////////////////////////////////////////////////////////////////////// dd
  function liDBSelect(){
  $('.liBox li .liDbName').click(function () {
    $(this).closest('.navHeading').find('.dropdown li').removeClass('active fail pass')
    $(this).parent().addClass('active')
    var value = $(this).text()
    var id = $(this).parent().attr('data-id')
    $(this).closest('.navHeading').find('h3').attr('data-id',id).text(value)
    var _window=$(this).closest('.content').attr('data-window')
    $('#headerContent .tab[data-tab='+_window+']').removeClass('dpshow')
    _getCollection(id,_window)
    $('.windowTabUl li.tab'+_window+'[data-tab='+_window+']').find('.dname').text(value)
    $('.windowTabUl li.tab'+_window+'[data-tab='+_window+']').find('.cname').text('**********')
    $(this).closest('.navHeading').addClass('active')
  })
  }
//////////////////////////////////////////////////////////////////////////////////////// we are using v2
   async function _getCollection(id,_window){
  var result = 'error' ;
var items = concatItemsData()
    var selectedData =  items.find(function (e) {
       return e.id === id
     })
     if(!_window && !selectedData){
       var name = $('.dbTable td[data-for=Name] textarea').val()
       var collection = $('.dbTable td[data-for=URI] textarea').val()
       var uri = $('.dbTable td[data-for=Collection] textarea').val()
       console.log(name,collection,uri)

       if(name && collection && uri){
         selectedData = {name,collection,uri}
         // selectedData = {name,collection,uri}

       }else{
         alert('Please Fill The Value.')
         return false
       }
     }
     // console.log('itemssss',items)
     // console.log('id',id)
     // console.log('id',selectedData)
    var data = {id}
    var values ;
      values = {	"for": "dbConnect",	values : selectedData}
     loader($('#headerContent .tab[data-tab='+_window+']'),'show')
     $('#headerContent .tab[data-tab='+_window+']').removeClass('dpshow')
     var strValues = JSON.stringify(values)
     var sendValues = crypt(strValues,'e')
     console.log('sendValues',sendValues)
     console.log('sendValuesttt', values)
     await dbHTTP('post','/',JSON.stringify({e:sendValues}),function(resultData){
       loader($('#headerContent .tab[data-tab='+_window+']'),'hide')
       if(resultData.Error === undefined){
         var dropDownDataIndex = dropDownData.findIndex((obj => obj.id == id));
         dropDownData[dropDownDataIndex].collections = resultData
         result = resultData
       }

       // console.log('resultData',resultData)
      _collectionList(resultData,_window)
       $('#headerContent .tab[data-tab='+_window+']').addClass('dpshow')
      // $('.window'+_window+'[data-window='+_window+']').find('.navHeading').removeClass('active')
    })
     return result
  }


  function _getDBData(dName,cName,limit,_window,sortDBType,findByDB){
    var sort = sortDBType ? sortDBType : tabArray[tabArrayWindowIndex(_window)].sortDBType
    var find = findByDB ? findByDB : tabArray[tabArrayWindowIndex(_window)].findByDB
    var items = concatItemsData()
    var selectedData =  items.find(function (e) {
      return e.id === dName
    })
    var data = {dName:dName,uri:selectedData.uri,collection:selectedData.collection,cName:cName,limit,sort,find}
    var values = {  "for": "dbDocumentConnect", values : data}
    var selector = selectorWindow(_window,'c')

dataLoader(_window,'show')
    loader($('#headerContent .tab[data-tab='+_window+']'),'show')
    $('#headerContent .tab[data-tab='+_window+']').removeClass('dpshow')

    var strValues = JSON.stringify(values)
    var sendValues = crypt(strValues,'e')
    dbHTTP('post','/',JSON.stringify({e:sendValues}),function(resultData){

      // console.log('resultDataresultDataresultData',resultData.status)
// console.log('resultData.Error',resultData.Error)
      if(resultData.Error === undefined && resultData.status === undefined){
        var tabArrayIndex = tabArrayWindowIndex(_window)
        tabArray[tabArrayIndex].resultData = resultData
        tabArray[tabArrayIndex].did = dName
        tabArray[tabArrayIndex].cid = cName
        tabArray[tabArrayIndex].sortDBType = sort
        tabArray[tabArrayIndex].findByDB = find
        tabArray[tabArrayIndex].limit = limit

        var dObj = items.find(value=> value.id === dName)
        var dname = dObj.name
        $('#headerContent .tab[data-tab='+_window+']').find('.dname').text(dname)
        selectorWindow(_window,'t').find('.cname').text(cName)


        dbloadData = resultData.data
        selector.removeClass('showFilter')
        selector.find('.dataInfo').remove()
        selector.find('.filterWindow').remove()
        selector.removeClass('gradientBG')
        selector.prepend(`
<div class="dataInfo">
<div class="querydataInfoBox" tooltip=${JSON.stringify(data)} flow="down" ><span class="title"><span class="filterIcon"><spam class="line1"></spam><spam class="line2"></spam><spam class="line1"></spam></span> <b>Query : </b> </span> <span class="queryData">{<span class="title">db:</span>${tabArray[tabArrayIndex].did}, <span class="title">collection:</span>${tabArray[tabArrayIndex].cid}, <span class="title">find:</span>${JSON.stringify(tabArray[tabArrayIndex].findByDB)}, <span class="title">orderBy:</span>${JSON.stringify(tabArray[tabArrayIndex].sortDBType)}, <span class="title">limit:</span>${tabArray[tabArrayIndex].limit}}</span></div>
<div class="actionIcons"><span class="reset">&#10226;</span></div>
<div class="views dataInfoBox"><span class="title">Data Box View : </span>
${createSelect(dataPages)}
</div>
          <div class="dataInfoBox" id="dddd"><span class="title">Data View : </span> ${createSelect(dataView)}</div>
           <div class="dataInfoBox"><span class="title">Total : </span><span class="infoTotal">${tabArray[tabArrayIndex].limit} / ${resultData.details.count}</span></div>
</div>
<div class="filterWindow"></div>`)
        selector.find('.dataBox').html(json2Table(resultData.data,_window))
        // jsonHTMLView(resultData.data)
        sortDoc()
        findBy()
        // customSelect()
        create_custom_dropdowns()
        actionBox(_window,tabArray,tabArrayWindowIndex,sortType)

      }
      loader($('#headerContent .tab[data-tab='+_window+']'),'hide')

      dataLoader(_window,'hide')

    })
  }
////////////////////////////////////////////////////////////////////////////////////////
  function collectionList(data,window){
  var selector = selectorWindow(window)
    if(data.Error){
      selector.find('.navCollectionBox').empty()
      selector.find('.navCollectionBox').append('<h4 class="errorMsg"><b>Error: </b>'+data.Error.name+'</h4>')
      selector.find('.dropdown .liBox li.active').addClass('fail')
    }else if(data.status == 0){
      selector.find('.navCollectionBox').empty()
      selector.find('.navCollectionBox').append('<h4 class="errorMsg"><b>Error: </b>Network Error</h4>')
      selector.find('.dropdown .liBox li.active').addClass('fail')

    }else{
      selector.find('.navCollectionBox ul').remove()
      selector.find('.navCollectionBox').html('<ul class="navCollectionUl"></ul>')
      selector.find('.dropdown .liBox li.active .collectionsBox').remove()
      selector.find('.dropdown .liBox li .collectionsBox legend').removeClass('plus').addClass('minus')
      selector.find('.dropdown .liBox li .collectionsBox .collectionUl').removeClass('show').addClass('hide')
      selector.find('.dropdown .liBox li.active').append('<fieldset class="collectionsBox"><legend class="plus">Collections</legend><ul class="collectionUl show"></ul></fieldset>')
      data.map(function (value,i) {
        selector.find('.navCollectionBox ul.navCollectionUl').append('<li data-no="'+(parseInt(i)+1)+'"><span class="text">'+value.name+'</span></li>')
        selector.find('.dropdown .liBox li.active .collectionsBox .collectionUl').append('<li class="collectionLi">'+value.name+'</li>')

      })
      selector.find('.dropdown .liBox li.active').addClass('pass')
      collectionLi()
      navCollectionUl()
    }

  }
  function _collectionList(data,window){
  var selector = $('.tab[data-tab='+window+']')
    if(data.Error){
      // selector.find('.navCollectionBox').empty()
      // selector.find('.navCollectionBox').append('<h4 class="errorMsg"><b>Error: </b>'+data.Error.name+'</h4>')
      // selector.find('.dropdown .liBox li.active').addClass('fail')
      selector.find('._dropdown ._dropdownUl li._dropdownLi.active').addClass('fail')
    }else if(data.status == 0){
      // selector.find('.navCollectionBox').empty()
      // selector.find('.navCollectionBox').append('<h4 class="errorMsg"><b>Error: </b>Network Error</h4>')
      // selector.find('.dropdown .liBox li.active').addClass('fail')
      selector.find('._dropdown ._dropdownUl li._dropdownLi.active').addClass('fail')


    }else{
      // selector.find('.navCollectionBox ul').remove()
      // selector.find('.navCollectionBox').html('<ul class="navCollectionUl"></ul>')
      // selector.find('#headerContent .tab .dname').remove()
      selector.find('._dropdown ._dropdownUl li._dropdownLi.active .collectionsBox').remove()
      selector.find('._dropdown ._dropdownUl li._dropdownLi .collectionsBox legend').removeClass('plus').addClass('minus')
      selector.find('._dropdown ._dropdownUl li._dropdownLi .collectionsBox .collectionUl').removeClass('show').addClass('hide')
      selector.find('._dropdown ._dropdownUl li._dropdownLi.active').append('<fieldset class="collectionsBox"><legend class="plus">Collections</legend><ul class="collectionUl show"></ul></fieldset>')
      data.map(function (value,i) {

        //selector.find('.navCollectionBox ul.navCollectionUl').append('<li data-no="'+(parseInt(i)+1)+'"><span class="text">'+value.name+'</span></li>')
        selector.find('._dropdown ._dropdownUl li._dropdownLi.active .collectionsBox .collectionUl').append('<li class="collectionLi">'+value.name+'</li>')
        // var dObj = dropDownData.find(v=> v.id === value.did)
        // var dname = value.did === null ? '******' : dObj.name
      })
      selector.find('._dropdown ._dropdownUl li._dropdownLi.active').addClass('pass')
      // collectionLi()
      // navCollectionUl()
    }
    _collectionLi()
  }
////////////////////////////////////////////////////////////////////////////////////////
  function progress(ht,msg){
ht.html('<ul class="progress"><li></li><li></li><li></li><li></li><li></li></ul>')
  }

////////////////////////////////////////////////////////////////////////////////////////
  function collectionExpend(){
  $('body').on('click','legend',function () {
    // var _window=$(this).closest('.content').attr('data-window')
    // var selector = $('.window'+_window+'[data-window='+_window+']')
if($(this).hasClass('plus')){
  $(this).toggleClass('plus minus')
  $(this).next('.collectionUl').toggleClass('show hide')
}else {
  $(this).toggleClass('plus minus')
  $(this).next('.collectionUl').toggleClass('show hide')

}


  })
  }
////////////////////////////////////////////////////////////////////////////////////////
  function collectionLi(){
  $('.collectionLi').click(function (event) {
    event.stopImmediatePropagation();
    var _window=$(this).closest('.content').attr('data-window')
    var dName = $(this).closest('.liDb').attr('data-id')
    var dNameText = $(this).closest('.liDb').find('.liDbName').text()
    var cName = $(this).text()
    document.title = 'DBMS | '+dNameText+ ' | '+cName
    selectorWindow(_window).find('.navCollectionBox ul.navCollectionUl').empty()
    var thisDataLiArray = $(this).closest('.collectionUl').find('.collectionLi').each(function (i,v) {

      selectorWindow(_window).find('.navCollectionBox ul.navCollectionUl').append('<li data-no="'+(parseInt(i)+1)+'"><span class="text">'+$(this).text()+'</span></li>')
    })

    $('.windowTabUl li.tab'+_window+'[data-tab='+_window+']').find('.cname').text(cName)
    $('.windowTabUl li.tab'+_window+'[data-tab='+_window+']').find('.dname').text(dNameText)
    selectorWindow(_window).find('.navBox .navHeader .navHeading .heading').text(dNameText)
    _getDBData(dName,cName,20,_window)
    navCollectionUl()
  })

  }
  function _collectionLi(){
  $('.collectionLi').click(function (event) {
    event.stopImmediatePropagation();
    var _window=$(this).closest('.tab').attr('data-tab')
    var dName = $(this).closest('._dropdownLi').attr('data-id')
    var dNameText = $(this).closest('._dropdownLi').find('.liDbName').text()
    var cName = $(this).text()
    // document.title = 'DBMS | '+dNameText+ ' | '+cName
    // $(this).closest('.tab').find('.cname').text(cName)
    // $(this).closest('.tab').find('.dname').text(dNameText)
    _getDBData(dName,cName,20,_window,{'_id':-1},{})
  })
  }

  function navCollectionUl() {
    $('.navCollectionUl li').click(function () {
      var _window=$(this).closest('.content').attr('data-window')
      var dName = $(this).closest('.navBox').find('.navHeader .navHeading .heading').attr('data-id')
      var cName = $(this).find('.text').text()
      $(this).closest('.navCollectionUl').find('li').removeClass('active')
      $(this).addClass('active')
      $('.windowTabUl li.tab'+_window+'[data-tab='+_window+']').find('.cname').text(cName)
      _getDBData(dName,cName,20,_window)
    })
  }

  function  _dropdownLi() {
    $('._dropdownUl li .liDbName').click(function () {
      $(this).closest('._dropdownUl').find('._dropdownLi').removeClass('active fail pass')
      $(this).parent().addClass('active')
      var value = $(this).text()
      var id = $(this).parent().attr('data-id')
      // $(this).closest('.tab').find('.dname').text(value)
      var _window=$(this).closest('.tab').attr('data-tab')
      _getCollection(id,_window)
      // $(this).closest('.tab').find('.dname').text(value)
      // $(this).closest('.tab').find('.cname').text('**********')
      // $(this).closest('.navHeading').addClass('active')
    })
  }

////////////////////////////////////////////////////////////////////////////////////////

  function bodyFunc(){
    $("html, body").on('click',function(e) {
      $('.navBox').addClass('toggle')
    })
    $('body').on('click','legend',function () {
      if($(this).hasClass('plus')){
        $(this).toggleClass('plus minus')
        $(this).next('.collectionUl').toggleClass('show hide')
      }else {
        $(this).toggleClass('plus minus')
        $(this).next('.collectionUl').toggleClass('show hide')
      }
    })
    $('body').on('click','.navHeading',function (e) {
        e.stopPropagation();
      $(this).parents('.navBox').removeClass('toggle')

    })

  }
////////////////////////////////////////////////////////////////////////////////////////
  function buildTabs(initial){
    $('#headerContent ul.windowTabUl').empty()
    tabArray.map(function (v,index) {
      var dObj = dropDownData.find(value=> value.id === v.did)
      var dname = v.did === null ? index+1 : dObj.name
      var cname = v.cid === null ? 'New Tab' : v.cid
      var i = index+1
      $('#headerContent ul.windowTabUl .tab').removeClass('active')
      $('#headerContent ul.windowTabUl').append('<fieldset class="tab active dpshow" data-tab="'+i+'"><legend class="dname">'+dname+'</legend><div><hr><div class="cname">'+cname+'</div></div></fieldset>')

if(initial){
  addWindow(i)
}

    })
    // $('#headerContent ul.windowTabUl').append('<li class="addTab">+</li>')

    if(!initial) {
      addWindow(tabArray.length)
    }
    tabClick()

    // $('#headerContent ul.windowTabUl').append('<li class="tab'+windowNo+'" data-tab="'+windowNo+'"><div class="dname">********</div><hr><div class="cname">*********</div></li><li class="addTab">+</li>')
  }
  function defaultDropdown(){
    // let defaultDropdown =  baseData.map(function (v) {
    //   return {id:v.id, name:v.name, tag:v.for, collections:[]}
    // })
    // console.log('defaultDropdown',defaultDropdown)
    // console.log('itemsArray',itemsArray)

    dropDownData = itemsArray
    // dropDownData = defaultDropdown  //old
  }


  function addWindow(windowNo){
  $('#content .content').removeClass('active')
    $('#content').prepend($('<div />',{
      class : 'content active gradientBG',
      'data-window' : windowNo,
      html : `<div class="dataBox"><div class="welcomeMessage">Online Mongo Database Management System</div>`
    }))
    scroll(windowNo)
  }

//////////////////////////////////////////////////////////////////////////////////////// v2
  function tabClick(){
  $('.windowTabUl .tab > div, .windowTabUl .tab .dname, .windowTabUl .tab hr').click(function(){
    var tabId = $(this).parent().attr('data-tab')
    var _this = $(this).parent()

    $('.content').removeClass('active')
$('.content[data-window='+tabId+']').addClass('active')
    if(!_this.hasClass( "active" )){
      $('.windowTabUl .tab').removeClass('active dpshow')
    }
    if(tabArray[getWindow($(this),'t')-1].cid !== null && !_this.hasClass( "active" )){
      _this.addClass('active')
}else{
  _this.addClass('active dpshow')
      _this.find('._dropdown').remove()
      _this.append('<div class="_dropdown"><div class="_liBox"><ul class="_dropdownUl"></ul></div></div>')
      dropDownData.map(function(v,i){
        _this.find('._dropdown ._dropdownUl').append('<li class="_dropdownLi" data-id="'+v.id+'"><h4 class="liDbName">'+v.name+'</h4></li>')
        if(v.collections.length >= 1) {
          _this.find('._dropdown ._dropdownUl li._dropdownLi').last().append('<fieldset class="collectionsBox"><legend class="minus">Collections</legend><ul class="collectionUl hide"></ul></fieldset>')
          v.collections.map(function (value, i) {
            _this.find('._dropdown ._dropdownUl li._dropdownLi').last().find('.collectionsBox .collectionUl').append('<li class="collectionLi">'+value.name+'</li>')

          })
        }
      })
}


    _dropdownLi()
    _collectionLi()
  })

  }
  function addTab(){
    $('.addTab').click(function(e){
      e.stopPropagation();
      console.log('tabArray',tabArray.length)
      if(tabArray.length >= 4 ){
        // $('#headerContent .addTab').addClass('disabled')
        return false
      }
      tabArray.push({
        active:true,
        did:null,
        cid:null,
        windowId:tabArray.length+1,
        dropDown:[],
        sortDBType : {'_id':-1},
        findByDB : {},
        keys: [],
        limit:20,
      })
      if(tabArray.length >= 4 ){
        $('#headerContent .addTab').addClass('disabled')
        // return false
      }
      buildTabs(false)
      // addBuildTab()
    })

  }
////////////////////////////////////////////////////////////////////////////////////////
  function create_custom_dropdowns() {
    $('select').each(function(i, select) {
      if (!$(this).next().hasClass('dropdown')) {
        $(this).after('<div class="dropdown ' + ($(this).attr('class') || '') + '" tabindex="0"><span class="current"></span><div class="list"><ul></ul></div></div>');
        var dropdown = $(this).next();
        var options = $(select).find('option');
        var selected = $(this).find('option:selected');
        dropdown.find('.current').addClass(selected.val()).html(selected.data('display-text') || selected.text());
        options.each(function(j, o) {
          var display = $(o).data('display-text') || '';
          dropdown.find('ul').append('<li class="option ' + $(o).val() +' '+ ($(o).is(':selected') ? 'selected' : '') + '" data-value="' + $(o).val() + '" data-display-text="' + display + '">' + $(o).text() + '</li>');
        });
      }
    });
  }

// Event listeners
  $(document).on('input', '.slider', function(event) {
var value = $(this).trigger('change').val();
$(this).closest('.rangeBox').find('.rangeValue').text(value)
  })
// Open/close
  $(document).on('click', '.dropdown', function(event) {
    event.stopImmediatePropagation();
    // console.log('thiddropdown',$(this))
    $('.dropdown').not($(this)).removeClass('open');
    $(this).toggleClass('open');
    if ($(this).hasClass('open')) {
      $(this).find('.option').attr('tabindex', 0);
      $(this).find('.selected').focus();
    } else {
      $(this).find('.option').removeAttr('tabindex');
      $(this).focus();
    }
  });
// Close when clicking outside
  $(document).on('click', function(event) {
    if ($(event.target).closest('.dropdown').length === 0) {
      $('.dropdown').removeClass('open');
      $('.dropdown .option').removeAttr('tabindex');
    }
    if ($(event.target).closest('.tab').length === 0) {
      $('.tab').removeClass('dpshow');
      // $('.dropdown .option').removeAttr('tabindex');
    }
    if ($(event.target).closest('.rangeBox').length === 0) {


    }
    event.stopPropagation();
  });
// Option click

  $(document).on('click', '.dropdown .option', function(event) {
    event.stopImmediatePropagation();
    $( ".option" ).dblclick();
    // console.log('iclickoption',$(this))

    const _window = getWindow($(this),'c')
    $(this).closest('.list').find('.selected').removeClass('selected');
    $(this).addClass('selected');
    var text = $(this).data('display-text') || $(this).text();
    var _class = $(this).attr('class')
    $(this).closest('.dropdown').find('.current').removeClass().addClass(_class).removeClass('selected option').addClass('current').text(text);
    $(this).closest('.dropdown').prev('select').val($(this).data('value')).trigger('change');
    customSelectAction($(this),_window)
  });

// Keyboard events
  $(document).on('keydown', '.dropdown', function(event) {
    event.stopImmediatePropagation();

    var focused_option = $($(this).find('.list .option:focus')[0] || $(this).find('.list .option.selected')[0]);
    // Space or Enter
    if (event.keyCode == 32 || event.keyCode == 13) {
      if ($(this).hasClass('open')) {
        focused_option.trigger('click');
      } else {
        $(this).trigger('click');
      }
      return false;
      // Down
    } else if (event.keyCode == 40) {
      if (!$(this).hasClass('open')) {
        $(this).trigger('click');
      } else {
        focused_option.next().focus();
      }
      return false;
      // Up
    } else if (event.keyCode == 38) {
      if (!$(this).hasClass('open')) {
        $(this).trigger('click');
      } else {
        var focused_option = $($(this).find('.list .option:focus')[0] || $(this).find('.list .option.selected')[0]);
        focused_option.prev().focus();
      }
      return false;
      // Esc
    } else if (event.keyCode == 27) {
      if ($(this).hasClass('open')) {
        $(this).trigger('click');
      }
      return false;
    }
  });

  // $(document).ready(function() {
  //   create_custom_dropdowns();
  // });
////////////////////////////////////////////////////////////////////////////////////////
  function customSelectAction(_this,_window){
    if(!_window){
      return false
    }
    // console.log('_window',_window)
var value = _this.attr('data-value'),
  resultData = tabArray[tabArrayWindowIndex(_window)].resultData.data
    // console.log('vavvvvvvvv',value)
    if(value === 'jsonView'){
      jsonView(_window,resultData)
    }
    if(value === 'arrayView'){
      arrayView(_window,resultData)
    }
    if(value === 'tableView'){
      tableView(_window,resultData)
    }
    if(value === 'singleView'){
      // tableView(_window,resultData)
    }
    if(value === 'splitView'){
      // tableView(_window,resultData)
    }
    if(value === 'squareView'){
      // tableView(_window,resultData)
    }
  }


////////////////////////////////////////////////////////////////////////////////////////
  function tabArrayWindowIndex(windowId){
    var tabArrayIndex = tabArray.findIndex((obj => obj.windowId == windowId));
    return tabArrayIndex
  }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function createSelect(dataView) {
    let s = $("<div><div class='__ib'><select /></div></div>");
    dataView.map(function (v,i) {
      var qqq
      if(v.default ){
        qqq = 'data-display-text="'+v.name+'"'
      }else {
        qqq = ''
      }

      $(s).find('select').append('<option value="'+v.class+'" '+qqq+' >'+v.name+'</option>')

    })
    return $(s).html();


  }

  function createCustomSelect(data,current){
    var contenteditable = true;
    if(current == -1){
      current = 'DESC'
       contenteditable = false;

    }
    if(current == 1){
      current = 'ASC';
      contenteditable = false;
    }
    if(current === _storage[0] || current === _storage[1] || current === _storage[2]){
      contenteditable = false;
    }



    var select = $('<div><div class="__ib"><div class="dropdown"><span class="current" contenteditable='+contenteditable+' placeholder = "Type Here" >'+current+'</span><div class="list"><ul></ul></div></div></div></div>')
    data.map(function (v) {
      if(typeof v !== 'object'){
        $(select).find('.list ul').append('<li class="option">'+v+'</li>')

      }else {
        $(select).find('.list ul').append('<li class="option" data-value='+v.value+' >'+v.name+'</li>')
      }
    })
    return $(select).html()
  }
  function actionBox(_window) {
    var tabArrayIndex = tabArrayWindowIndex(_window)
    var sortKey = Object.keys(tabArray[tabArrayIndex].sortDBType)[0]
    var orderBy = tabArray[tabArrayIndex].sortDBType[sortKey]
    // console.log('sortKeysortKeysortKey',sortKey)
    // console.log('orderByorderByorderBy',orderBy)
    selectorWindow(_window,'c').find('.filterWindow').append(`
<div class="__ib actionBox searchBy"><span class="title"> Find In : ${createCustomSelect(tabArray[tabArrayIndex].keys,'N/A')}</span>
<div class="findBox __ib ">
      <div class=" findType">
        <div class="__ib"><input type="radio" name="findType${_window}" value="String" id="String${_window}" checked=""><label for="String${_window}">String</label></div><div class="__ib"><input type="radio" name="findType${_window}" id="ID${_window}" value="ID"><label for="ID${_window}">ID</label></div><div class="__ib"><input type="radio" name="findType${_window}" id="Number${_window}" value="Number"><label for="Number${_window}">Number</label></div>
      </div>
      <input type="text" name="findValue" class="findValue"  placeholder="Type Value here">

   </div>
</div>
<div class="__ib actionBox sortBy"><span class="title" data-type="collection"> Sort By : ${createCustomSelect(tabArray[tabArrayIndex].keys, sortKey)} </span><span  data-type="order"> ${createCustomSelect(sortType,orderBy)} </span></div>
<div class="__ib actionBox limitBy"><span class="title" data-type="collection"> Pages : </span> <div class="rangeBox __ib"><span class="rangeValue">${tabArray[tabArrayIndex].limit}</span><div class="inputRangeBox arrow_box"><input type="range" min="1" max="200" value="${tabArray[tabArrayIndex].limit}" class="slider"></div></div></div>
<div align="right" class="iconBox __ib"><span class="__ib icon findSearch">✔</span><span class="__ib icon findCancel">✘</span></div>
`)
    findData()
    // console.log('tabArraytabArraytabArray',tabArray)
  }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function scroll(_window){
    $('.dataBox').scroll(function(e) {
      e.stopImmediatePropagation();

      // // console.log('sccrlll',$(this).scrollTop())
      // console.log('_window_window',_window)
      if ($(this).scrollTop() > 30) {
        var _window = getWindow($(this),'c')
        var selector = selectorWindow(_window,'c')
        selector.removeClass('showFilter')
        selector.find('.filterIcon').removeClass('active')
      }
      else {
        // $('#scrollDiv').fadeOut('slow');
      }
    });
  }
////////////////////////////////////////////////////////////////////////////////////////
  function concatItemsData(){
    // console.log('localStorage.getItem()',localStorage.getItem('items'))
    // const getItemsLocal = JSON.parse(localStorage.getItem('items'))
    // const getItemsSession = JSON.parse(sessionStorage.getItem('items'))
    const getItemsLocal = storageItems('local','get')
    const getItemsSession = storageItems('session','get')

    let itemsLocalArray = getItemsLocal ? getItemsLocal : [];
    let itemsSessionArray = getItemsSession ? getItemsSession : [];
    // let itemsNoArray = [];
    return itemsNoArray.concat(itemsSessionArray, itemsLocalArray);
  }

///////////////////////////////////////////////////////////////////////////////////////
  function crypt(str,type){
    var string = str
    switch(type) {
      case 'e':
        string = window.btoa(str)
        break;
      case 'd':
        string = window.atob(str);
        break;
      default:
        string = str
    }
    return string
  }

  function storageItems(storage,type,data){
    let localGetItem = localStorage.getItem('items')
    let sessionGetItem = sessionStorage.getItem('items')
    const _localItemArray = localGetItem ? crypt(localGetItem,'d') : '[]'
    const _sessionItemArray = sessionGetItem ? crypt(sessionGetItem,'d') : '[]'
    console.log('storage',storage)
    console.log('type',type)
    console.log('data',data)
    console.log('_localItemArray',_localItemArray)
    console.log('_sessionItemArray',data)
    console.log('localGetItem ? crypt(localGetItem',localGetItem ? crypt(localGetItem,'d') : [])
    if(storage === 'local' && type === 'get'){
     return  JSON.parse(_localItemArray)
    }
    if(storage === 'session' && type === 'get'){
      return  JSON.parse(_sessionItemArray)
    }
    if(storage === 'local' && type === 'set'){
      return localStorage.setItem('items', crypt(JSON.stringify(data),'e'))
    }
    if(storage === 'session' && type === 'set'){
      return sessionStorage.setItem('items', crypt(JSON.stringify(data),'e'))
    }
  }
  /////////////////////////////////////////////////////////////////////////////////////
  function jsonUlAction(){
    $('body').on('click dblclick','.jsonUlAction, .__objectUl li:nth-child(2)',function () {
$(this).closest('.__objectUl').toggleClass('close')
    })
    $('body').on('dblclick','.jsonUlAction, .__objectUl li:nth-child(2)',function () {
      $(this).closest('.__arrayUl').find('.__objectUl').toggleClass('close')
    })
  }

  ////////////////////////////////////////////////////////////////////////////////////




$(document).ready(function () {
	// __aa(baseData)
  defaultDropdown()
	// __ab(baseData)
	openModal()
  addDBDetails()
	// jsonHTMLView()
	getCollection()
	addSortBy()
	clearFilter()
	// findData()
  //   renderDBList(baseData)
  // createContentBox()
  bodyFunc()
  buildTabs(true)
  addTab()
  jsonUlAction()

  $.getScript( "js/script.js", function( data, textStatus, jqxhr ) {
    console.log( "Load was performed." );
  });
  $( ".option" ).dblclick(function() {
    alert( "Handler for .dblclick() called." );
  });
})


})()
