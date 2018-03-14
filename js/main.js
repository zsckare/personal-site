var app = document.getElementById('write');

var typewriter = new Typewriter(app, {
    loop: false
});

typewriter.typeString("I'm a Web Developer.")
    .pauseFor(2500)
    .deleteChars(14)
    .typeString('Mobile App Developer.')
    .pauseFor(2500)
    .deleteChars(21)
    .typeString('Geek.')
    .pauseFor(3000)
    .deleteAll()
    .typeString("I'm Antonio Alvarez.")
    .start();

    $(document).ready(function() {
        $('#fullpage').fullpage();
    });