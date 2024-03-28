homenews('india');
function homenews(category) {
    let apiUrl;
   


    // Set the API URL based on the category
    if (category === 'ipl'||category === 'Technology'||category === 'Entertainment') {
        apiUrl = `https://newsapi.org/v2/everything?q=${category}&from=2024-02-26&sortBy=publishedAt&apiKey=b2d5c92d1c5f40b195d51a3a7889bcfd`;
    } else {
        apiUrl = `https://newsapi.org/v2/everything?q=${category}&from=2024-02-28&sortBy=publishedAt&apiKey=b2d5c92d1c5f40b195d51a3a7889bcfd`;
    }

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data.articles);

            let MainCard = document.querySelector('.main-card-container');
            MainCard.innerHTML = '';

            data.articles.forEach(article => {
                // Check if article has a valid image
                if (article.urlToImage) {
                    // Get the publication date
                    const publishedAt = new Date(article.publishedAt).toLocaleDateString();

                    let card = `
                    <div class="card">
                        <a href="${article.url}" target="_blank"> <!-- Add link to the article URL -->
                            <img src="${article.urlToImage}" alt="Image not available">
                            <div class="card-content">
                                <h3 id="news-title">${article.title}</h3>
                                <p class="news-date">${publishedAt}</p> <!-- Display the publication date -->
                                <h6 class="news-source">${article.source.name}</h6>
                                <p class="news-desc">${article.description}</p>
                            </div>
                        </a>
                    </div>`;
                    MainCard.innerHTML += card;
                }
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

    function news(category) {
      homenews(category);
    }

    function search() {
      let inputfield = document.querySelector('.new-input');
      homenews(inputfield.value);
    }

    // Function to toggle navigation visibility
function toggleNav() {
    var nav = document.getElementById("mainNav");
    nav.classList.toggle("show");
  }
  