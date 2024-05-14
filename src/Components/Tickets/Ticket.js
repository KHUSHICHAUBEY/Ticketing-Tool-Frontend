import React, { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import './Ticket.css';

const Ticket = ({ tickets }) => {
  const [status, setStatus] = useState('open');

  const filteredTickets = tickets.filter(ticket => ticket.status === status);

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
{console.log(filteredTickets)}
        <TabPanel>
          <h3>Open Tickets</h3>
          <ul className="ticket-list">
            {filteredTickets.map((ticket, index) => (
              <li key={index} className="ticket-item">
                <div className="ticket-info">
                  <p>
                    Ticket Name: {ticket.name}, Description: {ticket.description}, Priority: {ticket.priority}, Status: {ticket.status}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </TabPanel>
        
        <TabPanel>
          <h3>Resolved Tickets</h3>
          <ul className="ticket-list">
            {filteredTickets.map((ticket, index) => (
              <li key={index} className="ticket-item">
                <div className="ticket-info">
                  <p>
                    Ticket Name: {ticket.name}, Description: {ticket.description}, Priority: {ticket.priority}, Status: {ticket.status}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </TabPanel>

        <TabPanel>
          <h3>In-Progress Tickets</h3>
          <ul className="ticket-list">
            {filteredTickets.map((ticket, index) => (
              <li key={index} className="ticket-item">
                <div className="ticket-info">
                  <p>
                    Ticket Name: {ticket.name}, Description: {ticket.description}, Priority: {ticket.priority}, Status: {ticket.status}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </TabPanel>

        <TabPanel>
          <h3>Closed Tickets</h3>
          <ul className="ticket-list">
            {filteredTickets.map((ticket, index) => (
              <li key={index} className="ticket-item">
                <div className="ticket-info">
                  <p>
                    Ticket Name: {ticket.name}, Description: {ticket.description}, Priority: {ticket.priority}, Status: {ticket.status}
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
