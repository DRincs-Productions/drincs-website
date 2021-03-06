import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import { Grid } from "@mui/material";
import DRDownloadGrid from "components/DRDownloadGrid";

const rowsABFD = [
    {
        id: 0, device: {
            name: 'Windows/Linux', element: <>
                <Grid
                    container
                    direction={{ xs: "column", md: "row" }}
                    justifyContent="center"
                    alignItems="center"
                    spacing={{ xs: 0, md: 4 }}
                >
                    <Grid item  >
                        <DesktopWindowsIcon sx={{ fontSize: 40, display: { xs: 'flex', md: 'none' } }} />
                        <DesktopWindowsIcon sx={{ fontSize: 30, display: { xs: 'none', md: 'flex' } }} />
                    </Grid>
                    <Grid item sx={{ fontSize: 15, display: { xs: 'none', md: 'flex' } }} >
                        Windows/Linux
                    </Grid>
                </Grid>
            </>
        }, version: 'v0.1.1', download: {
            mega: "https://mega.nz/file/zwtkUY4L#TTS6XJ7y4trltyaU1qRVeYZT7g3cfhKu0_avGKkczCQ"
        }
    },
    {
        id: 1, device: {
            name: 'Windows/Linux QHD', element: <>
                <Grid
                    container
                    direction={{ xs: "column", md: "row" }}
                    justifyContent="center"
                    alignItems="center"
                    spacing={{ xs: 0, md: 4 }}
                >
                    <Grid item  >
                        <DesktopWindowsIcon sx={{ fontSize: 40, display: { xs: 'flex', md: 'none' } }} />
                        <DesktopWindowsIcon sx={{ fontSize: 30, display: { xs: 'none', md: 'flex' } }} />
                    </Grid>
                    <Grid item sx={{ fontSize: 15, display: { xs: 'none', md: 'flex' } }} >
                        Windows/Linux QHD
                    </Grid>
                    <Grid item sx={{ fontSize: 10, display: { xs: 'flex', md: 'none' } }} >
                        QHD
                    </Grid>
                </Grid>
            </>
        }, version: 'v0.1.1', download: {
            discord: true,
        }
    },
    {
        id: 2, device: {
            name: 'MacOS', element: <>
                <Grid
                    container
                    direction={{ xs: "column", md: "row" }}
                    justifyContent="center"
                    alignItems="center"
                    spacing={{ xs: 0, md: 4 }}
                >
                    <Grid item  >
                        <AppleIcon sx={{ fontSize: 40, display: { xs: 'flex', md: 'none' } }} />
                        <AppleIcon sx={{ fontSize: 30, display: { xs: 'none', md: 'flex' } }} />
                    </Grid>
                    <Grid item sx={{ fontSize: 15, display: { xs: 'none', md: 'flex' } }} >
                        MacOS
                    </Grid>
                    <Grid item sx={{ fontSize: 10, display: { xs: 'flex', md: 'none' } }} >
                        MacOS
                    </Grid>
                </Grid>
            </>
        }, version: 'v0.1.1', download: {
            mega: "https://mega.nz/file/6k0QTYAC#SpxeDO3tuoP_PjhRv08qIgx1FyQfNGPzmUq2ag09Dhg"
        }
    },
    {
        id: 3, device: {
            name: 'Android', element: <>
                <Grid
                    container
                    direction={{ xs: "column", md: "row" }}
                    justifyContent="center"
                    alignItems="center"
                    spacing={{ xs: 0, md: 4 }}
                >
                    <Grid item  >
                        <AndroidIcon sx={{ fontSize: 40, display: { xs: 'flex', md: 'none' } }} />
                        <AndroidIcon sx={{ fontSize: 30, display: { xs: 'none', md: 'flex' } }} />
                    </Grid>
                    <Grid item sx={{ fontSize: 15, display: { xs: 'none', md: 'flex' } }} >
                        Android
                    </Grid>
                </Grid>
            </>

        }, version: 'v0.1.1', download: {
            mega: "https://mega.nz/file/OkcHVIJa#dOyelMAS49RuBkzmbv2bPBxrxgo4n_wHqQ-63AAbRtY"
        }
    },
];

function Download() {
    return (
        <>
            <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
            >
                <h2>Download</h2>
                <DRDownloadGrid
                    title="A Big Family in Debit"
                    data={rowsABFD}
                    height={411}
                />
            </Grid>
        </>
    );
}

export default Download;
