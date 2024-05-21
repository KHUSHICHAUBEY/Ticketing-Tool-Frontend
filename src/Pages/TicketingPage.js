import React, { useState, useEffect } from 'react';
import Categories from '../Components/Sidebar/Categories';
import Filter from '../Components/Sidebar/FilterTickets';
import Ticket from '../Components/Tickets/Ticket';

const TicketingPage = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetchAllTickets();
  }, []);

  const fetchAllTickets = async () => {
    try {
      const response = await fetch("http://localhost:3000/viewalltickets");
      if (!response.ok) {
        throw new Error("Failed to fetch tickets");
      }
      const data = await response.json();
      setTickets(data.data); // Assuming the data contains an array of tickets
    } catch (error) {
      console.error("Error fetching tickets:", error);
    }
  };

  const handleSelectCategory = (category) => {
    console.log('Selected category:', category);
  };

  const handleAddNewLabel = () => {
    console.log('Add new label clicked');
  };

  const handleCreateTicket = (newTicket) => {
    // You may update the tickets state with the new ticket if necessary
  };

  const handleFilter = async (filters) => {
    try {
      const query = new URLSearchParams();
      if (filters.assignedTo) query.append('assignedTo', filters.assignedTo);
      if (filters.priority) query.append('priority', filters.priority);
      if (filters.startDate) query.append('startDate', filters.startDate);
      if (filters.endDate) query.append('endDate', filters.endDate);

      console.log('Filter Query:', query.toString()); // Log the query to verify it's constructed correctly

      const response = await fetch(`http://localhost:3000/filterticket?${query.toString()}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to filter tickets');
      }

      const data = await response.json();
      console.log('Filtered Tickets:', data.data); // Log the filtered tickets data
      setTickets(data.data); // Update the tickets state with the filtered tickets
    } catch (error) {
      console.error('Error filtering tickets:', error);
    }
  };

  return (
    <div>
      <h1>Ticketing Page</h1>
      <Categories
        onSelectCategory={handleSelectCategory}
        onAddNewLabel={handleAddNewLabel}
        onCreateTicket={handleCreateTicket}
      />
      <Filter onFilter={handleFilter} />
      <Ticket tickets={tickets} />
    </div>
  );
};

export default TicketingPage;
