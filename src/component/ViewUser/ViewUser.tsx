import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import "./ViweUser.css";

const ViewUser = () => {
  let param = useParams();
  let navigate = useNavigate();

  let viewUser = useSelector((state: any) => {
    return state.user;
  });

  let userObj = viewUser.find((e: any) => e?.id === param.id);

  return (
    <div className="main-view">
      <div className="card">
        <button onClick={() => navigate("/")}>Back to home</button>
        <h2>User Details</h2>
        <hr />
        <h3>{userObj?.name}</h3>
        <p>{userObj?.phoneNumber}</p>
        <div className="info">
          <span>Email: {userObj?.email}</span>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
