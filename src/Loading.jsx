import React from "react";

function Loading() {
  return (
    <>
      <div className="row" style={{marginTop:'20',marginBottom:10}}>
        <div className="col s6">
          <strong style={{fontSize:20}}>Loading</strong>
        </div>

        <div className="col s3 offset-s3" style={{width:100}}>
          <div class="preloader-wrapper small active">
            <div class="spinner-layer spinner-green-only">
              <div class="circle-clipper left">
                <div class="circle"></div>
              </div>
              <div class="gap-patch">
                <div class="circle"></div>
              </div>
              <div class="circle-clipper right">
                <div class="circle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Loading;
