import React, { useState } from 'react';
import Categories from '../Components/Sidebar/Categories';
import Filter from '../Components/Sidebar/FilterTickets';
import Ticket from '../Components/Tickets/Ticket';

const TicketingPage = () => {
  // Sample ticket data
  const [tickets, setTickets] = useState([
    { name: 'Ticket 1', description: 'Description of Ticket 1', priority: 'High', status: 'open' },
    { name: 'Ticket 2', description: 'Description of Ticket 2', priority: 'Medium', status: 'resolved' },
    { name: 'Ticket 3', description: 'Description of Ticket 3', priority: 'Low', status: 'in-progress' },
    { name: 'Ticket 4', description: 'Description of Ticket 4', priority: 'High', status: 'closed' },
  ]);

  const [filters, setFilters] = useState({
    assignedTo: '',
    dateRange: '',
    priority: '',
  });

  const handleSelectCategory = (category) => {
    console.log('Selected category:', category);
  };

  const handleAddNewLabel = () => {
    console.log('Add new label clicked');
  };

  const handleCreateTicket = () => {
    console.log('Create ticket clicked');
  };

  const handleFilter = (newFilters) => {
    setFilters(newFilters);
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
