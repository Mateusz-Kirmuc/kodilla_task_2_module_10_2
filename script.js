// change color of even span elements 
$("span:even").css('color', 'red');

// append to each 'p' element 'button' with index (in list) of its parent
$("p").each(function(index, element){
  var btn = "<button data-tmp='"+ index + "'>Click me</button>";
  $(element).append(btn);
});

// add event handler to each 'buttons'
$("button").click(function(event){
  alert($(this).attr("data-tmp"));
});


