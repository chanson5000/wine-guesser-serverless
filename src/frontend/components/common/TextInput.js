import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/lib/Form';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

const TextInput = ({
  label,
  name,
  value,
  placeholder,
  type,
  onChange,
  error
}) => {
  return (
    <Form.Group
      as={Row}
      className="text-left justify-content-center"
      controlId={name}
    >
      <Form.Label md={2} column>
        {label}
      </Form.Label>
      <Col md={3}>
        <Form.Control
          value={value}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          className={{'is-invalid': error}}
        />
        {error && <div className="invalid-feedback">{error}</div> }
      </Col>
    </Form.Group>
  );
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

TextInput.defaultProps = {
  type: 'text'
};

export default TextInput;
