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
// import { red, green } from 'material-ui/colors'

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
  
// const useToolbarStyles = makeStyles((theme) => ({
//     root: {
//         paddingLeft: theme.spacing(2),
//         paddingRight: theme.spacing(1),
//     },
//     highlight:
//         theme.palette.type === 'light'
//         ? {
//             color: theme.palette.secondary.main,
//             backgroundColor: lighten(theme.palette.secondary.light, 0.85),
//             }
//         : {
//             color: theme.palette.text.primary,
//             backgroundColor: theme.palette.secondary.dark,
//             },
//     title: {
//         align: 'left',
//         backgroundColor:'blue'      
//     },
// }));

// const EnhancedTableToolbar = () => {
//     const classes = useToolbarStyles();

//     return (
//         <Toolbar>
//         <Box mx={10} bgcolor="background.paper">
//         <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
//             Merchants
//         </Typography>
//         </Box>

//         </Toolbar>
//     );
// };

const ReactivateBtn = () => {
    return(
        <div>
            <Button
                variant="contained"
                color="green"
                size="large"
                startIcon={<ClearIcon />}>Reactivate
            </Button>
        </div>
    );
}

const DeacBtn = () => {
    return(
        <div>
            <Button>Deactivate</Button>

        </div>
    );
}

const TableComponent = (props) => {

    // const [page, setPage] = React.useState(0);
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

    // const handleLabelDisplayedRows = ({ from, to, count }) => {
    //     `${from}-${to} of ${count !== -1 ? count :more than {to}}
    // };

    const classes = useStyles();
    // console.log(props.merchants);


    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                {/* <EnhancedTableToolbar/> */}
                <AppBar position="static">
                    <Toolbar>
                        {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                        </IconButton> */}
                        <Typography variant="h6" className={classes.title}>
                        Merchants
                        </Typography>
                        {/* <Button color="inherit">Login</Button> */}
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


                            <TableRow key={merchant.id}>
                                <TableCell align="left">{merchant.firstname}</TableCell>
                                <TableCell align="left">{merchant.lastname}</TableCell>
                                <TableCell align="left">{merchant.location}</TableCell>
                                <TableCell align="left">{merchant.status?<ReactivateBtn/>:<DeacBtn/>}</TableCell>
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
                        labelDisplayedRows={({ from, to, count }) => `of ${page}`}
                        labelRowsPerPage = {"Page"}
                        />
                </Box>
            </Paper>        
            
        </div>
    );
}

export default TableComponent;
