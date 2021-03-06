import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
 import '../App.css';


const style = {
  height: 330,
  width: 250,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  float:'right',
  position:'absolute' ,
  top:'70px',
  right:'0',
};

var buttonStyle={
  backgroundColor: '#FFFFFF',
borderRadius:50 ,
  padding:' 1px  1px 1px 1px',
  border: '1px solid #00BCD4',
    texttransform: 'lowercase',
    fontSize: '5px',

}



const WhoToFollow = () => (
  <div witdth="100%"  >
    <Paper style={style} zDepth={1}  >
        <div  className="WhoToFollow" >
            <span  style={{marginRight:1 + 'em',float:"left"}}><h3>Who to follow</h3> </span>
          <span  style={{marginRight:0 + 'em', float:"left"}}>  <a><h6>Refresh</h6></a></span>
          <span  style={{marginRight:0 + 'em', float:"left"}}>  <a><h6>View all</h6></a></span>
        </div>
<Divider/>
<div className="FollowPeople">
    <span className="AvatarButton">  <span className="PeopleImage">  <Avatar src="./Images/obama.jpg"  size={60} /></span>
       <h3>Barak Obama</h3>
       <span className="FollowButton"><FlatButton label="Follow"  style={buttonStyle} primary={true}   /></span>
    </span>
</div>
<Divider/>
  <div className="FollowPeople">
    <span className="AvatarButton">  <span className="PeopleImage">  <Avatar src="./Images/Sachin.jpg"  size={60} /></span>
      <h3>Sachin Tendulkar</h3>
      <span className="FollowButton"><FlatButton label="Follow"  style={buttonStyle} primary={true}   /></span>
    </span>
</div>
<Divider/>
<div className="FollowPeople">
   <span className="AvatarButton">  <span className="PeopleImage">  <Avatar src="./Images/virat.jpg"  size={60} /></span>
   <h3>Virat Kohli</h3>
   <span className="FollowButton"><FlatButton label="Follow"  style={buttonStyle} primary={true}   /></span>
    </span>
</div>
<Divider/>


</Paper>
  </div>
);

export default WhoToFollow;
