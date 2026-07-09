/** @jsxImportSource @emotion/react */
import { Card, IconButton, useTheme } from "@mui/material";
import { css } from "@emotion/react";
import CloseIcon from "@mui/icons-material/Close";
import "./Toast.css";
import { useState, useEffect } from "react";
import Success from "../icons/Success";
import Alert from "../icons/Alert";
import Error from "../icons/Error";

function Toast({ children, type, dur = 5, removeFunc }) {
  const theme = useTheme();
  var color = theme.palette.success.main;
  if (type === "success") {
    color = theme.palette.success.main;
  } else if (type === "error") {
    color = theme.palette.error.main;
  } else if (type === "alert") {
    color = theme.palette.info.main;
  }
  const cardStyle = css`
    width: 400px;
    padding: 12px;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: 8px;
    overflow: hidden;
    position: relative;
    ${dur > 0
      ? `
        &::after {
          content: "";
          position: absolute;
          background-color: ${color};
          width: 100%;
          height: 3px;
          bottom: 0;
          left: 0;
          animation: progress ${dur}s linear forwards;
        }
      `
      : ""}
  `;
  const [isClosed, setClosed] = useState(false);
  const [isRemoved, setRmoved] = useState(false);

  useEffect(() => {
    if (dur > 0) {
      setTimeout(() => {
        setClosed(true);
        setTimeout(() => {
          setRmoved(true);
          removeFunc();
        }, 550);
      }, dur * 1000);
    }
  }, [dur,removeFunc]);

  if (isRemoved) {
    return null;
  }
  var icons = <Success />;
  if (type === "success") {
    icons = <Success />;
  } else if (type === "alert") {
    icons = <Alert />;
  } else if (type === "error") {
    icons = <Error />;
  }
  return (
    <Card css={cardStyle} className={isClosed ? "hide" : "show"}>
      {icons}
      <p style={{ margin: 0, flex: 1 }}>{children}</p>
      <IconButton
        size="small"
        onClick={() => {
          setClosed(true);
          setTimeout(() => {
            setRmoved(true);
            removeFunc();
          }, 550);
        }}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </Card>
  );
}
export default Toast;
