import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TablePagination from '@material-ui/core/TablePagination';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import ClearIcon from '@material-ui/icons/Clear';
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles((theme) => ({
    root: {
    width: '100%',
    },
    paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
    },
    table: {
    minWidth: 750,
    },
    visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
    },
    button: {
        margin: theme.spacing(1),
    },

}));


// const useStyles = makeStyles({
//     table: {
//       minWidth: 650,
//     },
//   });

const ReacBtn = () => {
    return(
        <div>
            <Button
                variant="contained"
                // color="green"
                size="large"
                startIcon={<CheckIcon />}>Reactivate
            </Button>
        </div>
    );
}

const DeacBtn = (props) => {

    //if active ang user then render deac btn else render reac btn
    if(props.status===true){
        //if disabled ang user then render disabled deac btn
        if(props.enabled===true){
            return(
                <div>
                    <Button                
                        variant="contained"
                        style={{
                            backgroundColor: "#ff0000",
                            color:"#FFFFFF"
                        }}
                        size="large"
                        onClick={()=>{props.handleDeac(props.id)}}
                        startIcon={<ClearIcon />} 
                        disabled={!props.status}>Deactivate
                    </Button>
                </div>
            );
        }
        
        return(
            <Button                
                variant="contained"
                size="large"
                // onClick={()=>{props.handleDeac(props.id)}}
                startIcon={<ClearIcon />} disabled>Deactivate
            </Button>
        );

    }
    else if(props.status===false){
        if(props.enabled===false){
            return(
                <div>
                    <Button
                        variant="contained"
                        size="large"
                        startIcon={<CheckIcon />}
                        disabled>
                            Reactivate
                    </Button>
                </div>
            );
        }
        return(
            <div>
                <Button
                    variant="contained"
                    style={{
                        backgroundColor: "#008000",
                        color:"#FFFFFF"
                    }}
                    size="large"
                    startIcon={<CheckIcon />}
                    onClick={()=>{props.handleDeac(props.id)}}
                    >
                        Reactivate
                </Button>
            </div>
        );
    }

}

const DeacBtn2 = (props) => {

    return(
        <Button                
            variant="contained"
            size="small"
            // onClick={()=>{props.handleDeac(props.id)}}
            startIcon={<ClearIcon />} disabled>Deactivate
        </Button>
    );

}

const TableComponent = (props) => {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(4);
    // const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event,newPage) => {
        // console.log(event);
        // old code
        // setRowsPerPage(parseInt(event.target.value,10));
        // setPage(0);
        // new code
        //sets rows to option
        setPage(parseInt(event.target.value, 10));
        setRowsPerPage(4);

    };

    const classes = useStyles();
    // console.log(props.merchants);

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <AppBar position="sticky">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                        Merchants
                        </Typography>
                    </Toolbar>
                </AppBar>

                <TableContainer >
                    <Table             
                    className={classes.table}
                    aria-labelledby="tableTitle"
                    aria-label="enhanced table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left"><b>First Name</b></TableCell>
                            <TableCell align="left"><b>Last Name</b></TableCell>
                            <TableCell align="left"><b>Location</b></TableCell>
                            <TableCell align="left"><b>Status</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                                                
                        {/* {props.merchants.map((merchant) => ( */}
                        {(rowsPerPage > 0? props.merchants.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage):props.merchants).map((merchant) => (
                            //add a field in the data.json for disabled and enabled
                            //ask Ray if i persist ang data
                            //fix pagination bug
                            //fix seach bug

                            <TableRow key={merchant.id}>
                                <TableCell align="left">{merchant.firstname}</TableCell>
                                <TableCell align="left">{merchant.lastname}</TableCell>
                                <TableCell align="left">{merchant.location}</TableCell>
                                <TableCell align="left"><DeacBtn handleDeac={props.handleDeac} id={merchant.id} status={merchant.status} enabled={merchant.enabled}/></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    </Table>
                </TableContainer>
                <Box mr={100}>
                    <TablePagination 
                        rowsPerPageOptions={[0,1,2]} 
                        component="div"
                        count={props.merchants.length}
                        page={page}
                        rowsPerPage={rowsPerPage}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                        labelDisplayedRows={({ from, to, count }) => `of ${page+1}`}
                        labelRowsPerPage = {"Page"}
                        />
                </Box>
            </Paper>        
            
        </div>
    );
}

export default TableComponent;
