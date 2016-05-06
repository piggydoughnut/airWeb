import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as statsActions from "../actions/stats.actions";
var rd3 = require('react-d3');
var BarChart = rd3.BarChart;

class StatsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            cities: null,
            messages
        };
        this.props.getStatsCountries();
        this.props.getStatsCities();
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.stats);
        if (nextProps.stats !== undefined && nextProps.stats.countries !== undefined) {
            this.setState({data: [nextProps.stats.countries]});
        }
        if (nextProps.stats !== undefined && nextProps.stats.cities !== undefined) {
            this.setState({cities: [nextProps.stats.cities]});
        }
    }
    render() {
        var countries = null;
        var cities = null;
        if (this.state.data === null || this.state.data == undefined) {
            countries = <h3>Loading...</h3>;
        } else {
            countries = <BarChart
                data={this.state.data}
                width={900}
                height={300}
                fill={'#3182bd'}
                title='Top 10 messaging countries'
                yAxisLabel='Messages'
                xAxisLabel='Country'
            />
        }
        if (this.state.cities === null || this.state.cities == undefined) {
            cities = <h3>Loading...</h3>;
        } else {
            cities = <BarChart
                data={this.state.cities}
                width={900}
                height={300}
                fill={'#3182bd'}
                title='Top 10 messaging cities'
                yAxisLabel='Messages'
                xAxisLabel='Cities'
            />
        }
        return (
            <div>
                {countries}
                {cities}
            </div>
        );
    }
}


const mapStateToProps = (store) => {
    return {
        stats: store.stats
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getStatsCountries: bindActionCreators(statsActions.getStatsCountries, dispatch),
        getStatsCities: bindActionCreators(statsActions.getStatsCities, dispatch)
    };
};

StatsContainer = connect(mapStateToProps, mapDispatchToProps)(StatsContainer);

module.exports = StatsContainer;
