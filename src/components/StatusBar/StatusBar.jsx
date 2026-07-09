import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Stack,
    Typography,
} from "@mui/material";
import Connected from "../icons/Connected";
import Disconnected from "../icons/Disconnected";
import { useEffect, useState } from "react";
import { getServerStatus } from "../../utils/getStatus";
function StatusBar() {
    let [isConnected, setConnected] = useState(false);
    useEffect(() => {
        const fetchStatus = async () => {
            const [success, result] = await getServerStatus();
            if (success && result === "OK") {
                setConnected(true);
            } else {
                setConnected(false);
            }
        };
        fetchStatus();
    }, []);
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    {isConnected ? <Connected /> : <Disconnected />}
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography variant="body2" sx={{ opacity: 0.6 }}>
                            当前状态
                        </Typography>
                        <Typography variant="h6" component="p">
                            {isConnected ? "成功连接后端服务器" : "洗大锅！"}
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
}
export default StatusBar;
