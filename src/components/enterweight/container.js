import React from "react";
import Main from "./main";
import Aside from "../wrapper/aside";


function Container() {
    return(
        <div id="container">
            <Main />
            <Aside />
        </div>
    );
};

export default Container;