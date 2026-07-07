import { Stack, Typography, useTheme } from "@mui/material";

const title_list = [
  { text: "Co", color: "primary" },
  { text: "la", color: "textPrimary" },
  { text: "py", color: "primary" },
  { text: "Yau", color: "textPrimary" },
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
            sx={{
              fontWeight: "bold",
              fontSize: "9rem",
              letterSpacing: 6,
              textShadow: `0 0 10px ${item.color === "textPrimary" ? null : getColorValue(item.color)}`,
            }}
          >
            {item.text}
          </Typography>
        ))}
      </Stack>
      <Typography variant="h4">复制！粘贴！</Typography>
    </Stack>
  );
}

export default Title;
