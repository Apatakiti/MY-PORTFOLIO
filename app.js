function switching() {
  const page = document.getElementsByClassName('real-page');
  const pop = document.getElementsByClassName('pop-up');
  const hambur1 = document.getElementsByClassName('nav1');
  const hambur2 = document.getElementsByClassName('nav2');

  hambur1[0].addEventListener('click', () => {
    for (let i = 0; i < page.length; i += 1) {
      page[i].style.display = 'none';

      for (let i = 0; i < pop.length; i += 1) {
        pop[i].style.display = 'grid';
      }
    }
  });

  hambur2[0].addEventListener('click', () => {
    for (let i = 0; i < page.length; i += 1) {
      pop[i].style.display = 'none';

      for (let i = 0; i < pop.length; i += 1) {
        page[i].style.display = 'grid';
      }
    }
  });

  const portf = document.getElementsByClassName('port');

  portf[0].addEventListener('click', () => {
    for (let i = 0; i < pop.length; i += 1) {
      page[i].style.display = 'grid';

      for (let i = 0; i < page.length; i += 1) {
        pop[i].style.display = 'none';
      }
    }
  });

  const about = document.getElementsByClassName('abou');

  about[0].addEventListener('click', () => {
    for (let i = 0; i < pop.length; i += 1) {
      page[i].style.display = 'grid';

      for (let i = 0; i < page.length; i += 1) {
        pop[i].style.display = 'none';
      }
    }
  });

  const contac = document.getElementsByClassName('con');

  contac[0].addEventListener('click', () => {
    for (let i = 0; i < pop.length; i += 1) {
      page[i].style.display = 'grid';

      for (let i = 0; i < page.length; i += 1) {
        pop[i].style.display = 'none';
      }
    }
  });
}
switching();

const popUpDatas = [
  {
    name: 'Multi-Post Stories 1',
    description: "This is my best project Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinceLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ips",
    featuredImage: 'images/pop-up.png',
    technologies: ['HTML', 'CSS', 'ruby on rails'],
    golive: '',
    linkSource: '',
  },
  {
    name: 'Multi-Post Stories 2',
    description: "this is a the facebook webpage which took me ten years to build Lorem Ipsum has been the industry's standard dummy text ever sinceLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took aand i hop you enjoyed your trip down here",
    featuredImage: 'images/pop-up.png',
    technologies: ['python', 'react', 'ruby'],
    golive: '',
    linkSource: '',
  },
  {
    name: 'Multi-Post Stories 3',
    description: "This is my best project Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinceLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ips",
    featuredImage: 'images/pop-up.png',
    technologies: ['vue', 'Html', 'python'],
    golive: '',
    linkSource: '',
  },
  {
    name: 'Multi-Post Stories 4',
    description: "This is my best project Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinceLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ips",
    featuredImage: 'images/pop-up.png',
    technologies: ['hash', 'CSS', 'java'],
    golive: '',
    linkSource: '',
  },

  {
    name: 'Multi-Post Stories 1',
    description: "This is my best project Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinceLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ips",
    featuredImage: 'images/pop-up.png',
    technologies: ['HTML', 'CSS', 'ruby on rails'],
    golive: '',
    linkSource: '',
  },
  {
    name: 'Multi-Post Stories 2',
    description: "this is a the facebook webpage which took me ten years to build Lorem Ipsum has been the industry's standard dummy text ever sinceLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took aand i hop you enjoyed your trip down here",
    featuredImage: 'images/pop-up.png',
    technologies: ['python', 'react', 'ruby'],
    golive: '',
    linkSource: '',
  },
  {
    name: 'Multi-Post Stories 3',
    description: "This is my best project Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinceLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ips",
    featuredImage: 'images/pop-up.png',
    technologies: ['vue', 'Html', 'python'],
    golive: '',
    linkSource: '',
  },
  {
    name: 'Multi-Post Stories 4',
    description: "This is my best project Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinceLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ips",
    featuredImage: 'images/pop-up.png',
    technologies: ['hash', 'CSS', 'java'],
    golive: '',
    linkSource: '',
  },
];

// const fillData = ({
//   name, description, featuredImage, technologies,
// }) => {
function fillData({
  name, description, featuredImage, technologies,
}) {
  const title = document.getElementsByClassName('p-topic');
  const descrip = document.getElementsByClassName('description');
  const photo = document.getElementsByClassName('snapshoot');

  title.innerHTML = name;
  descrip.innerHTML = description;
  photo.src = featuredImage;

  const techs = document.querySelectorAll('skill');

  //   for (const tech of techs) {
  //     tech.innerHTML = technologies[i];
  //   }
  // };

  for (let i = 0; i < techs.length; i += 1) {
    techs.innerHTML = technologies[i];
  }
}
const projbtn = document.getElementsByClassName('btn');
const thePop = document.getElementsByClassName('the-pop-up');
const blurs = document.getElementById('blur');
const xmark = document.getElementById('x-mark');

for (let i = 0; i < projbtn.length; i += 1) {
  projbtn[i].addEventListener('click', () => {
    fillData(popUpDatas[i]);

    for (let i = 0; i < thePop.length; i += 1) {
      thePop[i].style.display = 'grid';
      blurs.style.filter = 'blur(500px)';

      xmark.addEventListener('click', () => {
        for (let i = 0; i < thePop.length; i += 1) {
          thePop[i].style.display = 'none';
        }
        blurs.style.filter = 'blur(0px)';
      });
    }
  });
}
