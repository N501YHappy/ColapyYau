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
        if (saying === "") {
            toast("什么都没有啊喵", "error", 5);
        } else {
            navigator.clipboard.writeText(saying);
            toast_copy(saying);
        }
    }
    async function updateTextField() {
        let [success, result] = await getRandom();
        if (success) {
            setInputText(result.message);
        } else {
            toast(result.message, "error", 5);
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
                            onChange={(event) => {
                                setInputText(event.target.value);
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
