import { createUseStyles } from "react-jss";

const useGlobalStyles = createUseStyles({
    "@global": {
        "@import": "url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap')",
        body: {
            fontFamily: "'Inter', sans-serif",
            lineHeight: 1.5,
            height: "100vh",
            width: "100vw"
        },
        "*": {
            margin: 0,
            padding: 0,
            boxSizing: "border-box",
        },
        h1: {
            fontWeight: "normal",
        },
        h2: {
            fontWeight: "normal",
        },
        h3: {
            fontWeight: "normal",
        },
        h4: {
            fontWeight: "normal",
        },
        h5: {
            fontWeight: "normal",
        },
        h6: {
            fontWeight: "normal",
        },
        ul: {
            listStyle: "none",
        },
        ol: {
            listStyle: "none",
        },
        a: {
            textDecoration: "none",
        },
        button: {
            border: "none",
            background: "none",
            padding: 0,
            cursor: "pointer",
        },
        input: {
            border: "none",
            padding: 0,
            fontFamily: "inherit",
        },
        textarea: {
            border: "none",
            padding: 0,
            fontFamily: "inherit",
        },
    },
});

export default useGlobalStyles;
