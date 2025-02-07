import React from "react";
function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div  id="supportWrapper">
        <h5>Support Portal</h5>
        <a href="">Track Tickets</a>
      </div>
      <div className="row" id="supportSearch">
        <div className="col-7">
          <p className="fs-5 mb-4">
            Search for an answer or browse help topics to create a ticket
          </p>
          <input placeholder="Eg. how do I activate F&O" />
          <br />
          <div className="mt-3">
          <a href="">Track account opening</a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="">Track segment activation</a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="">Intraday margins</a>
          <br/>  <br/>
          <a href="">Kite user manual</a>
          </div>
          
        </div>
        <div className="col-5" id="supportFeatured">
          <h4 >Featured</h4>
          <ol>
            <li>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <br/>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
export default Hero;