import React, {Component} from 'react';
import Form from 'react-bootstrap/lib/Form';
import WhiteWineFields from '../../model/WhiteWineFields';
import Button from 'react-bootstrap/lib/Button';
import SelectListGroup from "../common/SelectListGroup";
import CheckboxGroup from "../common/CheckboxGroup";

class WhiteGuess extends Component {
  render() {
    const value = [];
    return (
        <div className="container text-center">
          <h2 className="p-2">Select white wine characteristics.</h2>
          <Form>

            <SelectListGroup
                controlId="color"
                label="Color"
                value={value}
                options={WhiteWineFields.color}/>

            <CheckboxGroup
                controlId="condition"
                label="Condition"
                values={value}
                options={WhiteWineFields.condition}/>

            <CheckboxGroup
                controlId="fruit"
                label="Fruit Type"
                values={value}
                options={WhiteWineFields.type}/>

            <CheckboxGroup
                controlId="nonFruit"
                label="Non-Fruit"
                values={value}
                options={WhiteWineFields.nonFruit}/>

            <SelectListGroup
                controlId="sweetness"
                label="Sweetness"
                value={value}
                options={WhiteWineFields.structure}/>

            <SelectListGroup
                controlId="acidity"
                label="Acidity"
                value={value}
                options={WhiteWineFields.structure}/>

            <SelectListGroup
                controlId="alcohol"
                label="Alcohol"
                value={value}
                options={WhiteWineFields.structure}/>

            <SelectListGroup
                controlId="climate"
                label="Climate"
                value={value}
                options={WhiteWineFields.structure}/>

            <Button type="submit" className="guess-btn m-2">Guess</Button>
          </Form>
        </div>
    );
  }
}

export default WhiteGuess;
