import { Box, Stack, Typography, useTheme } from "@mui/material";
import StatusBar2 from "../StatusBar2/StatusBar2";

const title_list = [
    { text: "Co", color: "primary", id: 1 },
    { text: "la", color: "textPrimary", id: 2 },
    { text: "py", color: "primary", id: 3 },
    { text: "Yau", color: "textPrimary", id: 4 },
];

function Title() {
    const theme = useTheme();

    const getColorValue = (colorKey) => {
        if (colorKey === "primary") {
            return theme.palette.primary.main;
        }
        if (colorKey === "textPrimary") {
            return theme.palette.text.primary;
        }
        return colorKey;
    };

    return (
        <Stack
            spacing={2}
            sx={{
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Stack direction="row">
                {title_list.map((item) => (
                    <Typography
                        variant="h1"
                        color={item.color}
                        key={item.id}
                        sx={{
                            fontWeight: "bold",
                            fontSize: "6rem",
                            letterSpacing: 6,
                            textShadow: `0 0 10px ${item.color === "textPrimary" ? null : getColorValue(item.color)}`,
                        }}
                    >
                        {item.text}
                    </Typography>
                ))}
            </Stack>
            <Box sx={{display: "flex", alignItems: "flex-end"}}>
              <Typography variant="h6" sx={{opacity: 0.3}}>复制！粘贴！</Typography>
                <StatusBar2 />
            </Box>
        </Stack>
    );
}

export default Title;
