function search_main() {
    var input = document.getElementById("searchBar").value;
    var input_inText = document.getElementById("searchBar2_inText").value;
    var switch_1 = document.getElementById("checkbox_val");
    var switch_2 = document.getElementById("checkBox_inText");
    var switch_3 = document.getElementById("checkbox_allinText");
        if(switch_1.checked == true && switch_2.checked == true && switch_3.checked == true){

            window.location.assign("https://google.com/search?q=allintitle:"+ input + " " + "allintext:" + input_inText);
        }else if(switch_2.checked == true && switch_3.checked == true){
          window.location.assign("https://google.com/search?q=intitle:"+ input + " " + "allintext:" + input_inText);
        }else if(switch_2.checked == true){
          window.location.assign("https://google.com/search?q=intitle:"+ input + " " + "intext:" + input_inText);
        }else if(switch_1.checked == true){
          window.location.assign("https://google.com/search?q=allintitle:"+ input);
        }else{
          window.location.assign("https://google.com/search?q=intitle:"+ input)
        }
}

function displayinText() {
    var x = document.getElementById("searchBar2");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}
