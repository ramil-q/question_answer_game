"use strict";
var suallar = ["Baki Azerbaycanin paytaxtidir", "Baki Azerbaycanin en boyuk seheridir", "Azerbaycanin Turkiyeyle serhedi var", 
"Baki Xezer denizinnen 28 meter yukseklikde yerlesir", "Azerbaycanin Iraqla serhedi var"];
var u = 0;
var duz=0;
var sehv=0;
var sc = {

    "Baki Azerbaycanin paytaxtidir": true,
    "Baki Azerbaycanin en boyuk seheridir": false,
    "Azerbaycanin Turkiyeyle serhedi var": true,
    "Baki Xezer denizinnen 28 meter yukseklikde yerlesir": true,
    "Azerbaycanin Iraqla serhedi var": false

}

// alert(sc[suallar[1]]);

var a = document.querySelector('div');
var x = document.querySelector("#in");
var t = document.querySelector('.but1');
var f = document.querySelector('.but2');
var n = document.querySelector('.but3');

a.innerHTML = suallar[u];

   n.onclick = function () {   
        u++;
        a.innerHTML = suallar[u];
        x.value = "";

    if(a.innerHTML=="undefined"){
          a.innerHTML= "Testin sonu";
          x.value = "duz sayi:" + duz + " sehv sayi "+ sehv;    

      }     
      }
      

      t.onclick = function () {
        
        if(sc[suallar[u]] == true||sc[suallar[u]] == t.innerHTML ){
            x.value = "Duz tapdin";
            duz++;
        }
        else {
            x.value= "Sehv tapdin";
            sehv++;
        }

    
     }

    f.onclick = function () {
        if(sc[suallar[u]] == false ||sc[suallar[u]] == f.innerHTML ){
            x.value = "Duz tapdin";
            duz++;
        }
        else {
            x.value= "Sehv tapdin";
            sehv++
        }
        }       

        // if(x.value = "Duz tapdin"){

        //     duz++;
        // }

        // else if(x.value = "Sehv tapdin"){
        //     sehv++;
        // }

        // alert()