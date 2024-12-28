const handelSubmit = () => {
    let userName = document.getElementById("userName").value;
    let password = document.getElementById("password").value;
    if (userName === "AMRUTHA" && password === "chocolate") {
        window.location.href = "page2.html";
    }
    else {
        alert("Username or password incorrect.");
    }

    console.log(userName);
    console.log(password);
  
    document.getElementById("userName").value = "";
    document.getElementById("password").value = "";
  };
