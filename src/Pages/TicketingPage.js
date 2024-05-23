import React, { useState, useEffect } from 'react';
import Categories from '../Components/Sidebar/Categories';
import Filter from '../Components/Sidebar/FilterTickets';
import Ticket from '../Components/Tickets/Ticket';
import Filtered from '../Components/Tickets/Filtered';

const TicketingPage = ({ filteredTickets, onFilter }) => {
  const [tickets, setTickets] = useState([]);
  const [filters, setFilters] = useState({
    assignedTo: '',
    dateRange: '',
    priority: '',
  });

  useEffect(() => {
    if (!filteredTickets || filteredTickets.length === 0) {
      fetchAllTickets();
    }
  }, [filteredTickets]);

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
      // Handle error
    }
  };

  const handleSelectCategory = (category) => {
    console.log('Selected category:', category);
  };

  const handleAddNewLabel = () => {
    console.log('Add new label clicked');
  };

  const handleCreateTicket = (newTicket) => {
    // Handle new ticket creation logic
  };

  const handleFilter = (filterCriteria) => {
    onFilter(filterCriteria);
  };

  return (
    <div className='ticketing-page'>
      <div className='sidebar'>
        <div className='left-bar'>
          <Categories
            onSelectCategory={handleSelectCategory}
            onAddNewLabel={handleAddNewLabel}
            onCreateTicket={handleCreateTicket}
          />
        {/* </div>
        <div> */}
          <Filter onFilter={handleFilter} />
        </div>
      </div>
      <div className='content'>
        {filteredTickets && filteredTickets.length > 0 ? (
          <Filtered tickets={filteredTickets} />
        ) : (
          <Ticket tickets={tickets} />
        )}
      </div>
    </div>
  );
};

export default TicketingPage;
