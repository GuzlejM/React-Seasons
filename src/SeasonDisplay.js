import React from 'react';

// *Setting callback props as "PROPERTIES" which has assigned value of prop. 
// lat={this.state.lat}
const SeasonDisplay = (props) => {
  console.log(props.lat)
  return <div>Season Display</div>
};

export default SeasonDisplay