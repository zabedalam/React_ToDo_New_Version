import React from "react";
import PropTypes from "prop-types";
import { Button, ButtonGroup } from "reactstrap";

BulkController.propTypes = {
  clearCompleted: PropTypes.func.isRequired,
  clearSelected: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

function BulkController({ clearCompleted, clearSelected, reset }) {
  return (
    <>
      <ButtonGroup>
        <Button color="danger" onClick={clearSelected}>
          Clear Selected
        </Button>

        <Button color="danger" onClick={clearCompleted}>
          Clear Completed
        </Button>
        <Button color="danger" onClick={reset}>
          Reset
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BulkController;
