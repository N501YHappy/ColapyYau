import Title from "./components/Title/Title";
import Toast from "./components/Toast/Toast";
import "./App.css";
import { Button, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
let toast_cnt = 0;

function App() {
  const [toasts, setToasts] = useState([]);

  function toast(text, type, dur) {
    const id = toast_cnt++;
    setToasts((prev) => [...prev, { id, text, type, dur }]);
  }
  function toast_copy(content) {
    const max_len = 15;
    const preview = content?.slice(0, max_len);
    const b = content?.length > max_len;

    toast(
      <>
        <Typography component="span" sx={{ marginRight: "10px" }}>
          复制成功！
        </Typography>
        <Typography component="span" sx={{ opacity: 0.3 }}>
          {content ? `${preview}${b ? "..." : ""}` : "什么都没有喵..."}
        </Typography>
      </>,
      "success",
      5,
    );
  }

  async function handleCopyBtnClicked() {
    try {
      var miao_saying = null;
      axios
        .get("http://127.0.0.1:5050/get")
        .then((result) => {
          miao_saying = result.data.message;

          navigator.clipboard.writeText(miao_saying);

          toast_copy(miao_saying);
        })
        .catch((error) => {
          toast(error.message, "error", 5);
        });
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    toast(
      "猫娘保护中心提醒你：禁止复制粘贴喵，支持原创文案喵，保护知识产权喵，争做文明猫娘喵，要从你我做起喵",
      "alert",
      5,
    );
  }, []);
  return (
    <div className="App" style={{ overflow: "hidden", position: "relative" }}>
      <div
        style={{ position: "absolute", right: "10px", top: "10px", zIndex: 99 }}
      >
        <Stack className="toast-box" spacing={1}>
          {toasts.map((t) => (
            <Toast
              key={t.id}
              dur={t.dur}
              type={t.type}
              removeFunc={() =>
                setToasts((prev) => prev.filter((t1) => t1.id !== t.id))
              }
            >
              {t.text}
            </Toast>
          ))}
        </Stack>
      </div>
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
