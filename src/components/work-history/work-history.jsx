import React from 'react';
import './work-history.scss'

class WorkHistory extends React.Component {
    state = {
        ...this.props
    }

    find(id, obj) {
        let name = ''
        if (obj && obj.length > 0) {
            let data = obj.find(x => x.id === id);
            if (data?.name) {
                name = data.name;
            }
            else if (data?.title) {
                name = data.title;
            }
        }
        return name;
    }

    revertList(data) {
        let outData = [];
        if (data && data.length > 0) {
            for (let i = data.length - 1; i >= 0; i--) {
                outData.push(data[i]);
            }
        }
        return outData;
    }

    render() {
        return (
            <div className="work-hsitory-component">
                <div className="work-hsitory">
                    <h5 className="header">Work History</h5>
                    <div className="work-history-component-body">
                        {this.revertList(this.state.data).map((x, i) => <div key={i} className="work-history-item row">
                            <div className="col-12 card pt-2 items">
                                <span className="company">Company : {this.find(x.companyId, this.state.companies)}</span>
                                <span className="location">Job Location : {`${x.jobLocation.country}/${x.jobLocation.city}`}</span>
                                <span className="remoteJob">Type : {x.jobLocation.remote ? 'Remote' : 'In Person'}</span>
                                <span className="jobTitle">Job Title : {x.jobTitle}</span>
                                <span className="date pl-2 ml-2">
                                    <span className="startDate">Start Date : {x.startDate}</span>
                                    <span className="endDate">End Date : {x.endDate}</span>
                                </span>
                                <span>Details :</span>
                                <div className="card p-3 mt-2">
                                    <span className="responsibility">Responsibilities : {x.responsibilities.map((a, i) => <span key={i} className="responsibility">{a}</span>)}</span>
                                    <span className="skills">Using Skills : <span className="skill-box">{x.usingSkillsIds.map((a, i) => <span key={i} className="skill">{this.find(a, this.state.skills)}</span>)}</span></span>
                                </div>
                                <br />
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
        );
    }
}

export default WorkHistory;