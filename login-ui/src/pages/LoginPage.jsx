import React from "react";
import hero from "../assets/marine-hero.jpg";

export default function LoginPage() {
  return (
    <div className="page">
      <div className="card">
        {/* Left Side - Form */}
        <div className="left">
          <div className="brandRow">
            <span className="brandDot" />
            <span className="brandText">Fathom Marine</span>
          </div>

          <h1 className="title">
            Hello, <br /> Welcome Back
          </h1>
          <p className="subtitle">Sign in to continue to your dashboard</p>

          <div className="form">
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="you@fathommarine.com"
              defaultValue=""
            />

            <label className="label">Password</label>
            <input type="password" className="input" placeholder="••••••••••" />

            <div className="row">
              <label className="checkboxWrap">
                <input type="checkbox" defaultChecked />
                <span>Remember me</span>
              </label>

              <a href="#" className="link">
                Forgot Password?
              </a>
            </div>

            <button className="button">Sign In</button>

            <p className="footerText">
              Don’t have an account?{" "}
              <a href="#" className="linkBold">
                Sign Up
              </a>
            </p>
          </div>
        </div>

        {/* Right Side - Image Panel */}
        <div className="right" style={{ backgroundImage: `url(${hero})` }}>
          <div className="overlay" />

          <div className="rightContent">
            <div className="badge">Marine Operations • Secure Access</div>
            <h2 className="rightTitle">Navigate smarter. Operate safer.</h2>
            <p className="rightSub">
              Real-time visibility for fleets, crew, compliance, and training — in
              one place.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
