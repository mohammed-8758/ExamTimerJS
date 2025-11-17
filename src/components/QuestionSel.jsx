import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function QuestionSel(props) {
    const [questionCount, setQuestionCount] = useState(0);
    const navigate = useNavigate();

    return (
    <Box
        className='question-sel'
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
        onSubmit={(event) => {
            event.preventDefault();
            props.onSubmit(questionCount);
            navigate(`/setup?questions=${questionCount}`);
        }}
    >
        <TextField 
        id="outlined-basic"
        label="No. of Questions"
        variant="outlined" 
        onChange={(event) => setQuestionCount(event.target.value)}
        />
        <Button
        type="submit"
        className='apply-button'
        id="apply"
        variant="outlined"
        sx={{ height: "7ch" }}
        >
            Next
        </Button>
    </Box>
    );
}