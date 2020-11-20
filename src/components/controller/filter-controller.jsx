import React from "react";
import { Button, ButtonGroup } from "reactstrap";
import PropTypes from "prop-types";

FilterController.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
};
function FilterController({ handleFilter, filterValue }) {
  return (
    <>
      <ButtonGroup>
        {filterValue === "all" ? (
          <Button color="success" onClick={() => handleFilter("all")}>
            All
          </Button>
        ) : (
          <Button color="danger" onClick={() => handleFilter("all")}>
            All
          </Button>
        )}
        {filterValue === "running" ? (
          <Button color="success" onClick={() => handleFilter("running")}>
            Running
          </Button>
        ) : (
          <Button color="danger" onClick={() => handleFilter("running")}>
            Running
          </Button>
        )}
        {filterValue === "completed" ? (
          <Button color="success" onClick={() => handleFilter("completed")}>
            Completed
          </Button>
        ) : (
          <Button color="danger" onClick={() => handleFilter("completed")}>
            Completed
          </Button>
        )}
      </ButtonGroup>
    </>
  );
}

export default FilterController;
