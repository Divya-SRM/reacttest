import React, { useState } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';


export default function Login() {
  
  const validationSchema = Yup.object({
    username: Yup.string().required("User Name is mandatory"),
    userid: Yup.string().required("Password is mandatory"),
    dob: Yup.string().required("dob is mandatory"),
    email: Yup.string().required("email is mandatory"),
    phone: Yup.string().required("phone is mandatory")
   
  })
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      username: '',
      userid: '',
      accounttype: '',
      phone:'',
      email:''
    },
    validationSchema,
    onSubmit(values) {
      axios.post("http://localhost:4000/register", values)
      .then(result =>
         {
            alert("user added successfully");
            console.log("=============Submitted");
            console.log(result.status);
            alert("user added successfully")

      }
      ).catch((err) => {
        console.log("err")
      })
    }

  })
  
  




  return (
    <div>

      <div className="container-md ">
        <div className="col-sm-13">
          <div className="card">
            <div className="card-header"><h4>Registeration</h4></div>
            <form  onSubmit={handleSubmit} noValidate>
              <div class="form-row">
                <div class="col-md-4 mb-3">
                  <label for="validationDefault01">User Name</label>
                  <input type="text" class="form-control" id="validationDefault01" name="username" value={values.username} onChange={handleChange} />
                  {errors.username ? errors.username : null}
                </div>

                <div class="col-md-4 mb-3">
                  <label for="validationDefault02">User Id</label>
                  <input type="text" class="form-control" id="validationDefault02" name="userid" value={values.userid} onChange={handleChange} />
                  {errors.userid ? errors.userid : null}
                </div>
                <div class="col-md-4 mb-3">
                  <label for="validationDefault02">Account Type</label>
                  <input type="text" class="form-control" id="validationDefault02" name="accounttype" value={values.productName} onChange={handleChange} />
                  {errors.accounttype ? errors.accounttype : null}
                </div>
                <div class="col-md-4 mb-3">
                  <label for="validationDefault02">Email</label>
                  <input type="text" class="form-control" id="validationDefault02" name="email" value={values.email} onChange={handleChange} />
                  {errors.email ? errors.email : null}
                </div>
                <div class="col-md-4 mb-3">
                  <label for="validationDefault02">Phone</label>
                  <input type="text" class="form-control" id="validationDefault02" name="phone" value={values.phone} onChange={handleChange} />
                  {errors.phone ? errors.phone : null}
                </div>
                <div class="col-md-4 mb-3">
                  <label for="validationDefault02">Dob</label>
                  <input type="Date" class="form-control" id="validationDefault02" name="dob" value={values.dob} onChange={handleChange} />
                  {errors.dob ? errors.dob : null}
                </div>
                <div class="col-md-4 mb-3">
                <button class="btn btn-primary" type="submit" >Login</button>
                </div>
              </div>

              

              

            </form>
          </div></div></div></div>

  )
}