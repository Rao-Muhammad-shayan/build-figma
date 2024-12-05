document.getElementById('search-icon').addEventListener('click', function() {
    const searchInput = document.getElementById('search-input');
    if (searchInput.classList.contains('hidden')) {
        searchInput.classList.remove('hidden');
        searchInput.focus(); // Focus on the input when it appears
    } else {
        // Optionally, you can hide the input again if it's already visible
        searchInput.classList.add('hidden');
    }
});




