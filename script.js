const ekleBtn = document.getElementById("ekle");
ekleBtn.addEventListener("click", function () {
    var textInput = this.previousElementSibling;
    todoEkle(textInput.value);
})
// Enter ile todo ekleme
const textInput = document.querySelector(".todo-input");
textInput.addEventListener("keypress", (e) => {
    if (e.keyCode == 13){
        todoEkle(textInput.value);
        textInput.value = "";
    }
        
})

// Todo silme butonu event atama. InnerHTML ile her ekleme yaptığımızda EventListener'lar güncel kalmalı.
function silmeEventAtama(){
    const silBtn = document.querySelectorAll(".silBtn");
    silBtn.forEach(e =>{
        e.addEventListener('click',function(){
           todoSil(e) 
        })
    })
}
// Todo silme fonksiyonu
function todoSil(silinecek){
    silinecek.parentNode.parentNode.removeChild(silinecek.parentNode);
}

// Todo ekleme fonksiyonu
function todoEkle(eklenecek) {
    const todoMain = document.querySelector(".todo-main");
    if (textInput.value == "") {

        alert("Boş değer girilemez");
        return;
    }
    todoMain.innerHTML += ( `
                <div class="todo-element">
                    <p>${eklenecek}</p>
                    <input type="button" class = "silBtn" value="Sil">
                </div>
                `)
    silmeEventAtama();
}