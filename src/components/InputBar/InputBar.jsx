import {
    Box,
    Button,
    Card,
    CardContent,
    Chip,
    Grid,
    IconButton,
    Stack,
    TextField,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

import { getRandom } from "../../utils/getData";
import { useState } from "react";
import { Cottage } from "@mui/icons-material";
function InputBar({ toast, toast_copy, isConnected, setConnected }) {
    let [InputText, setInputText] = useState("");

    let [Resp_status, setResp_status] = useState({ not_null: false });
    function handleCopyBtnClicked() {
        let saying = InputText;
        if (saying === "") {
            toast("什么都没有啊喵", "error", 5);
        } else {
            navigator.clipboard.writeText(saying);
            toast_copy(saying);
        }
    }
    async function updateTextField() {
        let [success, result] = await getRandom();
        if (!success) {
            toast(result.message, "error", 5);
            return;
        }
        setInputText(result.message);
        updateStatus(result.message);
    }
    function onChange(event) {
        let content = event.target.value;
        setInputText(content);
        updateStatus(content);
    }
    function updateStatus(content) {
        setInputText(content);
        let miao_cnt = 0;
        let len = content.length;
        if (len === 0) {
            setResp_status({ not_null: false, length: len, miao_cnt: miao_cnt });
            return;
        }
        for (const char of content) {
            if (char === "喵") miao_cnt++;
        }
        setResp_status({ not_null: true, length: len, miao_cnt: miao_cnt });
    }
    return (
        <Card>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid size={9}>
                        <TextField
                            label="喵言喵语"
                            multiline
                            value={InputText}
                            fullWidth
                            rows={5}
                            onChange={onChange}
                        />
                    </Grid>
                    <Grid
                        size={3}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                        }}
                    >
                        {Resp_status["not_null"] ? (
                            <Box
                                sx={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: "5px",
                                }}
                            >
                                <Chip
                                    label={"长度: " + Resp_status["length"]}
                                    color="red"
                                />
                                <Chip
                                    label={
                                        "含喵量: " +
                                        Math.floor(
                                            (Resp_status["miao_cnt"] /
                                                Resp_status["length"]) *
                                                100 *
                                                100,
                                        ) /
                                            100 +
                                        "%"
                                    }
                                />
                            </Box>
                        ) : (
                            <div />
                        )}

                        <Stack
                            direction="row"
                            spacing={1}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleCopyBtnClicked}
                            >
                                复制
                            </Button>
                            <Button variant="contained" color="primary">
                                上传
                            </Button>
                            <IconButton onClick={updateTextField}>
                                <RefreshIcon />
                            </IconButton>
                        </Stack>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}
export default InputBar;
