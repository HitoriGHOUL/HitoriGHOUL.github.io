var mobileButtonVisible = false;

function toggleMobileButton(){
    dropDownContent = document.getElementsByClassName("dropdown-content");
    document.getElementsByClassName("dropdown-content")
    dropBtn = document.getElementsByClassName("dropbtn");
    document.getElementsByClassName("dropbtn")
    if (dropDownContent) {
        for (var x = 0; x < dropDownContent.length; x++) {
            if (dropDownContent[x].style.display == "block"){
                dropDownContent[x].style.display = "none";
                dropBtn[x].innerHTML = "O"
            }
            else{
                dropDownContent[x].style.display = "block";
                dropBtn[x].innerHTML = "X"
            }
        }

    }

}