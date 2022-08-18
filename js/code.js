window.addEventListener('resize',function(){
  if(document.documentElement.clientWidth<1200){

  }
  
})
let sections=document.querySelectorAll('.section__element');
let menuShop=document.querySelector('.pop-up-menu__shop');
let menuExperience=document.querySelector('.pop-up-menu__expirience');
let menuStand=document.querySelector('.pop-up-menu__standapart');
let headerAccountElement=document.querySelector('.header-subtop-account__element');
let headerTopElement4=document.querySelector('.header-top__element__container4');
let undegroundShop=document.querySelector('.pop-up-menu__undeground-shop');
let undegroundShopInflatable=document.querySelector('.pop-up-menu__undeground-inflattable-paddle');
let undegroundShopFloats=document.querySelector('.pop-up-menu_undeground__flots');
let undegroundShopKayaks=document.querySelector('.pop-up-menu__undeground-kayaks');
let undegroundShopSkiffs=document.querySelector('.pop-up-menu__undeground-skiffs');
let undegroundShopCoolers=document.querySelector('.pop-up-menu__undeground-coolers');
let undegroundAccessories=document.querySelector('.pop-up-menu__undeground-accessories');
let undegroundApparel=document.querySelector('.pop-up-menu__undeground-apparel');
let undegroundCollections=document.querySelector('.pop-up-menu__undeground-collections');


for(let section of sections){
  section.onmouseover=function(){
    let el2=section.children[0];
    el2.classList.add('section__hover');

    if(section.children[0].innerHTML.includes('Shop')){
      menuShop.style.display="block";
    }
    if(section.children[0].innerHTML.includes('Experience')){
      menuExperience.style.display="block";
    }
    if(section.children[0].innerHTML.includes('Stand')){
      menuStand.style.display="block";
    }

  }
  section.onmouseleave=function(event){
    let el2=section.children[0];
    el2.classList.remove('section__hover');
    menuShop.style.display="none";
    menuExperience.style.display="none";
    menuStand.style.display="none";
    undegroundShop.style.display="none";
    undegroundShopInflatable.style.display="none";
    undegroundShopFloats.style.display="none";
    undegroundShopKayaks.style.display="none";
    undegroundShopSkiffs.style.display="none";
    undegroundShopCoolers.style.display="none";
    undegroundAccessories.style.display="none";
    undegroundApparel.style.display="none";
    undegroundCollections.style.display="none";

  }

}
//for menuShop
menuShop.onmouseenter=function(event){
  menuShop.style.display="block";
  menuExperience.style.display="none";
  menuStand.style.display="none";
}

menuShop.onmouseleave=function(event){
  menuShop.style.display="none";
  menuExperience.style.display="none";
  menuStand.style.display="none";
}
//for menuExperience
menuExperience.onmouseenter=function(event){
  menuExperience.style.display="block";
}
menuExperience.onmouseleave=function(event){
  menuShop.style.display="none";
  menuExperience.style.display="none";
  menuStand.style.display="none";
}

//for menustand
menuStand.onmouseenter=function(event){
    menuStand.style.display="block";
}

menuStand.onmouseleave=function(event){
  menuShop.style.display="none";
  menuExperience.style.display="none";
  menuStand.style.display="none";
}


let shopFirstGround = document.querySelectorAll('.paddle-boards');
for(let section of shopFirstGround){
  section.onmouseover=function(){
    if(section.children[0].innerHTML.includes('SOLID PADDLE-BOARDS')){
      section.onmouseenter=function(event){
        undegroundShop.style.display="block";
      }
      undegroundShop.onmouseenter=function(event){
        undegroundShop.style.display="block";
      }
      undegroundShop.onmouseleave=function(event){
        undegroundShopInflatable.style.display="none";
        undegroundShop.style.display="none";
        undegroundShopSkiffs.style.display="none";
        undegroundShopFloats.style.display="none";
        undegroundShopKayaks.style.display="none";
        undegroundShopCoolers.style.display="none";
        undegroundAccessories.style.display="none";
        undegroundApparel.style.display="none";
        undegroundCollections.style.display="none";
      }
    }
    if(section.children[0].innerHTML.includes('INFLATABLE PADDLE-BOARDS')){
      section.onmouseenter=function(event){
        undegroundShopInflatable.style.display="block";
      }
      undegroundShopInflatable.onmouseenter=function(event){
        undegroundShopInflatable.style.display="block";
      }
      undegroundShopInflatable.onmouseleave=function(event){
        undegroundShopInflatable.style.display="none";
        undegroundShop.style.display="none";
        undegroundShopSkiffs.style.display="none";
        undegroundShopFloats.style.display="none";
        undegroundShopKayaks.style.display="none";
        undegroundShopCoolers.style.display="none";
        undegroundAccessories.style.display="none";
        undegroundApparel.style.display="none";
        undegroundCollections.style.display="none";
      }
      
    }
    if(section.children[0].innerHTML.includes('FLOATS')){
      section.onmouseenter=function(event){
        undegroundShopFloats.style.display="block";
      }
      undegroundShopFloats.onmouseenter=function(event){
        undegroundShopFloats.style.display="block";
      }

      undegroundShopFloats.onmouseleave=function(event){
        undegroundShopInflatable.style.display="none";
        undegroundShop.style.display="none";
        undegroundShopSkiffs.style.display="none";
        undegroundShopFloats.style.display="none";
        undegroundShopKayaks.style.display="none";
        undegroundShopCoolers.style.display="none";
        undegroundAccessories.style.display="none";
        undegroundApparel.style.display="none";
        undegroundCollections.style.display="none";
      }
      
    }

    if(section.children[0].innerHTML.includes('KAYAKS')){
      section.onmouseenter=function(event){
        undegroundShopKayaks.style.display="block";
      }
      undegroundShopKayaks.onmouseenter=function(event){
        undegroundShopKayaks.style.display="block";
      }

      undegroundShopKayaks.onmouseleave=function(event){
        undegroundShopInflatable.style.display="none";
        undegroundShop.style.display="none";
        undegroundShopSkiffs.style.display="none";
        undegroundShopFloats.style.display="none";
        undegroundShopKayaks.style.display="none";
        undegroundShopCoolers.style.display="none";
        undegroundAccessories.style.display="none";
        undegroundApparel.style.display="none";
        undegroundCollections.style.display="none";
      }
    }

    if(section.children[0].innerHTML.includes('SKIFFS')){
      section.onmouseenter=function(event){
        undegroundShopSkiffs.style.display='block';
      }
      undegroundShopSkiffs.onmouseenter=function(event){
        undegroundShopSkiffs.style.display="block";
      }
      undegroundShopSkiffs.onmouseleave=function(event){
        undegroundShopInflatable.style.display="none";
        undegroundShop.style.display="none";
        undegroundShopSkiffs.style.display="none";
        undegroundShopFloats.style.display="none";
        undegroundShopKayaks.style.display="none";
        undegroundShopCoolers.style.display="none";
        undegroundAccessories.style.display="none";
        undegroundApparel.style.display="none";
        undegroundCollections.style.display="none";
      }
    }

    if(section.children[0].innerHTML.includes('COOLERS')){
      section.onmouseenter=function(event){
        undegroundShopCoolers.style.display='block';
      }
      undegroundShopCoolers.onmouseenter=function(event){
        undegroundShopCoolers.style.display="block";
      }
      undegroundShopCoolers.onmouseleave=function(event){
        undegroundShopInflatable.style.display="none";
        undegroundShop.style.display="none";
        undegroundShopSkiffs.style.display="none";
        undegroundShopFloats.style.display="none";
        undegroundShopKayaks.style.display="none";
        undegroundShopCoolers.style.display="none";
        undegroundAccessories.style.display="none";
        undegroundApparel.style.display="none";
        undegroundCollections.style.display="none";
      }
    }

    if(section.children[0].innerHTML.includes('ACCESSORIES')){
      section.onmouseenter=function(event){
        undegroundAccessories.style.display='block';
      }
      undegroundAccessories.onmouseenter=function(event){
        undegroundAccessories.style.display="block";
      }
      undegroundAccessories.onmouseleave=function(event){
        undegroundShopInflatable.style.display="none";
        undegroundShop.style.display="none";
        undegroundShopSkiffs.style.display="none";
        undegroundShopFloats.style.display="none";
        undegroundShopKayaks.style.display="none";
        undegroundShopCoolers.style.display="none";
        undegroundAccessories.style.display="none";
        undegroundApparel.style.display="none";
        undegroundCollections.style.display="none";
      }
    }

    if(section.children[0].innerHTML.includes('APPAREL')){
      section.onmouseenter=function(event){
        undegroundApparel.style.display='block';
      }
      undegroundApparel.onmouseenter=function(event){
        undegroundApparel.style.display="block";
      }

      undegroundApparel.onmouseleave=function(event){
        undegroundShopInflatable.style.display="none";
        undegroundShop.style.display="none";
        undegroundShopSkiffs.style.display="none";
        undegroundShopFloats.style.display="none";
        undegroundShopKayaks.style.display="none";
        undegroundShopCoolers.style.display="none";
        undegroundAccessories.style.display="none";
        undegroundApparel.style.display="none";
        undegroundCollections.style.display="none";
      }
    }

    if(section.children[0].innerHTML.includes('COLLECTIONS')){
      section.onmouseenter=function(event){
        undegroundCollections.style.display='block';
      }
      undegroundCollections.onmouseenter=function(event){
        undegroundCollections.style.display="block";
      }

      undegroundCollections.onmouseleave=function(event){
        undegroundShopInflatable.style.display="none";
        undegroundShop.style.display="none";
        undegroundShopSkiffs.style.display="none";
        undegroundShopFloats.style.display="none";
        undegroundShopKayaks.style.display="none";
        undegroundShopCoolers.style.display="none";
        undegroundAccessories.style.display="none";
        undegroundApparel.style.display="none";
        undegroundCollections.style.display="none";
      }
    }

    
  }

  section.onmouseleave=function(event){
    undegroundShopInflatable.style.display="none";
    undegroundShop.style.display="none";
    undegroundShopSkiffs.style.display="none";
    undegroundShopFloats.style.display="none";
    undegroundShopKayaks.style.display="none";
    undegroundShopCoolers.style.display="none";
    undegroundAccessories.style.display="none";
    undegroundApparel.style.display="none";
    undegroundCollections.style.display="none";
  }

}
let burger=document.querySelector('.header-subtop__burger');
let headerTop=document.querySelector('.header-top');
let headerSubTop=document.querySelector('.header-subtop');
let popUp=document.querySelector('.pop-up');
let popUpSolidPaddleBoards=document.querySelector('.pop-up-solid-paddle-boards');
let popUpInflatablePaddleBoards=document.querySelector('.pop-up-inflatable-paddle-boards');
let popUpFloatsPaddleBoards=document.querySelector('.pop-up-floats-paddle-boards');
let popUpKayaksPaddleBoards=document.querySelector('.pop-up-kayaks-paddle-boards');
let popUpSkiffsPaddleBoards=document.querySelector('.pop-up-skiffs-paddle-boards');
let popUpCoolersPaddleBoards=document.querySelector('.pop-up-coolers-paddle-boards');
let popUpAccessoriesPaddleBoards=document.querySelector('.pop-up-accessories-paddle-boards');
let popUpApparelPaddleBoards=document.querySelector('.pop-up-apparel-paddle-boards');
let popUpCollectionsPaddleBoards=document.querySelector('.pop-up-collections-paddle-boards');
let popUpExperiencePaddleBoards=document.querySelector('.pop-up-experience-paddle-boards');
let popUpStandPaddleBoards=document.querySelector('.pop-up-stand-paddle-boards');
let popUpHelpPaddleBoards=document.querySelector('.pop-up-help-paddle-boards');
let headerTop1=document.querySelector('.header-subtop');
window.addEventListener('resize',function(){
  if(getComputedStyle(headerTop1).height===88+'px'){
    if(pageYOffset>40){
      popUp.style.top='88px';
    }
    if(pageYOffset<40){
      let number=40-pageYOffset+88;
      popUp.style.top=number+'px';
    }
  }
  else{
    if(pageYOffset>32){
      popUp.style.top='64px';
    }
    if(pageYOffset<32){
      let number=32-pageYOffset+64;
      popUp.style.top=number+'px';
    }

  }
  
})
burger.addEventListener('click',function(){
  console.log(getComputedStyle(headerTop1).height);
  if(getComputedStyle(headerTop1).height===88+'px'){
    if(pageYOffset>40){
      popUp.style.top='88px';
    }
    if(pageYOffset<40){
      let number=40-pageYOffset+88;
      popUp.style.top=number+'px';
    }
  }
  else{
    if(pageYOffset>32){
      popUp.style.top='64px';
    }
    if(pageYOffset<32){
      let number=32-pageYOffset+64;
      popUp.style.top=number+'px';
    }

  }
  
  burger.children[0].classList.toggle('_active');
  document.body.classList.toggle('_lock');
  
  popUp.classList.toggle('block');
  if(popUpSolidPaddleBoards.classList.contains('pop-up-solid-paddle-boards__active')){
    popUpSolidPaddleBoards.classList.toggle('pop-up-solid-paddle-boards__active-close');
  }

  if(popUpInflatablePaddleBoards.classList.contains('pop-up-inflatable-paddle-boards__active')){
    popUpInflatablePaddleBoards.classList.toggle('pop-up-inflatable-paddle-boards__active-close');
  }

  if(popUpFloatsPaddleBoards.classList.contains('pop-up-floats-paddle-boards__active')){
    console.log(popUpFloatsPaddleBoards);
    popUpFloatsPaddleBoards.classList.toggle('pop-up-floats-paddle-boards__active-close');
  }

  if(popUpKayaksPaddleBoards.classList.contains('pop-up-kayaks-paddle-boards__active')){
    console.log(popUpFloatsPaddleBoards);
    popUpKayaksPaddleBoards.classList.toggle('pop-up-kayaks-paddle-boards__active-close');
  }

  if(popUpSkiffsPaddleBoards.classList.contains('pop-up-skiffs-paddle-boards__active')){
    console.log(popUpFloatsPaddleBoards);
    popUpSkiffsPaddleBoards.classList.toggle('pop-up-skiffs-paddle-boards__active-close');
  }

  if(popUpCoolersPaddleBoards.classList.contains('pop-up-coolers-paddle-boards__active')){
    console.log(popUpFloatsPaddleBoards);
    popUpCoolersPaddleBoards.classList.toggle('pop-up-coolers-paddle-boards__active-close');
  }

  if(popUpAccessoriesPaddleBoards.classList.contains('pop-up-accessories-paddle-boards__active')){
    console.log(popUpFloatsPaddleBoards);
    popUpAccessoriesPaddleBoards.classList.toggle('pop-up-accessories-paddle-boards__active-close');
  }

  if(popUpApparelPaddleBoards.classList.contains('pop-up-apparel-paddle-boards__active')){
    console.log(popUpFloatsPaddleBoards);
    popUpApparelPaddleBoards.classList.toggle('pop-up-apparel-paddle-boards__active-close');
  }

  if(popUpCollectionsPaddleBoards.classList.contains('pop-up-collections-paddle-boards__active')){
    console.log(popUpFloatsPaddleBoards);
    popUpCollectionsPaddleBoards.classList.toggle('pop-up-collections-paddle-boards__active-close');
  }

  if(popExperiencePaddleBoards.classList.contains('pop-up-experience-paddle-boards__active')){
    console.log(popUpFloatsPaddleBoards);
    popUpExperiencePaddleBoards.classList.toggle('pop-up-experience-paddle-boards__active-close');
  }

  if(popStandPaddleBoards.classList.contains('pop-up-stand-paddle-boards__active')){
    console.log(popUpFloatsPaddleBoards);
    popUpStandPaddleBoards.classList.toggle('pop-up-stand-paddle-boards__active-close');
  }

  if(popHelpPaddleBoards.classList.contains('pop-up-help-paddle-boards__active')){
    console.log(popUpFloatsPaddleBoards);
    popUpHelpPaddleBoards.classList.toggle('pop-up-help-paddle-boards__active-close');
  }

})

window.addEventListener('resize',function(){
  if(document.documentElement.clientWidth>1200){
    if(burger.children[0].classList.contains('_active')){
      popUp.style.display='none';
      document.body.classList.remove('_lock');
      if(popUpSolidPaddleBoards.classList.contains('pop-up-solid-paddle-boards__active')) popUpSolidPaddleBoards.style.display='none';
      if(popUpInflatablePaddleBoards.classList.contains('pop-up-inflatable-paddle-boards__active')) popUpInflatablePaddleBoards.style.display='none';
      if(popUpFloatsPaddleBoards.classList.contains('pop-up-floats-paddle-boards__active')) popUpFloatsPaddleBoards.style.display='none';
      if(popUpKayaksPaddleBoards.classList.contains('pop-up-kayaks-paddle-boards__active')) popUpKayaksPaddleBoards.style.display='none';
      if(popUpSkiffsPaddleBoards.classList.contains('pop-up-skiffs-paddle-boards__active')) popUpSkiffsPaddleBoards.style.display='none';
      if(popUpCoolersPaddleBoards.classList.contains('pop-up-coolers-paddle-boards__active')) popUpCoolersPaddleBoards.style.display='none';
      if(popUpAccessoriesPaddleBoards.classList.contains('pop-up-accessories-paddle-boards__active')) popUpAccessoriesPaddleBoards.style.display='none';
      if(popUpApparelPaddleBoards.classList.contains('pop-up-apparel-paddle-boards__active')) popUpApparelPaddleBoards.style.display='none';
      if(popUpCollectionsPaddleBoards.classList.contains('pop-up-collections-paddle-boards__active')) popUpCollectionsPaddleBoards.style.display='none';
      if(popUpExperiencePaddleBoards.classList.contains('pop-up-experience-paddle-boards__active')) popUpExperiencePaddleBoards.style.display='none';
      if(popUpHelpPaddleBoards.classList.contains('pop-up-help-paddle-boards__active')) popUpHelpPaddleBoards.style.display='none';
      if(popUpStandPaddleBoards.classList.contains('pop-up-stand-paddle-boards__active')) popUpStandPaddleBoards.style.display='none';
      
    }
  }
  else{
    if(popUp.style.display=='none') {
      popUp.style.display='block';
      document.body.classList.add('_lock');
    }
    if(popUpSolidPaddleBoards.style.display='none') popUpSolidPaddleBoards.style.display='block';
    if(popUpInflatablePaddleBoards.style.display='none') popUpInflatablePaddleBoards.style.display='block';
    if(popUpFloatsPaddleBoards.style.display='none') popUpFloatsPaddleBoards.style.display='block';
    if(popUpKayaksPaddleBoards.style.display='none') popUpKayaksPaddleBoards.style.display='block';
    if(popUpSkiffsPaddleBoards.style.display='none') popUpSkiffsPaddleBoards.style.display='block';
    if(popUpCoolersPaddleBoards.style.display='none') popUpCoolersPaddleBoards.style.display='block';
    if(popUpAccessoriesPaddleBoards.style.display='none') popUpAccessoriesPaddleBoards.style.display='block';
    if(popUpApparelPaddleBoards.style.display='none') popUpApparelPaddleBoards.style.display='block';
    if(popUpCollectionsPaddleBoards.style.display='none') popUpCollectionsPaddleBoards.style.display='block';
    if(popUpExperiencePaddleBoards.style.display='none') popUpExperiencePaddleBoards.style.display='block';
    if(popUpHelpPaddleBoards.style.display='none') popUpHelpPaddleBoards.style.display='block';
    if(popUpStandPaddleBoards.style.display='none') popUpStandPaddleBoards.style.display='block';
  }
})
let popUpContainer=document.querySelector('.pop_up__container');
let popUpMenuElements=document.querySelectorAll('.pop_up_container__element');
for(let element of popUpMenuElements){
  if(element.children[0].children[0].innerHTML.includes('SOLID PADDLE BOARDS')){
    element.addEventListener('click',function(){
      console.log(getComputedStyle(popUp).top+'px');
      popUpSolidPaddleBoards.style.top=getComputedStyle(popUp).top;
      popUpSolidPaddleBoards.classList.add('pop-up-solid-paddle-boards__active');
    })
  }

  if(element.children[0].children[0].innerHTML.includes('INFLATABLE PADDLE BOARDS')){
    element.addEventListener('click',function(){
      popUpInflatablePaddleBoards.style.top=getComputedStyle(popUp).top;
      popUpInflatablePaddleBoards.classList.add('pop-up-inflatable-paddle-boards__active');
    })
  }

  if(element.children[0].children[0].innerHTML.includes('FLOATS')){
    element.addEventListener('click',function(){
      popUpFloatsPaddleBoards.style.top=getComputedStyle(popUp).top;
      popUpFloatsPaddleBoards.classList.add('pop-up-floats-paddle-boards__active');
    })
  }

  if(element.children[0].children[0].innerHTML.includes('KAYAKS')){
    element.addEventListener('click',function(){
      popUpKayaksPaddleBoards.style.top=getComputedStyle(popUp).top;
      popUpKayaksPaddleBoards.classList.add('pop-up-kayaks-paddle-boards__active');
    })
  }

  if(element.children[0].children[0].innerHTML.includes('SKIFFS')){
    element.addEventListener('click',function(){
      popUpSkiffsPaddleBoards.style.top=getComputedStyle(popUp).top;
      popUpSkiffsPaddleBoards.classList.add('pop-up-skiffs-paddle-boards__active');
    })
  }

  if(element.children[0].children[0].innerHTML.includes('COOLERS')){
    element.addEventListener('click',function(){
      popUpCoolersPaddleBoards.style.top=getComputedStyle(popUp).top;
      popUpCoolersPaddleBoards.classList.add('pop-up-coolers-paddle-boards__active');
    })
  }

  if(element.children[0].children[0].innerHTML.includes('ACCESSORIES')){
    element.addEventListener('click',function(){
      popUpAccessoriesPaddleBoards.style.top=getComputedStyle(popUp).top;
      popUpAccessoriesPaddleBoards.classList.add('pop-up-accessories-paddle-boards__active');
    })
  }

  if(element.children[0].children[0].innerHTML.includes('APPAREL')){
    element.addEventListener('click',function(){
      popUpApparelPaddleBoards.style.top=getComputedStyle(popUp).top;
      popUpApparelPaddleBoards.classList.add('pop-up-apparel-paddle-boards__active');
    })
  }

  if(element.children[0].children[0].innerHTML.includes('COLLECTIONS')){
    element.addEventListener('click',function(){
      popUpCollectionsPaddleBoards.style.top=getComputedStyle(popUp).top;
      popUpCollectionsPaddleBoards.classList.add('pop-up-collections-paddle-boards__active');
    })
  }

  if(element.children[0].children[0].innerHTML.includes('EXPERIENCE')){
    element.addEventListener('click',function(){
      popUpExperiencePaddleBoards.style.top=getComputedStyle(popUp).top;
      popUpExperiencePaddleBoards.classList.add('pop-up-experience-paddle-boards__active');
    })
  }

  if(element.children[0].children[0].innerHTML.includes('HELP')){
    element.addEventListener('click',function(){
      popUpHelpPaddleBoards.style.top=getComputedStyle(popUp).top;
      popUpHelpPaddleBoards.classList.add('pop-up-help-paddle-boards__active');
    })
  }

  if(element.children[0].children[0].innerHTML.includes('STAND')){
    element.addEventListener('click',function(){
      popUpStandPaddleBoards.style.top=getComputedStyle(popUp).top;
      popUpStandPaddleBoards.classList.add('pop-up-stand-paddle-boards__active');
    })
  }
}
let solidPaddleBoardsChapter1Elements1=document.querySelectorAll('.pop-up-solid-paddle-boards__content-element2');
let solidPaddleBoardsContentChapter1=document.querySelector(".pop-up-solid-paddle-boards__content--chapter1");
let solidPaddleBoardsContentChapter2=document.querySelector(".pop-up-solid-paddle-boards__content--chapter2");
let solidPaddleBoardsHeader=document.querySelector('.pop-up-solid-paddle-boards__header');

solidPaddleBoardsHeader.addEventListener('click',function(){
  popUpSolidPaddleBoards.classList.remove('pop-up-solid-paddle-boards__active');
})

for(let element of solidPaddleBoardsChapter1Elements1){
  element.addEventListener('click',function(){
    element.children[1].classList.toggle('active-minus');
    element.classList.toggle('pop-up-color');
  })
  if(element.children[0].innerHTML.includes('SHOP BY MODEL')){
    element.addEventListener('click',function(){
      let count=solidPaddleBoardsContentChapter1.children.length;
      for(let idx=1;idx<count;idx++){
        solidPaddleBoardsContentChapter1.children[idx].classList.toggle('display2-none');
        console.log(solidPaddleBoardsContentChapter1.children[idx]);
      }
    })
  }

  if(element.children[0].innerHTML.includes('SHOP BY ACTIVITY')){
    element.addEventListener('click',function(){
      let count=solidPaddleBoardsContentChapter2.children.length;
      for(let idx=1;idx<count;idx++){
        solidPaddleBoardsContentChapter2.children[idx].classList.toggle('display2-none');
      }
    })
  }
}

let solidInflatableBoardsChapter1Elements1=document.querySelectorAll('.pop-up-inflatable-paddle-boards__content-element2');
let solidInflatableBoardsContentChapter1=document.querySelector(".pop-up-inflatable-paddle-boards__content--chapter1");
let solidInflatableBoardsContentChapter2=document.querySelector(".pop-up-inflatable-paddle-boards__content--chapter2");
let solidInflatableBoardsHeader=document.querySelector('.pop-up-inflatable-paddle-boards__header');

solidInflatableBoardsHeader.addEventListener('click',function(){
  popUpInflatablePaddleBoards.classList.remove('pop-up-inflatable-paddle-boards__active');
})

for(let element of solidInflatableBoardsChapter1Elements1){
  element.addEventListener('click',function(){
    element.children[1].classList.toggle('active-minus');
    element.classList.toggle('pop-up-color');
  })
  if(element.children[0].innerHTML.includes('SHOP BY MODEL')){
    element.addEventListener('click',function(){
      let count=solidInflatableBoardsContentChapter1.children.length;
      for(let idx=1;idx<count;idx++){
        solidInflatableBoardsContentChapter1.children[idx].classList.toggle('display2-none');
      }
    })
  }

  if(element.children[0].innerHTML.includes('SHOP BY ACTIVITY')){
    element.addEventListener('click',function(){
      let count=solidInflatableBoardsContentChapter2.children.length;
      for(let idx=1;idx<count;idx++){
        solidInflatableBoardsContentChapter2.children[idx].classList.toggle('display2-none');
      }
    })
  }
}

let solidFloatsBoardsChapter1Elements1=document.querySelectorAll('.pop-up-floats-paddle-boards__content-element2');
let solidFloatsBoardsContentChapter1=document.querySelector(".pop-up-floats-paddle-boards__content--chapter1");
let solidFloatsBoardsContentChapter2=document.querySelector(".pop-up-floats-paddle-boards__content--chapter2");
let solidFloatsBoardsContentChapter3=document.querySelector(".pop-up-floats-paddle-boards__content--chapter3");
let solidFloatsBoardsContentChapter4=document.querySelector(".pop-up-floats-paddle-boards__content--chapter4");
let solidFloatsBoardsHeader=document.querySelector('.pop-up-floats-paddle-boards__header');

solidFloatsBoardsHeader.addEventListener('click',function(){
  popUpFloatsPaddleBoards.classList.remove('pop-up-floats-paddle-boards__active');
  
})

for(let element of solidFloatsBoardsChapter1Elements1){
  element.addEventListener('click',function(){
    element.children[1].classList.toggle('active-minus');
    element.classList.toggle('pop-up-color');
  })
  if(element.children[0].innerHTML.includes('FEATURED')){
    element.addEventListener('click',function(){
      let count=solidFloatsBoardsContentChapter1.children.length;
      for(let idx=1;idx<count;idx++){
        solidFloatsBoardsContentChapter1.children[idx].classList.toggle('display2-none');
      }
    })
  }

  if(element.children[0].innerHTML.includes('BOTE HANGOUT')){
    element.addEventListener('click',function(){
      let count=solidFloatsBoardsContentChapter2.children.length;
      for(let idx=1;idx<count;idx++){
        solidFloatsBoardsContentChapter2.children[idx].classList.toggle('display2-none');
      }
    })
  }

  if(element.children[0].innerHTML.includes('BOTE DOCKS')){
    element.addEventListener('click',function(){
      let count=solidFloatsBoardsContentChapter3.children.length;
      for(let idx=1;idx<count;idx++){
        solidFloatsBoardsContentChapter3.children[idx].classList.toggle('display2-none');
      }
    })
  }

  if(element.children[0].innerHTML.includes('INFLATABLE SEATING')){
    element.addEventListener('click',function(){
      let count=solidFloatsBoardsContentChapter4.children.length;
      for(let idx=1;idx<count;idx++){
        solidFloatsBoardsContentChapter4.children[idx].classList.toggle('display2-none');
      }
    })
  }
}

let solidKayaksBoardsChapter1Elements1=document.querySelectorAll('.pop-up-kayaks-paddle-boards__content-element2');
let solidKayaksBoardsContentChapter1=document.querySelector(".pop-up-kayaks-paddle-boards__content--chapter1");
let solidKayaksBoardsContentChapter2=document.querySelector(".pop-up-kayaks-paddle-boards__content--chapter2");
let solidKayaksBoardsHeader=document.querySelector('.pop-up-kayaks-paddle-boards__header');

solidKayaksBoardsHeader.addEventListener('click',function(){
  popUpKayaksPaddleBoards.classList.remove('pop-up-kayaks-paddle-boards__active');
})

for(let element of solidKayaksBoardsChapter1Elements1){
  element.addEventListener('click',function(){
    element.children[1].classList.toggle('active-minus');
    element.classList.toggle('pop-up-color');
  })
  if(element.children[0].innerHTML.includes('SHOP BY MODEL')){
    element.addEventListener('click',function(){
      let count=solidKayaksBoardsContentChapter1.children.length;
      for(let idx=1;idx<count;idx++){
        solidKayaksBoardsContentChapter1.children[idx].classList.toggle('display2-none');
      }
    })
  }

  if(element.children[0].innerHTML.includes('SHOP BY TYPE')){
    element.addEventListener('click',function(){
      let count=solidKayaksBoardsContentChapter2.children.length;
      for(let idx=1;idx<count;idx++){
        solidKayaksBoardsContentChapter2.children[idx].classList.toggle('display2-none');
      }
    })
  }
}

let solidSkiffsBoardsHeader=document.querySelector('.pop-up-skiffs-paddle-boards__header');

solidSkiffsBoardsHeader.addEventListener('click',function(){
  popUpSkiffsPaddleBoards.classList.remove('pop-up-skiffs-paddle-boards__active');
})

let solidCoolersBoardsChapter1Elements1=document.querySelectorAll('.pop-up-coolers-paddle-boards__content-element2');
let solidCoolersBoardsContentChapter1=document.querySelector(".pop-up-coolers-paddle-boards__content--chapter1");
let solidCoolersBoardsContentChapter2=document.querySelector(".pop-up-coolers-paddle-boards__content--chapter2");
let solidCoolersBoardsContentChapter3=document.querySelector(".pop-up-coolers-paddle-boards__content--chapter3");
let solidCoolersBoardsHeader=document.querySelector('.pop-up-coolers-paddle-boards__header');

solidCoolersBoardsHeader.addEventListener('click',function(){
  popUpCoolersPaddleBoards.classList.remove('pop-up-coolers-paddle-boards__active');
})

for(let element of solidCoolersBoardsChapter1Elements1){
  element.addEventListener('click',function(){
    element.children[1].classList.toggle('active-minus');
    element.classList.toggle('pop-up-color');
  })
  if(element.children[0].innerHTML.includes('HARD COOLERS')){
    element.addEventListener('click',function(){
      let count=solidCoolersBoardsContentChapter1.children.length;
      for(let idx=1;idx<count;idx++){
        solidCoolersBoardsContentChapter1.children[idx].classList.toggle('display2-none');
      }
    })
  }

  if(element.children[0].innerHTML.includes('SOFT COOLERS')){
    element.addEventListener('click',function(){
      let count=solidCoolersBoardsContentChapter2.children.length;
      for(let idx=1;idx<count;idx++){
        solidCoolersBoardsContentChapter2.children[idx].classList.toggle('display2-none');
      }
    })
  }

  if(element.children[0].innerHTML.includes('DRINKWARE')){
    element.addEventListener('click',function(){
      let count=solidCoolersBoardsContentChapter3.children.length;
      for(let idx=1;idx<count;idx++){
        solidCoolersBoardsContentChapter3.children[idx].classList.toggle('display2-none');
      }
    })
  }
}

let solidAccessoriesBoardsChapter1Elements1=document.querySelectorAll('.pop-up-accessories-paddle-boards__content-element2');
let solidAccessoriesBoardsContentChapter1=document.querySelector(".pop-up-accessories-paddle-boards__content--chapter1");
let solidAccessoriesBoardsContentChapter2=document.querySelector(".pop-up-accessories-paddle-boards__content--chapter2");
let solidAccessoriesBoardsContentChapter3=document.querySelector(".pop-up-accessories-paddle-boards__content--chapter3");
let solidAccessoriesBoardsContentChapter4=document.querySelector(".pop-up-accessories-paddle-boards__content--chapter4");
let solidAccessoriesBoardsContentChapter5=document.querySelector(".pop-up-accessories-paddle-boards__content--chapter5");
let solidAccessoriesBoardsHeader=document.querySelector('.pop-up-accessories-paddle-boards__header');

solidAccessoriesBoardsHeader.addEventListener('click',function(){
  popUpAccessoriesPaddleBoards.classList.remove('pop-up-accessories-paddle-boards__active');
})

for(let element of solidAccessoriesBoardsChapter1Elements1){
  element.addEventListener('click',function(){
    element.children[1].classList.toggle('active-minus');
    element.classList.toggle('pop-up-color');
  })
  if(element.children[0].innerHTML.includes('ATTACHMENTS')){
    element.addEventListener('click',function(){
      let count=solidAccessoriesBoardsContentChapter1.children.length;
      for(let idx=1;idx<count;idx++){
        solidAccessoriesBoardsContentChapter1.children[idx].classList.toggle('display2-none');
      }
    })
  }

  if(element.children[0].innerHTML.includes('TRAVEL')){
    element.addEventListener('click',function(){
      console.log(solidAccessoriesBoardsContentChapter2.children);
      let count=solidAccessoriesBoardsContentChapter2.children.length;
      for(let idx=1;idx<count;idx++){
        solidAccessoriesBoardsContentChapter2.children[idx].classList.toggle('display2-none');
      }
    })
  }

  if(element.children[0].innerHTML.includes('SAFETY')){
    element.addEventListener('click',function(){
      let count=solidAccessoriesBoardsContentChapter3.children.length;
      for(let idx=1;idx<count;idx++){
        solidAccessoriesBoardsContentChapter3.children[idx].classList.toggle('display2-none');
      }
    })
  }

  if(element.children[0].innerHTML.includes('MAGNEPOD')){
    element.addEventListener('click',function(){
      let count=solidAccessoriesBoardsContentChapter4.children.length;
      for(let idx=1;idx<count;idx++){
        solidAccessoriesBoardsContentChapter4.children[idx].classList.toggle('display2-none');
      }
    })
  }

  if(element.children[0].innerHTML.includes('SHOP ACCESSORIES')){
    element.addEventListener('click',function(){
      let count=solidAccessoriesBoardsContentChapter5.children.length;
      console.log(solidAccessoriesBoardsContentChapter5.children);
      for(let idx=1;idx<count;idx++){
        solidAccessoriesBoardsContentChapter5.children[idx].classList.toggle('display2-none');
      }
    })
  }
  
}

let solidExperienceBoardsChapter1Elements1=document.querySelectorAll('.pop-up-experience-paddle-boards__content-element2');
let solidExperienceBoardsContentChapter1=document.querySelector(".pop-up-experience-paddle-boards__content--chapter1");
let solidExperienceBoardsHeader=document.querySelector('.pop-up-experience-paddle-boards__header');

solidExperienceBoardsHeader.addEventListener('click',function(){
  popUpExperiencePaddleBoards.classList.remove('pop-up-experience-paddle-boards__active');
})

for(let element of solidExperienceBoardsChapter1Elements1){
  element.addEventListener('click',function(){
    element.children[1].classList.toggle('active-minus');
    element.classList.toggle('pop-up-color');
  })
  if(element.children[0].innerHTML.includes('DESTINATIONS')){
    element.addEventListener('click',function(){
      let count=solidExperienceBoardsContentChapter1.children.length;
      for(let idx=1;idx<count;idx++){
        solidExperienceBoardsContentChapter1.children[idx].classList.toggle('display2-none');
      }
    })
  }

  
}

let solidApparelBoardsChapter1Elements1=document.querySelectorAll('.pop-up-apparel-paddle-boards__content-element2');
let solidApparelBoardsContentChapter1=document.querySelector(".pop-up-apparel-paddle-boards__content--chapter1");
let solidApparelBoardsHeader=document.querySelector('.pop-up-apparel-paddle-boards__header');

solidApparelBoardsHeader.addEventListener('click',function(){
  popUpApparelPaddleBoards.classList.remove('pop-up-apparel-paddle-boards__active');
  
})

for(let element of solidApparelBoardsChapter1Elements1){
  element.addEventListener('click',function(){
    element.children[1].classList.toggle('active-minus');
    element.classList.toggle('pop-up-color');
  })
  if(element.children[0].innerHTML.includes('WATERPROOF PACKS')){
    element.addEventListener('click',function(){
      let count=solidApparelBoardsContentChapter1.children.length;
      for(let idx=1;idx<count;idx++){
        solidApparelBoardsContentChapter1.children[idx].classList.toggle('display2-none');
      }
    })
  }
}

let solidCollectionsBoardsChapter1Elements1=document.querySelectorAll('.pop-up-collections-paddle-boards__content-element2');
let solidCollectionsBoardsContentChapter1=document.querySelector(".pop-up-collections-paddle-boards__content--chapter1");
let solidCollectionsBoardsContentChapter2=document.querySelector(".pop-up-collections-paddle-boards__content--chapter2");
let solidCollectionsBoardsHeader=document.querySelector('.pop-up-collections-paddle-boards__header');

solidCollectionsBoardsHeader.addEventListener('click',function(){
  popUpCollectionsPaddleBoards.classList.remove('pop-up-collections-paddle-boards__active');
})

for(let element of solidCollectionsBoardsChapter1Elements1){
  element.addEventListener('click',function(){
    element.children[1].classList.toggle('active-minus');
    element.classList.toggle('pop-up-color');
  })
  if(element.children[0].innerHTML.includes('FEATURED')){
    element.addEventListener('click',function(){
      let count=solidCollectionsBoardsContentChapter1.children.length;
      for(let idx=1;idx<count;idx++){
        solidCollectionsBoardsContentChapter1.children[idx].classList.toggle('display2-none');
      }
    })
  }

  if(element.children[0].innerHTML.includes('STYLE SPOTLIGHT')){
    element.addEventListener('click',function(){
      let count=solidCollectionsBoardsContentChapter2.children.length;
      for(let idx=1;idx<count;idx++){
        solidCollectionsBoardsContentChapter2.children[idx].classList.toggle('display2-none');
      }
    })
  }
}

let solidStandBoardsChapter1Elements1=document.querySelectorAll('.pop-up-stand-paddle-boards__content-element2');
let solidStandBoardsContentChapter1=document.querySelector(".pop-up-stand-paddle-boards__content--chapter1");
let solidStandBoardsContentChapter2=document.querySelector(".pop-up-stand-paddle-boards__content--chapter2");
let solidStandBoardsContentChapter3=document.querySelector(".pop-up-stand-paddle-boards__content--chapter3");
let solidStandBoardsHeader=document.querySelector('.pop-up-stand-paddle-boards__header');

solidStandBoardsHeader.addEventListener('click',function(){
  popUpStandPaddleBoards.classList.remove('pop-up-stand-paddle-boards__active');
})

for(let element of solidStandBoardsChapter1Elements1){
  element.addEventListener('click',function(){
    element.children[1].classList.toggle('active-minus');
    element.classList.toggle('pop-up-color');
  })
  if(element.children[0].innerHTML.includes('WHY BOTE')){
    element.addEventListener('click',function(){
      let count=solidStandBoardsContentChapter1.children.length;
      for(let idx=1;idx<count;idx++){
        solidStandBoardsContentChapter1.children[idx].classList.toggle('display2-none');
      }
    })
  }
  if(element.children[0].innerHTML.includes('AMBASSADORS')){
    element.addEventListener('click',function(){
      let count=solidStandBoardsContentChapter2.children.length;
      for(let idx=1;idx<count;idx++){
        solidStandBoardsContentChapter2.children[idx].classList.toggle('display2-none');
      }
    })
  }
  if(element.children[0].innerHTML.includes('DARKROOM')){
    element.addEventListener('click',function(){
      let count=solidStandBoardsContentChapter3.children.length;
      for(let idx=1;idx<count;idx++){
        solidStandBoardsContentChapter3.children[idx].classList.toggle('display2-none');
      }
    })
  }

  
}

let solidHelpBoardsHeader=document.querySelector('.pop-up-help-paddle-boards__header');

solidHelpBoardsHeader.addEventListener('click',function(){
  popUpHelpPaddleBoards.classList.remove('pop-up-help-paddle-boards__active');
})


let HTE4=document.querySelector('.header-top__element4');
let HTE=document.querySelector('.header-subtop-account__element');
HTE4.onclick=function(e){
  console.log(HTE4);
  HTE.classList.toggle('_block2');
  console.log(HTE);
}

let menuExpirience1=document.querySelector('.menu_expirience__text__element1');
let simpleMenu=document.querySelector('.simple-menu-bote-bg');
menuExpirience1.onmouseenter=function(){
  simpleMenu.style.backgroundImage='url("https://cdn.shopify.com/s/files/1/0046/9018/2262/files/submenu-bg-breeze_800x.png?v=12849331689285479083")';
}
menuExpirience1.onmouseleave=function(){
  simpleMenu.style.backgroundImage='url("https://cdn.shopify.com/s/files/1/0046/9018/2262/files/gs-silhouette_3.png?v=1633630898")';
}

let menuExpirience2=document.querySelector('.menu_expirience__text__element2');
menuExpirience2.onmouseenter=function(){
  simpleMenu.style.backgroundImage='url("https://cdn.shopify.com/s/files/1/0046/9018/2262/files/submenu-bg-flood_800x.png?v=17098855558860263241")';
}
menuExpirience2.onmouseleave=function(){
  simpleMenu.style.backgroundImage='url("https://cdn.shopify.com/s/files/1/0046/9018/2262/files/gs-silhouette_3.png?v=1633630898")';
}

let menuExpirience3=document.querySelector('.menu_expirience__text__element3');
menuExpirience3.onmouseenter=function(){
  simpleMenu.style.backgroundImage='url("https://cdn.shopify.com/s/files/1/0046/9018/2262/files/submenu-bg-hd_800x.png?v=12645504100837837705")';
}
menuExpirience3.onmouseleave=function(){
  simpleMenu.style.backgroundImage='url("https://cdn.shopify.com/s/files/1/0046/9018/2262/files/gs-silhouette_3.png?v=1633630898")';
}

let menuExpirience4=document.querySelector('.menu_expirience__text__element4');
menuExpirience4.onmouseenter=function(){
  simpleMenu.style.backgroundImage='url("https://cdn.shopify.com/s/files/1/0046/9018/2262/files/submenu-bg-rackham_800x.png?v=1671287394510")';
}
menuExpirience4.onmouseleave=function(){
  simpleMenu.style.backgroundImage='url("https://cdn.shopify.com/s/files/1/0046/9018/2262/files/gs-silhouette_3.png?v=1633630898")';
}

let menuExpirience5=document.querySelector('.menu_expirience__text__element5');
menuExpirience5.onmouseenter=function(){
  simpleMenu.style.backgroundImage='url("https://cdn.shopify.com/s/files/1/0046/9018/2262/files/submenu-bg-traveller_800x.png?v=3680314501164997859")';
}
menuExpirience5.onmouseleave=function(){
  simpleMenu.style.backgroundImage='url("https://cdn.shopify.com/s/files/1/0046/9018/2262/files/gs-silhouette_3.png?v=1633630898")';
}

let menuInflatable1=document.querySelector('.menu_inflatable__text__element1');
let simpleMenu2=document.querySelector('.simple-menu-bote-bg2');
menuInflatable1.onmouseenter=function(){
  simpleMenu2.style.backgroundImage='url("https://cdn.shopify.com/s/files/1/0046/9018/2262/files/submenu-bg-breeze_800x.png?v=12849331689285479083")';
}
menuInflatable1.onmouseleave=function(){
  simpleMenu2.style.backgroundImage='url("https://cdn.shopify.com/s/files/1/0046/9018/2262/files/gs-silhouette_3.png?v=1633630898")';
}

let menuInflatable2=document.querySelector('.menu_inflatable__text__element2');
menuInflatable2.onmouseenter=function(){
  simpleMenu2.style.backgroundImage='url("https://cdn.shopify.com/s/files/1/0046/9018/2262/files/submenu-bg-flood_800x.png?v=17098855558860263241")';
}
menuInflatable2.onmouseleave=function(){
  simpleMenu2.style.backgroundImage='url("https://cdn.shopify.com/s/files/1/0046/9018/2262/files/gs-silhouette_3.png?v=1633630898")';
}

let menuInflatable3=document.querySelector('.menu_inflatable__text__element3');
menuInflatable3.onmouseenter=function(){
  simpleMenu2.style.backgroundImage='url("https://cdn.shopify.com/s/files/1/0046/9018/2262/files/submenu-bg-hd_800x.png?v=12645504100837837705")';
}
menuInflatable3.onmouseleave=function(){
  simpleMenu2.style.backgroundImage='url("https://cdn.shopify.com/s/files/1/0046/9018/2262/files/gs-silhouette_3.png?v=1633630898")';
}

let menuInflatable4=document.querySelector('.menu_inflatable__text__element4');
menuInflatable4.onmouseenter=function(){
  simpleMenu2.style.backgroundImage='url("https://cdn.shopify.com/s/files/1/0046/9018/2262/files/submenu-bg-rackham_800x.png?v=1671287394510")';
}
menuInflatable4.onmouseleave=function(){
  simpleMenu2.style.backgroundImage='url("https://cdn.shopify.com/s/files/1/0046/9018/2262/files/gs-silhouette_3.png?v=1633630898")';
}

let menuInflatable5=document.querySelector('.menu_inflatable__text__element5');
menuInflatable5.onmouseenter=function(){
  simpleMenu2.style.backgroundImage='url("https://cdn.shopify.com/s/files/1/0046/9018/2262/files/submenu-bg-traveller_800x.png?v=3680314501164997859")';
}
menuInflatable5.onmouseleave=function(){
  simpleMenu2.style.backgroundImage='url("https://cdn.shopify.com/s/files/1/0046/9018/2262/files/gs-silhouette_3.png?v=1633630898")';
}