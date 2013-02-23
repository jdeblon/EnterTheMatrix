Titanium.include("global.js");
Titanium.include("determinant.js");
Titanium.include("inverse.js");
Titanium.include("sylvester.js");






//add objects to windows
win1.add(matrixFieldDet);
win1.add(enterLabelDet);
win1.add(detResult);
//win1.add(detLabel);

win2.add(matrixFieldInv);
win2.add(enterLabelInv);
win2.add(invResultArea);

//
//  add tabs to tabgroup
//
tabGroup.addTab(determinantTab);  
tabGroup.addTab(inverseTab) ;


// open tab group
tabGroup.open();

doneBtn(win1);
doneBtn(win2);
