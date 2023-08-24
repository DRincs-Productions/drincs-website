import { Link, Typography } from "@mui/joy";

function Copyright() {
    return (
        <Typography
            textColor={"text.secondary"}
        >
            {"Copyright © "}
            <Link
                textColor={"text.secondary"}
                href="https://github.com/DRincs-Productions/drincs-website"
            >
                DRincs WebSite
            </Link>{" "}
            {new Date().getFullYear()}
        </Typography>
    );
}

export default Copyright;