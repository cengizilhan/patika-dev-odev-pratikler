import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <section class="bg-white mt-2 p-3">
        <div>
          <h3>Your Recepipt</h3>
          <div className="row">
            <div className="col-md-6 col-lg-4 col-sm-12 mx-auto ">
              <table class="table table-borderless">
                <tr>
                  <td className="text-start ">Big Mac</td>
                  <td className="text-center">X10</td>
                  <td className="text-green fw-bolder text-end">$20</td>
                </tr>
                <tr>
                  <td className="text-start ">Big Mac</td>
                  <td className="text-center">X10</td>
                  <td className="text-green fw-bolder text-end">$20</td>
                </tr>
                <tr>
                  <td className="text-start ">Big Mac</td>
                  <td className="text-center">X10</td>
                  <td className="text-green fw-bolder text-end">$20</td>
                </tr>
                <tr>
                  <td className="text-start ">Big Mac</td>
                  <td className="text-center">X10</td>
                  <td className="text-green fw-bolder text-end">$20</td>
                </tr>

            
                
              </table>
              <div className="d-flex justify-content-between mx-auto border-top pt-1 pb-5">
                <span className="fw-bolder">Total</span>
                <span className="text-green fw-bolder">$15,000,95</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;
