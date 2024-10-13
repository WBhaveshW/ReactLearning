import React from 'react';

function Destructuring(props) {

  const users = [
    { id: 1, fullName: 'Alice Johnson', age: 30 },
    { id: 2, fullName: 'Bob Smith', age: 25 },
  ];

  // Iterating and renaming
  users.forEach(({ fullName: name, age: userAge }) => {
    console.log(`User Name: ${name},User Age: ${userAge}`);
  });


  console.log(`After user Data:`);
  const students = [
    { id: 1, fullName: 'Alice Johnson', age: 30 },
    { id: 2, fullName: 'Bob Smith', age: 25 },
  ];

  // Iterating over the whole object
  students.forEach((user) => {
    console.log(`Student Name: ${user.fullName},Student Age: ${user.age}`);
  });


  return (
    <div>

    </div>
  );
}

export default Destructuring;

// StrictMode

// StrictMode re render the element in teo times in development mode but in production mode is doesn't render two times