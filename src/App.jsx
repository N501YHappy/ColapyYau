import Title from "./Title";
import "./App.css";
import { Button, Stack } from "@mui/material";
const miaosayings = ["1234", "12344"];
let appeared = {};
function App() {
  async function handleCopyBtnClicked() {
    try {
      let len = miaosayings.length;
      let idx = Math.floor(Math.random() * len);
      let cnt = 1;
      while (appeared[idx]) {
        cnt++;
        idx = Math.floor(Math.random() * len);
        if (cnt >= len) {
          appeared = {};
          break;
        }
      }
      appeared[idx] = true;
      console.log("used " + idx + " " + miaosayings.at(idx));
      await navigator.clipboard.writeText(miaosayings.at(idx));
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <Stack spacing={3}>
          <Title />
          <Button variant="contained" onClick={handleCopyBtnClicked}>
            Copy one
          </Button>
        </Stack>
      </header>
    </div>
  );
}

export default App;
