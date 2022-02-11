import React from 'react'
import "./memberplan.scss"
export const MemberPlan = () => {
    return (
         <>
       
       <div>
            <div className="section pt-5 padding-top-60 padding-bottom-75">
  <div className="container">
    <div className="row">
      <div className="col-xl-12">
      
        <div className="section-headline centered margin-top-0 margin-bottom-35">
          <h3>Membership Plans</h3>
        </div>
      </div>
      <div className="col-xl-12">
       
       <div className="billing-cycle-radios ">
          <div className="radio billed-monthly-radio">
            <input id="radio-5" name="radio-payment-type" type="radio" defaultChecked />
            <label htmlFor="radio-5"><span className="radio-label" /> Billed Monthly</label>
          </div>
          <div className="radio billed-yearly-radio">
            <input id="radio-6" name="radio-payment-type" type="radio" />
            <label htmlFor="radio-6"><span className="radio-label" /> Billed Yearly <span className="small-label">Save 10%</span></label>
          </div>
        </div> 
       
        <div className="pricing-plans-container">
         
          <div className="pricing-plan">
            <h3>Basic Plan</h3>
            <p className="margin-top-10">One time fee for one listing or task highlighted in search results.</p>
            <div className="pricing-plan-label billed-monthly-label"><strong>$19</strong>/ monthly</div>
            <div className="pricing-plan-label billed-yearly-label"><strong>$205</strong>/ yearly</div>
            <div className="pricing-plan-features">
              <strong>Features of Basic Plan</strong>
              <ul>
                <li>1 Listing</li>
                <li>30 Days Visibility</li>
                <li>Highlighted in Search Results</li>
              </ul>
            </div>
            <div className="button full-width hover">Buy Now</div>
          </div>
          
          <div className="pricing-plan recommended">
            <div className="recommended-badge">Recommended</div>
            <h3>Standard Plan</h3>
            <p className="margin-top-10">One time fee for one listing or task highlighted in search results.</p>
            <div className=" month pricing-plan-label billed-monthly-label "><strong>$49</strong>/ monthly</div>
            <div className="pricing-plan-label billed-yearly-label"><strong>$529</strong>/ yearly</div>
            <div className="pricing-plan-features">
              <strong>Features of Standard Plan</strong>
              <ul>
                <li>5 Listings</li>
                <li>60 Days Visibility</li>
                <li>Highlighted in Search Results</li>
              </ul>
            </div>
            <div className=" full-width  btn">Buy Now</div>
          </div>
         
          <div className="pricing-plan">
            <h3>Extended Plan</h3>
            <p className="margin-top-10">One time fee for one listing or task highlighted in search results.</p>
            <div className="pricing-plan-label billed-monthly-label"><strong>$99</strong>/ monthly</div>
            <div className="pricing-plan-label billed-yearly-label"><strong>$1069</strong>/ yearly</div>
            <div className="pricing-plan-features">
              <strong>Features of Extended Plan</strong>
              <ul>
                <li>Unlimited Listings Listing</li>
                <li>90 Days Visibility</li>
                <li>Highlighted in Search Results</li>
              </ul>
            </div>
            <div className="button full-width hover">Buy Now</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>

        </>
    )
}
