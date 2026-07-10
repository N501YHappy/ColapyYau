import { useState } from "react";
import { Typography } from "@mui/material";

let toast_cnt = 0;

export default function useToast() {
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
                    {content
                        ? `${preview}${b ? "..." : ""}`
                        : "什么都没有喵..."}
                </Typography>
            </>,
            "success",
            5,
        );
    }

    function removeToast(id) {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    }

    return { toasts, toast, toast_copy, removeToast };
}
