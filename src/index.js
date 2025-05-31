function generateBook(event) {
  event.preventDefault();

  new Typewriter("#book-recommendation", {
    strings: ["Hello", "World"],
    autoStart: true,
    delay: 10,
    cursor: null,
  });
}

let bookFormGenerator = document.querySelector("#book-generator");
bookFormGenerator.addEventListener("submit", generateBook);
