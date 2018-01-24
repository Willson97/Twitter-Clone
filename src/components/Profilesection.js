import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';

import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';



const style = {
  height: '300px',
  width: 250,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',


};

const Profilesection = () => (
  <div witdth="100%" className="ProfileSection" >
    <Paper style={style} zDepth={1} >

        <div className="UpperSection " width="50%">

         </div>
      <div className="" width="50%">
      <List>
         <ListItem
          disabled={true}
          leftAvatar={
          <span className="ProfileSectionAvatar">
          <Avatar

             src ="../Images/Willson1.jpg"
            size={80}
                />
            </span>
      }
        >
        <span className="Text">
      <span className="LowerSection">  <h2>Willson verma </h2></span>
    <span className="LowerSectionText2"> @willson7 </span>
    </span>
    </ListItem>
    </List>
     </div>

       <div width="50%">
        <span style={{marginRight:5 + 'em'}} > {<a><span>Tweets</span></a>}</span>
        <span >{<a>Following</a>}</span>
        </div>



</Paper>
  </div>
);

export default Profilesection;
