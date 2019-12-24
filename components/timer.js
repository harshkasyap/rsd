import React, { useEffect, useState } from "react";
import moment from "moment";

class Countdown extends React.Component {
	state = {
        months: undefined,
		days: undefined,
		hours: undefined,
		minutes: undefined,
		seconds: undefined
	}
	
	componentDidMount() {
		this.interval = setInterval(() => {
			const { timeTillDate, timeFormat } = this.props;
			const then = moment(timeTillDate, timeFormat);
			const now = moment();
            const countdown = moment(then - now);
            const months = countdown.format('MM');
			const days = countdown.format('D');
			const hours = countdown.format('HH');
			const minutes = countdown.format('mm');
			const seconds = countdown.format('ss');

			this.setState({ months, days, hours, minutes, seconds });
		}, 1000);
	}

	componentWillUnmount() {
		if(this.interval) {
			clearInterval(this.interval);
		}
	}
	
	render() {
		const { months, days, hours, minutes, seconds } = this.state;
        const monthsRadius = mapNumber(months, 12, 0, 0, 360);
        const daysRadius = mapNumber(days, 30, 0, 0, 360);
		const hoursRadius = mapNumber(hours, 24, 0, 0, 360);
		const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
		const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);

		if(!seconds) {
			return null;
		}
		
		return (
			<div>
                <style jsx>{ `
                    body {
                        background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
                        
                        align-items: center;
                        justify-content: center;
                        flex-direction: column;

                        min-height: 100vh;
                        font-family: 'Lato', sans-serif;
                        margin: 0;
                    }

                    h1 {
                        letter-spacing: 2px;
                        text-align: center;
                        text-transform: uppercase;
                    }

                    .countdown-wrapper {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-wrap: wrap;
                    }

                    .countdown-item {
                        color: #111;
                        font-size: 40px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-direction: column;
                        line-height: 30px;
                        margin: 10px;
                        padding-top: 10px;
                        position: relative;
                        width: 100px;
                        height: 100px;
                    }

                    .countdown-item span {
                        color: #333;
                        font-size: 12px;
                        font-weight: 600;
                        text-transform: uppercase;
                    }

                    .countdown-svg {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100px;
                        height: 100px;
                    }

                    footer {
                        background-color: #222;
                        color: #fff;
                        font-size: 14px;
                        bottom: 0;
                        position: fixed;
                        left: 0;
                        right: 0;
                        text-align: center;
                        z-index: 999;
                    }
                ` }</style>
				<div className='countdown-wrapper'>
					{months && (
						<div className='countdown-item'>
							<SVGCircle radius={daysRadius} />
							{months} 
							<span>months</span>
						</div>
					)}
                    {days && (
						<div className='countdown-item'>
							<SVGCircle radius={monthsRadius} />
							{days} 
							<span>days</span>
						</div>
					)}
					{hours && (
						<div className='countdown-item'>							
							<SVGCircle radius={hoursRadius} />
							{hours} 
							<span>hours</span>
						</div>
					)}
					{minutes && (
						<div className='countdown-item'>
							<SVGCircle radius={minutesRadius} />
							{minutes} 
							<span>minutes</span>
						</div>
					)}
					{seconds && (
						<div className='countdown-item'>
							<SVGCircle radius={secondsRadius} />
							{seconds} 
							<span>seconds</span>
						</div>
					)}
				</div>
			</div>
		);
	}
}

const SVGCircle = ({ radius }) => (
	<svg className='countdown-svg'>
		<path fill="none" stroke="#333" stroke-width="4" d={describeArc(50, 50, 48, 0, radius)}/>
	</svg>
);

// From stackoverflow: https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}

function describeArc(x, y, radius, startAngle, endAngle){

    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

    var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    var d = [
        "M", start.x, start.y, 
        "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");

    return d;       
}

// Stackoverflow: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function mapNumber(number, in_min, in_max, out_min, out_max) {
  return (number - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

const Timer = ( ) => (
    <div>
        <Countdown timeTillDate="03 07 2020, 6:00 am" timeFormat="MM DD YYYY, h:mm a" />
    </div>
);

export default Timer;
