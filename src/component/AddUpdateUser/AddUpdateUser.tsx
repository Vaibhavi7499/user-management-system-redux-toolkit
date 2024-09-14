import { useForm } from "react-hook-form";
import "./AddUpdateUser.css";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addUser, updateUser } from "../../Redux/Slice/UserSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

type formValues = {
  name: string;
  email: string;
  phoneNumber: number;
};

const AddUpdateUser = () => {
  let dispatch = useDispatch();

  let navigate = useNavigate();

  const form = useForm<formValues>();

  const { register, handleSubmit, formState, setValue } = form;

  const { errors } = formState;

  const { name, email, phoneNumber } = errors;

  let param = useParams();

  let userList = useSelector((state: any) => {
    return state.user;
  });

  let filteredObj = userList.find((e: any) => e?.id === param.id);

  useEffect(() => {
    setValue("name", filteredObj?.name);
    setValue("email", filteredObj?.email);
    setValue("phoneNumber", filteredObj?.phoneNumber);
  }, [param.id]);

  let getFormValues = (data: formValues) => {
    let userObj = {
      ...data,
      id: uuidv4(),
    };

    let updateObj = {
      ...data,
      id: param.id,
    };

    if (param.id) {
      dispatch(updateUser(updateObj));
    } else {
      dispatch(addUser(userObj));
    }
    navigate("/");
  };

  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit(getFormValues)}>
          <h1>{param.id ? "Update" : "Add"} User</h1>
          <div className="formuser-name">
            <label>Enter Name :</label>
            <input
              type="text"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required",
                },
              })}
            />
            <p className="paragraph">{name && name?.message}</p>
          </div>

          <div className="formuser-email">
            <label>Enter Email :</label>
            <input
              type="text"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },

                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: "Invalid email",
                },
              })}
            />
            <p className="paragraph">{email && email?.message}</p>
          </div>

          <div className="formuser-number">
            <label>Enter Phone Number :</label>
            <input
              type="text"
              {...register("phoneNumber", {
                required: {
                  value: true,
                  message: "Phone number is required",
                },
                minLength: {
                  value: 10,
                  message: "10 digit is required",
                },
                maxLength: {
                  value: 10,
                  message: "10 digit is required",
                },
              })}
            />
            <p className="paragraph">{phoneNumber && phoneNumber?.message}</p>
          </div>

          <div className="form-btn">
            <button type="submit">{param.id ? "Update" : "Add"} User</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddUpdateUser;
