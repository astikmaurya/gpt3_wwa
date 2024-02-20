import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <>
      <div className="gpt3__header section__padding" id="home">
        <div className="gpt3__header-content">
          <h1 className="gradient__text">
            Discover the endless possibilities of building with GPT-3 OpenAI.
          </h1>
          <p>
            Yet, when it comes to traveling, any assistance that is unpleasant
            is avoided. All thoughts are focused on the blessings that come from
            exercising. The joy of alteration and lively attachment is found in
            indulging in everything. Over the years, we have learned to allow
            ourselves to be asked for what we desire.
          </p>
          <div className="gpt3__header-content__input">
            <input type="email" placeholder="Enter your email" />
            <button type="button">Get Started</button>
          </div>
          <div className="gpt3__header-content__people">
            <img src={people} alt="People" />
            <p>There have been 1,600 access requests in the last 24 hours.</p>
          </div>
        </div>
        <div className="gpt3__header-image">
          <img src={ai} alt="ai" />
        </div>
      </div>
    </>
  );
};

export default Header;
