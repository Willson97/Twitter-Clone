import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import '../App.css';
import {indigo900,blue100} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import '../App.css';
import Paper from 'material-ui/Paper';



   var TextStyle={
    marginLeft:'-50%',
    backgroundColor: 'cyan500',
    float:'left',
    height:'30px',
    width:'22em',
    borderRadius:'30px',

  }
  var HintStyle={
    marginLeft:'-48%',
    marginTop:'0px',
    float:'left',

  }
const StylePaper = {
  height: 50,
  width: '30.7em',

  textAlign: 'center',
  display: 'inline-block',
    backgroundColor:blue100,
borderColor:indigo900,

};
var FontStyle={
  top:'0',
  marginTop:'12px',
  marginLeft:'10%',
float:'left',

}
var InputText={marginLeft:"5px",}
const Postbar1 = () => (
<span className="Postbar">
  <Paper  style={StylePaper}  zDepth={1} >
    <FontIcon style={FontStyle}   className="fa fa-user-circle-o fa-2x" aria-hidden="true"  />
  <div id="PostText">
    <TextField textareaStyle={TextStyle}  underlineStyle={HintStyle} underlineStyle={{display: 'none'}}
      inputStyle={InputText}           hintText="Whats Happing?"
    // floatingLabelText="MultiLine and FloatingLabel"
      multiLine={true}
  />
  </div>
  </Paper>
</span>



);
export default Postbar1;
