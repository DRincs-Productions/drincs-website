import { Avatar, AvatarGroup, Card, CardActionArea, CardHeader, CardMedia, CircularProgress, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { DataGrid } from '@mui/x-data-grid';
import * as React from 'react';
import ReactCountryFlag from 'react-country-flag';

const columns = [
    {
        field: 'fleg',
        headerName: 'Lingua',
        width: 150,
        renderCell: (params) => (
            <strong>
                <ReactCountryFlag
                    countryCode="IT"
                    svg
                    style={{
                        width: '3em',
                        height: '2em',
                        marginRight: 16,
                    }}
                    title="IT"
                />
                Italian
            </strong>
        ),
    },
    {
        field: 'tra',
        headerName: 'Tradotto',
        width: 150,
        renderCell: (params) => (
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                <CircularProgress variant="determinate" value={params.value} />
                <Box
                    sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Typography variant="caption" component="div" color="text.secondary">
                        {`${Math.round(params.value)}%`}
                    </Typography>
                </Box>
            </Box>
        ),
    },
    {
        field: 'pro',
        headerName: 'Approvato',
        width: 150,
        renderCell: (params) => (
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                <CircularProgress variant="determinate" value={params.value} />
                <Box
                    sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Typography variant="caption" component="div" color="text.secondary">
                        {`${Math.round(params.value)}%`}
                    </Typography>
                </Box>
            </Box>
        ),
    },
    {
        field: 'user',
        headerName: 'Utenti',
        width: 150,
        renderCell: (params) => (
            <AvatarGroup max={2}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
            </AvatarGroup>
        ),
    },
    {
        field: 'download',
        headerName: 'Download',
        width: 150,
        renderCell: (params) => (
            <strong>
                v0.7
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    style={{ marginLeft: 16 }}
                >
                    Open
                </Button>
            </strong>
        ),
    },
];

const rows = [
    {
        id: 1,
        download: 1,
        pro: 0.4,
    },
    {
        id: 2,
        download: 1,
        pro: 43,
    },
    {
        id: 3,
        download: 1,
        pro: 65,
    },
];

function DRTranslationGrid(props) {

    return (
        <Card elevation={24} >
            <CardHeader
                title="A Family Venture"
            // subheader="September 14, 2016"
            />
            <CardActionArea sx={{ maxWidth: 900, maxHeight: 900 }}>
                <CardMedia
                    component="img"
                    image="https://crowdin-static.downloads.crowdin.com/images/project-logo/461654/small/dadc51724eb59c149fb565002a2c3882363.jpg"
                    alt="Paella dish"
                />
            </CardActionArea>

            <div style={{ height: 300, width: '100%' }}>
                <DataGrid rows={rows} columns={columns} />
            </div>
        </Card>
    );
}

export default DRTranslationGrid;