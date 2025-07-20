import { useState } from 'react';
import QuestionSel from '../components/QuestionSel';

export default function Home() {
    const [questionCount, setQuestionCount] = useState(0);
    return (
    
    <div className="Home">
        <h1>Welcome to the Exam Timer!</h1>
        <h2>How many questions will your exam have?</h2>
        <QuestionSel onSubmit={setQuestionCount} />
    </div>
    )
}