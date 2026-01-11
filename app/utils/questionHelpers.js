


export function generateQuestion() {
    const questions = [
    "Tell me about a time you faced a challenge.",
    "How do you handle conflict at work?",
    "Describe a situation where you demonstrated leadership."
  ]
  const randomIndex = Math.floor(Math.random() * questions.length)
  return questions[randomIndex]
}