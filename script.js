const endpoint = "http://quotes.rest/qod";

fetch(endpoint, { 
    headers: {
    'Accept': 'application/json',
    },
})
    .then(dataWrap => dataWrap.json())
    .then((data) => {
        const quotebox = document.getElementById('quotebox');
        const quote = document.createElement('p');
        quote.setAttribute('id', 'quote');
        quote.textContent = `${data.contents.quotes[0].quote}`;

        const author = document.createElement('p');
        author.setAttribute('id', 'author');
        author.textContent = `- ${data.contents.quotes[0].author}`;
        
        quotebox.appendChild(quote);
        quotebox.appendChild(author);

    });
    