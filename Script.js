(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  function speakHello(name) {
    console.log("Hello " + name);
  }

  function speakGoodbye(name) {
    console.log("Goodbye " + name);
  }

  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    if (firstLetter === 'j') {
      speakGoodbye(names[i]);
    } else {
      speakHello(names[i]);
    }
  }
})();
