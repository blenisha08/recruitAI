import { FaBars, FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <div
      style={{
        background: "white",
        padding: "15px 25px",
        borderRadius: "12px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0px 2px 8px rgba(0,0,0,0.08)",
      }}
    >
      <FaBars size={20} />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <p>Login</p>

        <FaUserCircle size={28} />
      </div>
    </div>
  );
}

export default Navbar;