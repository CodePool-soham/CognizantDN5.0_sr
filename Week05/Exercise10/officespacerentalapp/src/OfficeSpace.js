import React from "react";

function OfficeSpace() {

  const offices = [
    {
      name: "DBS",
      rent: 50000,
      address: "Chennai"
    },
    {
      name: "Tech Park",
      rent: 75000,
      address: "Bangalore"
    },
    {
      name: "Cyber Towers",
      rent: 60000,
      address: "Hyderabad"
    }
  ];

  return (
    <div>

      {/* JSX Heading */}
      <h1 style={{ color: "blue" }}>
        Office Space Rental Application
      </h1>


      {/* JSX Image Attribute */}
      <img
        src="https://acegroupindia.com/blog/wp-content/uploads/2025/04/Office-Space-in-Noida-for-Rent-1.jpg"
        alt="Office Space"
        width="300"
      />


      {
        offices.map((office, index) => (

          <div key={index}>

            <h2>{office.name}</h2>

            <p>
              Address: {office.address}
            </p>

            <p>
              Rent:
              <span
                style={{
                  color: office.rent < 60000 ? "red" : "green"
                }}
              >
                {" ₹" + office.rent}
              </span>
            </p>

          </div>

        ))
      }

    </div>
  );
}

export default OfficeSpace;