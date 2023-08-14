var kullaniciGirdisi = prompt("Lütfen bir isim girin:");
const nameDOM = document.querySelector("#myName")
nameDOM.innerHTML = kullaniciGirdisi

function showTime() {
    var today = new Date();
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();
    var dayNumber = today.getDay();

    // Direkt olarak günün ismini alamadığım için liste yaparak içinden seçtim
    let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma","Cumartesi"];
    let dayName = days[dayNumber]

    var time = hour + ":" + minute + ":" + second + " " + dayName
    
    var timeDOM = document.querySelector("#myClock")
    timeDOM.innerHTML = time
    
    setTimeout(showTime, 1000); // Her saniye güncellemek için fonksiyonu 1 saniye sonra tekrar çağır

  }
  // burayı tarih ve saat yüklenmediği için ekledim
  document.addEventListener("DOMContentLoaded", function() {
    showTime();
  });

  
