
document.addEventListener("DOMContentLoaded", function() {
    var logoutBtn = document.getElementById("logoutBtn");

    logoutBtn.addEventListener("click", function() {
      
        var loginPage = "./login.htm";

        window.location.href = loginPage;

    });
    
});
