//select the button element.
const btn = document.querySelector('body button');

//using a dynamic import with async/await to import showText function.
btn.addEventListener('click', async () => {
  let { showText } = await import('./app.js');
  showText();

  let searchResult = await import('./search-result.js');
  const searchResultTag = document.createElement('search-result');
  searchResultTag.setAttribute(
    'data-options',
    JSON.stringify({ name: 'Emil' })
  );
  document.body.appendChild(searchResultTag);
});
