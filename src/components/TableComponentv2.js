import ReactTable from 'react-table-6'
import 'react-table-6/react-table.css'
import React from 'react'
import {MERCHANTS} from '../shared/merchants'

export class TableComponentv2 extends React.Component{
    render() {
        // const data = [{
        //   name: 'Tanner Linsley',
        //   age: 26,
        //   friend: {
        //     name: 'Jason Maurer',
        //     age: 23,
        //   }
        // }]

        const data = [{
            id: 9,
            firstname:"John5",
            lastname:"Doe",
            location: "USA",
            status: false
        }]
       
        const columns = [{
            Header: 'Merchants',
            
            columns:[{
                Header: 'First Name',
                accessor: 'firstname' // String-based value accessors!
                }, {
                Header: 'Last Name',
                accessor: 'lastname',
                //   Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
                }, {
                //   id: 'Location', // Required because our accessor is not a string
                Header: 'Location',
                accessor: 'location',
                //   accessor: d => d.friend.name // Custom value accessors!
                }, {
                Header: 'Status', // Custom header components!
                accessor: 'status'
            }]
        }]

       
        return (
            <ReactTable
                data={MERCHANTS}
                resolveData={data => data.map(row => row)} // But you can break immutability here because `resolveData` runs when the `data` prop changes!
                columns={columns}
                loading={false}
                // filterable={true}
                showPagination={true}
                showPageSizeOptions={false}
                // pageSizeOptions={[1, 2, 3]}
                defaultPageSize={4}
                page={0}
                pageText= 'Page'
                // showPageJump= {true}
                />
        )
      }
}

export default TableComponentv2

