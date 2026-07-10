import { Chip } from "@mui/material";
import { useEffect, useState } from "react";
import { getTotal } from "../../utils/getData";

function StatusBar2() {
    const [total, setTotal] = useState([]);

    useEffect(() => {
        const fetchTotal = async () => {
            const result = await getTotal();
            setTotal(result);
        };
        fetchTotal();
    }, []);

    if (!total[0]) return null;
    return <Chip label={`共${total[1]}个喵言喵语`} />;
}

export default StatusBar2;
