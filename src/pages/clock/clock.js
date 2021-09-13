import React, { Component } from 'react';
import './clock.scss';

class Clock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // month: ''
        }
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.tick();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({
            month: new Date().getMonth(),
            day: new Date().getDay(),   // 星期
            date: new Date().getDate(), // 日期
            hours: new Date().getHours(),
            minutes: new Date().getMinutes(),
            seconds: new Date().getSeconds(),

        })
    }

    scale(num, in_min, in_max, out_min, out_max) {
        return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }

    render() {
        const {hours, minutes, seconds} = this.state;
        return (
            <div className="clockContainer">
                <div className="needle hour" style={{ transform:  `translate(-50%, -100%) rotate(${this.scale(hours % 12, 0, 11, 0, 360)}deg)` }}></div>
                <div className="needle miniter" style={{ transform:  `translate(-50%, -100%) rotate(${this.scale(minutes, 0, 59, 0, 360)}deg)` }}></div>
                <div className="needle second" style={{ transform:  `translate(-50%, -100%) rotate(${this.scale(seconds, 0, 59, 0, 360)}deg)` }}></div>
                <div className="center-pointer"></div>

                <div className="time-end">
                    {hours}:{minutes}:{seconds}
                </div>
            </div>
            
        )
    }


}

export default Clock;