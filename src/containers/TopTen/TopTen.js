import React from 'react';
import { connect } from 'react-redux';

const TopTen = (props) => {

  const tableData = props.dashboard.map( (curr) => {
    return (      
        <tr>
          <td> {curr.currency} </td>
          <td> {curr.marketCap} </td>
          <td> {curr.percentage} </td>
        </tr>      
    )
  })
  
  return (
    <div>
      <table>
        <tr>
          <td> Currency </td>
          <td> Market Cap </td>
          <td> Percentage </td>
        </tr>
        {tableData}
      </table>
    </div>
  )
}

const mapStateToProps = (state) => ({
  dashboard: state.dashboard
})

export default connect(mapStateToProps, null)(TopTen)

