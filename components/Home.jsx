import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Home</h2>
      <h3 style={{ textAlign: "center", fontWeight: "800", fontSize: "32px" }}>
       My smartPhone
      </h3>
      <div
        style={{
          height: "1px",
          width: "900px",
          backgroundColor: "aqua",
          marginBottom: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          style={{ borderRadius: "15px" }}
          src="https://mi-store.uz/wp-content/uploads/2024/03/redmi20note201320global.png"
          alt=""
          height={400}
          width={500}
        />
        <p style={{ textAlign: "center" }}>
          
        </p>

        <Link
          style={{
            border: "1 px solid",
            backgroundColor: "aqua",
            borderRadius: "10px",
            padding: "10px",
          }}
          to="/contact"
        >
          More
        </Link>
      </div>
    </div>
  );
}

export default Home;
