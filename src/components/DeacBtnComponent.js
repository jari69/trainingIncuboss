import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import ClearIcon from '@material-ui/icons/Clear';

export class DeacBtnComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            ability: false,
            color: "#FFFFFF",
            backgroundColor: "#ff0000"
        }
    }
    
    handleClick=()=>{
        // this.setState({backgroundColor: "#505050"});
        this.setState({ability: !this.state.ability});
        this.props.handleDeac(this.props.id);
    }

    render() {
        return (
            <div>
                <Button 
                    variant="contained"
                    // style={{
                    //     backgroundColor: "#ff0000",
                    //     color:"#FFFFFF"
                    // }}
                    color="secondary"
                    size="large"
                    startIcon={<ClearIcon />} 
                    disabled={this.state.ability} 
                    onClick={()=>this.handleClick()}>Deactivate</Button>
            </div>
        )
    }
}

export default DeacBtnComponent
