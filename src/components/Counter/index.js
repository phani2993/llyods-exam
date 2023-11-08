import {Component} from 'react'

import './index.css'

class Counter extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="navbar">
          <ul className="list">
            <li>
              <div>
                <h2>My Moves</h2>
              </div>
            </li>
            <li>
              <div>
                <h2>My Profile</h2>
              </div>
            </li>
            <li>
              <div>
                <h2>Get Quote</h2>
              </div>
            </li>
            <li>
              <div>
                <h2>Logout</h2>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h1>My Moves</h1>
          <div className="flex-container">
            <div className="from-container">
              <h2>From</h2>
              <p>Ejipura,Bengaluru,Karnataka</p>
            </div>
            <div>--></div>
            <div className="to-container">
              <h2>To</h2>
              <p>HSR layout,Bengaluru,Karnataka</p>
            </div>
            <div className="request-container">
              <h2>#Request</h2>
              <p>E21418</p>
            </div>
          </div>

          <div className="details-container">
            <div>1 BHK</div>
            <div>32 People</div>
            <div>4.8 KM</div>
            <div>Sep 26,2020 at 6:18 pm</div>
            <div>
              Is flexible <input checked type="checkbox" />
            </div>
            <button className="view-btn">View move details</button>
            <button className="quotes-btn">Quotes awaiting</button>
          </div>

          <span className="disclaimer-head">Disclaimer: </span>
          <span className="span-para">Please update your move date before</span>

          <hr className="hr-line" />
          <div className="flex-container">
            <div className="from-container">
              <h2>From</h2>
              <p>
                Ejipura signal,100 Feet Road,Chandra Reddy Layout, ST Bed
                Layout,Ejipura,Bengaluru,Karnataka
              </p>
            </div>

            <div className="to-container">
              <h2>To</h2>
              <p>
                Ulsoor Lake,Ulsoor Lake Pathway,Rulmini Coloy,SivanChetti Garden
                Bengaluru,Karnataka
              </p>
            </div>
            <div className="request-container">
              <h2>#Request</h2>
              <p>41057</p>
            </div>
          </div>

          <div className="details-container">
            <div>3+ BHK</div>
            <div>82 People</div>
            <div>8.3 KM</div>
            <div>Sep 6,2020 at 7:28 pm</div>
            <div>
              Is flexible <input checked type="checkbox" />
            </div>
            <button className="view-btn">View move details</button>
            <button className="quotes-btn">Quotes awaiting</button>
          </div>

          <span className="disclaimer-head">Disclaimer: </span>
          <span className="span-para">Please update your move date before</span>

          <hr className="hr-line" />

          <div className="flex-container">
            <div className="from-container">
              <h2>From</h2>
              <p>
                Rajini Metro Station,Chord Road,West of Chord Road 2nd
                Stage,Nagpura,Bengaluru,Karnataka
              </p>
            </div>
            <div className="to-container">
              <h2>To</h2>
              <p>
                HAL Old Airport Road,BDA Colony,Domlur
                Village,Domlur,Bengaluru,Karnataka
              </p>
            </div>
            <div className="request-container">
              <h2>#Request</h2>
              <p>12012</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Counter
