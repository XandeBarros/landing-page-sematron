if (window.screen.width > 768) {
  let counter = 1;
  
  const TWENTYSECONDS = 20000;
  
  setInterval(() => {
    document.querySelector('#radio' + counter).checked = true;
    counter++;
    if(counter > 5) {
      counter = 1;
    }
  }, TWENTYSECONDS);
}