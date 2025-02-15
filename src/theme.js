import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
        brand: {
            primary: "#2B6CB0",  // Trustworthy blue
            secondary: "#48BB78", // Growth green
            accent: "#6B46C1",    // Creative purple
            neutral: "#EDF2F7"    // Light gray
        }
    },
    fonts: {
        heading: "Inter, sans-serif",
        body: "Inter, sans-serif"
    }
});

export default theme;