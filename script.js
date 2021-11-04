let lastEvents = [
  {
    nameEvent: 'NIGHT SIGHTSEEING',
    dateEvent: 'TU, JAN 15',
    infoEvent:
      'Zamek Książ w Wałbrzychu organizuje nocne zwiedzanie cyklicznie w piątki lub w soboty.',
    img: 'img/lastEvent1.jpg',
  },
];

let section = document.querySelector('.events');

window.addEventListener('DOMContentLoaded', function () {
  showEvent(lastEvents);
});

function showEvent(eventsItem) {
  let show = eventsItem.map(function (item) {
    return `
        
        <div class="flex-container-events1">
        <img src="${item.img}" alt="">
        <div class="box1">
            <h3>${item.nameEvent}</h3>
            <h4>${item.dateEvent}</h4>
            <p>${item.infoEvent}</p>
            <button class="box-btn">MORE INFO</button>
        </div>
    </div>`;
  });
  show = show.join('');
  section.innerHTML = '<h2>MUSEUM</h2>' + show;
}

const allSection = document.querySelectorAll('.section');

const callback = function (entries, observer) {
  const [entry] = entries;

  console.log(entry);
  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section-hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(callback, {
  root: null,
  threshold: 0.5,
});

allSection.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section-hidden');
});
