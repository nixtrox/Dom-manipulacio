function randomize() {
    document.getElementById('yes').style.backgroundColor = randomColors();
  }

  
  function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }


  // http://www.paulirish.com/2009/random-hex-color-code-snippets/   <---- random color generátor


  

let Answer = document.getElementById("TextInput").value;

let i = 0

function addElement() {

    i = i+1
    let Answer = document.getElementById("TextInput").value;
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = i;
    cell2.innerHTML = Answer;
    console.log(Answer)
    console.log(i)
    
  }

  function deleteElement(){
    document.getElementById("myTable").deleteRow(-1);
    i = i-1

    if (i<1){
        i = 0
      }
  }





 




function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }




 

 