import './search.css'

const Search = ({users, setUsers}) => {
    const handleSearch = (e) => {

    }
    return (
        <div>
            <input type={"search"} placeholder={'Search Students'} onInput={handleSearch}/>
        </div>
    )
}


export default Search