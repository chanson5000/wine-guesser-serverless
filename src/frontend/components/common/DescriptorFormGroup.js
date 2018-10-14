import React from 'react';
import PropTypes from 'prop-types';
import Form from "react-bootstrap/lib/Form";
import Row from "react-bootstrap/es/Row";
import Col from "react-bootstrap/es/Col";

const DescriptorFormGroup = ({
                     label, controlId, type, options
                   }) => {

  if (type === 'select') {
    const optionsMap = options.map((option) => (
        <option
            value={option.value}>
          {option.label}
        </option>
    ));

    return (
        <Form.Group as={Row} className="text-left justify-content-center" controlId={controlId}>
          <Form.Label md={2} column>
            {label}
          </Form.Label>
          <Col md={3}>
            <Form.Control as="select">
              {optionsMap}
            </Form.Control>
          </Col>
        </Form.Group>
    )

  } else {
    const optionsMap = options.map((option) => (
        <Form.Check id={option.value} label={option.label} />
    ));

    return (
        <fieldset>
          <Form.Group as={Row} className="text-left justify-content-center" controlId={controlId}>
              <Form.Label as="legend" md={2} column>
                {label}
              </Form.Label>
            <Col md={3}>
              {optionsMap}
            </Col>
          </Form.Group>
        </fieldset>
    )
  }
};

DescriptorFormGroup.propTypes = {
  label: PropTypes.string.isRequired,
  controlId: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['checkbox', 'select']).isRequired,
  options: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string
      })
  ).isRequired
};

export default DescriptorFormGroup;
