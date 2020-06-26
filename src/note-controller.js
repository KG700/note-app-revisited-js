((window, document, undefined) => {

  const onceLoaded = () => {
    const app = document.getElementById('app');
    console.log(app);
    app.innerHTML = "howdy";
  }

window.onload = onceLoaded;

})(window, document, undefined);
