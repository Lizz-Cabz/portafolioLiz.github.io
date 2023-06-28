let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Desarrollo sitios web , algun otro programita en diferentes lenguajes de programación y escribo artículos sobre programación enfocado en el área textil')
  .pauseFor(200)
  .deleteChars(10)
  .start();
  
