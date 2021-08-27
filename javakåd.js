function get_input_content() {
    var x = document.getElementById("frm1");
    var text = "";
    const frågor: ["dsadas","dsadsa","dsadsa","dsadsa"]; 
    var i;
    for (i = 0; i < x.length ;i++) {
      text += x.elements[i].value + "<br>";
    }
    document.getElementById("demo").innerHTML = text;
  }