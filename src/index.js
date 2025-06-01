function displayBook(response) {
  new Typewriter("#book-recommendation", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: null,
  });
}

function generateBook(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector(".prompt");
  let apiKey = "14e2ba01dt6565f0b8o8e18b0aa7193f";
  let context =
    "you are an intellegent AI assistant that was created to help recommend books to people based on the user instructions provided. Please only recommend one book and do no give reasoning to the recommendations.";
  let prompt = `user instructions: generate a book about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(displayBook);
}

let bookFormGenerator = document.querySelector("#book-generator");
bookFormGenerator.addEventListener("submit", generateBook);
