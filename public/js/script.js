
var dataView = [{
  name : 'Table',
  default: true,
  class: 'tableView'
  },
  {
    name : 'JSON',
    default: false,
    class: 'jsonView'
  },
  {
    name : 'Designed JSON',
    default: false,
    class: 'arrayView'
  }]

var dataPages = [{
  name : 'Single',
  default: true,
  class: 'singleView'
},
  {
    name : 'Split',
    default: false,
    class: 'splitView'
  },
  {
    name : 'Square',
    default: false,
    class: 'squareView'
  }]

function arrayView(_window,w) {
  var selector = selectorWindow(_window,'c')
  selector.find('.dataBox').empty()
  selector.find('.dataBox').append('<div><span>Clear All</span><span>Clear </span></div>')
  selector.find('.dataBox').html(json2DView(w))
}
function jsonView(_window,w) {
  var selector = selectorWindow(_window,'c')
  selector.find('.dataBox').empty()
  selector.find('.dataBox').html('<pre>'+JSON.stringify(w, undefined, 2)+'</pre>')
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
function selectorWindow(_window,type){
  if(type === 'c'){
    return $('.content[data-window='+_window+']')

  }
  if(type === 't'){
    return $('.tab[data-tab='+_window+']')
  }
}
function getWindow(th,type){
  if(type === 't'){
    return th.closest('.tab').attr('data-tab')
  }
  if(type === 'c'){
    return th.closest('.content').attr('data-window')
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
  var html = $('<ul class="__objectUl"><i class="jsonUlAction"></i></ul>'), li;
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


//////////////////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


