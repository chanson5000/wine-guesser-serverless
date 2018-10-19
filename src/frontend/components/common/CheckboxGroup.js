import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/lib/Form';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

const CheckboxGroup = ({
                         label, controlId, options, values
                       }) => {

  const optionsMap = options.map((option) => (
      <Form.Check
          type='checkbox'
          key={option.value}
          // id={option.value}
          label={option.label}
          value={option.value}
      />
  ));

  return (
      <Form.Group as={Row} className="text-left justify-content-center" controlId={controlId}>
        <Form.Label as="legend" md={2} column>
          {label}
        </Form.Label>
        <Col md={3}>
          {optionsMap}
        </Col>
      </Form.Group>
  );
};


CheckboxGroup.propTypes = {
  label: PropTypes.string.isRequired,
  controlId: PropTypes.string.isRequired,
  values: PropTypes.array.isRequired,
  options: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string
      })
  ).isRequired
};

export default CheckboxGroup;
