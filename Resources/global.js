/**
 * @author Josh
 */
//BEGIN GLOBAL OBJECTS

// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff'
});

var win2 = Titanium.UI.createWindow({  
    title:'Tab 2',
    backgroundColor:'#fff'
});


var invalidMatrixAlert = Titanium.UI.createAlertDialog({
	title:'Invalid input',
	message:'Please enter a comma separated list of an n by n matrix from left to right, top to bottom',
	buttonNames:['OK']
});


//BEGIN GLOBAL FUNCTIONS

/*
	determines if a given string is an int. returns 0 if not.
*/
function isInteger(s) {
  return (s.toString().search(/^-?[0-9]+$/) == 0);
}

/*
	determines if a given value is an appropriately formatted float.
	returns 0 if not.
*/
function isFloat(value){

   if(isNaN(value) || value.indexOf(".")<0){
     return false;
   } else {
      if(parseFloat(value)) {
              return true;
          } else {
              return false;
          }
   }
}
/*
	trims all extra characters off of a given string and returns it.
*/
function trim(s) {
	return s.replace(/^\s+|[A-z]\s+$/g, "");
}

/*
	this function detects incorrect matrix input.
	It returns the the array with pushed size if successful,
	and null if invalid.
*/
function inputValidation(input){
	
	var inputError = false;
	
	sizeOfArray = Math.sqrt(input.length);
	//perfect squares have integer square roots.
	if(isInteger(sizeOfArray)){
		for(var i = 0; i < input.length; i++){								//the code will throw an exception if it is not a square matrix
		   	if(input[i] == "" || isNaN(input[i])) {	//by checking to see if there is an IOB exception.
		   		inputError = true;
		   	}
		   	else{
		   		input[i] = trim(input[i]);
		   	}
		   	
		}
		if(inputError){
			return null;
		}
		else{
			//push the size to return it with the array.
			input.push(sizeOfArray);
			return input;
		}
	}
	else{
		return null;
	}
	
}
/*
	formats the array to the specified form needed by sylvester.
	returns null if matrix is not given as a comma-separated 
	list of an n x n matrix.
*/
function formatArray(arrayString) {
	
	   var array = [];
	   var matrixSize;
	   var totalElements;
	   
		if(arrayString == ""){
			invalidMatrixAlert.show();
			detResult.text = "";
			return null;
		}
		array = arrayString.split(",");
		array = inputValidation(array);
		if(array != null){
			matrixSize = array.pop();
		   	var matrix = [];
		   	for(var i = 0; i < matrixSize; i++){	//2D matrix creation
		   		matrix[i] = [];
		   	}
		   		
			//parse the input
			var ctr = 0;
			for(var i = 0; i < matrixSize; i++){
				for(var j = 0; j < matrixSize; j++){
			   		matrix[i].push(parseFloat(array[ctr], 10));
			   		ctr++;
			   	}
			}
			   	
		}
		else{
			invalidMatrixAlert.show();
			detResult.text = "";
			return null;
		}	
	return matrix;

}

/*
	places the buttons in the existing windows and 
	adds the event listeners according to each 
	window's function description.
*/
var doneBtn = function(win){
   //create the computer buttons on the determinant 
   //and inverse pages.
 var button = Titanium.UI.createButton({
	   title: 'Compute',
	   bottom: 10,
	   right: 10,
	   left:10,
	   width: 'auto',
	   height: 150
	});
    //create functionality
    var matrixSize ;
    
    if(win == win1){
	   	button.addEventListener('click',function(e){
	   	   	
			var input1 = matrixFieldDet.value;
			var determinant;
			var M;		
			var matrix;
			
			   
			matrix = formatArray(input1);
			if(matrix != null && matrix.length != 1){
				M = Matrix.create(matrix);
				matrixSize = M.cols();
				determinant =  M.determinant();	 //wrap the integer for printing
				detResult.text = determinant; 
			}
			else if(matrix.length == 1) {
				detResult.text = matrix[0].toString();
			}
		});
	}
	else if(win == win2){
		button.addEventListener('click',function(e){
   	   		var input1 = matrixFieldInv.value;
   	   		var M;
			var matrix;
			var inverseMatrix;
			
			matrix = formatArray(input1);
			if(matrix != null && matrix.length != 1){
				M = Matrix.create(matrix);
				matrixSize = M.cols();
				inverseMatrix = M.inverse();
				var stringToWrite = "";
				for(var i = 1; i <= matrixSize; i++) {
					var row = inverseMatrix.row(i).elements; //convert first to a vector and then access its elements array
					
					for(var j = 0; j < row.length; j++) {
						row[j] = parseFloat(row[j]).toFixed(3);
					} 	
						
					stringToWrite += row.toString();;									//parse for friendly input and then stringify
					stringToWrite += " \n ";
			
				}
				invResultArea.text = stringToWrite;
			}
			else if(matrix.length == 1 ){
				if(matrix[0] != 0){
					invResultArea.text = parseFloat( 1 / matrix[0]).toFixed(3).toString();
				}
				else{
					invResultArea.text = Number(0).toString();
				}
			}
			
			
			
		});
	}
    //add button to window
    win.add(button);
};