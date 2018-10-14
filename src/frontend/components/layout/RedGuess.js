import React, {Component} from 'react';
import Form from 'react-bootstrap/lib/Form';
import RedWineFields from '../../model/RedWineFields';
import DescriptorFormGroup from '../common/DescriptorFormGroup';
import Button from 'react-bootstrap/es/Button';

class RedGuess extends Component {
  render() {
    return (
        <div className="container text-center">
          <h2 className="p-2">Select red wine characteristics.</h2>
          <Form>
            <DescriptorFormGroup
                controlId="color"
                label="Color"
                type="select"
                options={RedWineFields.color}/>

            <DescriptorFormGroup
                controlId="condition"
                label="Condition"
                type="checkbox"
                options={RedWineFields.condition}/>

            <DescriptorFormGroup
                controlId="fruit"
                label="Fruit Type"
                type="checkbox"
                options={RedWineFields.type}/>

            <DescriptorFormGroup
                controlId="nonFruit"
                label="Non-Fruit"
                type="checkbox"
                options={RedWineFields.nonFruit}/>

            <DescriptorFormGroup
                controlId="tannin"
                label="Tannin"
                type="select"
                options={RedWineFields.structure}/>

            <DescriptorFormGroup
                controlId="acidity"
                label="Acidity"
                type="select"
                options={RedWineFields.structure}/>

            <DescriptorFormGroup
                controlId="alcohol"
                label="Alcohol"
                type="select"
                options={RedWineFields.structure}/>

            <DescriptorFormGroup
                controlId="climate"
                label="Climate"
                type="select"
                options={RedWineFields.structure}/>

            <Button type="submit" className="guess-btn m-2">Guess</Button>
          </Form>
        </div>
    );
  }
}

export default RedGuess;
