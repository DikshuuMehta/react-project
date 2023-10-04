import React, { useState } from "react";
 const UseStateObject = () => {
const [formData, setFormData ] = useState({
username: "",
email: "",
password: "",
confirm_password: "",
        });
        
    return(

            <div className="container p-3 mt-5">
                <div className="card">
                    <h2 className="card-title
                     text-center">Register</h2>
                     <div className="card-body py-md-4">
                        <form>
                            <div className="form-group mb-3">
                                <input type="text" 
                                className="form-control"
                                id="name"
                                name="username"
                                placeholder="Name"
                                autoComplete="off"
                                value= { formData.username }
                                />
                            </div>

                            <div className="form-group mb-3">
                                <input type="email" 
                                className="form-control"
                                id="email"
                                name="email"
                                placeholder="email"
                                autoComplete="off"
                                value= { formData.email }
                                />
                            </div>

                            <div className="form-group mb-3">
                                <input type="password" 
                                className="form-control"
                                id="password"
                                name="password"
                                placeholder="password"
                                autoComplete="off"
                                value= { formData.password }
                                />
                            </div>

                            <div className="form-group mb-3">
                                <input type="password" 
                                className="form-control"
                                id="confirm_password"
                                name="confirm_password"
                                placeholder="confirm_password"
                                autoComplete="off"
                                value= { formData.confirm_password }
                                />
                            </div>

                        </form>
                     </div>
                </div>
            </div>
       
    )
 } ;
 export default UseStateObject;