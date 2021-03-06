import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
//import HasuraChristmas from '.../Images/HasuraChristmas.jpg';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';




var StyleMainCard={

  display: 'grid',
    flexDirection: 'row wrap',
    padding: 20,
    width: '45vw',
    marginTop:'-25px',
    height:'42em'
}
  /* var Cardstyle={
  display: 'block',
  width: '40vw',
  transitionDuration: '0.3s',
 height: '5vw'
}   */

const Card1 = () => (
<div id="cards">
      <Card  style={StyleMainCard} className="card1">

    <CardHeader
      title="Hasura"
      subtitle="@HasuraHQ .Dec 24"
      avatar ="../Images/HasuraIcon.png"
        size={80}

     />

    <CardText >
     Wishing everyone a merry Christmas and happy holidays!  - from all of us at Hasura :) #Christmas #HappyHolidays #startuplife
    </CardText>
    <CardMedia >
       <img src="../Images/HasuraChristmas.jpg" alt="Hausra Christmas"  />
     </CardMedia>
    <CardActions>
<div>
  <span>  <IconButton tooltip="Reply">
        <FontIcon className="fa fa-comment-o" aria-hidden="true" />

       </IconButton>
</span>
<span>
       <IconButton tooltip="Retweet">
           <FontIcon className="fa fa-retweet" aria-hidden="true" />
      
          </IconButton>
  </span>
  <span  style={{float:"right"}}>
         <IconButton tooltip="Direct Message">
             <FontIcon className="fa fa-envelope-o" aria-hidden="true"/>
       
            </IconButton>
    </span>
    <span style={{float:"right"}}>
           <IconButton tooltip="Like">
               <FontIcon className="fa fa-heart-o" aria-hidden="true" /> label="700"
            
              </IconButton>
      </span>


</div>
    </CardActions>

  </Card>

</div>
);

export default Card1;
