var GLOBALITEM =[];

dragula([

	document.getElementById('2'),
	document.getElementById('3'),
	document.getElementById('4')
])


.on('drag', function(el) {
	
	// add 'is-moving' class to element being dragged
	el.classList.add('is-moving');

})
.on('dragend', function(el) {
	
	// remove 'is-moving' class from element after dragging has stopped
	el.classList.remove('is-moving');

	
	// add the 'is-moved' class for 600ms then remove it
  
	window.setTimeout(function() {
		//el.classList.add('is-moved');
		window.setTimeout(function() {
			el.classList.remove('is-moved');
		}, 600);
	}, 100);
});

/*
  var testitem = document.getElementById('testItem');
  
  testitem.ondblclick= function (){
  
    testitem.classList.remove('drag-inner-list');
  }
  */

   var plusButton = document.getElementById('test');
    
  
   plusButton.onclick = function(){
	// these strings are used for the checkbox labels
   // <li class="drag-item"></li>
    console.log(document.getElementById('test').childNodes);
     
  var ul = document.getElementById("2");
  var li = document.createElement("li");
    li.setAttribute("class", "drag-item");
    ul.appendChild(li);
  };



var createOptions = (function() {
	var dragOptions = document.querySelectorAll('.drag-options');
	

	var options = ['Add','edit'];
	
	// create the checkbox and labels here, just to keep the html clean. append the <label> to '.drag-options'
	function create() {
		for (var i = 0; i < dragOptions.length; i++) {

			options.forEach(function(item) {
				var checkbox = document.createElement('input');
				var label = document.createElement('label');
				var span = document.createElement('span');
				checkbox.setAttribute('type', 'checkbox');
				span.innerHTML = item;
				label.appendChild(span);
				label.insertBefore(checkbox, label.firstChild);
				label.classList.add('drag-options-label');
				dragOptions[i].appendChild(label);
			});

		}
	}
	
	return {
		create: create
	}
	
	
}());


createOptions.create();





//this is for changing the content of the draggables when you edit them

function getChangesToText(element){
var divs = document.getElementById(element).querySelectorAll(".dragg")
var divArray = [];
for (var i = 0; i < divs.length; i += 1) {
  divArray.push(divs[i].innerHTML);
 
}
  return divArray;
}

function setChangesToText(element , textArray){
var divs = document.getElementById(element).querySelectorAll(".dragg")

for (var i = 0; i < divs.length; i += 1) {
  divs[i].innerHTML = textArray[i];
 
}

}

function setChangesInForm(el)
{
  console.log(el.parentNode.parentNode.getAttribute("id"));
  var textArray = getChangesToText(DragItemId);
  var divs = document.getElementById('exampleModal').querySelectorAll(".form-control");

  console.log(divs);
  for(var i=0; i<textArray.length; i++){
    console.log(divs[i].innerhtml);
  divs[i].value = textArray[i];
  }
  GLOBALITEM.push(DragItemId);

}

function saveChangesToDrag()
{

  var idToSave= GLOBALITEM.pop();
  
  var FormDivs = document.getElementById('exampleModal').querySelectorAll(".form-control");

var textArray = [];
  for(var i=0; i<FormDivs.length; i++){
    console.log(FormDivs[i].innerhtml);
    textArray.push(FormDivs[i].value);
  }
  setChangesToText(idToSave , textArray);
  
  $('#exampleModal').modal('hide');
}


                      