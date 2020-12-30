import React from "react";

const Footer = () => ( <
    footer >
    Created by < span id = "parth" > Parth < /span> <
    br / >
    <
    span >
    <
    i className = "fab fa-github"
    onClick = {
        () =>
        window.open("https://github.com/pycoder2000", "_blank")
    } >
    <
    /i>{" "} <
    i className = "fab fa-hackerrank"
    onClick = {
        () =>
        window.open("#", "_blank")
    } >
    <
    /i>{" "} <
    i className = "fab fa-linkedin"
    onClick = {
        () =>
        window.open(
            "#",
            "_blank"
        )
    } >
    <
    /i>{" "} <
    i className = "fab fa-stack-overflow"
    onClick = {
        () =>
        window.open(
            "#",
            "_blank"
        )
    } >
    <
    /i>{" "} <
    i className = "fab fa-twitter"
    onClick = {
        () =>
        window.open("#", "_blank")
    } >
    <
    /i> < /
    span > <
    /footer>
);

export default Footer;