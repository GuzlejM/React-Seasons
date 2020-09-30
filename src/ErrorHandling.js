import './ErrorHandling.css';
import React from 'react';

//--------------------COMPONENT
// *Setting callback props as "PROPERTIES" which has assigned value of prop. 
// lat={this.state.lat}
const ErrorHandling = () => {
    return (
    <div className="background">
      <h1 className="text">{`!ERROR 404!`}</h1>
    </div>
    )
  }


export default ErrorHandling