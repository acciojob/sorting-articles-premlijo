const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog'
];

// function to remove articles
function stripArticle(name) {
  return name.replace(/^(a |an |the )/i, '').trim();
}

// sort bands ignoring articles
const sortedBands = bands.sort((a, b) => {
  const nameA = stripArticle(a);
  const nameB = stripArticle(b);
  
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});

// select ul
const ul = document.getElementById("band");

// create list items
ul.innerHTML = sortedBands
  .map(band => `<li>${band}</li>`)
  .join('');