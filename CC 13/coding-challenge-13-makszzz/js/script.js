function addQuote() {
  let quoteInput = document.getElementById("quoteInput");
  let quote = quoteInput.value;

  // Alert
  if (quote === "") {
    alert("Please enter a quote.");
    return;
  }

  // Retrieve quotes
  let quotes = getQuotes();
  // Add the new quote
  quotes.push(quote);
  localStorage.setItem("quotes", JSON.stringify(quotes));
  quoteInput.value = "";
  displayQuotes();
}

function getQuotes() {
  let quotes = localStorage.getItem("quotes");
  if (quotes) {
    return JSON.parse(quotes);
  } else {
    return [];
  }
}

// Delete a quote
function deleteQuote(index) {
  let quotes = getQuotes();
  quotes.splice(index, 1);
  // Store the updated quotes
  localStorage.setItem("quotes", JSON.stringify(quotes));
  displayQuotes();
}

// Display the quotes
function displayQuotes() {
  let quoteList = document.getElementById("quoteList");
  quoteList.innerHTML = "";
  let quotes = getQuotes();

  // Add each quote to the list
  for (let i = 0; i < quotes.length; i++) {
    let quoteItem = document.createElement("li");
    quoteItem.innerHTML = quotes[i];

    // Delete button
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.setAttribute("data-index", i);
    deleteButton.onclick = function () {
      let index = this.getAttribute("data-index");
      deleteQuote(index);
    };

    quoteItem.appendChild(deleteButton);
    quoteList.appendChild(quoteItem);
  }
}
displayQuotes();
