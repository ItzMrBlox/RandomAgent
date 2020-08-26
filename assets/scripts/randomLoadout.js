var Arsenal = {
    "Sidearms": [
        "Classic",
        "Shorty",
        "Frenzy",
        "Ghost",
        "Sheriff"
    ],

    "SMGS": [
        "Stinger",
        "Spectre"
    ],

    "Shotguns": [
        "Bucky",
        "Judge"
    ],
    
    "Rifles": [
        "Bulldog",
        "Guardian",
        "Phantom",
        "Vandal"
    ],

    "Sniper Rifles": [
        "Marshal",
        "Operator"
    ],

    "Machine Guns": [
        "Ares",
        "Odin"
    ],

    "Armor": [
        "Light Shields",
        "Heavy Shields"
    ]
}


function Random(){
    let RefreshBuyMenu = document.querySelectorAll('.buymenu .Table div')
    for (let index = 0; index < RefreshBuyMenu.length; index++) {
        RefreshBuyMenu[index].classList.remove('EquipmentPicked')
    }
    RandomSidearm()
    RandomWeapon()
    RandomShields()
}

function RandomSidearm(){
    var WhatSideArm = Math.floor(Math.random() * Arsenal.Sidearms.length)
    let SideArmDivs = document.querySelectorAll("#SideArmTable div");
    SideArmDivs[WhatSideArm].classList.add('EquipmentPicked')
}

function RandomWeapon(){
    var WhatWeaponCategory = Object.values(Arsenal).slice(1,6);
    var WeaponLength = 0;
    for (let index = 0; index < WhatWeaponCategory.length; index++) {
        WeaponLength += WhatWeaponCategory[index].length 
    }
    var WhatWeapon = Math.floor(Math.random() * WeaponLength);
    let WeaponDivs = document.querySelectorAll(".MainWeapon div")
    WeaponDivs[WhatWeapon].classList.add('EquipmentPicked')
}

function RandomShields(){
    var ArmorOrNot = Math.floor(Math.random() * Arsenal.Armor.length)
    let ArmorDivs = document.querySelectorAll(".TableShield div");
    ArmorDivs[ArmorOrNot].classList.add('EquipmentPicked')
}

