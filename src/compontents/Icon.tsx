import React from "react";

require('icons/tag.svg')
require('icons/money.svg')
require('icons/chart.svg')
require('icons/left.svg')
require('icons/right.svg')
type Props = {
    name?: string
}

const Icon = (props: Props) => {
    return (
        <svg className="icon">
            {props.name && <use xlinkHref={'#' + props.name}/>}
        </svg>
    )
}
export default Icon