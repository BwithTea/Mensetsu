import React from 'react';
import { useState } from 'react';
import Button from '../components/button.jsx';
import TextBox from '../components/textBox.jsx';

function Home() {
    const [count, setCount] = useState(0);
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    return (
        <div>
            <h2>Generate a question</h2>

            <Button value="Query" onClick={() => setCount(count + 1)} />
            <TextBox value={question} onChange={(e) => setQuestion(e.target.value)}/>

            <Button value="Submit" onClick={() => setCount(count + 1)} />
            <TextBox value={answer} onChange={(e) => setAnswer(e.target.value)}/>
        </div>
    );
}

export default Home;