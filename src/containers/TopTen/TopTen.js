import React from 'react';
import { connect } from 'react-redux';
import './TopTen.css';
import PropTypes from 'prop-types';

export const TopTen = (props) => {

  const tableData = props.dashboard.map( (curr) => {
    return (      
      <tr key= {curr.currency}>
        <td> {curr.currency} </td>
        <td> {curr.marketCap} </td>
        <td> {curr.percentage} </td>
      </tr>      
    );
  });

  return (
    <div className='TopTen'>
      <table>
        <tbody>
          <tr className='table-head'>
            <td> Currency </td>
            <td> Market Cap </td>
            <td> % </td>
          </tr>
          {tableData}
        </tbody>
      </table>
    </div>
  );
};

export const mapStateToProps = (state) => ({
  dashboard: state.dashboard
});

TopTen.propTypes = {
  dashboard: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number])))
};

export default connect(mapStateToProps, null)(TopTen);

