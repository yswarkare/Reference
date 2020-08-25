import React, {Component} from "react"
import { connect } from "react-redux";

class Cities extends Component{
    
    handleCityChange = (city) => {
        this.props.dispatch({
            type: "Set_City",
            payload: city
        })
    }
    
    render(){
        console.log("Cities"+this.props.cities)
        
        return(
            <div>
                <select onChange={(e) => this.handleCityChange(e.target.value)} value={this.props.product.city}>
                    {this.props.cities && this.props.cities.map((city)=>{
                        return(
                            <option key={city}>{city}</option>
                        )
                    })}
                </select>
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        cities: state.cities.cities,
        product: state.product.product
    };
}

const mapDispatchToProps = (dispatch) => {
    return{
        dispatch: dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities);


