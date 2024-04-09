let heading = document.getElementById('heading')
let image = document.getElementById('detailsImage')
let desc = document.getElementById('detailsDesc')
function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}



const data = [
  {
    Title: 'Empowering marginalized women',
    src: 'https://via.placeholder.com/150',
    desc: 'Description 1',
  },
  {
    Title: 'Follow Up-Meetings',
    src: 'https://via.placeholder.com/150',
    desc: 'Description 2',
  },
  {
    Title: 'Herbal Plants Distribution',
    src: 'https://via.placeholder.com/150',
    desc: 'Description 3',
  },
  {
    Title: 'Knwledge Sharing among children',
    src: 'https://via.placeholder.com/150',
    desc: 'Description 3',
  },
  {
    Title: 'Covid Response',
    src: 'https://via.placeholder.com/150',
    desc: 'We has stepped up to provide much-needed relief to families severely affected by the COVID-19 outbreak. Targeting the most vulnerable in the Kandaha, Sattar Kataiyaa, and Pastwar villages of Saharsa district, they distributed essential COVID relief kits to 30 families. Each kit included vital supplies such as hand wash, sanitizer, masks, soap, rice, grains, and mustard oil. This initiative aims to alleviate the hardships faced by those hit hardest by the pandemic, offering practical support to ensure their well-being during these challenging times.',
  },
  {
    Title: 'Pond Rejuvenation',
    src: 'https://via.placeholder.com/150',
    desc: 'Amidst ongoing COVID-19 response efforts, a novel initiative integrating pond rejuvenation for fisheries and Makhana farming has emerged, bolstering community resilience and raising awareness. he revitalization of fisheries and promotion of Makhana farming offer new economic opportunities for communities hit hard by the pandemic. By diversifying income streams, local residents can mitigate financial vulnerabilities and build sustainable livelihoods.',
  },

]


var id = getUrlParameter('id');

console.log('ID:', id);
function updateLatest() {
  var id = getUrlParameter('id');
  switch (id) {
    case '1':
      heading.innerHTML = data[0].Title;
      image.src = data[0].src;
      desc.innerHTML = data[0].desc;
      break;
    case '2':
      heading.innerHTML = data[1].Title;
      image.src = data[1].src;
      desc.innerHTML = data[1].desc;
      break;
    case '3':
      heading.innerHTML = data[2].Title;
      image.src = data[2].src;
      desc.innerHTML = data[2].desc;
      break;
    case '4':
      heading.innerHTML = data[3].Title;
      image.src = data[3].src;
      desc.innerHTML = data[3].desc;
      break;
    case '5':
      heading.innerHTML = data[4].Title;
      image.src = data[4].src;
      desc.innerHTML = data[4].desc;
      break;
    case '6':
      heading.innerHTML = data[5].Title;
      image.src = data[5].src;
      desc.innerHTML = data[5].desc;
      break;
    default:
      heading.innerHTML = 'No title';
      // image.src = data[3].src;
      // desc.innerHTML = data[3].desc;
      break;
  }
}