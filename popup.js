/*document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
      d = document;

      var f = d.createElement('form');
      f.action = 'http://gtmetrix.com/analyze.html?bm';
      f.method = 'post';
      var i = d.createElement('input');
      i.type = 'hidden';
      i.name = 'url';
      i.value = tab.url;
      f.appendChild(i);
      d.body.appendChild(f);
      f.submit();
    });
  }, false);
}, false);





chrome.tabs.getSelected(null,function(tab) {
    var tablink = tab.url;
    console.log(tablink);
});


function getLocation(){
  document.getElementById("demo").innerHTML = window.location.hostname;
}*/

chrome.tabs.getSelected(null, function(tab) {
    myFunction(tab.url);
});

function myFunction(tablink) {
  // do stuff here
  var d = new Date();
  var l = getLocation(tablink);
  document.getElementById("demo").innerHTML = l.hostname + "\n" + d.getHours() +":"+ d.getMinutes() +":"+ d.getSeconds();
}

var getLocation = function(href) {
    var l = document.createElement("a");
    l.href = href;
    return l;
};