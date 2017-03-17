function addFormEvent(func) {
  if (!document.getElementById | !document.getElementsByTagName) return
  var oldonload=window.onload
  if (typeof window.onload != 'function') { window.onload=func }
  else {
    window.onload=function() { oldonload(); func() }
  }
}



// --------------------- borders for text type inputs ------------------------------ //
function attachBorderAndSelect(id){
  var obj0 = document.getElementById(id)
  obj0.onfocus= function() {this.style.border="2px solid #f00"; this.select();}
  obj0.onblur = function() {
                  this.style.border="2px inset #ccc"
                  if (this.value=="") {this.value=this.defaultValue}
                  this.value=this.value
                }
}
// ----------------------------------------------------------------------------- //



// -------------------------- borders for radio and checkboxes ------------------------- //
function attachBorderToRadio(id){
  var obj0 = document.getElementById(id)
  obj0.onfocus= function() {this.style.border="2px solid #f00"}
  obj0.onblur = function() {this.style.border="2px solid #fff7dd"}
}
// ----------------------------------------------------------------------------- //



// ------------------------------ border for submit buttons --------------------------- //
function attachBorderToButton(id){
  var obj0 = document.getElementById(id)
  obj0.onfocus= function() {this.style.border="2px solid #f00"}
  obj0.onblur = function() {this.style.border="2px outset #fff"}
}
// ----------------------------------------------------------------------------- //



// ------------------------ help clicked therefore show help ----------------------------- //
function showHelp(id){
  if (!document.getElementsByTagName) return
  if (document.getElementById(id).style.display=='block'){
    document.getElementById(id).style.display='none'
  }
  else{
    document.getElementById(id).style.display='block'
  }
  //  focus is moved by the href of the link to the start of the help
}
// ----------------------------------------------------------------------------- //


// ----------------------------- hide help --------------------------------- //
function hideHelp(id){
  if (document.getElementById) {document.getElementById(id).style.display='none'}
}
// ----------------------------------------------------------------------------- //



// example contact form
function initContact(){

  if (!document.getElementsByTagName) return


// JavaScript is available so hide the help divs
hideHelp('help-email')
hideHelp('help-phone')


// text type inputs
 attachBorderAndSelect('name');
 attachBorderAndSelect('email');
 attachBorderAndSelect('phone');
 attachBorderAndSelect('site');

// textfield
 attachBorderAndSelect('query');

// radio buttons defined individually
// though it does not appear to work except in IE
 attachBorderToRadio('rad2_1');
 attachBorderToRadio('rad2_2');

// checkbox
// this does not appear to work except in IE
 attachBorderToRadio('check1_0');

// submit
 attachBorderToButton('Submit');

}


// Other "onload" events may be added in the same format as this //
addFormEvent(initContact)