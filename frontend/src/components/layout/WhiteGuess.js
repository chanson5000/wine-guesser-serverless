import React, {Component} from 'react';
import Form from 'react-bootstrap/lib/Form';
import WhiteWineFields from '../../model/WhiteWineFields';
import DescriptorFormGroup from '../common/DescriptorFormGroup';
import Button from 'react-bootstrap/es/Button';

class WhiteGuess extends Component {
  render() {
    return (
        <div className="container text-center">
          <h2 className="p-2">Select white wine characteristics.</h2>
          <Form>
            <DescriptorFormGroup
                controlId="color"
                label="Color"
                type="select"
                options={WhiteWineFields.color}/>

            <DescriptorFormGroup
                controlId="condition"
                label="Condition"
                type="checkbox"
                options={WhiteWineFields.condition}/>

            <DescriptorFormGroup
                controlId="fruit"
                label="Fruit Type"
                type="checkbox"
                options={WhiteWineFields.type}/>

            <DescriptorFormGroup
                controlId="nonFruit"
                label="Non-Fruit"
                type="checkbox"
                options={WhiteWineFields.nonFruit}/>

            <DescriptorFormGroup
                controlId="sweetness"
                label="Sweetness"
                type="select"
                options={WhiteWineFields.sweetness}/>

            <DescriptorFormGroup
                controlId="acidity"
                label="Acidity"
                type="select"
                options={WhiteWineFields.structure}/>

            <DescriptorFormGroup
                controlId="alcohol"
                label="Alcohol"
                type="select"
                options={WhiteWineFields.structure}/>

            <DescriptorFormGroup
                controlId="climate"
                label="Climate"
                type="select"
                options={WhiteWineFields.climate}/>

            <Button type="submit" className="guess-btn m-2">Guess</Button>
          </Form>
        </div>
    );
  }
}

export default WhiteGuess;
