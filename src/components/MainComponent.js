import React, { Component } from 'react';
import TableComponent from './TableComponent';
// import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import SearchBarComponent from './SearchBarComponent';
// import Button from '@material-ui/core/Button';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// function handleClick(){
//     console.log("HI");
//     this.props.handleSearchName(this.name);
// }

// const SearchBarComponent = (props) => {

//     return (
//         <div>
//             <Toolbar>
//                 <label>Filter by</label>
//                 <input type="text" id="name" name="name" placeholder="Name"/>
//                 <select name="status" id="status">
//                     <option value="active">Active</option>
//                     <option value="inactive">Inactive</option>
//                 </select>
//                 <Button onClick={props.handleSearchName} variant="contained" color="primary">
//                     Search
//                 </Button>
//             </Toolbar>
//         </div>
//     );
// }




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
        console.log(value);
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
            //get merchants
            //change to lowercase 
            //search their first name and last name 
            //search if their status
            //if name field is empty, then check status field, if both are empty then return merchants2
            //if name is filled and if status is empty then filter then send 
            //if status is filled and if name is empty then filter then send
            const merchants2 = merchants.filter((merchant) => {
                // return this.state.name?this.state.status?merchant.firstname.toLowerCase().includes(this.state.name.toLowerCase())&&merchant.status.isTrue()||merchant.lastname.toLowerCase().includes(this.state.name.toLowerCase())&&merchant.status.isTrue():
                if(this.state.name){
                    return merchant.firstname.toLowerCase().includes(this.state.name.toLowerCase());
                }
                else if(this.state.status&&this.state.name){
                    return merchant.status === 1 && merchant.firstname.toLowerCase().includes(this.state.name.toLowerCase());
                }
                else if(this.state.status&&!this.state.name){
                    return merchant.status === 1 && merchant.firstname.toLowerCase().includes(this.state.name.toLowerCase());
                }
                else if(this.state.status){
                    return merchant.status === 1;
                }
                else if(!this.state.status){
                    return merchant.status === 0;
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

        //set merchants using filter method based on name input 
    }

    render() {
    
        // const SearchBarComponent = (props) => {
        //     // const inputName = useRef(null);
        //     return (
        //         <div>
        //             <Toolbar>
        //                 <label>Filter by</label>
        //                 <input type="text" id="name" name="name" placeholder="Name"  onChange={this.handleChange}></input>
        //                 <select name="status" id="status">
        //                     <option value="active">Active</option>
        //                     <option value="inactive">Inactive</option>
        //                 </select>
        //                 <button color="primary" >
        //                     Search
        //                 </button>
        //             </Toolbar>
        //         </div>
        //     );
        // }

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

                <TableComponent merchants={this.state.merchants}/>
            </div>
        );
    }
}

export default Main;