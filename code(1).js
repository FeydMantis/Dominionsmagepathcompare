// In app.js
function renderMagesList() {
    const magesList = document.getElementById('magesList');
    const filterText = document.getElementById('mageSearchInput').value.toLowerCase(); // Get filter text
    magesList.innerHTML = '';

    const filteredMages = mages.filter(mage => mage.name.toLowerCase().includes(filterText)); // Filter the array

    filteredMages.forEach(mage => { // Iterate over the filtered array
        // ... the rest of the function remains the same
    });
}