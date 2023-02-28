import { Button, Card, CardActions, CardContent, CardHeader, Rating, Typography, useTheme } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';

type IDRSupportCardProps = {
    stars: number;
    title: string;
    month_price: number;
}

function DRSupportCard(props: IDRSupportCardProps) {
    const theme = useTheme();
    const { stars, title, month_price } = props;

    try {
        return (
            <Card sx={{ minWidth: 275 }}>
                <CardHeader
                    title={title}
                    subheader={
                        <Rating
                            name="read-only"
                            value={stars}
                            readOnly
                            sx={{
                                marginTop: 1,
                                marginLeft: 1,
                            }}
                        />
                    }
                />
                <CardContent>

                    <Grid2
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        spacing={1}
                    >
                        <Grid2
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                        >
                            <Typography variant="h4" >
                                €{month_price}
                            </Typography>
                        </Grid2>
                        <Grid2>
                            <Typography color="text.secondary">
                                / month
                            </Typography>
                        </Grid2>
                    </Grid2>
                    <Typography variant="body2">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        );
    } catch (error) {
        console.error(error)
        return <div style={{ color: theme.palette.error.main }}>DRSupportCard error</div>
    }
}

export default DRSupportCard;