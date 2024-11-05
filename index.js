let bmwCost = 0;
let purchases = [];


function bmwTrim() {
    let bmwTrimvar = "";
    if (document.getElementById("340-base").checked) {
        bmwTrimvar = "BMW M340i Sedan";
        bmwCost += 59600;
    } else if (document.getElementById("xDrive").checked) {
        bmwTrimvar = "BMW M340i xDrive Sedan";
        bmwCost += 61000;
    } else if (document.getElementById("m3-base").checked) {
        bmwTrimvar = "BMW M3 Sedan";
        bmwCost += 76000;
    } else if (document.getElementById("comp").checked) {
        bmwTrimvar = "BMW M3 Competition Sedan";
        bmwCost += 80200;
    } else if (document.getElementById("comp-xdrive").checked) {
        bmwTrimvar = "BMW M3 Competition xDrive Sedan";
        bmwCost += 85300;
    }
    return bmwTrimvar;
}


function bmwColors() {
    let bmwColorvar = "";
    if (document.getElementById("alpine").checked) {
        bmwColorvar = "Color: Alpine White";
    } else if (document.getElementById("sapphire").checked) {
        bmwColorvar = "Color: Black Sapphire Metal";
        bmwCost += 650;
    } else if (document.getElementById("portimao").checked) {
        bmwColorvar = "Color: Portimao Blue Metallic";
        bmwCost += 650;
    } else if (document.getElementById("vegas").checked) {
        bmwColorvar = "Color: Vegas Red Metallic";
        bmwCost += 650;
    } else if (document.getElementById("tanzanite").checked) {
        bmwColorvar = "Color: Tanzanite Blue II Metallic";
        bmwCost += 1500;
    }
    return bmwColorvar;
}


function bmwOptions() {
    let bmwOptionsvar = "";
    if (document.getElementById("bmwfeature1").checked) {
        bmwOptionsvar += "(M Carbon Bucket Seats) ";
        bmwCost += 4500;
    }
    if (document.getElementById("bmwfeature2").checked) {
        bmwOptionsvar += "(Front Ventilated Seats) ";
        bmwCost += 500;
    }
    if (document.getElementById("bmwfeature3").checked) {
        bmwOptionsvar += "(Carbon Package) ";
        bmwCost += 14300;
    }
    if (document.getElementById("bmwfeature4").checked) {
        bmwOptionsvar += "(Moonroof) ";
    }
    return bmwOptionsvar || "No add-ons selected";
}


function loadCart() {
    let arr = [];
    arr.push(bmwTrim());
    arr.push(bmwColors());
    arr.push(bmwOptions());
    arr.push(bmwCost);
    const container=document.getElementById("cartItems");
    container.innerHTML;
    arr.forEach(item => {
        const div = document.createElement('div');
        div.textContent = item;
        container.appendChild(div);
    });
}


function orderItem(obj) {
    let length = localStorage.length;
    localStorage.setItem(length.toString(), JSON.stringify(obj));
    purchases = [];
    for (let i = 0; i < localStorage.length; i++) {
        purchases.push(JSON.parse(localStorage.getItem(i.toString())));
    }
}

function makeList(){
    length = localStorage.length;
    for(let i = 0; i < length; i++){
        purchases.push(JSON.parse(localStorage.getItem(i.toString())));
    }
}

function fillOrder() {
    makeList()
    for (let i = 0; i < length; i++) {
        let obj = purchases[i];
        let div = document.createElement("div");
        div.className = "orderItem";

        document.body.appendChild(div);
    }
}