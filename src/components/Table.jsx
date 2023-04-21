import React from 'react';
import './table.css';

const Table = ({ mockData, sum, monthTotal, store, total }) => {
  return (
    <div className="wrapper">
      <table>
        <thead>
          <tr>
            <th>Store</th>
            {mockData[0]?.months.map((month) => (
              <th key={month.id}>{month.name}</th>
            ))}
            <th colSpan="2" className="total">
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          {mockData?.map((data, i) => (
            <tr key={data.store.id}>
              <td>{data.store.name}</td>
              {data.months.map((month) => (
                <td key={month.id}>
                  <input onChange={(e) => sum(e, month)} type="number" defaultValue={month.value} />
                </td>
              ))}
              <td>
                <input defaultValue={store[i]} type="number" className="total" />
              </td>
            </tr>
          ))}
          <tr>
            <td className="total">Total</td>
            {mockData[0]?.months.map((month, i) => (
              <td key={month.id}>
                <input defaultValue={monthTotal[i]} type="number" className="total" />
              </td>
            ))}
            <td colSpan="2">
              <input value={total} type="number" className="total" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
