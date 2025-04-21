import React, { useReducer } from 'react';

// 1. Define the 0 state
const initialState = { count: 0 };

// 2. Create a reducer function
function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return { count: 0 };
        default:
            return state;
    }
}

function UseReducerCounter() {
    // 3. useReducer(reducerFunction, initialState)
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Counter UseReducer Hook: {state.count}</h1>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })} style={{ margin: '0 10px' }}>Decrement</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            <div><h4>
                ✅ Main Differences Between Redux and useReducer
                🔸 Aspect	🔹 Redux	🔹 useReducer <br />
                Library / Built-in	It's a standalone library (redux or @reduxjs/toolkit) you install separately.	It's a React built-in hook. No extra libraries needed. <br />
                Scope	Global state management (across the entire app).	Local component state (works inside one component or passed down). <br />
                Boilerplate	Requires more setup (store, reducers, actions, dispatchers).	Minimal setup—just define a reducer and initial state inside the component. <br />
                Middleware Support	Supports middleware (like Redux Thunk, Redux Saga) for handling async operations.	No built-in middleware; you handle async manually (or with useEffect). <br />
                DevTools	Has awesome Redux DevTools for time-travel debugging and logging.	No built-in dev tools (you can console log, but no time-travel debugging). <br />
                Performance	Optimized for large-scale apps with many shared states.	Best for small/medium state logic, typically local to a component. <br />
                Learning Curve	Steeper (needs understanding of actions, reducers, store, and middleware).	Easier (plain React concept, especially if you already know useState). <br />
                Async Handling	Cleaner with middleware like Redux Thunk/Saga.	You need to handle async logic with useEffect or inside the component. <br />
                Usage Example	Big apps: eCommerce sites, dashboards, social apps.	Small apps: Forms, counters, simple component logic. <br />
                Code Sharing	Global store can share state across any component.	useReducer state lives inside the component, unless passed down via props/context. <br />
                </h4>
                ✅ When to Use What? <br />
                Redux <br />
                👉 You need global state across multiple components (e.g., auth, theme, cart). <br />
                👉 Your app is big and needs centralized state management. <br />
                👉 You want to use middleware and DevTools.
                <br />
                useReducer <br />
                👉 You need local component-level state management, but it's more complex than useState. <br />
                👉 You don't want to set up Redux for simple logic. <br />
                👉 It's ideal for forms, counters, local data, etc.
                <br />
                ✅ Quick Example Difference <br />
                Redux <br />
                You have a cart component, a checkout component, and a summary component all needing the same cart data ➡️ Redux is ideal. <br />
                useReducer <br />
                You have a single form component with complex validation and state ➡️ useReducer is perfect. <br />
                TL;DR <br />
                | Redux = Global state management | useReducer = Local state logic inside components | <br />
                
            </div>
        </div>
    );
}

export default UseReducerCounter;
