function clickedSearchButton() {
    const showHideInput = document.getElementById("search-input")
    if (showHideInput.classList.contains("hidden-search-input")) {
        showHideInput.classList.remove("hidden-search-input")
        showHideInput.focus()
    } else {
        showHideInput.classList.add("hidden-search-input")
        showHideInput.value = ""
    }
}

function keyupSearchInput(event) {
    const showHideInput = document.getElementById("search-input")
    if(event.key === "Enter") {
        showHideInput.classList.add("hidden-search-input")
        showHideInput.value = ""
    }
}


function afterRenderHTML() {
    const searchButton = document.getElementById("main-header-search-icon")
    searchButton.addEventListener("click", clickedSearchButton)

    const showHideInput = document.getElementById("search-input")
    showHideInput.addEventListener("keyup", keyupSearchInput)
}

document.addEventListener("DOMContentLoaded", afterRenderHTML)