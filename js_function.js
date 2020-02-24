function NewPrice(){
    let s=document.getElementsByName("cpuType");
    let select = s[0];
    let price = 0;
    let prices = getPrices();
    let priceIndex = parseInt(select.value) - 1;
    if (priceIndex >= 0) {
      price = prices.prodTypes[priceIndex];
    }

    let PressRad = document.getElementById("cpuRadio");
    if (select.value == "5" || select.value=="6" )PressRad.style.display ="block";
    else PressRad.style.display ="none";

    let radios = document.getElementsByName("prodOptions");
    radios.forEach(function(radio) {
      if (radio.checked) {
        let optionPrice = prices.prodOptions[radio.value];
        if (optionPrice !== undefined) {
          price += optionPrice;
        }
      }
    });

    let CpuCheck = document.getElementById("cpuCheck");
    if (select.value == "2" || select.value == "3") CpuCheck.style.display ="block";
    else CpuCheck.style.display ="none";

    let checkboxes = document.querySelectorAll("#cpuCheck input");
     checkboxes.forEach(function(checkbox) {
      if (checkbox.checked) {
        let propPrice = prices.prodProperties[checkbox.name];
        if (propPrice !== undefined) {
         price += propPrice;
        }
      }
    });

    let number=document.getElementById("pressQuant");
    let quantity = number.value;
    price *=quantity;

    let check = document.querySelectorAll("#dop input");
    check.forEach(function(checkbox) {
     if (checkbox.checked) {
        price += 0;
     }
   });

    let pressPrice = document.getElementById("pressPrice");
    pressPrice.innerHTML = price + " ₽";

}
function getPrices() {
    return {
      prodTypes: [291500, 489000, 260000 , 243500 , 327000],
      prodOptions: {
        option1: 0,
        option2: -43000,
        option3: 49000,
      },
      prodProperties: {
        prop1: 3490,
        prop2: 2290,
      }
    };
  }

  window.addEventListener('DOMContentLoaded', function (event) {
    let PressRad = document.getElementById("cpuRadio");
    PressRad.style.display = "none";

    let CpuCheck = document.getElementById("cpuCheck");
    CpuCheck.style.display = "none";
    
    let s = document.getElementsByName("cpuType");
    let select = s[0];
    select.addEventListener("change", function(event) {
      let target = event.target;
      console.log(target.value);
      NewPrice();
    });
    
    let radios = document.getElementsByName("prodOptions");
    radios.forEach(function(radio) {
      radio.addEventListener("change", function(event) {
        let rad = event.target;
        console.log(rad.value);
        NewPrice();
      });
    });
  
    let checkboxes = document.querySelectorAll("#cpuCheck input");
    checkboxes.forEach(function(checkbox) {
      checkbox.addEventListener("change", function(event) {
        let ch = event.target;
        console.log(ch.name);
        console.log(ch.value);
        NewPrice();
      });
    });

    let check = document.querySelectorAll("#dop input");
    check.forEach(function(checkbox) {
      checkbox.addEventListener("change", function(event) {
        let ch = event.target;
        console.log(ch.name);
        console.log(ch.value);
        NewPrice();
      });
    });
  
    NewPrice();
  });
  