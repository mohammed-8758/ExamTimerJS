import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function TimeSel(props) {
    const [searchParams] = useSearchParams();
    const questionNum = searchParams.get("questions");
    const [timeCount, setTimeCount] = useState(0);
    const navigate = useNavigate();

    return (
    <Box
        className='time-sel'
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
        onSubmit={(event) => {
            event.preventDefault();
            props.onSubmit(timeCount);
            navigate(`/timer?questions=${questionNum}&time=${timeCount}`);
        }}
    >
        <TextField 
        id="outlined-basic"
        label="Exam Length (minutes)"
        variant="outlined" 
        onChange={(event) => setTimeCount(event.target.value)}
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