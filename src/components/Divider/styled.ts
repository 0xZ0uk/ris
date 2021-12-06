import styled from "@emotion/styled";

export const DividerLine = styled("div")({
    height: 1,
    width: '100%',
    backgroundColor: "#fff"
})

export const StarContainer = styled("div")({
    position: "relative",
    top: -33,
})

export const Star = styled("img")({
    backgroundColor: "#000",
    border: '10px solid #000',
    boxSizing: 'border-box',
    width: 60,
    margin: '0 40px',
    pointerEvents: "none"
});