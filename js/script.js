function sendPriceList() {
  const url = "http://127.0.0.1:5000/price-list";
  let fname = document.getElementById("fname").value;
  let email = document.getElementById("email").value;

  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 3 && xhr.status == 200) {
      alert(xhr.responseText)
    }
  }

  xhr.open("POST", url, true);
  xhr.setRequestHeader('Content-Type', 'application/json'); // , 'Access-Control-Allow-Origin', 'http://localhost:3000'
  xhr.send(JSON.stringify({
    fname: fname,
    email: email
  }));
};


function sendContact() {
  const url = "http://127.0.0.1:5000/contact";
  let surname = document.getElementById("surname").value;
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let note = document.getElementById("note").value;

  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 3 && xhr.status == 200) {
      alert(xhr.responseText)
    }
  }

  xhr.open("POST", url, true);
  xhr.setRequestHeader('Content-Type', 'application/json'); // , 'Access-Control-Allow-Origin', 'http://localhost:3000'
  xhr.send(JSON.stringify({
    surname: surname,
    name: name,
    phone: phone,
    email: email,
    note: note,
  }));
  window.location.href = "index.html";
};


let token = '';

function login() {
  localStorage.setItem("token", token);
  const url = "http://127.0.0.1:5000/login";
  let password = document.getElementById("password").value;

  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 3 && xhr.status == 200) {
      data = JSON.parse(xhr.responseText);
      token = data["token"];
      localStorage.setItem("token", token);
    }
  }


  xhr.open("POST", url, true);
  xhr.setRequestHeader('Content-Type', 'application/json'); // , 'Access-Control-Allow-Origin', 'http://localhost:3000'
  xhr.send(JSON.stringify({
    password: password,
  }));

  if (localStorage.getItem("token") == 1111) {
    window.location.href = "data.html";
  }
};


function getContacts() {
  const url = "http://127.0.0.1:5000/get-items";
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      data = JSON.parse(xhr.responseText);
      htmlText = '';
      for (var i = 0; i < data.length; i++) {
        htmlText += "<div class='card'>" +
                    "<div class='info'>" +
                      "<div class='fname'>" +
                        "<h3>"+ data[i]["name"] + ' ' + data[i]["surname"] + "</h3>" +
                      "</div>" +
                      "<div class='contact'>" +
                        "<div class='title'>" +
                          "<p>" + "Phone" + "</p>" +
                          "<p>" + "Email" + "</p>" +
                        "</div>" +
                        "<div class='val'>" +
                          "<p>" + data[i]["phone"] + "</p>" +
                          "<p>" + data[i]["email"] + "</p>" +
                        "</div>" +
                      "</div>" +
                    "</div>" +
                    "<div class='note'>" + data[i]["note"] + "</div>" + "</div>" + "</div>";
      }
      document.getElementById("area").innerHTML = htmlText;
    }
  }
  xhr.open("GET", url, true); // true for asynchronous
  xhr.send(null);

}
