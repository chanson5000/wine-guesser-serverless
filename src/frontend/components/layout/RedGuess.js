import React, {Component} from 'react';
import Form from 'react-bootstrap/lib/Form';
import RedWineFields from '../../model/RedWineFields';
import SelectListGroup from '../common/SelectListGroup';
import CheckboxGroup from '../common/CheckboxGroup';
import Button from 'react-bootstrap/lib/Button';

class RedGuess extends Component {
  state = {
    color: '',
    tannin: '',
    acidity: '',
    alcohol: '',
    climate: ''
  };

  onChange = (event) => {
    const {controlId, value} = event.target;
    console.log(event.target.value);
    this.setState({[controlId]: value});
  };

  render() {
    const {color, tannin, acidity, alcohol, climate} = this.state;

    return (
      <div className="container text-center">
        <h2 className="p-2">Select red wine characteristics.</h2>
        <Form>
          <SelectListGroup
            controlId="color"
            label="Color"
            value={color}
            onChange={this.onChange}
            options={RedWineFields.color}/>

          <CheckboxGroup
            controlId="condition"
            label="Condition"
            onChange={this.onChange}
            options={RedWineFields.condition}/>

          <CheckboxGroup
            controlId="fruit"
            label="Fruit Type"
            onChange={this.onChange}
            options={RedWineFields.type}/>

          <CheckboxGroup
            controlId="nonFruit"
            label="Non-Fruit"
            onChange={this.onChange}
            options={RedWineFields.nonFruit}/>

          <SelectListGroup
            controlId="tannin"
            label="Tannin"
            value={tannin}
            onChange={this.onChange}
            options={RedWineFields.structure}/>

          <SelectListGroup
            controlId="acidity"
            label="Acidity"
            value={acidity}
            onChange={this.onChange}
            options={RedWineFields.structure}/>

          <SelectListGroup
            controlId="alcohol"
            label="Alcohol"
            value={alcohol}
            onChange={this.onChange}
            options={RedWineFields.structure}/>

          <SelectListGroup
            controlId="climate"
            label="Climate"
            value={climate}
            onChange={this.onChange}
            options={RedWineFields.structure}/>

          <Button type="submit" className="guess-btn m-2">Guess</Button>
        </Form>
      </div>
    );
  }
}

export default RedGuess;
