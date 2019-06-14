function validateForm(){
    var x = document.forms["formName"]["fname"].value;
    if( x ===""){
        alert("PLEASE FILL OUT ALL FIELDS");
        return false;
    }
};