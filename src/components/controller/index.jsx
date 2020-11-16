import React from 'react'
import PropTypes from "prop-types"
import SearchPanel from "./search-panel"

Controller.propTypes={
    term:PropTypes.string.isRequired,
    handleSearch:PropTypes.func.isRequired,
    toggleForm:propTypes.func.isRequired
}

function Controller({term,handleSearch,toggleForm}) {
    return (
        <div>
            <SearchPanel
            term={term}
            handleSearch={handleSearch}
            toggleForm={toggleForm}
            />
        </div>
    )
}

export default Controller
