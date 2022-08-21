import React from 'react';
import ContactImage from '../../images/contact.png';

export const Contact = () => {
  return (
    <section className="contact section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="contact__image">
              <img src={ContactImage} alt="contact" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="section__heading">
              <h2>Contact</h2>
              <p>Any Questions or Remarks? Just write us a message.</p>
            </div>
            <form>
              <div className="input-row">
                <div className="input-group" style={{ marginRight: '20px' }}>
                  <label>First Name</label>
                  <input type="text" />
                </div>
                <div className="input-group">
                  <label>Last Name</label>
                  <input type="text" />
                </div>
              </div>
              <div className="input-group">
                <label>Email</label>
                <input type="email" />
              </div>
              <div className="input-group">
                <label>Message</label>
                <textarea />
              </div>
              <div className="btn">
                <button type="sumit" className="btn__link">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
