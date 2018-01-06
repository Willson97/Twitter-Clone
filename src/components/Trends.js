import React from 'react';
import Paper from 'material-ui/Paper';
import '../App.css';




const style = {
  height: 500,
  width: 250,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const Trends = () => (
  <div className="Trends" witdth="100%">
    <Paper style={style} zDepth={1} >
    <span style={{marginRight:1 + 'em',float:"left"}} >
    <h2>Trends for you</h2> </span>
  <span style={{marginRight:1 + 'em',float:"right"}} >
    <a><h6>Change</h6></a>
    </span>

<div className="TrendsIn">
      <span> <h4><a>#PeekeMAtCahla</a></h4></span>
            <span className="TrendsNo"  >15.k Tweets</span>
</div>
<div className="TrendsIn">
            <span> <h4><a>#Flat50AtLifestyle</a></h4></span>
                  <span className="TrendsNo"  >50k Tweets</span>

</div>
<div className="TrendsIn">
            <span> <h4><a>#HappyNewYear</a></h4></span>
                  <span className="TrendsNo"  >10M Tweets</span>

</div>
<div className="TrendsIn">
      <span> <h4><a>#PeekeMAtCahla</a></h4></span>
            <span className="TrendsNo"  >15.k Tweets</span>
</div><br/>

<div className="TrendsIn">
      <span> <h4><a>#NewYearEve18</a></h4></span>
            <span className="TrendsNo"  >8,379 Tweets</span>
</div>
<div className="TrendsIn">
      <span> <h4><a>#KaalaDoreyaByNehaBhasin</a></h4></span>
            <span className="TrendsNo"  >8,379 Tweets</span>
</div>
<div className="TrendsIn">
      <span> <h4><a>#HoneySinghBack</a></h4></span>
            <span className="TrendsNo"  >8k Tweets</span>
</div>
<div className="TrendsIn">
      <span> <h4><a>#HappyBirthdaySRK</a></h4></span>
            <span className="TrendsNo"  >15k Tweets</span>
</div>




</Paper>
  </div>
);

export default Trends;
