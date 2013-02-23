/**
 * @author Josh
 */

var inverseTab = Titanium.UI.createTab({
	height:'1',
	icon:'KS_nav_views.png',
	title:'Inverse',
	window:win2
})

var enterLabelInv = Titanium.UI.createLabel({
	color:'#000000',
	text:'Enter Your N x N Matrix Here:',
	font:{fontSize:30,fontFamily:'Times New Roman'},
	top:20,
	left:10,
	width:'auto',
	textAlign:Titanium.UI.TEXT_ALIGNMENT_CENTER
});

var matrixFieldInv = Titanium.UI.createTextField({
    color:'#336699',
    height:100,
    top:70,
    left:10,
    right:10,
    width:'auto',
    keyboardType:Titanium.UI.KEYBOARD_NUMBER_PAD,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});

var invResultArea = Titanium.UI.createLabel({
	height:'auto',
	width:'auto',
	top:190,
	bottom:190,
	left:10,
	right:10,
	value:'',
	font:{fontSize:40,fontFamily:'Marker Felt', fontWeight:'bold'},
    color:'#000000',
    align:"center",
    textAlign:'center',
    appearance:Titanium.UI.KEYBOARD_APPEARANCE_DEFAULT,   
    keyboardType:Titanium.UI.KEYBOARD_NUMBERS_PUNCTUATION,
    returnKeyType:Titanium.UI.RETURNKEY_DONE,
    borderWidth:2,
    borderColor:'#bbb',
    borderRadius:5
	
})
