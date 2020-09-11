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
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import { DeacBtnComponent } from "./DeacBtnComponent";
import { ReacBtnComponent } from "./ReacBtnComponent";

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

const TableComponent = (props) => {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(4);
    // const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        // console.log(newPage);
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event, newPage) => {
        // console.log(event);
        // old code
        // setRowsPerPage(parseInt(event.target.value,10));
        // setPage(0);
        // new code
        //sets rows to option
        setPage(parseInt(event.target.value, 10) - 1);
        setRowsPerPage(4);

    };

    const classes = useStyles();
    // console.log(props.merchants.merchants);


    // const name = props.name;
    // const filteredList = props.list;
    // const rows = [];
    // // const activeMerchants = [];
    // var merchantsToBeDisplayed = [];

    // if(props.status===true){
    //     //filter the merchants who are active in the props and save to activeMerchants
    //     console.log("active");
    //     merchantsToBeDisplayed = props.merchants.merchants.filter((merchant) => {
            
    //         return merchant.status === true;
    //     })
    // }
    // else{
    //     //filter the merchants who are inactive in the props and save to activeMerchants
    //     console.log("inactive");
    //     merchantsToBeDisplayed = props.merchants.merchants.filter((merchant) => {
    //         return merchant.status === false;
    //     })
    // }

    // if(filteredList.length>0){
    //     console.log("filtered list");
    //     merchantsToBeDisplayed = filteredList;
    // }

    // console.log(merchantsToBeDisplayed);
    // (rowsPerPage > 0 ? merchantsToBeDisplayed.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : props.merchants.merchants).map((merchant) => {
    //     //fix pagination bug
    //     //fix search bug
    //     // console.log(merchant.firstname)
    //     if (merchant.firstname.indexOf(name) === -1||merchant.lastname.indexOf(name) === -1) {
    //         // console.log("HI");
    //         // console.log("HI1")
    //         return (
                
    //             rows.push(
    //             <TableRow key={merchant.id}>
    //                 <TableCell align="left">{merchant.firstname}</TableCell>
    //                 <TableCell align="left">{merchant.lastname}</TableCell>
    //                 <TableCell align="left">{merchant.location}</TableCell>
    //                 {/* <TableCell align="left"><DeacBtn handleDeac={props.handleDeac} id={merchant.id} status={merchant.status} enabled={merchant.enabled}/></TableCell> */}
    //                 <TableCell align="left">{merchant.status ?<DeacBtnComponent status = {merchant.status} key={merchant.id} handleDeac={props.handleDeac} id={merchant.id}/>:<ReacBtnComponent key={merchant.id} handleDeac={props.handleDeac} id={merchant.id} />}</TableCell>
    //                 {/* <TableCell align="left">{merchant.status?<DeacBtnComponent key={merchant.id} handleDeac={props.handleDeac} id={merchant.id}/>:<ReacBtnComponent key={merchant.id} handleDeac={props.handleDeac} id={merchant.id}/>}</TableCell> */}
    //             </TableRow>
    //             )
    //         )
    //     }
    //     // console.log("HI2")
    //     return (
            
    //         rows.push(
    //         <TableRow key={merchant.id}>
    //             <TableCell align="left">{merchant.firstname}</TableCell>
    //             <TableCell align="left">{merchant.lastname}</TableCell>
    //             <TableCell align="left">{merchant.location}</TableCell>
    //             {/* <TableCell align="left"><DeacBtn handleDeac={props.handleDeac} id={merchant.id} status={merchant.status} enabled={merchant.enabled}/></TableCell> */}
    //             <TableCell align="left">{props.status ? <DeacBtnComponent key={merchant.id} handleDeac={props.handleDeac} id={merchant.id} /> : <ReacBtnComponent key={merchant.id} handleDeac={props.handleDeac} id={merchant.id} />}</TableCell>
    //             {/* <TableCell align="left">{merchant.status?<DeacBtnComponent key={merchant.id} handleDeac={props.handleDeac} id={merchant.id}/>:<ReacBtnComponent key={merchant.id} handleDeac={props.handleDeac} id={merchant.id}/>}</TableCell> */}
    //         </TableRow>
    //         )
    //     )

    // })

    console.log(props.merchants);
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
                            {(rowsPerPage > 0 ? props.merchants.merchants.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : props.merchants.merchants).map((merchant) => (

                                <TableRow key={merchant.id}>
                                    <TableCell align="left">{merchant.firstname}</TableCell>
                                    <TableCell align="left">{merchant.lastname}</TableCell>
                                    <TableCell align="left">{merchant.location}</TableCell>
                                    <TableCell align="left">{merchant.status ? <DeacBtnComponent state = {props.status} status= {merchant.status} key={merchant.id} handleDeac={props.handleDeac} id={merchant.id} /> : <ReacBtnComponent key={merchant.id} handleDeac={props.handleDeac} id={merchant.id} />}</TableCell>
                                </TableRow>
                            ))}

                            {/* {rows} */}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Box mr={100}>
                    <TablePagination
                        rowsPerPageOptions={[1, 2, 3]}
                        component="div"
                        count={props.merchants.merchants.length}
                        page={page}
                        rowsPerPage={rowsPerPage}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                        labelDisplayedRows={({ from, to, count }) => `of ${page + 1}`}
                        labelRowsPerPage={"Page"}
                    />
                </Box>
            </Paper>

        </div>
    );
}

export default TableComponent;
