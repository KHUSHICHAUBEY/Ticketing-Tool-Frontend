import React, { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import './Ticket.css';

const Ticket = ({ tickets }) => {
  const [status, setStatus] = useState('Open');

  const filterTicketsByStatus = (status) => {
    return tickets.filter(ticket => ticket.status.toLowerCase() === status.toLowerCase());
  };

  return (
    <div className="ticket-container">
      <h2>Tickets</h2>
      <Tabs>
        <TabList className="tabs">
          <Tab className={`tab ${status === 'Open' ? 'active' : ''}`} onClick={() => setStatus('Open')}>Open</Tab>
          <Tab className={`tab ${status === 'Resolved' ? 'active' : ''}`} onClick={() => setStatus('Resolved')}>Resolved</Tab>
          <Tab className={`tab ${status === 'In-Progress' ? 'active' : ''}`} onClick={() => setStatus('In-Progress')}>In-Progress</Tab>
          <Tab className={`tab ${status === 'Closed' ? 'active' : ''}`} onClick={() => setStatus('Closed')}>Closed</Tab>
        </TabList>

        <TabPanel>
          <h3>{status} Tickets</h3>
          <ul className="ticket-list">
            {filterTicketsByStatus(status).map((ticket, index) => (
              <li key={index} className="ticket-item">
                <div className="ticket-info">
                  <p>
                    Ticket Name: {ticket.title}, Description: {ticket.description}, Priority: {ticket.priority}, Status: {ticket.status}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </TabPanel>

        {/* Add additional TabPanel for other status */}
        <TabPanel>
          <h3>Resolved Tickets</h3>
          <ul className="ticket-list">
            {filterTicketsByStatus('Resolved').map((ticket, index) => (
              <li key={index} className="ticket-item">
                <div className="ticket-info">
                  <p>
                    Ticket Name: {ticket.title}, Description: {ticket.description}, Priority: {ticket.priority}, Status: {ticket.status}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </TabPanel>

        <TabPanel>
          <h3>In-Progress Tickets</h3>
          <ul className="ticket-list">
            {filterTicketsByStatus('In-Progress').map((ticket, index) => (
              <li key={index} className="ticket-item">
                <div className="ticket-info">
                  <p>
                    Ticket Name: {ticket.title}, Description: {ticket.description}, Priority: {ticket.priority}, Status: {ticket.status}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </TabPanel>

        <TabPanel>
          <h3>Closed Tickets</h3>
          <ul className="ticket-list">
            {filterTicketsByStatus('Closed').map((ticket, index) => (
              <li key={index} className="ticket-item">
                <div className="ticket-info">
                  <p>
                    Ticket Name: {ticket.title}, Description: {ticket.description}, Priority: {ticket.priority}, Status: {ticket.status}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </TabPanel>

      </Tabs>
    </div>
  );
};

export default Ticket;
