const quotes = [
    {
        quote: "All media are extensions of some human faculty - psychic or physical.",
        author: "Marshall McLuhan"
    },
    {
        quote: "The medium is the message.",
        author: "Marshall McLuhan"
    },
    {
        quote: "The medium is the massage.",
        author: "Marshall McLuhan"
    },
    {
        quote: "The more the data banks record about each one of us, the less we exist.",
        author: "Marshall McLuhan"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const generateQuoteButton = document.getElementById('generate-quote');
    const quoteDisplay = document.getElementById('quote-display');
    const quoteText = quoteDisplay.querySelector('p');
    const quoteAuthor = quoteDisplay.querySelector('footer');

    function generateRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    }

    function displayQuote(quoteObj) {
        quoteText.textContent = quoteObj.quote;
        quoteAuthor.textContent = quoteObj.author;
    }

    generateQuoteButton.addEventListener('click', () => {
        const randomQuote = generateRandomQuote();
        displayQuote(randomQuote);
    });
});
