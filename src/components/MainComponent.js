import React, { Component } from 'react';
import TableComponent from './TableComponent';
import SearchBarComponent from './SearchBarComponent';
import Box from '@material-ui/core/Box';
import { connect } from 'react-redux';
import { editStatus, editName, fetchMerchants, fetchState, fetchName, editMerchants } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        merchants: state.merchants,
        status: state.status,
        name: state.name
    }
}

const mapDispatchToProps = (dispatch) => ({
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
            list: [],
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

    shouldComponentUpdate(){
        return true;
    }

    componentDidUpdate(prevProps){
        // console.log("im in");

        if(this.props.name.name !== prevProps.name.name){
            //filter list based on name
            
            const list = this.props.merchants.merchants.filter((merchant) => {
                return merchant.firstname.toLowerCase().includes(this.props.name.name.trim().toLowerCase()) || merchant.lastname.trim().toLowerCase().includes(this.props.name.name.toLowerCase());
            });
            this.setState({list: list});
        }
        else if(this.props.status.status !== prevProps.status.status){
            console.log("from truthy");
            //filter list based on status
            const list = this.props.merchants.merchants.filter((merchant) => {
                return merchant.status === this.props.status.status;
            });
            // console.log(list);
            this.setState({list: list});
        }
    }

    handleNameChange(name) {
        //change to editName
        // this.setState({
        //     name: name
        // });
        // console.log(name);
        this.props.editName(name);
        // console.log("from handle name change");
    }

    handleChange = (e) => {
        e.preventDefault();
        const target = e.target
        const value = target.value;
        // const name = target.name;
        // console.log(name);
        // console.log(value);
        this.setState({filter: value});
        //put edit state here

        // axios.get('./data/data.json')
        // .then((res)=>{
        //     // console.log(res.data.merchants);
        //     const merchants3 = res.data.merchants;
        //     const merchants4 = merchants3.filter((merchant) => {
        //         return merchant.status === this.state.status;
        //     })
        //     //this wouldn't be executed because the return was called inside the filter method
        //     this.setState({ merchants: merchants4 });
        //     // console.log(merchants4);
        // }).catch((err)=>{
        //   console.log(err);
        // })
        
    }

    handleClick = () => {
        // console.log(this.state.name);
        // console.log("from handleClick", this.props.name.name);
        const temp = this.props.merchants.merchants;
        this.setState({merchants:temp});
        //filterMerchants reducer here
        // this.props.filterMerchants(this.props.name.name,this.props.merchants.merchants);

        // axios.get('./data/data.json')
        // .then((res)=>{
        //     // console.log(res.data.merchants);
        //     const merchants = res.data.merchants;

        //     // console.log(merchants);
        //     // console.log(this.state.status);
        //     const merchants2 = merchants.filter((merchant) => {
        //         // return this.state.name?this.state.status?merchant.firstname.toLowerCase().includes(this.state.name.toLowerCase())&&merchant.status.isTrue()||merchant.lastname.toLowerCase().includes(this.state.name.toLowerCase())&&merchant.status.isTrue():
        //         //if name only available
        //         if(this.props.name.name){
        //             return merchant.firstname.toLowerCase().includes(this.props.name.name.trim().toLowerCase()) || merchant.lastname.trim().toLowerCase().includes(this.props.name.name.toLowerCase());
        //         }
        //         //if name and status of merchant is available
        //         // else if((this.state.status||!this.state.status)&&this.state.name){
        //         //     if(this.state.status===true){
        //         //         return merchant.status === true && merchant.firstname.toLowerCase().includes(this.state.name.toLowerCase());
        //         //     }
        //         //     return merchant.status === false && merchant.firstname.toLowerCase().includes(this.state.name.toLowerCase());
        //         // }
        //         // //if status only available
        //         // else if(this.state.status||!this.state.status){
        //         //     if(this.state.status===true){
        //         //         return merchant.status === true;
        //         //     }
        //         //     return merchant.status === false;
        //         // }
        //         return merchant.status === this.state.status;
        //     })
        //     // console.log(merchants.filter( (merchant) => {merchant.firstname.toLowerCase().includes(this.state.name.toLowerCase())}));
        //     this.setState({ merchants: merchants2 });
        // }).catch((err)=>{
        //   console.log(err);
        // })
    }

    setResults = () => {
        var filteredList;
        console.log("from setResults");
        // if(name!=null){
            filteredList = this.props.merchants.merchants.filter((merchant) => {
                return merchant.firstname.toLowerCase().includes(this.state.filter.trim().toLowerCase()) || merchant.lastname.toLowerCase().includes(this.state.filter.trim().toLowerCase());
            })
        // }
        this.setState({list: filteredList});
        // this.setState({filter: null});
    }
    
    handleDeac = (id) => {
        // this.props.disabled = true;
        this.props.editMerchants(id,this.props.merchants.merchants);

        // console.log(this.state.merchants);
    }

    handleStatus = (e) => {
        e.preventDefault();
        const target = e.target
        const value = target.value;
        // const name = target.name;
        // console.log(name);
        // console.log(value);
        this.props.editStatus(value);

    }

    render() {
        const Table = () => {
            return(
                <TableComponent 
                    name={this.props.name} 
                    // merchants={this.props.merchants} 
                    merchants={this.state.list} 
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
                        name={this.props.name}
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