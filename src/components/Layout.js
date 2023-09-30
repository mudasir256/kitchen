import React from "react";
import Nav from "./Nav";
import SideNav from "./SideNav";
function Layout(props) {
    return <div>
     <Nav />
<SideNav />
 {props.children}
    </div>
}
export default Layout;