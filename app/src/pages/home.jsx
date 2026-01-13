import React from 'react';
import { useState } from 'react';
import Button from '../components/button.jsx';
import DisplayBox from '../components/displayBox.jsx';
import TextBox from '../components/textBox.jsx';
import { generateQuestion } from '../../utils/questionHelpers.js';
import { fetchAIResponse } from '../api/ai.js';

function Home() {
    const [count, setCount] = useState(0);
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [response, setResponse] = useState("");

    const handleGenerateQuestion = () => {
        const newQuestion = generateQuestion();
        setQuestion(newQuestion);
    }

    const handleAIResponse = async () => {
        const promptBody = {question: question, answer: answer};
        const response = await fetchAIResponse(promptBody);
        setResponse(response);
        console.log("This is response",response);
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
                <Button value="Submit" onClick={() => handleAIResponse()} />
            </div>

            <div>
                <DisplayBox content={response} />
            </div>

            
        </div>
    );
}

export default Home;