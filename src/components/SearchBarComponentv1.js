import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import SearchIcon from '@material-ui/icons/Search';
import Grid from "@material-ui/core/Grid";
import Box from '@material-ui/core/Box';


const SearchBarComponent = (props) => {

    const useStyles = makeStyles((theme) => ({
        button: {
            margin: theme.spacing(1),

        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
    }));

    const classes = useStyles();
    return (
        <div>
            <Box display="flex" flexDirection="row-reverse" alignItems="center"mt={3} mb={3}>
                <Grid container spacing={1} justify="center">
                    <Grid item xs={3}>
                        <InputLabel>Filter by</InputLabel>
                    </Grid>
                    {/* <input type="text" id="name" name="name" placeholder="Name" onChange={props.handleChange}/> */}
                    
                    <Grid item xs={3}>
                        <TextField
                            type="text" 
                            id="name" 
                            label="Name"
                            variant="outlined"
                            name="name" 
                            placeholder="Name" 
                            value={props.name}
                            onChange={props.handleChange}
                        />
                    </Grid>
                    
                    {/* <select name="status" id="status" onChange={props.handleChange}>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select> */}

                    <Grid item xs={3}>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Status</InputLabel>
                            <Select
                                name="status" 
                                id="status"
                                value={props.status}
                                onChange={props.handleChange}
                                label="Status"
                                placeholder="status..."
                                >
                                <MenuItem value={true}>Active</MenuItem>
                                <MenuItem value={false}>Inactive</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    {/* <Button variant="contained" color="primary" >
                        Search
                    </Button> */}

                    <Grid item xs={3}>
                        <Button
                            startIcon={<SearchIcon />}
                            variant="contained"
                            size="large"
                            color="primary"
                            className={classes.margin}
                            onClick={props.handleClick}>Search
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default SearchBarComponent;