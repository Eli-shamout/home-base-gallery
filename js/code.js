window.onscroll = function() {myFunction()};
function myFunction() {
    var x=document.getElementsByClassName('nav-item');
    if (document.body.scrollTop >0){
        document.getElementsByClassName('header')[0].style.background="#fff";
        document.getElementsByClassName('header')[0].style.boxShadow="0px 1px 5px rgba(0, 0, 0, 0.473)";
        document.getElementsByClassName('header')[0].style.height="fit-contant";
        document.getElementsByClassName('heder-content')[0].style.margin="10px 0px";
    }else{
        document.getElementsByClassName('header')[0].style.background="#6196ff00";
        document.getElementsByClassName('header')[0].style.boxShadow="0px 1px 5px rgba(0, 0, 0, 0)";
        document.getElementsByClassName('header')[0].style.height="auto";
        document.getElementsByClassName('header')[0].style.paddingTop="10px";
        document.getElementsByClassName('header')[0].style.height="fit-contant";
        document.getElementsByClassName('heder-content')[0].style.margin="50px 0px";
        
    }
  
}
