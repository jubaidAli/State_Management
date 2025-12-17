import react, { useState } from 'react';
import './styles.css';



export default function Calendar() {
    return (
        <div>
            <div>Calendar Component</div>
            <Counter />
        </div>
    );
}


function Counter() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    const date = new Date();
    date.setDate(date.getDate() + count);
    
    function handleClick() {
        setCount(count - 1);
    }
    return (
        <div>
            <div>
                <button onClick={() => setStep(step - 1)}>-</button>
                <span>Step: {step}</span>
                <button onClick={() => setStep(step + 1)}>+</button>
            </div>
            <div>
                <button onClick={() => setCount(count - step)}>-</button>
                <span>Count: {count}</span>
                <button onClick={() => setCount(count + step)}>+</button>
            </div>
            

            
            <p>
                <span>{count === 0 
                    ? 'Today is ' 
                    : count > 0 
                    ? `${count} days from today is ` 
                    : `${Math.abs(count)} days ago was `}
                </span>
                <span>{date.toDateString()}</span>
            </p>
        </div>
    );
}