


export async function fetchAIResponse(promptBody) {
    const res = await fetch("http://localhost:5000/api/ai", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        // FIXME: update openai to prompt to act as a strict examiner grading the answer
        body: JSON.stringify({prompt: `Rate my answer to the question: ${promptBody.question}\nAnswer: ${promptBody.answer}`})
    });

    const data = await res.json();
    return data.response;
}

