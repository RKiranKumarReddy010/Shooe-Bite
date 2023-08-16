document.getElementById("sidebar").style.display = "none";

function forward() {
    document.getElementById("sidebar").style.width = "100%";
    document.getElementById("sidebar").style.display = "block";
    document.getElementById("sidebar").style.transform = "0.5s";
    
  }
  
  function backward() {
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("sidebar").style.transform = "0.5s";
  }