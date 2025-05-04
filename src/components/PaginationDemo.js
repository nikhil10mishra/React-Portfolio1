import React, { useState } from 'react';

const itemsPerPage = 1;

const PaginationDemo = () => {
  const items = [
    {
      id: 1,
      title: "Daily Expense Tracker (Java + JSON)",
      description: "Add expenses, track paid and unpaid entries, view totals, and delete by ID. Data stored in JSON.",
      image: "/images/expense-tracker.png"
    },
    {
      id: 2,
      title: "Tools I Use",
      description: "React, Node.js, Java, REST APIs, HTML/CSS, Python",
      image: "/images/Tools I Use.png"
    },
    {
      id: 3,
      title: "Full-Stack Developer",
      description: "Building projects in Java, React, Node.js & Python.", 
      image: "/images/developer.jpg"
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="pagination-demo">
      {currentItems.map((item) => (
        <div key={item.id} className="card">
<img src={item.image} alt={item.title} className="project-image" />
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}

      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={items.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className={number === currentPage ? 'active' : ''}>
            <button onClick={() => paginate(number)}>{number}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PaginationDemo;
