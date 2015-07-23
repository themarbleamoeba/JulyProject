//Bring pictures in from JSON files
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  
  if(xhr.readyState === 4) {
    var weapons  = JSON.parse(xhr.responseText);
    var wList = '<ul>';
    console.log(weapons);
    for (var i=0; i<weapons.length; i += 1) {
      wList += '<li><img src="' + weapons.location + '"></li>';
      
        wList += '</ul>';
        
    }
    document.getElementById('exotics').innerHTML = wList;
    console.log(wList);
  } else {

      console.log("Ready not met");
  }
    console.log(xhr.readyState);
    console.log(xhr.status);
};
xhr.open('GET', 'data.json');
xhr.send();




// $(document).ready(function () {
//  var jsonURL = "data.json";
//  $.getJSON(jsonURL, function (json)  {
//    $.each(json.location, function () {
//      var obj = $.parseJSON(location);
//      $("#exotics").push('<li><img src= ' + obj + '></li>');      
//    });
//  });
// });

// Give information when pictures are hovered over
// Highlight when pictures are clicked and remove when clicked again
