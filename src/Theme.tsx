import { createPaletteRange, createTheme, createThemeMaterial, CssVarsProvider } from '@drincs/react-components';

const primaryColor = "#004c97"
const secondaryColor = "#ff6a00"

// https://mui.com/joy-ui/integrations/material-ui/
export function ThemeProvider({ children }: { children: React.ReactNode; }) {
    const theme = createTheme({
        fontFamily: {
            display: 'Montserrat', // applies to `h1`–`h4`
            body: 'Montserrat', // applies to `title-*` and `body-*`
        },
        colorSchemes: {
            light: {
                palette: {
                    primary: createPaletteRange("primary", primaryColor, "light", "#ffffff"),
                    secondary: createPaletteRange("secondary", secondaryColor, "light", "#000000"),
                },
            },
            dark: {
                palette: {
                    primary: createPaletteRange("primary", primaryColor, "dark", "#ffffff"),
                    secondary: createPaletteRange("secondary", secondaryColor, "dark", "#000000"),
                },
            },
        },
    })

    const themeMaterial = createThemeMaterial({
        typography: {
            fontFamily: [
                'Montserrat',
            ].join(','),
        },
        colorSchemes: {
            light: {
                palette: {
                    primary: {
                        main: primaryColor,
                    },
                    secondary: {
                        main: secondaryColor,
                    }
                },
            },
            dark: {
                palette: {
                    primary: {
                        main: primaryColor,
                    },
                    secondary: {
                        main: secondaryColor,
                    }
                },
            },
        },
    })

    return (
        <CssVarsProvider
            themeJoy={theme}
            themeMaterial={themeMaterial}
            defaultMode="light"
        >
            {children}
        </CssVarsProvider>
    );
}
