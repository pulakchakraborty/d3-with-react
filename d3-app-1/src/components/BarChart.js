import React, { Component } from 'react';
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
import { select } from 'd3-selection';

class BarChart extends Component {
    componentDidMount() {
        this.createBarChart();
    }

    componentDidUpdate() {
        this.createBarChart();
    }

    createBarChart = () => {
        const dataMax = max(this.props.data)
        const yScale = scaleLinear()
            .domain([0, dataMax])
            .range([0, this.props.size[1]])

        select(this.refs.barDiv)
            .selectAll('rect')
            .data(this.props.data)
            .enter()
            .append('rect')

        select(this.refs.barDiv)
            .selectAll('rect')
            .data(this.props.data)
            .exit()
            .remove()

        select(this.refs.barDiv)
            .selectAll('rect')
            .data(this.props.data)
            .style('fill', '#fe9922')
            .attr('x', (d,i) => i * 25)
            .attr('y', d => this.props.size[1] - yScale(d))
            .attr('height', d => yScale(d))
            .attr('width', 25)
    }

    render() {
        return(
            <div>
                <svg ref="barDiv" width={500} height={500}></svg>
            </div>
        );
    }
}

export default BarChart
