import styled from "styled-components";
import {Link} from "react-router-dom";
import React from "react";

require('icons/tag.svg')
require('icons/money.svg')
require('icons/chart.svg')
const NavWrapper = styled.nav`
box-shadow: 0 0 3px rgba(0,0,0,0.25);
    > ul {
      display: flex;
      justify-content: space-around;
      > li {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 5px 0;
          > .icon {
            width: 24px;
            height: 24px;
          } 
      }
    }
`

function Nav() {
    return <NavWrapper>
        <ul>
            <li>
                <svg className="icon">
                    <use xlinkHref="#tag"/>
                </svg>
                <Link to="/tags">标签</Link>
            </li>
            <li>
                <svg className="icon">
                    <use xlinkHref="#money"/>
                </svg>
                <Link to="/money">记账</Link>
            </li>
            <li>
                <svg className="icon">
                    <use xlinkHref="#chart"/>
                </svg>
                <Link to="/statistics">统计</Link>
            </li>
        </ul>
    </NavWrapper>
}

export default Nav