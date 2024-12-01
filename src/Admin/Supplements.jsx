// import React, { useState } from "react";

// const Supplements = () => {
//   const [supplement, setSupplement] = useState({
//     name: "",
//     price: "",
//     stock: "",
//   });
//   const [supplements, setSupplements] = useState(
//     JSON.parse(localStorage.getItem("supplements")) || []
//   );

//   const addSupplement = () => {
//     const updatedSupplements = [...supplements, supplement];
//     localStorage.setItem("supplements", JSON.stringify(updatedSupplements));
//     setSupplements(updatedSupplements);
//     setSupplement({ name: "", price: "", stock: "" });
//   };

//   return (
//     <div>
//       <h3>Supplements Store</h3>
//       <input
//         type="text"
//         placeholder="Supplement Name"
//         value={supplement.name}
//         onChange={(e) => setSupplement({ ...supplement, name: e.target.value })}
//       />
//       <input
//         type="number"
//         placeholder="Price"
//         value={supplement.price}
//         onChange={(e) =>
//           setSupplement({ ...supplement, price: e.target.value })
//         }
//       />
//       <input
//         type="number"
//         placeholder="Stock"
//         value={supplement.stock}
//         onChange={(e) =>
//           setSupplement({ ...supplement, stock: e.target.value })
//         }
//       />
//       <button onClick={addSupplement}>Add Supplement</button>

//       <h3>Supplement List</h3>
//       <ul>
//         {supplements.map((supp, index) => (
//           <li key={index}>
//             {supp.name} - ${supp.price} - Stock: {supp.stock}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Supplements;
// src/components/Store/Supplements.js

import React, { useState } from "react";
import "./Supplements.css"; // Import the CSS file

const Supplements = () => {
  const [supplement, setSupplement] = useState({
    name: "",
    price: "",
    stock: "",
  });
  const [supplements, setSupplements] = useState(
    JSON.parse(localStorage.getItem("supplements")) || []
  );

  const addSupplement = () => {
    const updatedSupplements = [...supplements, supplement];
    localStorage.setItem("supplements", JSON.stringify(updatedSupplements));
    setSupplements(updatedSupplements);
    setSupplement({ name: "", price: "", stock: "" });
  };

  const clearSupplements = () => {
    setSupplements([]); // Clear the supplements state
    localStorage.removeItem("supplements"); // Clear localStorage as well
  };

  return (
    <div className="supplements-container">
      <h3 className="supplements-title">Supplements Store</h3>

      {/* Form Inputs */}
      <div className="input-fields-container">
        <input
          type="text"
          className="input-field"
          placeholder="Supplement Name"
          value={supplement.name}
          onChange={(e) =>
            setSupplement({ ...supplement, name: e.target.value })
          }
        />
        <input
          type="number"
          className="input-field"
          placeholder="Price"
          value={supplement.price}
          onChange={(e) =>
            setSupplement({ ...supplement, price: e.target.value })
          }
        />
        <input
          type="number"
          className="input-field"
          placeholder="Stock"
          value={supplement.stock}
          onChange={(e) =>
            setSupplement({ ...supplement, stock: e.target.value })
          }
        />
        <button className="add-button" onClick={addSupplement}>
          Add Supplement
        </button>
      </div>

      {/* Supplement List */}
      <h3 className="supplements-title">Supplement List</h3>
      <ul className="supplement-list">
        {supplements.map((supp, index) => (
          <li key={index} className="supplement-list-item">
            <div className="supplement-details">
              {supp.name} -{" "}
              <span className="supplement-price">${supp.price}</span> -{" "}
              <span className="supplement-stock">Stock: {supp.stock}</span>
            </div>
          </li>
        ))}
      </ul>

      {/* Clear Button */}
      {supplements.length > 0 && (
        <button onClick={clearSupplements} className="clear-button">
          Clear All Supplements
        </button>
      )}
    </div>
  );
};

export default Supplements;
