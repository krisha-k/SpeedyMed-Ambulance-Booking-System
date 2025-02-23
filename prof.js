document.addEventListener("DOMContentLoaded", function() {
    const userName = localStorage.getItem("username");
    document.getElementById("userName").textContent = userName ? userName : "User";
});
