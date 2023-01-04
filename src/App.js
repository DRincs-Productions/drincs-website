import GitHubIcon from '@mui/icons-material/GitHub';
import { GlobalStyles, ThemeProvider, createTheme } from '@mui/material';
import About from 'About';
import Download from 'Download';
import News from 'News';
import Report from 'Report';
import Support from 'Support';
import Translations from 'Translations';
import DRNavbar from 'components/DRNavbar';
import SignInSide from 'components/Login';
import SignUp from 'components/SignUp';
import ErrorBoundary from 'errer_check/ErrorBoundary';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

const routes = [
    { title: "about", path: "/", element: <About /> },
    { title: "🗞️news", path: "/news", element: <News /> },
    { title: "⬇️download", path: "/download", element: <Download /> },
    { title: "🌍translations", path: "/translations", element: <Translations /> },
    { title: "🐞bug/request", path: "/report", element: <Report /> },
    { title: "login", path: "/login", element: <SignInSide /> },
    { title: "signup", path: "/signup", element: <SignUp /> },
];
const extern_link = [
    { title: "📖wiki", path: "https://github.com/DonRP/ABFD/wiki" },
    { title: "💬discord", path: "https://discord.gg/HFfeJKR" },
    {
        title: <><GitHubIcon sx={{
            fontSize: "15px",
        }} />discord</>, path: "https://github.com/orgs/DRincs-Productions/projects/1"
    },
];
const supportRoute = { title: "support", path: "/support", element: <Support /> }

const darkTheme = createTheme({
    body: {
        background: "black",
    },
    palette: {
        mode: 'dark',
    },
});

function App() {
    return (
        <ErrorBoundary>
            <ThemeProvider theme={darkTheme}>
                <GlobalStyles styles={{ h1: { color: 'white' }, h2: { color: 'white' }, body: { backgroundColor: '#6c4b73', } }} />

                <BrowserRouter>
                    <DRNavbar pages={routes} supportPage={supportRoute} extern_link={extern_link} injectFirst />
                    <Routes>
                        {(routes).map((route) => (
                            <Route key={route.title} path={route.path} element={route.element} />
                        ))}
                        <Route key={supportRoute.title} path={supportRoute.path} element={supportRoute.element} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </ErrorBoundary>
    );
}
export default App;
