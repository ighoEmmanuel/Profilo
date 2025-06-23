import React from 'react';
import './Body.css';
import myPic from '../../assets/mypics.jpg'
import javaLogo from '../../assets/java-brands.svg'

const Body = () => {
    return (
        <div className="mainWrapper">
            <div className="navBar">
                <ul>
                    <li><a href="">About me</a></li>
                    <li>Resume</li>
                    <li>github-Link</li>
                    <li>Linked</li>
                </ul>
            </div>
            <div className="profile">
                <div className="name">
                    <p>Emmanuel Ejiro Igho</p>
                    <p className="text-white text-sm mt-2">A Software Engineer</p>
                </div>
                <img className="my-image" src={myPic} alt="Profile" />
            </div>
            <div className="skills">
                <p className="skillWord">My Skills</p>
                <img src={javaLogo} alt="java-logo" className="javaLogo"/>
            </div>
        </div>
    );
};

export default Body;
