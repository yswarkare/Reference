import React, {Component} from "react"
import { connect } from "react-redux";

class Condition extends Component{
    
    handleCondition = (condition) => {
        this.props.dispatch({
            type: "Set_Condition",
            payload: condition
        })
    }
    
    render(){
        return(
            <div>
                <select onChange={(e) => this.handleCondition(e.target.value)} value={this.props.product.condition}>
                    {this.props.condition && this.props.condition.map((condition)=>{
                        return(
                            <option key={condition}>{condition}</option>
                        )
                    })}
                </select>
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        condition: state.condition.condition,
        product: state.product.product
    };
}

const mapDispatchToProps = (dispatch) => {
    return{
        dispatch: dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Condition);