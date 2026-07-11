import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    IconButton,
    Typography,
} from "@mui/material";
import Connected from "../icons/Connected";
import Disconnected from "../icons/Disconnected";
import Loading from "../icons/Loading";
import { useEffect, useState } from "react";
import { getServerStatus } from "../../utils/getStatus";
import useToast from "../../utils/makeToast";
import StatusBar2 from "../StatusBar2/StatusBar2";
function StatusBar({ toast, isConnected, setConnected }) {
    const fetchStatus = async () => {
        setConnected(null);
        const [success, result] = await getServerStatus();
        if (success && result === "OK") {
            setConnected(true);
        } else {
            setConnected(false);
        }
    };
    useEffect(() => {
        fetchStatus();
    }, []);
    useEffect(() => {
        if (isConnected == null) {
            return;
        }
        if (isConnected) {
            toast("成功连接服务器", "success", 5);
        } else {
            toast("连接服务器失败", "error", 5);
        }
    }, [isConnected]);
    return (
        <div
            style={{
                position: "absolute",
                bottom: "10px",
                left: "10px",
                display: "flex",
            }}
        >
            <Card
                variant="outlined"
                sx={{
                    minWidth: 275,
                    boxShadow: "2px 2px 2px 2px #00000030",
                    borderColor: "azure",
                    borderWidth: "2px",
                }}
            >
                <CardContent>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <IconButton onClick={fetchStatus}>
                            {isConnected === null ? (
                                <Loading />
                            ) : isConnected ? (
                                <Connected />
                            ) : (
                                <Disconnected />
                            )}
                        </IconButton>
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                            <Typography variant="p" sx={{ opacity: 0.6 }}>
                                当前状态
                            </Typography>
                            <Typography variant="h4" sx={{ fontSize: "2.0em" }}>
                                {isConnected === null ? (
                                    "正在前往卡丘世界"
                                ) : isConnected ? (
                                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                                        <Typography variant="p">
                                            成功连接至服务器
                                        </Typography>
                                        <StatusBar2 />
                                    </Box>
                                ) : (
                                    "似了喵！"
                                )}
                            </Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </div>
    );
}
export default StatusBar;
