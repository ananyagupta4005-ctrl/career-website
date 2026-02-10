function showResult() {
  var interest = document.querySelector('input[name="interest"]:checked').value;
  var work = document.querySelector('input[name="work"]:checked').value;

  if (interest === "tech") {
    window.location.href = "software.html";
  } 
  else if (interest === "creative") {
    window.location.href = "creative.html";
  }
  else if (interest === "business") {
    window.location.href = "business.html";
  }
  else if (interest === "gov") {
    window.location.href = "government.html";
  }
  else {
    window.location.href = "teaching.html";
  }
}
