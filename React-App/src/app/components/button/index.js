import useStyles from "./style";
import { useAppSettings } from "../../context";
import usePalette from "../../helpers/usePalette";
import { useNavigate } from "react-router-dom";
import hrefRouter from "../../helpers/hrefRouter";

const Button = ({
    disabled,
    label,
    href,
    external,
    size,
    onClick,
    children
}) => {
    const { theme } = useAppSettings();
    const palette = usePalette(theme);
    const classes = useStyles({ palette, size });

    const navigate = useNavigate();

    return (
        <div>
            <button
                disabled={disabled}
                className={classes.buttonContainer}
                onClick={onClick ?? (href ? hrefRouter(href, external, navigate) : undefined)}
            >
                <div>
                    {label || children}
                </div>
            </button>
        </div>
    );
};

export default Button;
