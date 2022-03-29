import React from 'react';
import './about.scss'

class About extends React.Component {
    state = {
        portfolio: null,
        ...this.props.data
    }
    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="about-header p-3"><h4>About</h4></div>
                        <div className="body p-3">
                            <div className="row">
                                <div className="col-12 col-md-8 col-lg-9">
                                    <p>
                                        This app created to show my resume and my capability to handel of a React.Js App.
                                    </p>
                                    <p>
                                        I Think it can be used as a React.js-Bootstrap Template to bootstrap your Project.
                                    </p>
                                    <p>
                                        I didn't used any state management in this project but i tried to use single source of truth method to keep data as a single unit, and i tried to create maximum number of components that may be need to simplify code and improve its readability to whom may want use this project or know more about my work.
                                    </p>
                                </div>
                                <div className="col-12 col-md-4 col-lg-3 image-container">
                                    <img src="/assets/images/react-logo.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default About;