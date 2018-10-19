import React, {Component} from 'react';
import Form from 'react-bootstrap/lib/Form';
import RedWineFields from '../../model/RedWineFields';
import SelectListGroup from '../common/SelectListGroup';
import CheckboxGroup from '../common/CheckboxGroup';
import Button from 'react-bootstrap/lib/Button';

class RedGuess extends Component {
  render() {
    const value = [];
    return (
        <div className="container text-center">
          <h2 className="p-2">Select red wine characteristics.</h2>
          <Form>
            <SelectListGroup
                controlId="color"
                label="Color"
                value={value}
                options={RedWineFields.color}/>

            <CheckboxGroup
                controlId="condition"
                label="Condition"
                values={value}
                options={RedWineFields.condition}/>

            <CheckboxGroup
                controlId="fruit"
                label="Fruit Type"
                values={value}
                options={RedWineFields.type}/>

            <CheckboxGroup
                controlId="nonFruit"
                label="Non-Fruit"
                values={value}
                options={RedWineFields.nonFruit}/>

            <SelectListGroup
                controlId="tannin"
                label="Tannin"
                value={value}
                options={RedWineFields.structure}/>

            <SelectListGroup
                controlId="acidity"
                label="Acidity"
                value={value}
                options={RedWineFields.structure}/>

            <SelectListGroup
                controlId="alcohol"
                label="Alcohol"
                value={value}
                options={RedWineFields.structure}/>

            <SelectListGroup
                controlId="climate"
                label="Climate"
                value={value}
                options={RedWineFields.structure}/>

            <Button type="submit" className="guess-btn m-2">Guess</Button>
          </Form>
        </div>
    );
  }
}

export default RedGuess;
