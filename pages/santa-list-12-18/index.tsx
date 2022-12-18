import React, { useState, useRef } from "react";

const List = () => {
    const [naughtyKids, setNaughtyKids] = useState(['']);
    const [niceKids, setNiceKids] = useState(['']);
  
    // Add the handleSort function here
    const handleSort = (name: string, isNaughty: boolean) => {
      if (isNaughty) {
        setNaughtyKids([...naughtyKids, name]);
      } else {
        setNiceKids([...niceKids, name]);
      }
    };
    // Add a reference to the input field here
    const ref = useRef(null);

    return (
      <div className="container">
        <h1 className="text-2xl font-bold">Santa's Naughty and Nice List</h1>
        {/* Add the input field here */}
        <div className="form">
          <label htmlFor="name">Enter a Child's Name:</label>
          <br />
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            ref={ref}
          />
          {/* Add the buttons here */}
          <br />
          <button onClick={() => handleSort(ref.current.value, true)}>
            Naughty
          </button>
          <button onClick={() => handleSort(ref.current.value, false)}>
            Nice
          </button>
        </div>
        <section className="grid">
          <div className="list">
            <h2>Naughty List</h2>
            <button onClick={() => setNaughtyKids([])}>Reset List</button>
            {/* Add list here */}
            <ul className="">
              {naughtyKids.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="list">
            <h2>Nice List</h2>
            <button onClick={() => setNiceKids([])}>Reset List</button>
            {/* Add list here */}
            <ul>
              {niceKids.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    );
  };
  
  export default List;