import "../scss/all.scss"

const searchBar = (e) => {
    if (e.code === 'Enter') {
        const searchString = e.target.value.toLowerCase();

        localStorage.setItem('catalog', 'seacher')
        localStorage.setItem('valueInput', searchString)
        window.location.href = './catalog.html'
    }
}




export {searchBar}
// loadCharacters();