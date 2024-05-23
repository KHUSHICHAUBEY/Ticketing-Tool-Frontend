import React, { useState, useMemo } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { useTable } from 'react-table';
import 'react-tabs/style/react-tabs.css';
import './Ticket.css';

const Ticket = ({ tickets }) => {
  const [status, setStatus] = useState('Open');

  const columns = useMemo(
    () => [
      {
        Header: 'Title',
        accessor: 'title',
      },
      {
        Header: 'Description',
        accessor: 'description',
      },
      {
        Header: 'Priority',
        accessor: 'priority',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
    ],
    []
  );

  const filterTicketsByStatus = (status) => {
    return tickets.filter(ticket => ticket.status.toLowerCase() === status.toLowerCase());
  };

  const data = useMemo(() => filterTicketsByStatus(status), [status, tickets]);

  const tableInstance = useTable({ columns, data });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

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
          <table {...getTableProps()} className="ticket-table">
            <thead>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map(row => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </TabPanel>

        <TabPanel>
          <h3>Resolved Tickets</h3>
          <table {...getTableProps()} className="ticket-table">
            <thead>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map(row => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </TabPanel>

        <TabPanel>
          <h3>In-Progress Tickets</h3>
          <table {...getTableProps()} className="ticket-table">
            <thead>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map(row => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </TabPanel>

        <TabPanel>
          <h3>Closed Tickets</h3>
          <table {...getTableProps()} className="ticket-table">
            <thead>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map(row => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </TabPanel>

      </Tabs>
    </div>
  );
};

export default Ticket;
