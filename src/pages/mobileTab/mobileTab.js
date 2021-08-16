import React, { Component } from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import './mobileTab.scss';


class Mobiletab extends Component {
    constructor(props) {
        super(props);

        this.state = {
            test: 'hi',
            content: ''
        }

        this.toggleTab = this.toggleTab.bind(this);
    }
    
    toggleTab(event) {
        const target = event.target;
        console.log(event)
        this.setState({
            content: target
        })
    }

    render() {
        const arrange = this.props.arrange;
        return (
            <div className="nav-container" onClick={this.toggleTab}>
                {this.props.barList.map((item, index) => {
                    return (
                        <Link to={`${item.path}`} key={index}>
                            <div className={`icon-container ${arrange}-icon`} key={index}> 
                                <i className={`iconfont ${item.icon}`}></i>
                                <span>{item.content}</span>
                            </div>
                        </Link>
                        
                    )
                })}
                <div className="content">
                    {this.state.content}
                </div>
                
            </div>
        )
    }
}

Mobiletab.propTypes = {
    barList: PropTypes.array.isRequired,
}

Mobiletab.defaultProps = {
    barList: [      // 添加icon名称和对应的文字描述，icon同时需要在aliyun 项目配置完成后引入到style/iconfont中去
        {
            icon: 'icon-circleradioselectedsolid',
            content: '圆盘',
            path: '/about'
        },
        {
            icon: 'icon-nav02',
            content: '天气',
            path: '/formValidator'
        },
        {
            icon: 'icon-nav04',
            content: '人员',
            path: '/progressStep'
        },
        {
            icon: 'icon-gouwuche',
            content: '购物车',
            path: '/content'
        },
    ],
    arrange: 'column' // row 图标与字体一行 column图标与字体上下一行
}


export default Mobiletab;
