import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import SearchIcon from '@material-ui/icons/Search';
import Grid from "@material-ui/core/Grid";
import Box from '@material-ui/core/Box';


class SearchBarComponent extends React.Component{
    constructor(props) {
        super(props);
        // this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.input = React.createRef();
    }
    
    // handleNameChange(e) {
    //     console.log("from handleNameChange", e.target.value);
    //     this.props.onNameChange(e.target.value);
    // }

    handleSubmit(e) {
        e.preventDefault();

        console.log("from handle submit");
        // alert(this.input.current.value);
        // this.props.onNameChange(this.input.current.value);

        const temp = this.props.merchants.merchants;
        // console.log(temp);
        // console.log(this.props.filter);
        // this.props.filter(this.input.current.value, temp);
        // this.props.handleClick();
        //get state from this.props.merchants.merchants and search them and then filter 
        this.props.setResults(this.props.filter,temp);

    }
    
    render(){
        return (
            <div>
                {/* <form onSubmit={this.handleSubmit}> */}
                    <Box display="flex" flexDirection="row-reverse" alignItems="center"mt={3} mb={3}>
                        <Grid container spacing={0} justify="center">
                            <Grid item xs={3} >
                                <InputLabel>Filter by</InputLabel>
                            </Grid>
                            
                            <Grid item xs={3}>
                                <TextField
                                    id="name" 
                                    label="Name"
                                    type="text" 
                                    variant="outlined"
                                    name="name" 
                                    placeholder="Name" 
                                    // ref={this.TextField}
                                    value={this.props.filter}
                                    onChange={this.props.handleChange}
                                    // onChange={this.props.onNameChange}
                                    // onChange={this.handleNameChange}
                                    inputRef={this.input}
                                />
                            </Grid>
        
                            <Grid item xs={3}>
                                <FormControl variant="outlined" >
                                    <InputLabel id="demo-simple-select-outlined-label">Status</InputLabel>
                                    <Select
                                        name="status" 
                                        id="status"
                                        value={this.props.status}
                                        // onChange={this.props.handleChange}
                                        onChange={this.props.handleStatus}
                                        label="Status"
                                        placeholder="status...">
                                        <MenuItem value={true}>Active</MenuItem>
                                        <MenuItem value={false}>Inactive</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
        
                            <Grid item xs={3}>
                                <Button
                                    startIcon={<SearchIcon />}
                                    variant="contained"
                                    size="large"
                                    color="primary"
                                    // type="submit" 
                                    value="Search"
                                    // filter={this.props.filter}
                                    // onClick={this.props.handleClick}
                                    onClick={this.props.setResults}
                                    >Search
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                {/* </form> */}
            </div>
        );
    }
}

export default SearchBarComponent;