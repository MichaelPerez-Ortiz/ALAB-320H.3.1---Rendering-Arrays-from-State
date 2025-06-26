function SearchBar ({text , setText}) {

function handleText(e) {
    
    setText(e.target.value)
}
    

    return (
        <input className = "search" type = "text"  onChange = {handleText} value = {text} placeholder = "Type Name..." />

    )

}

export default SearchBar