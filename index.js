//select the button element.
const btn = document.querySelector('body button');

//using a dynamic import with async/await to import showText function.
btn.addEventListener('click', async () => {
  let { showText } = await import('./app.js');
  showText();

  let myService = await import('./my-service.js');
  const myServiceTag = document.createElement('my-service');
  myServiceTag.setAttribute(
    'data-options',
    JSON.stringify({ name: 'Bob' })
  );
  document.body.appendChild(myServiceTag);
});
