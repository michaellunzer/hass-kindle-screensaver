import React from "react";
import moment from "moment";
import BatteryIndicator from "./components/battery-indicator";
import HistoricGraph from "./components/historic-graph";
import Temperature from "./components/temperature";
// import Darksky from "./components/darksky";
import Skycons, { SkyconsType } from "react-skycons";


class Cover extends React.Component {
    render() {
        const {
            config,
            battery,
            temperature,
            timestamp,
            weather,
            // darksky,
            temperatureHistory,
            temperatureHistoryToday,
            temperatureHistoryYesterday,
            chartRange,
            now
        } = this.props;

        moment.tz.setDefault(config.timezone);
        moment.locale(config.language);

        const time = moment(timestamp).format("L LT");

        return (
            <html>
                <head>
                    <link rel="stylesheet" href="/css/style.css" />
                    {/* <meta http-equiv="refresh" content="60" /> */}
                </head>

                <body>
                    <Temperature value={parseFloat(temperature.state)} unit={temperature.attributes.unit_of_measurement} />
                    {/* <Darksky value={darksky.state} /> */}
                    {/* <Skycons color='white' icon='PARTLY_CLOUDY_DAY' /> */}
                    <div className="time">{time}</div>
                    <HistoricGraph weather={weather} temperatureHistory={temperatureHistory} temperatureHistoryToday={temperatureHistoryToday} temperatureHistoryYesterday={temperatureHistoryYesterday} chartRange={chartRange} now={now} />
                    <BatteryIndicator batteryLevel={battery} />
                </body>
            </html>
        );
    }
}

module.exports = Cover;
