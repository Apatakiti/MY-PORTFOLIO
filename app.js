

const projbtn = document.getElementsByClassName('btn');
const thePop = document.getElementsByClassName('the-pop-up')
const blurs = document.getElementById('blur')
const xmark = document.getElementById('x-mark')

projbtn[0].addEventListener('click', function() {
    console.log('me!!!')

    for (let i = 0; i < thePop.length; i += 1) {
          thePop[i].style.display = 'grid';    
    }
    
    blurs.style.filter = "blur(800px)";
})

xmark.addEventListener('click', function() {
    for (let i = 0; i < thePop.length; i += 1) {
        thePop[i].style.display = 'none';    
  }

  blurs.style.filter = "blur(0px)"
})






















// function switching() {
//   const page = document.getElementsByClassName('real-page');
//   const pop = document.getElementsByClassName('pop-up');
//   const hambur1 = document.getElementsByClassName('nav1');
//   const hambur2 = document.getElementsByClassName('nav2');
//   const portf = document.getElementsByClassName('port');
//   const about = document.getElementsByClassName('abou');
//   const contac = document.getElementsByClassName('con');

//   hambur1[0].addEventListener('click', () => {
//     for (let i = 0; i < page.length; i += 1) {
//       page[i].style.display = 'none';

//       for (let i = 0; i < pop.length; i += 1) {
//         pop[i].style.display = 'grid';
//       }
//     }
//   });

//   hambur2[0].addEventListener('click', () => {
//     for (let i = 0; i < page.length; i += 1) {
//       pop[i].style.display = 'none';

//       for (let i = 0; i < pop.length; i += 1) {
//         page[i].style.display = 'grid';
//       }
//     }
//   });

//   portf[0].addEventListener('click', () => {
//     for (let i = 0; i < pop.length; i += 1) {
//       page[i].style.display = 'grid';

//       for (let i = 0; i < page.length; i += 1) {
//         pop[i].style.display = 'none';
//       }
//     }
//   });

//   about[0].addEventListener('click', () => {
//     for (let i = 0; i < pop.length; i += 1) {
//       page[i].style.display = 'grid';

//       for (let i = 0; i < page.length; i += 1) {
//         pop[i].style.display = 'none';
//       }
//     }
//   });

//   contac[0].addEventListener('click', () => {
//     for (let i = 0; i < pop.length; i += 1) {
//       page[i].style.display = 'grid';

//       for (let i = 0; i < page.length; i += 1) {
//         pop[i].style.display = 'none';
//       }
//     }
//   });
// }

// switching();
