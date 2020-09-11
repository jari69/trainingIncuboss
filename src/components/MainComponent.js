import React, { Component } from 'react';
import TableComponent from './TableComponent';
import SearchBarComponent from './SearchBarComponent';
import Box from '@material-ui/core/Box';
import { connect } from 'react-redux';
import { setMerchant, setMerchants, editStatus, editName, fetchMerchants, 
        fetchState, fetchName, editMerchants } from '../redux/ActionCreators';
import axios from 'axios';

const mapStateToProps = state => {
    return {
        merchants: state.merchants,
        status: state.status,
        name: state.name
    }
}

const mapDispatchToProps = (dispatch) => ({
    setMerchant: (searchNames) => dispatch(setMerchant(searchNames)),
    setMerchants: (merchants) => dispatch(setMerchants(merchants)),
    editStatus: (status) => dispatch(editStatus(status)),
    editMerchants: (id,merchants) => dispatch(editMerchants(id,merchants)),
    editName: (name) => dispatch(editName(name)),
    fetchMerchants: () => { dispatch(fetchMerchants())},
    fetchState: () => { dispatch(fetchState())},
    fetchName: () => { dispatch(fetchName())}
});

class Main extends Component {
    constructor(props) {
      super(props);

        this.state = {
            // list: [],
            filter: ""
        }
    //   this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    componentDidMount(){
        this.props.fetchMerchants();
        this.props.fetchState();
        this.props.fetchName();
    }

    async getMerchants(){
        // console.log("get merchants");
        try{
            const merchants =  await axios.get('./data/data.json').then(function (response) {
                // console.log(response);
                return response;
            });
            this.props.setMerchants((await merchants).data.merchants );
            var searchNames = this.props.merchants.merchants.filter((merchant) => {
                return merchant.firstname.toLowerCase().includes(this.state.filter.trim().toLowerCase()) || merchant.lastname.toLowerCase().includes(this.state.filter.trim().toLowerCase());
            })
            // console.log("set merchant")
            this.props.setMerchant(searchNames);
            // console.log((await merchants).data.merchants);
            // return merchants.data.merchants
        }
        catch(error){
            console.log(error);
        }
    }

    async getMerchantsByStatus(value){
        // console.log("get merchants by status");
        try{
            const merchants =  await axios.get('./data/data.json').then(function (response) {
                // console.log(response);
                return response;
            });
            this.props.setMerchants((await merchants).data.merchants );
            const newList = this.props.merchants.merchants.filter((merchant) => {
                // console.log(value);
                return merchant.status === value;
            })
    
            this.props.setMerchant(newList);
        }
        catch(error){
            console.log(error);
        }
    }

    // shouldComponentUpdate(){
    //     return true;
    // }

    // componentDidUpdate(prevProps){
    //     // console.log("im in");

    //     if(this.props.name.name !== prevProps.name.name){
    //         //filter list based on name
            
    //         const list = this.props.merchants.merchants.filter((merchant) => {
    //             return merchant.firstname.toLowerCase().includes(this.props.name.name.trim().toLowerCase()) || merchant.lastname.trim().toLowerCase().includes(this.props.name.name.toLowerCase());
    //         });
    //         this.setState({list: list});
    //     }
    //     else if(this.props.status.status !== prevProps.status.status){
    //         console.log("from truthy");
    //         //filter list based on status
    //         const list = this.props.merchants.merchants.filter((merchant) => {
    //             return merchant.status === this.props.status.status;
    //         });
    //         // console.log(list);
    //         this.setState({list: list});
    //     }
    // }

    handleNameChange(name) {
        //change to editName
        // this.setState({
        //     name: name
        // });
        this.props.editName(name);
        // console.log("from handle name change");
    }

    handleChange = (e) => {
        e.preventDefault();
        const target = e.target
        const value = target.value;
        this.setState({filter: value});
    }

    handleClick = () => {
        const temp = this.props.merchants.merchants;
        this.setState({merchants:temp});

    }

    setResults = () => {
        this.getMerchants();

        // var filteredList;

        // filteredList = this.props.merchants.merchants.filter((merchant) => {
        //     return merchant.firstname.toLowerCase().includes(this.state.filter.trim().toLowerCase()) || merchant.lastname.toLowerCase().includes(this.state.filter.trim().toLowerCase());
        // })
        
        // this.setState({list: filteredList});
    }
    
    handleDeac = (id) => {
        // this.props.disabled = true;
        this.props.editMerchants(id,this.props.merchants.merchants);
    }

    handleStatus = (e) => {
        e.preventDefault();
        const target = e.target
        const value = target.value;
        this.props.editStatus(value);

        //filter all merchants that equal value
        this.getMerchantsByStatus(value);
    }

    render() {
        const Table = () => {
            return(
                <TableComponent 
                    name={this.props.name} 
                    merchants={this.props.merchants} 
                    // merchants={this.state.list} 
                    status={this.props.status.status} 
                    handleDeac={this.handleDeac} 
                    // list={this.state.list}
                />
            )
        }

        return (
            <div>
                <Box ml={60}>
                    <SearchBarComponent 
                        status={this.props.status.status}
                        name={this.props.filter}
                        handleStatus={this.handleStatus}
                        onNameChange={this.handleNameChange}
                        merchants={this.props.merchants}
                        // handleClick={this.handleClick}
                        // filter={this.props.filterMerchants}
                        // merchants={this.props.merchants}
                        filter={this.state.filter}
                        setResults={this.setResults}
                        handleChange={this.handleChange}
                        />
                </Box>

                <Table/>
                {/* <TableComponentv2 
                    merchants={this.props.merchants} 
                    status={this.props.status.status} 
                    /> */}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);