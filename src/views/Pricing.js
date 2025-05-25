import React from 'react'

const Pricing = () => {
  return (
    <div className="pricing-container">
      <h1>Pricing</h1>
      <div className="pricing-plans">
        <div className="plan">
          <h2>Free</h2>
          <p>Basic features for personal use</p>
        </div>
        <div className="plan">
          <h2>Pro</h2>
          <p>Advanced features for power users</p>
        </div>
        <div className="plan">
          <h2>Enterprise</h2>
          <p>Custom solutions for organizations</p>
        </div>
      </div>
    </div>
  )
}

export default Pricing 