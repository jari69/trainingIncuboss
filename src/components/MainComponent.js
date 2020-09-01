import React, { Component } from 'react';
import TableComponent from './TableComponent';
// import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import SearchBarComponent from './SearchBarComponent';
// import Button from '@material-ui/core/Button';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

class Main extends Component {
    constructor(props) {
      super(props);

      this.state = {
        merchants: [],
        name: "",
        status: ""
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        axios.get('./data.json')
        .then((res)=>{
            // console.log(res.data.merchants);
            const merchants = res.data.merchants;
            this.setState({ merchants: merchants });
        }).catch((err)=>{
          console.log(err);
        })
    }

    // handleSearchName = ({target}) => {
    //     this.setState({name: target.value});
    // }

    handleChange = (e) => {
        e.preventDefault();
        const target = e.target
        const value = target.value;
        const name = target.name;
        this.setState({[name]: value});
    }

    handleClick = () => {
        // console.log(this.state.name);
        axios.get('./data.json')
        .then((res)=>{
            // console.log(res.data.merchants);
            const merchants = res.data.merchants;

            // console.log(merchants);
            // console.log(this.state.status);
            const merchants2 = merchants.filter((merchant) => {
                // return this.state.name?this.state.status?merchant.firstname.toLowerCase().includes(this.state.name.toLowerCase())&&merchant.status.isTrue()||merchant.lastname.toLowerCase().includes(this.state.name.toLowerCase())&&merchant.status.isTrue():
                //if name only available
                if(this.state.name){
                    return merchant.firstname.toLowerCase().includes(this.state.name.trim().toLowerCase()) || merchant.lastname.trim().toLowerCase().includes(this.state.name.toLowerCase());
                }
                //if name and status available
                else if((this.state.status||!this.state.status)&&this.state.name){
                    if(this.state.status===true){
                        return merchant.status === true && merchant.firstname.toLowerCase().includes(this.state.name.toLowerCase());
                    }
                    return merchant.status === false && merchant.firstname.toLowerCase().includes(this.state.name.toLowerCase());
                }
                //if status only available
                else if(this.state.status||!this.state.status){
                    if(this.state.status===true){
                        return merchant.status === true;
                    }
                    return merchant.status === false;
                }
                else{
                    return merchants;
                }
            })
            // console.log(merchants.filter( (merchant) => {merchant.firstname.toLowerCase().includes(this.state.name.toLowerCase())}));
            this.setState({ merchants: merchants2 });
        }).catch((err)=>{
          console.log(err);
        })
    }

    handleDeac = (id) => {
        // console.log(this.state.merchants);
        // console.log(id);    
        //find the merchant using id and toggle that status
        const index = this.state.merchants.findIndex((merchant) => merchant.id === id);
        // console.log("HI");
        const tempMerchants = [...this.state.merchants];
        // tempMerchants[index].status = !tempMerchants[index].status;
        tempMerchants[index].enabled = !tempMerchants[index].enabled;
        // if(parseInt(tempMerchants[index].status) === true){
        //     tempMerchants[index].status = 0;
        // }
        // else if(parseInt(tempMerchants[index].status) === false){
        //     tempMerchants[index].status = 0;
        // }

        this.setState({merchants: [...tempMerchants]})
        console.log(this.state.merchants);
    }

    render() {
        return (
            <div>
                
                <Box ml={60}>
                    <SearchBarComponent handleClick = {this.handleClick} handleChange={this.handleChange} handleStatus={this.handleChange} state={this.state.status} name={this.state.name}/>
                </Box>
                {/* <input type="text" id="name" name="name" placeholder="Name" onChange={this.handleChange}/>
                <select name="status" id="status" onChange={this.handleChange}>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </select>
                <button color="primary" onClick={this.handleClick} >
                    Search
                </button> */}

                {/* <Typography variant="h6" id="tableTitle" component="div">
                    Merchants
                </Typography> */}

                <TableComponent merchants={this.state.merchants} handleDeac={this.handleDeac}/>
            </div>
        );
    }
}

export default Main;