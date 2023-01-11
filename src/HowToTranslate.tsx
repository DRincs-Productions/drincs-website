import { Card, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

function HowToTranslate() {
    const [content, setContent] = useState("");

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/wiki/DonRP/AmityPark/Home.md")
            .then((res) => res.text())
            .then((text) => setContent(text));
    }, []);

    return (
        <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            marginTop={5}
        >
            <Card elevation={24}
                sx={{
                    maxWidth: 1000,
                    padding: 5,
                }}>
                <ReactMarkdown
                    children={content}
                    transformImageUri={(src: string, alt: string, title: string | null) => {
                        return `${src} =x20`
                    }}
                />
            </Card>
        </Grid>
    );
};

export default HowToTranslate;