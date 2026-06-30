import { Typography, useTheme } from "@mui/material";
import "./App.css";
const title_list = [
  { text: "Co", color: "primary" },
  { text: "la", color: "textPrimary" },
  { text: "py", color: "primary" },
  { text: "Yao", color: "textPrimary" },
];
function App() {
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
    <div className="App">
      <header className="App-header">
        {title_list.map((item) => (
          <Typography
            variant="h1"
            color={item.color}
            sx={{
              fontWeight: "bold",
              letterSpacing: 6,
              textShadow: `0 0 10px ${item.color === 'textPrimary' ? null : getColorValue(item.color)}`,
            }}
          >
            {item.text}
          </Typography>
        ))}
      </header>
    </div>
  );
}

export default App;
