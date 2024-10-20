//This script works for doing a reactive search bar with click search icon

function clickedSearchButton() {
    const searchInput = document.getElementById("search-input")
    if (searchInput.classList.contains("hidden-search-input")) {
        searchInput.classList.remove("hidden-search-input")
        searchInput.focus()
    } else {
        searchInput.classList.add("hidden-search-input")
        searchInput.value = ""
    }
}

function keyupSearchInput(event) {
    const searchInput = document.getElementById("search-input")
    if(event.key === "Enter") {
        searchInput.classList.add("hidden-search-input")
        searchInput.value = ""
    }
}


function afterRenderHTML() {
    const searchButton = document.getElementById("main-header-search-icon")
    searchButton.addEventListener("click", clickedSearchButton)

    const searchInput = document.getElementById("search-input")
    searchInput.addEventListener("keyup", keyupSearchInput)
}

document.addEventListener("DOMContentLoaded", afterRenderHTML)