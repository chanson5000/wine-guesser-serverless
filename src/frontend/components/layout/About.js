import React, {Component} from 'react';
import ExternalLink from "../common/ExternalLink";

class About extends Component {
  render() {
    return (
        <div className="container text-center">
          <h2 className="p-2">What is Wine Guesser?</h2>
          <h3>Wine Guesser is web site meant to assist anyone trying to improve blind tasting.</h3>
          <p>
            Wine guesser uses wine characteristic information and testing criteria used by those attempting to receive accreditation by the <ExternalLink url="https://www.mastersommeliers.org/" text="Court of Master Sommeliers" newWindow={true}/> . When blind tasting a wine, input evaluated characteristics into the form and see how close you are to picking out key indicators of the wine.
          </p>
          <p>
            Not all wines are created equal and many wines can stray from the classical and regional definitions that the Court of Master Sommeliers uses in their evaluations. Wines in the $20-$30 dollar range will be more likely to fit the definitions used.
          </p>
          <p>
            Here are links to PDF files that will help you select wines that will work best.
          </p>
          <div className="row justify-content-center">
            <div className="col-md-1">
              <ExternalLink
                  url="http://www.wineguesser.com/files/Examinable_Red_Wines.pdf"
                  text="Red"
                  newWindow={true}/>
            </div>
            <div className="col-md-1">
              <ExternalLink
                  url="http://www.wineguesser.com/files/Examinable_White_Wines.pdf"
                  text="White"
                  newWindow={true}/>
            </div>
          </div>
        </div>
    );
  }
}

export default About;