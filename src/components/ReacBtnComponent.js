import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';

const styles = theme => ({
    disabledButton: {
      backgroundColor: theme.palette.primary || 'red'
    }
  });
  
export class ReacBtnComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            ability: false
        }
    }

    handleClick=()=>{
        this.setState({ability: !this.state.ability});
        this.props.handleDeac(this.props.id);
    }

    render() {
        return (
            <div>
                <Button 
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<CheckIcon />}
                    disabled={this.state.ability}
                    onClick={()=>this.handleClick()}
                    >Reactivate</Button>
            </div>
        )
    }
}

export default ReacBtnComponent
