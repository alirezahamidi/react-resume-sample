import React from 'react';
import './personal-information.scss';

class PersonalInformation extends React.Component {
    state = {
        ...this.props.data
    }
    render() {
        return (
            <div className="personalInformation">
                <h5 className="header">Personal Information</h5>
                <div className="piBody row">
                    <div className="piImage col-12 col-md-5 col-lg-4">
                        <img src={this.state.avatar} alt="" />
                    </div>
                    <div className="piBox col-12 col-md-7 col-lg-8">
                        <div className="row">
                            <div className="col-12 col-lg-4 data"><label htmlFor="">Name :</label> {this.state.firstName + " " + this.state.lastName}</div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-lg-6 data"><label htmlFor="">Phone Number :</label> {this.state.phoneNumbers.map((x,i)=> <span key={i} className="">{x}</span>)}</div>
                            <div className="col-12 col-lg-6 data"><label htmlFor="">Email :</label> {this.state.emails.map((x,i) => <span key={i} className="">{x}</span>)}</div>
                        </div>
                        <div className="row">
                            <div className="col-12 data">Location : {this.state.addresses.map((x,i) => <span key={i} className="">{x}</span>)}</div>
                        </div>
                        <div className="row">
                            <div className="col-12 data">Biography : {this.state.bio.split('\r\n').map((x,i) => <p key={i}>{x}</p>)}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PersonalInformation;