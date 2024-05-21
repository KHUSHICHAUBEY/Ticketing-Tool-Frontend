import React, { useState } from 'react';
import Ticket from './Ticket';
import Filtered from './Filtered';

const TicketingPage = () => {
    const [showFiltered, setShowFiltered] = useState(false);
    const [filters, setFilters] = useState({
        assignedTo: '',
        startDate: '',
        endDate: '',
        priority: '',
    });

    const handleFilterSubmit = (newFilters) => {
        setFilters(newFilters);
        setShowFiltered(true);
    };

    return (
        <div>
            <h1>Ticketing Page</h1>
            {showFiltered ? (
                <Filtered onFilterSubmit={handleFilterSubmit} />
            ) : (
                <Ticket filters={filters} />
            )}
        </div>
    );
};

export default TicketingPage;
