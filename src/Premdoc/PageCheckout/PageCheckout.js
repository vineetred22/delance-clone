import React from 'react'
import './PageCheckout.css'

 const PageCheckout = () => {
     
    return (
        <div>
            <div id="titlebar" className="gradient">
	<div className="container">
		<div className="row">
			<div className="col-md-12">

				<h2>Checkout</h2>

				<nav id="breadcrumbs" className="dark">
					<ul>
						<li><a href="#">Home</a></li>
						<li><a href="#">Pricing Plans</a></li>
						<li>Checkout</li>
					</ul>
				</nav>

			</div>
		</div>
	</div>
</div>


<div className="container">
  <div className="row">
    <div className="col-xl-8 col-lg-8 content-right-offset">
      
      <h3>Billing Cycle</h3>
      
      <div className="billing-cycle margin-top-25">
        
        <div className="radio">
          <input id="radio-5" name="radio-payment-type" type="radio" defaultChecked />
          <label htmlFor="radio-5">
            <span className="radio-label" />
            Billed Monthly
            <span className="billing-cycle-details">
              <span className="regular-price-tag">$49.00 / month</span>
            </span>
          </label>
        </div>
      
        <div className="radio">
          <input id="radio-6" name="radio-payment-type" type="radio" />
          <label htmlFor="radio-6"><span className="radio-label" />
            Billed Yearly
            <span className="billing-cycle-details">
              <span className="discounted-price-tag">$529.20 / year</span>
              <span className="regular-price-tag line-through">588.00 / year</span>
            </span>
          </label>
        </div>
      </div>
    
      <h3 className="margin-top-50">Payment Method</h3>
   
      <div className="payment margin-top-30">
        <div className="payment-tab payment-tab-active">
          <div className="payment-tab-trigger">
            <input defaultChecked id="paypal" name="cardType" type="radio" defaultValue="paypal" />
            <label htmlFor="paypal">PayPal</label>
            <img className="payment-logo paypal" src="https://i.imgur.com/ApBxkXU.png" alt />
          </div>
          <div className="payment-tab-content">
            <p>You will be redirected to PayPal to complete payment.</p>
          </div>
        </div>
        <div className="payment-tab">
          <div className="payment-tab-trigger">
            <input type="radio" name="cardType" id="creditCart" defaultValue="creditCard" />
            <label htmlFor="creditCart">Credit / Debit Card</label>
            <img className="payment-logo" src="https://i.imgur.com/IHEKLgm.png" alt />
          </div>
          <div className="payment-tab-content">
            <div className="row payment-form-row">
              <div className="col-md-6">
                <div className="card-label">
                  <input id="nameOnCard" name="nameOnCard" required type="text" placeholder="Cardholder Name" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-label">
                  <input id="cardNumber" name="cardNumber" placeholder="Credit Card Number" required type="text" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="card-label">
                  <input id="expiryDate" placeholder="Expiry Month" required type="text" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="card-label">
                  <label htmlFor="expiryDate">Expiry Year</label>
                  <input id="expirynDate" placeholder="Expiry Year" required type="text" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="card-label">
                  <input id="cvv" required type="text" placeholder="CVV" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      <a href="pages-order-confirmation.html" className="button big ripple-effect margin-top-40 margin-bottom-65">Proceed Payment</a>
    </div>
    
    <div className="col-xl-4 col-lg-4 margin-top-0 margin-bottom-60">
  
      <div className="boxed-widget summary margin-top-0">
        <div className="boxed-widget-headline">
          <h3>Summary</h3>
        </div>
        <div className="boxed-widget-inner">
          <ul>
            <li>Standard Plan <span>$49.00</span></li>
            <li>VAT (20%) <span>$9.80</span></li>
            <li className="total-costs">Final Price <span>$58.80</span></li>
          </ul>
        </div>
      </div>
      
      <div className="checkbox margin-top-30">
        <input type="checkbox" id="two-step" />
        <label htmlFor="two-step"><span className="checkbox-icon" />  I agree to the <a href="#" className="checkbox-condition">Terms and Conditions</a> and the <a href="#"  className="checkbox-condition">Automatic Renewal Terms</a></label>
      </div>
    </div>
  </div>
</div>

        </div>
    )

}
export default PageCheckout


