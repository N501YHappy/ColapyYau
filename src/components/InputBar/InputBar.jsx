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
function InputBar({ toast, toast_copy, isConnected, setConnected }) {
    let [InputText, setInputText] = useState("");

    let [lastSuccessed, setlastSuccessed] = useState(false);
    let [Resp_status, setResp_status] = useState(null);
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
            setlastSuccessed(false);
            return;
        }
        setInputText(result.message);
        setlastSuccessed(true);
        setResp_status(result);
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
                            onChange={(event) => {
                                setInputText(event.target.value);
                            }}
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
                        {lastSuccessed ? (
                            <Box
                                sx={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: "5px",
                                }}
                            >
                                <Chip
                                    label={"ID: " + Resp_status["id"]}
                                />
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
                                            10 +
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
