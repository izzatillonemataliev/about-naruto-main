import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>contact</h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
      </div>
      <img
        style={{ borderRadius: "0" }}
        src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSAxvEY-Qq-uavboZyTgofZaVebIGhPidnWW7crd0FKX3J_IsS_CJrYInRZwLq1ABEjxqJWvqYwZCnU-J7O2rU6Y26xgbv7dINyV1HMaaDb3vuZE1fbISA84jypxggxXHHEkvazo7o&usqp=CAc"
        alt=""
        height={400}
        width={500}
      />
    </div>
  );
}

export default Contact;
