import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import ClearIcon from '@material-ui/icons/Clear';

export class DeacBtnComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            ability: true
        }
    }
    
    // shouldComponentUpdate(){
    //     return true
    // }

    // componentDidUpdate(prevProps){
    //     if(this.props.status !== prevProps.status){
    //         // this.state.ability = true;
    //         // console.log("from componentDidUpdate")
    //         this.setState({ability: !this.state.ability});
    //     }
    // }

    handleClick=()=>{
        this.setState({ability: !this.state.ability});
        this.props.handleDeac(this.props.id);
 
        // console.log(this.state.ability);
    }

    render() {
        return (
            <div>
                <Button 
                    variant="contained"
                    color="secondary"
                    size="large"
                    startIcon={<ClearIcon />} 
                    // disabled={!this.state.ability} 
                    onClick={()=>{this.handleClick()}}
                    >Deactivate</Button>
            </div>
        )

    }
}

export default DeacBtnComponent
