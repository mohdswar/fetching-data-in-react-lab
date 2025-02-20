import { useState } from 'react';
function StarshipSearch() {
    const [formData, setFormData] = useState('')
    const handleChange = (e) => {
        setFormData(e.target.value)

    }

    const handleSubmit = () => {
        e.preventDefault()
        props.handleSearch(formData)


    }

    return (
        <>

            <form onSubmit={handleSubmit} >
                <label>Search for straship</label>
                <input
                    type="text"
                    onChange={handleChange}

                />
                <button type="submit">Search</button>
            </form>


        </>
    )
}

export default StarshipSearch;