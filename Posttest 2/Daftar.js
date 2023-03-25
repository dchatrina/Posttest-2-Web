const tombol = document.getElementById("submit");
tombol.onclick = daftar;

function daftar(e){
    e.preventDefault();
    if(localStorage.getItem('data') == null) {
        localStorage.setItem('data', '[]');
    }
    data = []
    data.push({
        Nama : 'Chatrine', Email : 'cate123@gmail.com', Password : '123'
    })
    let nama = document.getElementById("dafnama");
    let email = document.getElementById("dafemail");
    let pass = document.getElementById("dafpass");
    

    let ubah = JSON.stringify(data)
    localStorage.setItem('data', ubah)
    
    alert("Berhasil Daftar Yey");
    window.location.href = "Index.html";
}

