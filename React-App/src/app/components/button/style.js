import Color from "color";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    buttonContainer: ({ palette, size }) => ({
        padding: 10,
        color: palette.label,
        backgroundColor: palette.primary,
        fontSize: size,
        borderRadius: 8,
        "&:not(:disabled):hover": {
            backgroundColor: Color(palette.primary).darken(0.2).hex()
        },
        "&:disabled": {
            backgroundColor: Color(palette.primary).darken(0.6).hex(),
            cursor: "not-allowed",
            opacity: 0.6
        }
    })
});

export default useStyles;
