import React from 'react';
import ContactUs from '../contact-us/contact-us';
import Education from '../education/education';
import PersonalInformation from '../personal-information/personal-information';
import Portfolio from '../portfolio/portfolio'
import Skills from '../skills/skills';
import WorkHistory from '../work-history/work-history';


class Resume extends React.Component {
    state = {
        portfolio: null,
        ...this.props.data
    }
    render() {
        console.log(this.state);
        return (
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        <div className="col-12">
                            <div className="resume card p-3 mt-2">
                                <PersonalInformation data={this.state.personalInformation} />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="resume card p-3 mt-2">
                                <Education data={this.state.education} universities={this.state.university} />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="resume card p-3 mt-2">
                                <WorkHistory data={this.state.workHistory} companies={this.state.companies} skills={this.state.skills} />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="resume card p-3 mt-2">
                                <Skills data={this.state.skills} />
                            </div>
                        </div>
                    </div>

                    <div className="row d-none">
                        <div className="col-12">
                            <div className="resume card p-3 mt-2">
                                <Portfolio data={this.state.portfolio} />
                            </div>
                        </div>
                    </div>

                    <div className="row d-none">
                        <div className="col-12">
                            <div className="resume card p-3 mt-2">
                                <ContactUs data={this.state.personalInformation} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Resume;