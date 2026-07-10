import Title from "./components/Title/Title";
import Toast from "./components/Toast/Toast";
import "./App.css";
import { Button, Stack } from "@mui/material";
import { useEffect } from "react";
import { getRandom } from "./utils/getData";
import StatusBar from "./components/StatusBar/StatusBar";
import useToast from "./utils/makeToast";

function App() {
    const { toasts, toast, toast_copy, removeToast } = useToast();

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
            5,
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
            <header className="App-header">
                <Stack spacing={3}>
                    <Title />
                    <Button variant="contained" onClick={handleCopyBtnClicked}>
                        Copy one
                    </Button>
                </Stack>
            </header>
            <div
                style={{
                    position: "absolute",
                    bottom: "10px",
                    left: "10px",
                    display: "flex",
                }}
            >
                <StatusBar toast={toast} />
            </div>
        </div>
    );
}

export default App;
