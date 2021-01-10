import styled from "styled-components";
import React, {useEffect, useRef} from "react";
import {ECharts, EChartOption} from "echarts";
import * as echarts from 'echarts'

const ChartWrapper = styled.div`
overflow: auto;
>div {
height: 35vh;
width: 420%;
}
`
type Props = {
    option: EChartOption
}
const Chart: React.FC<Props> = (props) => {
    console.log('chart')
    const chartWrapperRef = useRef<HTMLDivElement>(null)
    const chartRef = useRef<HTMLDivElement>(null)
    let chart = useRef<ECharts>(null)
    useEffect(() => {
        // @ts-ignore
        chart.current = echarts.init(chartRef.current!)
        chartWrapperRef.current!.scrollLeft = 9999
    }, [])
    useEffect(() => {
        if (!chart) return
        console.log('chart effect')
        // @ts-ignore
        chart.current.setOption(props.option)
    }, [props.option])
    return (
        <ChartWrapper ref={chartWrapperRef}>
            <div ref={chartRef}/>
        </ChartWrapper>
    )
}
export {Chart}