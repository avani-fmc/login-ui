import React from "react";

export default function LoginPage() {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        {/* Left Side - Form */}
        <div style={styles.left}>
          <div style={styles.brandRow}>
            <span style={styles.brandDot} />
            <span style={styles.brandText}>Finnger</span>
          </div>

          <h1 style={styles.title}>
            Holla, <br /> Welcome Back
          </h1>
          <p style={styles.subtitle}>Hey, welcome back to your special place</p>

          <div style={styles.form}>
            <input
              type="email"
              placeholder="Email address"
              style={styles.input}
              defaultValue="stanley@gmail.com"
            />
            <input
              type="password"
              placeholder="Password"
              style={styles.input}
            />

            <div style={styles.row}>
              <label style={styles.checkboxWrap}>
                <input type="checkbox" defaultChecked />
                <span style={styles.checkboxText}>Remember me</span>
              </label>

              <a href="#" style={styles.link}>
                Forgot Password?
              </a>
            </div>

            <button style={styles.button}>Sign In</button>

            <p style={styles.footerText}>
              Don’t have an account?{" "}
              <a href="#" style={styles.linkBold}>
                Sign Up
              </a>
            </p>
          </div>
        </div>

        {/* Right Side - Illustration */}
        <div style={styles.right}>
          <div style={styles.illusBox}>
            <div style={styles.cloud1} />
            <div style={styles.cloud2} />
            <div style={styles.cloud3} />

            {/* Phone illustration placeholder */}
            <div style={styles.phone}>
              <div style={styles.phoneTopDot} />
              <div style={styles.fingerprint} />
              <p style={styles.illusText}>Place your finger</p>
            </div>

            {/* Lock placeholder */}
            <div style={styles.lock}>
              <div style={styles.lockHole} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px 16px",
    fontFamily: "Inter, system-ui, Arial",
  },
  card: {
    width: "100%",
    maxWidth: "1100px",
    background: "#fff",
    borderRadius: "18px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    overflow: "hidden",
    boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
  },
  left: { padding: "46px 56px" },
  brandRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "34px",
  },
  brandDot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    background: "#6c2bd9",
    display: "inline-block",
  },
  brandText: { fontWeight: 700, fontSize: "14px", color: "#222" },
  title: {
    margin: 0,
    fontSize: "42px",
    lineHeight: 1.05,
    fontWeight: 800,
    color: "#111",
  },
  subtitle: { marginTop: "10px", marginBottom: "28px", color: "#666" },
  form: { maxWidth: "360px" },
  input: {
    width: "100%",
    height: "42px",
    borderRadius: "8px",
    border: "1px solid #e3e3e3",
    padding: "0 12px",
    outline: "none",
    fontSize: "14px",
    marginBottom: "12px",
  },
  row: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "8px 0 18px",
    fontSize: "13px",
  },
  checkboxWrap: { display: "flex", alignItems: "center", gap: "8px" },
  checkboxText: { fontSize: "13px", color: "#444" },
  link: { color: "#6c2bd9", textDecoration: "none", fontWeight: 600 },
  button: {
    width: "120px",
    height: "40px",
    borderRadius: "8px",
    border: "none",
    background: "#6c2bd9",
    color: "#fff",
    fontWeight: 700,
    cursor: "pointer",
  },
  footerText: { marginTop: "22px", fontSize: "13px", color: "#666" },
  linkBold: { color: "#6c2bd9", fontWeight: 800, textDecoration: "none" },

  right: {
    background: "linear-gradient(135deg, #7e3af2, #8b5cf6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "26px",
  },
  illusBox: {
    width: "100%",
    height: "100%",
    borderRadius: "18px",
    position: "relative",
    overflow: "hidden",
  },
  cloud1: {
    position: "absolute",
    top: "18px",
    left: "18px",
    width: "150px",
    height: "70px",
    background: "rgba(255,255,255,0.85)",
    borderRadius: "50px",
  },
  cloud2: {
    position: "absolute",
    bottom: "40px",
    left: "40px",
    width: "180px",
    height: "80px",
    background: "rgba(255,255,255,0.85)",
    borderRadius: "60px",
  },
  cloud3: {
    position: "absolute",
    top: "70px",
    right: "30px",
    width: "170px",
    height: "75px",
    background: "rgba(255,255,255,0.85)",
    borderRadius: "60px",
  },
  phone: {
    position: "absolute",
    top: "50%",
    left: "55%",
    transform: "translate(-50%, -50%) rotate(10deg)",
    width: "260px",
    height: "420px",
    borderRadius: "28px",
    background: "linear-gradient(180deg, #ff6bb3, #9b5cff)",
    boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
    border: "10px solid #1f1f1f",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "18px",
  },
  phoneTopDot: {
    position: "absolute",
    top: "10px",
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    background: "#111",
  },
  fingerprint: {
    width: "110px",
    height: "110px",
    borderRadius: "50%",
    border: "3px solid rgba(255,255,255,0.85)",
    boxShadow: "inset 0 0 0 8px rgba(255,255,255,0.2)",
  },
  illusText: { margin: 0, color: "rgba(255,255,255,0.9)", fontWeight: 700 },
  lock: {
    position: "absolute",
    right: "80px",
    top: "55%",
    transform: "translateY(-50%)",
    width: "90px",
    height: "110px",
    borderRadius: "16px",
    background: "rgba(255,255,255,0.92)",
    boxShadow: "0 12px 22px rgba(0,0,0,0.18)",
  },
  lockHole: {
    position: "absolute",
    top: "46px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "18px",
    height: "28px",
    borderRadius: "10px",
    background: "#7e3af2",
  },
};
