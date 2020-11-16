import React from 'react'
import PropTypes from "prop-types"
import {Input,Button} from "reactstrap"

SearchPanel.propTypes={
    term:PropTypes.string.isRequired,
    handleSearch:PropTypes.func.isRequired,
    toggleForm:PropTypes.func.isRequired
}

function SearchPanel({term,handleSearch,toggleForm}) {
    return (
        <div className="d-flex">

          <Input
          placeholder="Enter search Term"
          className="mr-3"
          value={term}
          onChange={e=>handleSearch(e.target.value)}
          />  
          <Button color="success" onClick={toggleForm}>New</Button>
        </div>
        
    )
}

export default SearchPanel
