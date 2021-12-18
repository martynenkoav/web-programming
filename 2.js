function AddToLocalStorage(e)
{
    e.preventDefault();
    localStorage.setItem("name", document.getElementById("name").value)
    localStorage.setItem("email", document.getElementById("email").value)
    localStorage.setItem("number", document.getElementById("number").value)
    localStorage.setItem("data_cur", document.getElementById("data_cur").value)
    localStorage.setItem("data", document.getElementById("data").value)
    localStorage.setItem("count", document.getElementById("count").value)
}
window.onload = function GetFromLocalStorage() {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let number = document.getElementById("number");
    let data_cur = document.getElementById("data_cur");
    let data = document.getElementById("data");
    let count = document.getElementById("count");
    name.value = localStorage.getItem("name");
    email.value = localStorage.getItem("email");
    number.value = localStorage.getItem("number");
    data_cur.value = localStorage.getItem("data_cur");
    data.value = localStorage.getItem("data");
    count.value = localStorage.getItem("count");

}