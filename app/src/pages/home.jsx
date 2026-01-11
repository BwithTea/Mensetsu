import React from 'react';
import { useState } from 'react';
import Button from '../components/button.jsx';
import DisplayBox from '../components/displayBox.jsx';
import TextBox from '../components/textBox.jsx';
import { generateQuestion } from '../../utils/questionHelpers.js';

function Home() {
    const [count, setCount] = useState(0);
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    const handleGenerateQuestion = () => {
        const newQuestion = generateQuestion();
        setQuestion(newQuestion);
    }

    return (
        <div>

            <div>
                <h3>Generate a question</h3>
            </div>

            <div>
                <DisplayBox content={question} />
                <Button value="Query" onClick={() => handleGenerateQuestion()} />
            </div>
            <div>
                <h3>Type your response</h3>
            </div>

            <div>
                <TextBox value={answer} onChange={(e) => setAnswer(e.target.value)}/>
                <Button value="Submit" onClick={() => setCount(count + 1)} />
            </div>

            
        </div>
    );
}

export default Home;