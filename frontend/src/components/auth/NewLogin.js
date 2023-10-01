// import React, { useState } from 'react'

// const NewLogin = () => {
//     const[data,newData] = useState({
//         email: "",
//         password: "",
//         cpassword: "",
//         name: "",
//         photo: ""
//     })
//     const handleSignUp = ()=>{
      
//     }
//     const setdata = () =>{
//         console.log(e.target.value);
//         const {name,value} = e.target;
//         newData((pre)=>{
//             return{
//                 ...pre,
//                 [name]:value
//             }
//         })
//     }

//   return (
//     <form>
//     <div className="mb-3">
//       <label className="form-label" name="email" onChange={setdata}>Email address</label>
//       <input type="email" className="form-control" />
//     </div>
//     <div className="mb-3">
//       <label className="form-label" name="password" onChange={setdata}>Password</label>
//       <input type="password" className="form-control" />
//     </div>
//     <div className="mb-3">
//       <label className="form-label" name="Cpassword" onChange={setdata}>Confirm Password</label>
//       <input type="password" className="form-control" />
//     </div>
//     <div className="mb-3">
//       <label className="form-label" name="name" onChange={setdata}>Full Name</label>
//       <input type="text" className="form-control" />
//     </div>
//     <div className="mb-3">
//       <label className="form-label" name="photo" onChange={setdata}>Photo URL</label>
//       <input type="text" className="form-control" />
//     </div>
//     <button type="submit" className="btn btn-primary" style={{ background: "black" }} onClick={handleSignUp}>SignUp</button>
//     <p><b>Already a User ? </b><a href='login' style={{ textDecoration: "none", color: "white", fontWeight: "500" }}> SignIn</a></p>
//   </form>
//   )
// }

// export default NewLogin