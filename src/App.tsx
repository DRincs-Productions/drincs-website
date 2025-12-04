import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import axios from 'axios';
import { SnackbarProvider } from 'notistack';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import './App.css';
import MarkdownPage from './components/MarkdownPage';
import HomeFunctionContext, { HomeFunctionContextModel } from './contexts/HomeFunctionContext';
import { useI18n } from './i18n';
import About from './page/About';
import ConnectionDiscordSteps from './page/Connection/ConnectionDiscordSteps';
import Download from './page/Download';
import MyProfile from './page/MyProfile/MyProfile';
import MyProfileEdit from './page/MyProfile/MyProfileEdit';
import MyProfileEditPassword from './page/MyProfile/MyProfileEditPassword';
import Report from './page/Report';
import Support from './page/Support';
import Translations from './page/Translations';
import Wiki from './page/Wiki';
import { isLoggedIn } from './services/AuthService';
import { geturlwebapi } from './services/BaseRestService';
import { ThemeProvider } from './ThemeProvider';
import { ABFDrepo } from './values/constant';

axios.get(geturlwebapi() + "/discord/awakens").catch((err) => {
})

function App() {
    useI18n()
    const { t } = useTranslation(["translation"]);
    const routes = [
        { title: t("about"), path: "/", element: <About /> },
        { title: "⬇️" + t("download"), path: "/download", element: <Download /> },
        { title: "🌍" + t("translations"), path: "/translations", element: <Translations /> },
        { title: "📖" + t("wiki"), path: "/wiki", element: <Wiki routeLink="wiki" urlRepo={ABFDrepo} /> },
        { title: "🐞" + t("bug/requests"), path: "/report", element: <Report /> },
    ];
    const supportRoute = { title: t("support_us"), path: "/support", element: <Support /> }
    const queryClient = new QueryClient()
    const [isLogged, setIsLogged] = useState<boolean>(false)
    const [updateAccount, setUpdateAccount] = useState<number>(0)
    const updateAccountFunction = (clearAll = false) => {
        setUpdateAccount((value) => {
            return value + 1
        })
        if (clearAll) {
            setTimeout(() => {
                queryClient.clear();
            }, 500);
        }
    }

    useEffect(() => {
        setIsLogged(isLoggedIn())
    }, [updateAccount])

    return (
        <ThemeProvider>
            <BrowserRouter>
                <QueryClientProvider client={queryClient} >
                    <ReactQueryDevtools initialIsOpen={false} />
                    <RecoilRoot>
                        <SnackbarProvider maxSnack={3}>
                            <HomeFunctionContext.Provider value={new HomeFunctionContextModel(updateAccountFunction, isLogged)}>
                                <Routes>
                                    {(routes).map((route) => (
                                        <Route key={route.title} path={route.path} element={route.element} />
                                    ))}
                                    <Route key={supportRoute.title} path={supportRoute.path} element={supportRoute.element} />
                                    <Route key="howtotranslate" path="/howtotranslate" element={<MarkdownPage markdownLink={`https://raw.githubusercontent.com/wiki/${ABFDrepo}/how-to-translate.md`} />} />
                                    <Route key="daz-assert" path="/daz-assert" element={<Wiki routeLink="daz-assert" urlRepo={`DRincs-Productions/daz-assert-ABFD-all-in-one`} />} />
                                    <Route key="discord-connect" path="discord-connect" element={<ConnectionDiscordSteps status="loading" type="connection" />} />
                                    <Route key="discord-login" path="discord-login" element={<ConnectionDiscordSteps status="loading" type="login" />} />
                                    <Route key="discord-connect-error" path="discord-connect-error" element={<ConnectionDiscordSteps status="error" />} />
                                    <Route key="discord-connect-success" path="discord-connect-success" element={<ConnectionDiscordSteps status="success" />} />
                                </Routes>
                                {isLoggedIn() &&
                                    <Routes>
                                        <Route key="profile" path="/profile" element={<MyProfile />} />
                                        <Route key="profile-edit" path="/profile/edit" element={<MyProfileEdit />} />
                                        <Route key="profile-change-password" path="/profile/change-password" element={<MyProfileEditPassword />} />
                                    </Routes>
                                }
                            </HomeFunctionContext.Provider>
                        </SnackbarProvider>
                    </RecoilRoot>
                </QueryClientProvider>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
