 <script>
        // JavaScript code for the search functionality

        // Retrieve the search input element
        const searchInput = document.getElementById('search-input');

        // Retrieve the garden posts container element
        const gardenPostsContainer = document.getElementById('garden-posts');

        // Add an event listener to the search input for the 'input' event
        searchInput.addEventListener('input', function (event) {
            const searchTerm = event.target.value.toLowerCase();

            // Retrieve all the garden posts
            const gardenPosts = gardenPostsContainer.getElementsByClassName('garden-post');

            // Loop through each garden post and check if it matches the search term
            for (let i = 0; i < gardenPosts.length; i++) {
                const post = gardenPosts[i];
                const title = post.getElementsByClassName('post-title')[0].textContent.toLowerCase();
                const content = post.getElementsByClassName('post-content')[0].textContent.toLowerCase();

                // Show or hide the garden post based on the search term match
                if (title.includes(searchTerm) || content.includes(searchTerm)) {
                    post.style.display = 'block';
                } else {
                    post.style.display = 'none';
                }
            }
        });
    </script>
