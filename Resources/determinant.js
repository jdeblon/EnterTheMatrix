/**
 * @author Josh
 */

var determinantTab = Titanium.UI.createTab({ 
	height:'1', 
    icon:'KS_nav_views.png',
    title:'Determinant',
    window:win1
});

var enterLabelDet = Titanium.UI.createLabel({
	color:'#000000',
	text:'Enter Your N x N Matrix Here:',
	font:{fontSize:30,fontFamily:'Times New Roman'},
	top:20,
	left:10,
	width:'auto',
	textAlign:Titanium.UI.TEXT_ALIGNMENT_CENTER
});

var detResult = Titanium.UI.createLabel({
    value:'',
    height:80,
    width: 100,
    top: 300,
    align: "center",
    textAlign:"center",
    font:{fontSize:20,fontFamily:'Marker Felt', fontWeight:'bold'},
    color:'#000000',
    textAlign:Titanium.UI.TEXT_ALIGNMENT_LEFT,
    appearance:Titanium.UI.KEYBOARD_APPEARANCE_DEFAULT,   
    keyboardType:Titanium.UI.KEYBOARD_NUMBERS_PUNCTUATION,
    returnKeyType:Titanium.UI.RETURNKEY_DONE,
    borderWidth:2,
    borderColor:'#bbb',
    borderRadius:5
});

//text field into which users will put the matrix values
var matrixFieldDet = Titanium.UI.createTextField({
    color:'#336699',
    height:100,
    top:70,
    left:10,
    right:10,
    width:'auto',
    keyboardType:Titanium.UI.KEYBOARD_NUMBER_PAD,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});

