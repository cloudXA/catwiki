import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './transPic.scss';

import bg1 from '../../style/images/1.jpg';
import bg2 from '../../style/images/2.jpg';
import bg3 from '../../style/images/3.jpg';
import bg4 from '../../style/images/4.jpg';
import bg5 from '../../style/images/5.jpg';

class TransPic extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currenValue: 0
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        const index = event.target.getAttribute('index');
        this.setState({
            currenValue: index
        })
    }

    render() {
        return (
            <div className="picContainer active" onClick={this.handleClick}>
                {
                    this.props.picList.map((item, index) => {
                        return (
                            <div 
                                index={index}
                                style={{ backgroundImage: `url(${item.url})` }} 
                                className={`picContent ${ this.state.currenValue == index 
                                                            ? "active" : ""
                                                        }`}
                                key={index}
                            >

                            </div>
                        )
                    })
                }
                </div>
        )
    }
}

TransPic.propTypes = {
    picList: PropTypes.array.isRequired
}

TransPic.defaultProps = {
    picList: [
        {
            url: bg1
        },
        {
            url: bg2
        },
        {
            url: bg3
        },
        {
            url: bg4
        },
        {
            url: bg5
        },
    ]
}

export default TransPic;