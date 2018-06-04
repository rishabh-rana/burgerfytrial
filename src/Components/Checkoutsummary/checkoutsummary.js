import React from 'react';
import Burger from '../Burger/burger';
import {withRouter} from 'react-router-dom';
const checksummary = (props) => {

  return(
    <div>
      <h1>We hope it tastes good!</h1>
      <div>
        <Burger ingredients={props.ingredients} />
      </div>

      <button onClick={props.cancel}>Cancel</button>
      <button onClick={props.continue}>Continue</button>
    </div>

  )
}

export default withRouter(checksummary);
