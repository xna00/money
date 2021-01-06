import styled from "styled-components";
import {Link} from "react-router-dom";
import React from "react";

const NavWrapper= styled.nav`
box-shadow: 0 0 3px rgba(0,0,0,0.25);
    > ul {
      display: flex;
      justify-content: space-around;
    }
`

function Nav() {
    return <NavWrapper>
        <ul>
            <li>
                <Link to="/tags">标签</Link>
            </li>
            <li>
                <Link to="/money">记账</Link>
            </li>
            <li>
                <Link to="/statistics">统计</Link>
            </li>
        </ul>
    </NavWrapper>
}

export default Nav