import React, { useState } from "react";
import { Grid, Paper, TextField, Button, CircularProgress, Box, Typography } from "@mui/material";
import config from "../../config.json"

const api = config.hande_tts

const TtsForm = () => {
    const [inputText, setInputText] = useState("");
    const [processedText, setProcessedText] = useState("");
    const [audioDataURL, setAudioDataURL] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleTextSubmit = (str) => () => {
        const text = str.trim()
        if (!text) return
        setIsLoading(true)
        setProcessedText("");
        setAudioDataURL("");

        fetch(api, {
            method: "POST",
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${localStorage.getItem('token')}` },
            body: JSON.stringify({ text }),
        })
            .then(res => res.json())
            .then(({ data }) => {
                setIsLoading(false)
                setProcessedText(data.diac_text);
                setAudioDataURL(`data:audio/wav;base64,${data.audio_base64}`);
            })
            .catch(e => {
                setIsLoading(false)
                setProcessedText("");
                setAudioDataURL("");
                console.log({ e });
            })
    };

    const onKeyDown = (e) => {
        if (e.keyCode !== 13) return
        handleTextSubmit(inputText)
    }

    return (
        <Paper style={{ padding: 16, margin: 64 }}>
            <Grid container spacing={1} justify="center" alignItems="center" >
                <Grid item xs={12} >
                    <TextField
                        label="Enter a sentence"
                        margin="normal"
                        fullWidth
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        onKeyDown={onKeyDown}
                    />
                </Grid>
                <Grid item xs={12} display="flex">
                    <Button variant="contained" color="primary" onClick={handleTextSubmit(inputText)} disabled={isLoading}>
                        Submit
                    </Button>
                    {isLoading && <CircularProgress />}
                </Grid>
                <Grid item xs={12} justify="center" alignItems="center" display='flex'>
                    {processedText && (<Grid xs={8} style={{ marginTop: 16 }} justify="center" alignItems="center">
                        <Paper style={{ padding: 32, marginTop: 16 }}>
                            <Typography component="div">
                                <Box sx={{ fontWeight: 'bold', fontSize: 'h6.fontSize' }}>{processedText}</Box>
                            </Typography>
                        </Paper>
                    </Grid>)}
                    <Grid xs={1} ></Grid>
                    {audioDataURL && (<Grid xs={3} style={{ marginTop: 16 }}>
                        <Paper style={{ padding: 16, marginTop: 16 }}>
                            <audio controls>
                                <source src={audioDataURL} type="audio/wav" />
                            </audio>
                        </Paper>
                    </Grid>)}
                </Grid>
            </Grid>
        </Paper >
    );
};

export default TtsForm;
