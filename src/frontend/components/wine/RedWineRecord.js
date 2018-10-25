import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
// import {connect} from 'react-redux';
import PropTypes from 'prop-types';
// import Row from 'react-bootstrap/lib/Row';
// import Col from 'react-bootstrap/lib/Col';
// import Container from 'react-bootstrap/lib/Container';
// import { Row, Col, Container } from 'react-bootstrap';
// import RedWineFields from '../../model/RedWineFields';

class RedWineRecord extends Component {
  render() {
    const { varietal, world, description, descriptors } = this.props.wine;

    return (
      <div className="card card-body mb-3">
        <h3>{varietal}</h3>
        <h4>World: {world}</h4>
        <p>{description}</p>
        <ul>
          {descriptors && Object.keys(descriptors).map(descriptor => (
            <li key={descriptor}>{descriptor}</li>
          ))}
        </ul>
      </div>
    );
  }
}

// const RedWineRecord = ({ wine }) => {
//   const {
//     varietal,
//     world,
//     description,
//     color,
//     condition,
//     type,
//     nonFruit,
//     structure,
//     climate
//   } = wine;
//
//   return (
//     <Container className="text-center">
//       <h2 className="p-2">Red Wine Record</h2>
//       <Row className="text-left justify-content-center">
//         <Col md={2}>Test</Col>
//
//         <Col md={3}>Another Test</Col>
//       </Row>
//     </Container>
//   );
// };
//
// RedWineRecord.propTypes = {
//   // wine: PropTypes.object.isRequired
// };

RedWineRecord.propTypes = {
  wine: PropTypes.object.isRequired
};

export default RedWineRecord;
