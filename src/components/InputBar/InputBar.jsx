import {
    Button,
    Card,
    CardContent,
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
    function handleCopyBtnClicked() {
        let saying = InputText;
        if (saying === ""){
            toast("什么都没有啊喵", "error", 5);
        }else{
            navigator.clipboard.writeText(saying);
            toast_copy(saying);
        }
    }
    async function updateTextField() {
        let result = await getRandom();
        if (result[0]) {
            setInputText(result[1]);
        } else {
            toast(result[1], "error", 5);
        }
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
                            InputLabelProps={{
                                shrink: true, // 强制 label 始终处于浮动（收缩）状态
                            }}
                        />
                    </Grid>
                    <Grid
                        size={3}
                        sx={{
                            display: "flex",
                            alignItems: "flex-end",
                            justifyContent: "center",
                        }}
                    >
                        <Stack direction="row" spacing={1}>
                            <Button
                                size="large"
                                variant="contained"
                                color="primary"
                                onClick={handleCopyBtnClicked}
                            >
                                复制
                            </Button>
                            <Button
                                size="large"
                                variant="contained"
                                color="primary"
                            >
                                上传
                            </Button>
                            <IconButton size="large" onClick={updateTextField}>
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
