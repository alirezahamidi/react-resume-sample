import React from 'react';
import './education.scss';

class Education extends React.Component {
    state = {
        ...this.props
    }

    findUniversity(id) {
        let name = ''
        if (this.state.universities && this.state.universities.length > 0) {
            let uni = this.state.universities.find(x => x.id === id);
            if (uni?.name) {
                name = uni.name;
            }
        }
        return name;
    }

    render() {
        return (
            <div className="education-component">
                <div className="education-hsitory">
                    <h5 className="header">Education History</h5>
                    <div className="education-component-body">
                        {this.state.data.map((x, i) => <div key={i} className="education-item row">
                            <div className="col-12 items">
                                <span className="degree">Degree Level : {x.degreeLevel}</span>
                                <span className="degree">Title : {x.title}</span>
                                <span className="date">
                                    <span className="startDate">Start Date : {x.startDate}</span>
                                    <span className="endDate">End Date : {x.endDate}</span>
                                </span>
                                <span className="uni">University : {this.findUniversity(x.universityId)}</span>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Education;