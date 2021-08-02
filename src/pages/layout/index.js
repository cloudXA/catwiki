import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

class Layout extends Component {
    render() {
        return (
            <div className="home">
                首页
                <Link to="/about">关于项目</Link>
                <Link to="/formValidator">表单校验</Link>
                <Link to="/progressStep">进度step</Link>
                <Link to="/mobileTab">移动端tab导航</Link>
            </div>
        )
    }
}

export default Layout