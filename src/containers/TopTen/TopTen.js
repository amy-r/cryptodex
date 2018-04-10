import React from 'react';
import { connect } from 'react-redux';

const TopTen = (props) => {

  const tableData = props.dashboard.map( (curr) => {
    return (      
      <tr key= {curr.currency}>
        <td> {curr.currency} </td>
        <td> {curr.marketCap} </td>
        <td> {curr.percentage} </td>
      </tr>      
    )
  })

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td> Currency </td>
            <td> Market Cap </td>
            <td> % </td>
          </tr>
        {tableData}
        </tbody>
      </table>
    </div>
  )
}

const mapStateToProps = (state) => ({
  dashboard: state.dashboard
})

export default connect(mapStateToProps, null)(TopTen)

