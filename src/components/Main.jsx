import React, { Component } from 'react';
import mockData from '../mock_stores.json';
import Table from './Table';

class Main extends Component {
  state = {
    monthTotal: [],
    store: [],
    total: 0,
  };

  sum = (e, inputMonth) => {
    let totalMonths = [];
    let totalStores = [];

    mockData.forEach((data) => {
      let sum = 0;

      data.months.forEach((month) => {
        if (month.id === inputMonth.id) {
          month.value = Number(e.target.value);
        }
        sum += month.value;
      });
      totalMonths.push(sum);
    });
    this.setState({ store: totalMonths });

    mockData[0].months.forEach((month, i) => {
      let sumMonth = 0;
      mockData.forEach((data) => {
        sumMonth += data.months[i].value || 0;
      });
      totalStores.push(sumMonth);
    });

    this.setState({ monthTotal: totalStores });

    this.setState({ total: totalStores.reduce((acc, curr) => acc + curr) });
  };

  render() {
    if (!mockData) {
      return <div>Loading...</div>;
    }

    return (
      <Table
        mockData={mockData}
        sum={this.sum}
        monthTotal={this.state.monthTotal}
        store={this.state.store}
        total={this.state.total}
      />
    );
  }
}

export default Main;
