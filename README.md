# Getting Started with managing state


UI = f(state)

entire UI is a representation of the state of components
React app is fundamentally a UI state over time and currently displaying that state over time. 

UI as a reflection of data changing over time 

Reflection of data using state, event handlers, and JSX


Use a state variable for any data that the component should keep track of ('Remember') over time. This is data that will change at some point. 


When you need state - whenever you want something in the component to be dynamic, create a piece of state related to that 'thing;.

If oyu want to change the way a component looks, or the data it displays, update its state

When building a component, imagine its view as a reflection of state changing over time 


For data that should not trigger component to re-render, dont use state. Use a regular variable instead. 

