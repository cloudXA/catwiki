import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './content.scss';

class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            profile: {}
        }
    }

    render() {
        return (
            <div className="content-container">
                {this.props.profile.map((item, index) => {
                    return (
                        <div className="card-content">
                            <div className="card-header">
                                    
                            </div>
                            <div className="card-body">
                                <h3>
                                    {item.title}
                                    
                                </h3>
                                <p>
                                    {item.content}
                                    
                                </p>
                                <div className="avatar">
                                    <div className="profile-img">
                                    </div>
                                    <div className="profile-info">
                                        <strong>{item.author}</strong>
                                        <small>{item.time}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

Content.propTypes = {
    profile: PropTypes.array.isRequired,
}

Content.defaultProps = {
    profile: [
        {
            title: `Lorem ipsum doloar sit amet ipsum doloar sit amet 
                ipsum doloar sit amet
                Lorem ipsum doloar sit amet ipsum doloar sit amet 
                ipsum doloar sit amet`,
            content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Dolore perferendis Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Dolore perferendis `,
            headerBg: '/53.jpg',
            avatarBg: '/53.jpg',
            author: '张明',
            time: "2012-12-25"

        },
        {
            title: `Lorem ipsum doloar sit amet ipsum doloar sit amet 
                ipsum doloar sit amet
                Lorem ipsum doloar sit amet ipsum doloar sit amet 
                ipsum doloar sit amet`,
            content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Dolore perferendis Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Dolore perferendis `,
            headerBg: '/upload.jpg',
            avatarBg: '/upload.jpg',
            author: '光明',
            time: "2018-12-25"
        }
    ]
}

export default Content;