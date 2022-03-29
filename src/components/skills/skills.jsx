import React from 'react';
import './skills.scss';

class Skills extends React.Component {
    state = {
        ...this.props
    }
    render() {
        console.log(this.state);
        return (
            <div className="skills-component">
                <div className="skills-hsitory">
                    <h5 className="header">Skills History</h5>
                    <div className="skills-component-body row">
                        {this.state.data.map((x, i) => <div key={i} className="col-3 skills-item">
                            <div className="item">
                                <span className="skill">{x.title}</span>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;