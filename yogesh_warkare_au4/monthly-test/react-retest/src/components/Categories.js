import React, {Component} from "react"
import { connect } from "react-redux";

class Categories extends Component{
    
    handleCategory = (category) => {
        this.props.dispatch({
            type: "Set_Category",
            payload: category
        })
    }

    
    
    render(){
        return(
            <div>
                <select onChange={(e) => this.handleCategory(e.target.value)} value={this.props.product.category}>
                    {this.props.categories && this.props.categories.map((category)=>{
                        return(
                            <option key={category}>{category}</option>
                        )
                    })}
                </select>
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        categories: state.categories.categories,
        product: state.product.product
    };
}

const mapDispatchToProps = (dispatch) => {
    return{
        dispatch: dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);