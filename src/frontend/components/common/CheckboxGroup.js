import React from 'react';
import PropTypes from 'prop-types';
import { Form, Row, Col } from 'react-bootstrap';

const CheckboxGroup = ({ label, name, options, values, onChange }) => {
  console.log(values);
  const optionsMap = options.map(option => (
    <Form.Check
      type="checkbox"
      key={option.value}
      name={option.value}
      checked={values[option.value]}
      label={option.label}
      onChange={onChange}
    />
  ));

  return (
    <Form.Group
      as={Row}
      className="text-left justify-content-center"
      controlId={name}
    >
      <Form.Label as="legend" md={2} column>
        {label}
      </Form.Label>
      <Col md={3}>{optionsMap}</Col>
    </Form.Group>
  );
};

CheckboxGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  values: PropTypes.objectOf(PropTypes.bool).isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string
    })
  ).isRequired
};

export default CheckboxGroup;
