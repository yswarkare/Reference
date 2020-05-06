import React, { Component } from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';



class GiveRating extends Component {

  state = {
    ratingValue: "",
    hover: "",
    labels: {
      0.5: 'Useless',
      1: 'Useless+',
      1.5: 'Poor',
      2: 'Poor+',
      2.5: 'Ok',
      3: 'Ok+',
      3.5: 'Good',
      4: 'Good+',
      4.5: 'Excellent',
      5: 'Excellent+',
    }
  }

  onChangeSetRatingValue = (value) => {
    // console.log("value => "+value)
    this.setState({
      ratingValue: value
    })
  }

  onChangeSetHover = (e, hover) => {
    // console.log("hover => "+hover)
    this.setState({
      hover: hover
    })
  }

  render() {
    return (
      <div>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Typography component="legend">Rate Product</Typography>
          <Rating
            name="simple-feedback"
            size="large"
            value={this.state.ratingValue}
            precision ={0.5}
            onChange={(e)=>{this.onChangeSetRatingValue(e.target.value)}}
            onChangeActive={(e, hover)=>{this.onChangeSetHover(e, hover)}}/>
        </Box>
        {this.state.ratingValue !== null && <Box ml={2}>{this.state.labels[this.state.hover !== -1 ? this.state.hover : this.state.ratingValue]}</Box>}
      </div>
    );
  }
}


GiveRating.propTypes = {

};


export default GiveRating;
