const form = document.getElementById("formm");
const nama = document.getElementById("namauser");
const pass = document.getElementById("userpass");


form.addEventListener("submit", function(e){
    e.preventDefault();

    // const loc_nama = localStorage.getItem('data');
    // const loc_pass = localStorage.getItem('data');
    const loc_nama = localStorage.getItem("Nama");
    const loc_pass = localStorage.getItem("Password");
    
    if(nama.value == loc_nama && pass.value == loc_pass){
        alert("YEYY BERHASIL")
        window.location.href = "Home.html";
    }else{
        alert("YAHH GAGAL")
    }
})