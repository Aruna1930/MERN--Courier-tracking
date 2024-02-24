import React from 'react';
import CourierDetails from './CourierDetails';

class CourierList extends React.Component {
  state = {
    couriers: [
      { id: 1, name: 'Courier 1', location: 'City A' },
      { id: 2, name: 'Courier 2', location: 'City B' },
      { id: 3, name: 'Courier 3', location: 'City C' },
    ],
    selectedCourier: null
  };

  handleCourierClick = (courier) => {
    this.setState({ selectedCourier: courier });
  };

  render() {
    const { couriers, selectedCourier } = this.state;

    return (
      <div className="courier-list">
        <h2>Couriers</h2>
        <ul>
          {couriers.map(courier => (
            <li key={courier.id} onClick={() => this.handleCourierClick(courier)}>
              {courier.name} - {courier.location}
            </li>
          ))}
        </ul>
        {selectedCourier && <CourierDetails courier={selectedCourier} />}
        
      </div>
    );
  }
}

export default CourierList;
