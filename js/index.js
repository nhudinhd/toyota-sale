window.onload = function () {
  document.getElementById("previous").onclick = function () {
    let imgSrc;
    let activeNow;
    let activeSilder = getIndexSilder();
    let imgSilder = document.getElementById("imgSilder");
    console.log(activeSilder)
    switch (activeSilder) {
      case '1':
        imgSrc = 'assets/img/slider/sidler5.jpeg';
        activeNow = document.querySelector('li[data-index="5"]')
        break;
      case '2':
        imgSrc = 'assets/img/slider/silder1.jpg';
        activeNow = document.querySelector('li[data-index="1"]')
        break;
      case '3':
        imgSrc = 'assets/img/slider/silder2.jpg';
        activeNow = document.querySelector('li[data-index="2"]')
        break;
      case '4':
        imgSrc = 'assets/img/slider/silder3.png';
        activeNow = document.querySelector('li[data-index="3"]')
        break;
      case '5':
        imgSrc = 'assets/img/slider/silder4.jpg';
        activeNow = document.querySelector('li[data-index="4"]')
        break;

    }
    console.log(imgSrc);
    let currentActive = document.getElementsByClassName('active');
    console.log(currentActive)
    currentActive[0].classList.remove('active')
    activeNow.classList.add('active');
    imgSilder.setAttribute('src', imgSrc);
  }

  document.getElementById("next").onclick = function () {
    let imgSrc;
    let activeNow;
    let activeSilder = getIndexSilder();
    let imgSilder = document.getElementById("imgSilder");
    console.log(activeSilder)
    switch (activeSilder) {
      case '1':
        imgSrc = 'assets/img/slider/silder2.jpg';
        activeNow = document.querySelector('li[data-index="2"]')
        break;
      case '2':
        imgSrc = 'assets/img/slider/silder3.png';
        activeNow = document.querySelector('li[data-index="3"]')
        break;
      case '3':
        imgSrc = 'assets/img/slider/silder4.jpg';
        activeNow = document.querySelector('li[data-index="4"]')
        break;
      case '4':
        imgSrc = 'assets/img/slider/sidler5.jpeg';
        activeNow = document.querySelector('li[data-index="5"]')
        break;
      case '5':
        imgSrc = 'assets/img/slider/silder1.jpg';
        activeNow = document.querySelector('li[data-index="1"]')
        break;

    }
    console.log(imgSrc);
    let currentActive = document.getElementsByClassName('active');
    console.log(currentActive)
    currentActive[0].classList.remove('active')
    activeNow.classList.add('active');
    imgSilder.setAttribute('src', imgSrc);
  }

  function getIndexSilder() {
    let activeSilder = document.getElementsByClassName('active');
    let dataIndexVal = activeSilder[0].getAttribute('data-index');
    return dataIndexVal;
  }
}
