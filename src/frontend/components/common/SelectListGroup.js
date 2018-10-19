import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/lib/Form';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

const SelectListGroup = ({
                           label, controlId, options, value
                         }) => {

  const optionsMap = options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
  ));

  return (
      <Form.Group as={Row} className="text-left justify-content-center" controlId={controlId}>
        <Form.Label md={2} column>
          {label}
        </Form.Label>
        <Col md={3}>
          <Form.Control as="select" value={value}>
            {optionsMap}
          </Form.Control>
        </Col>
      </Form.Group>
  );
};

SelectListGroup.propTypes = {
  label: PropTypes.string.isRequired,
  controlId: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string
      })
  ).isRequired
};

export default SelectListGroup;
