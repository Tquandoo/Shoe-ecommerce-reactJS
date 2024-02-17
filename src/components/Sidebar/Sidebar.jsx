import React from "react";
import Category from './Category';
import Price from './Price';
import Colors from "./Colors";
import { FaCartPlus } from "react-icons/fa";
function Sidebar() {
    return (
        <div className="d-flex flex-column border-end px-1 me-1 h-90">
            <div className="accordion accordion-flush">
                <Category />
                <Price />
                <Colors />
            </div>
        </div>
    )
}

export default Sidebar;