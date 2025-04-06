import axios from "axios";
import _ from "lodash";

const searchButton = document.getElementById("searchButton");
const categoryInput = document.getElementById("categoryInput");
const booksList = document.getElementById("booksList");
const bookDescription = document.getElementById("bookDescription");

searchButton.addEventListener("click", async () => {
  const category = categoryInput.value.trim();
  if (!category) {
    alert("Inserisci un genere!");
    return;
  }
  fetchBooks(category);
});

async function fetchBooks(category) {
  booksList.innerHTML = "Caricamento...";
  bookDescription.innerHTML = "";

  try {
    const response = await axios.get(
      `https://openlibrary.org/subjects/${category}.json`
    );
    const books = _.get(response, "data.works", []);

    booksList.innerHTML = books.length ? "" : "Nessun libro trovato per il genere cercato.";

    books.forEach((book) => {
      const bookDiv = document.createElement("div");
      bookDiv.classList.add("book-item");

      const bookTitle = document.createElement("p");
      bookTitle.textContent = `Titolo: ${book.title}`;
      bookDiv.appendChild(bookTitle);

      const bookAuthor = document.createElement("p");
      const authorLabel = book.authors.length === 1 ? "Autore" : "Autori";
      bookAuthor.textContent = `${authorLabel}: ${book.authors
        .map((a) => a.name)
        .join(", ")}`;
      bookDiv.appendChild(bookAuthor);

      const descButton = document.createElement("button");
      descButton.innerHTML = 'Mostra trama <span class="material-icons">expand_more</span>';

      let descriptionVisible = false;
      let descriptionContainer = null;

      descButton.addEventListener("click", () => {
        if (!descriptionVisible) {
          descriptionContainer = document.createElement("div");
          descriptionContainer.classList.add("description-container");
          descriptionContainer.innerHTML = "Caricamento...";
          bookDiv.appendChild(descriptionContainer);
          fetchBookDescription(book.key, descriptionContainer);
          descButton.innerHTML = 'Nascondi trama <span class="material-icons">expand_less</span>';
        } else {
          descriptionContainer.remove();
          descriptionContainer = null;
          descButton.innerHTML = 'Mostra trama <span class="material-icons">expand_more</span>';
        }

        descriptionVisible = !descriptionVisible;
      });

      bookDiv.appendChild(descButton);

      booksList.appendChild(bookDiv);
    });
  } catch (error) {
    booksList.innerHTML = "Errore nel recupero dati";
    console.error(error);
  }
}

async function fetchBookDescription(bookKey, descriptionContainer) {
  descriptionContainer.innerHTML = "Caricamento...";

  try {
    const response = await axios.get(`https://openlibrary.org${bookKey}.json`);

    const description = _.get(
      response,
      "data.description.value",
      "Nessuna trama disponibile."
    );

    descriptionContainer.innerHTML = description;
  } catch (error) {
    descriptionContainer.innerHTML = "Errore nel recupero della trama";
    console.error(error);
  }
}
