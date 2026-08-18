import React, { useState } from 'react'; 
function CounterButton() { 
// Declare a state variable named 'count' initialized to 0 
const [count, setCount] = useState(0); 
 
// Function to handle increment 
const handleIncrement = () => { 
setCount(count + 1); 
}; 
 
 
return ( 
<div style={{ textAlign: 'center', marginTop: '50px' }}> 
<h2>React Counter using Functional Component</h2> 
<p>Current Count: {count}</p> 
<button onClick={handleIncrement}>Increment</button>
</div>
); 
} 
export default CounterButton; 