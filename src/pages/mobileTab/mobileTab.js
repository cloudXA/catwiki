import React, { Component } from "react";
import PropTypes from "prop-types";
import './mobileTab.scss';


class Mobiletab extends Component {
    constructor(props) {
        super(props);

        this.state = {
            test: 'hi'
        }
    }
    
    render() {

        return (
            <div className="nav-container">
                {/* <BsListUl /> */}
               {test}

               <i className="iconfont icon-circleradioselectedsolid"></i>
            </div>
        )
    }
}

Mobiletab.propTypes = {
    barList: PropTypes.array.isRequired,
}

Mobiletab.defaultProps = {
    barList: [
        {
            icon: 'BsListUl',
            content: 'hello'
        },
        {
            icon: 'div',
            content: '你好'
        }
    ]
}


export default Mobiletab;
