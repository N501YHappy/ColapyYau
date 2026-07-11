import Title from "./components/Title/Title";
import Toast from "./components/Toast/Toast";
import "./App.css";
import { Button, Chip, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { getRandom } from "./utils/getData";
import StatusBar from "./components/StatusBar/StatusBar";
import useToast from "./utils/makeToast";

function App() {
    const { toasts, toast, toast_copy, removeToast } = useToast();
    let [isConnected,setConnected] = useState(null);
    async function handleCopyBtnClicked() {
        let result = await getRandom();
        if (result[0]) {
            await navigator.clipboard.writeText(result[1]);
            toast_copy(result[1]);
        } else {
            toast(result[1], "error", 5);
        }
    }
    useEffect(() => {
        toast(
            "猫娘保护中心提醒你：禁止复制粘贴喵，支持原创文案喵，保护知识产权喵，争做文明猫娘喵，要从你我做起喵",
            "alert",
            10,
        );
    }, []);
    return (
        <div
            className="App"
            style={{ overflow: "hidden", position: "relative" }}
        >
            <div
                style={{
                    position: "absolute",
                    right: "10px",
                    top: "10px",
                    zIndex: 99,
                }}
            >
                <Stack className="toast-box" spacing={1}>
                    {toasts.map((t) => (
                        <Toast
                            key={t.id}
                            dur={t.dur}
                            type={t.type}
                            removeFunc={() => removeToast(t.id)}
                        >
                            {t.text}
                        </Toast>
                    ))}
                </Stack>
            </div>
            <header
                className="App-header"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Stack spacing={3}>
                    <Title isConnected = {isConnected}/>
                    <Stack
                        direction="row"
                        spacing={4}
                        sx={{ display: "flex", justifyContent: "center" }}
                    >
                        <Button
                            size="large"
                            variant="contained"
                            color="primary"
                            onClick={handleCopyBtnClicked}
                            disabled={!isConnected}
                        >
                            复制！
                        </Button>

                        <Button
                            size="large"
                            variant="contained"
                            color="grey"
                            onClick={handleCopyBtnClicked}
                            disabled={!isConnected}
                        >
                            上传
                        </Button>
                    </Stack>
                </Stack>
            </header>

            <StatusBar toast={toast} isConnected={isConnected} setConnected={setConnected} />
        </div>
    );
}

export default App;
