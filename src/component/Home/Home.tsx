import { useNavigate } from "react-router-dom";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../Redux/Slice/UserSlice";

const Home = () => {
  let navigate = useNavigate();

  let userList = useSelector((state: any) => {
    return state.user;
  });

  let dispatch = useDispatch();

  let updateUser = (obj: any) => {
    navigate("/add-update-user/" + obj?.id);
  };

  return (
    <>
      <div className="home-container">
        <div>
          <h1 className="tbl-heading">User Management System</h1>
        </div>
        <div className="home-btn">
          <button onClick={() => navigate("/add-update-user")}>Add User</button>
        </div>
      </div>

      <table>
        <thead>
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Action</th>
        </thead>

        <tbody>
          {userList.map((e: any) => (
            <tr key={e?.id}>
              <td>{e?.name}</td>
              <td>{e?.email}</td>
              <td>{e?.phoneNumber}</td>
              <td>
                <button
                  className="viewbtn"
                  onClick={() => navigate("/view-user/" + e?.id)}
                >
                  View
                </button>
                <button className="updatebtn" onClick={() => updateUser(e)}>
                  Update
                </button>
                <button
                  className="deletebtn"
                  onClick={() => dispatch(deleteUser(e?.id))}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
