import React from "react";
function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container product-left-sec">
      <div className="row">
        <div className="col-6">
          <img src={imageURL} />
        </div>
        <div className="col-6 mt-5" style={{paddingLeft:"7rem",paddingTop:"3rem"}}>
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <div>
            <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo &nbsp; <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            <a href={learnMore} style={{ marginLeft: "50px",textDecoration:"none"}}>
              Learn More &nbsp; <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay} style={{textDecoration:"none"}}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore} style={{textDecoration:"none"}}>
              <img
                src="media/images/appstoreBadge.svg"
                style={{ marginLeft: "50px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LeftSection;