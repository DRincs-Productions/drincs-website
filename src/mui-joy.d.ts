import { PaletteRange } from "@caleffispa/joy-react-components";

// https://mui.com/joy-ui/customization/theme-colors/
declare module '@mui/joy/styles' {
    interface Palette {
        secondary: PaletteRange;
    }
    interface ColorPalettePropOverrides {
        'secondary': true
    }
}
