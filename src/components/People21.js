import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import '../App2.css';



var style = {
  height: '100px',
  width: '280px',
  margin: 20,
  marginBottom:0,
  textAlign: 'center',
  display: 'inline-block',

};
var style2 = {
  position:'relative',
  height: '180px',
  width: '280px',
  marginTop: '0px' ,
  marginLeft:20,

  display: 'inline-block',

};
var ImageStyle={
  position:'relative',
  marginTop:'-4em',
  marginLeft:'40px',
  zIndex:33,

}
var LabelText={
  textTransform: 'capitalize',
}
var buttonStyle={
  backgroundColor: '#FFFFFF',
borderRadius:50 ,
  padding:' 1px  1px 1px 1px',
  border: '1px solid #00BCD4',
    texttransform: 'lowercase',
    fontSize: '5px',

}
const People21 = () => (
<div className="people21">
<div className="FirstPaper" width='100%'>

   <span ><Paper style={style} zDepth={1} >
    <img className="AadharImage" src="./Images/AadharBack.jpg" alt="aadahar" />
    </Paper>

    </span>


</div>
<div >  <Avatar src="./Images/AadharIcon.jpg"  style={ImageStyle}   z-index={1} size={80} /></div>
    <div  className="SecondPaper" width='50%'>




        <Paper style={style2}  >

          <span className="AadharButton"><FlatButton label="Follow "  style={buttonStyle} primary={true} labelStyle={LabelText}  /></span>
        <div className="Aahdhar" >
        <span style={{fontSize:'25px'}}><strong>Aadhar </strong></span>
          <div>   @UIDAI</div>
      </div>
      <div className="AadharProfileText">
      <div style={{fontSize:'15px'}}>
             Official Twitter account of the
      </div>
      <div style={{fontSize:'15px'}}>
           Unique Identification Authority of India
      </div>
      <div style={{fontSize:'15px'}}>
          RTs are not endorsements.
      </div>
</div>




        </Paper>

     </div>

    </div>

);

export default People21;
