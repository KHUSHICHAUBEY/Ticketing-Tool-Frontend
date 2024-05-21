import React, { useState } from 'react';

const Filter = ({ onFilter }) => {
    const [assignedTo, setAssignedTo] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [priority, setPriority] = useState('');

    const handleFilter = async () => {
        try {
            const query = new URLSearchParams({
                assignedTo,
                priority,
                startDate,
                endDate
            }).toString();

            console.log('Query:', query); // Log the query to verify it's constructed correctly

            const response = await fetch(`http://localhost:3000/filterticket?${query}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Failed to filter tickets');
            }

            const data = await response.json();
            console.log('Filtered data:', data); // Log the filtered data
            onFilter(data.data); 
        } catch (error) {
            console.error('Error filtering tickets:', error);
        }
    };

    return (
        <div className="filter-sidebar">
            <h2>Filter Tickets</h2>
            <label>
                Assigned To:
                <input
                    type="text"
                    value={assignedTo}
                    onChange={(e) => setAssignedTo(e.target.value)}
                />
            </label>
            <label>
                Start Date:
                <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                />
            </label>
            <label>
                End Date:
                <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                />
            </label>
            <label>
                Priority:
                <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value="">Select Priority</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </label>
            <button onClick={handleFilter}>Filter</button>
        </div>
    );
};

export default Filter;
