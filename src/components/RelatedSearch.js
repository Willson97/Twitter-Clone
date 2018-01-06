import React from 'react';
import Paper from 'material-ui/Paper';
import '../App.css';




const style = {
  height: 300,
  width: 250,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const RelatedSearch = () => (
  <div className="RelatedSearchs">
    <Paper style={style} zDepth={1} >
    <span style={{marginLeft:1 + 'em',float:"left"}} >
    <h2>Related Searchs</h2> </span>


<div className="TrendsIn">
      <span> <h4><a>#AadharLinking</a></h4></span>

</div><br/>


<div className="TrendsIn">
            <span> <h4><a>#HappyNewYear2018g</a></h4></span>


</div>
<div className="TrendsIn">
      <span> <h4><a>#PeekeMAtCahla</a></h4></span>

</div><br/>

<div className="TrendsIn">
      <span> <h4><a>AadharInFacebook</a></h4></span>

</div>
<div className="TrendsIn">
      <span> <h4><a>IndianRailways</a></h4></span>

</div>
<div className="TrendsIn">
      <span> <h4><a>#HoneySinghBack</a></h4></span>

</div>





</Paper>
  </div>
);

export default RelatedSearch;
