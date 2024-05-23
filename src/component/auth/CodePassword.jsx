import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { handleKeyDownCode } from "../../functionValidation/handleKeyDownCode";
import { errorMessage } from "../messages/errorMessage";
import { ToastContainerMessage } from "../messages/ToastContainerMessage";
import { postData } from "../../hooks/usePostData";
import "../../styles/login.css";

export const CodePassword = () => {
  const [code, setCode] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCode = async (e) => {
    e.preventDefault();

    const url = "/api/authenticate";
    const dataObjects = { code };

    const response = await dispatch(postData({ url,data:dataObjects }));

    if (response.status === 200) {
      navigate("/ChangePassword");
    } else {
      errorMessage("Codigo inválido!");
    }
  };

  const handleInputChange = (e) => {
    setCode(e.target.value);
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-plane">
      <div className="card car-login mx-auto p-2 shadow-sm custom-max-width">
        <div className="text-center">
          <i className="bi bi-person-circle mx-auto d-block mb-3 fs-1"></i>
          <h4 className="animate__animated animate__bounceIn">
            ¡Recuperar contraseña!
          </h4>
        </div>
        <div className="card-body">
          <div className="form-group">
            <input
              type="text"
              name="code"
              value={code}
              className="form-control"
              placeholder="Codigo"
              onKeyDown={handleKeyDownCode}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="text-center">
          <div className="d-flex justify-content-between">
            <Link to="/RecoverPassword" className="cancelar">
              <button className="btn btn-danger mr-2 btn-separation cancelar">
                Atras
              </button>
            </Link>
            <Link to="/ChangePassword">
              <button
                className="btn btn-success iniciar-secion"
                onClick={handleCode}
              >
                Siguiente
              </button>
            </Link>
          </div>
        </div>
      </div>
      <ToastContainerMessage />
    </div>
  );
};
