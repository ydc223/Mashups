$.getJSON('http://api.open-notify.org/astros.json', function(data) {
  console.log(data)
  console.log(data['people'][0]['name'])

  for (var i = 0; i < data['number']; i++){
    var p = document.createElement("p");
    p.innerHTML = data['people'][i]['name'];
    p.className += 'name';
    document.getElementById("name-container").appendChild(p);
  }


});
