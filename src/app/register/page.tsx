'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link"
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();

//   checking if the input was clicked
  const handleNameBlur = () => {
    setNameTouched(true);
  };
  const handleEmailBlur = () => {
    setEmailTouched(true);
  };
  const handlePasswordBlur = () => {
    setPasswordTouched(true);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validate the form
    if (!fullname || !email || !password) {
      alert("Please enter all required fields.");
      return;
    }

    // Register the user
    fetch("", {                   //add api here
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.error){
          setError(true);
        } else {
          setSuccess(true);
            setTimeout(() => {
              setSuccess(false);
              router.push("/");
          }, 3000);
        }
      })
      .catch(error => {
        if (error.status === 404) {
          setError(true);
        } else {
          setError(true);
        }
      });
  };

  return (
    <div className="container flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-center text-2xl font-bold text-black">Register</h1>

      <form onSubmit={onSubmit} className="w-full max-w-lg">
        <div className="form-group flex flex-col mt-4">
          <label htmlFor="fullname" className="text-sm font-bold mb-2 text-black">Full Name</label>
          <input
            type="text"
            className="form-control w-full bg-gray-200 p-2 rounded-md border-gray-300 text-black"
            id="fullname"
            value={fullname}
            onChange={e => setFullName(e.target.value)}
            onBlur={handleNameBlur}
            required
          />
          {nameTouched && fullname.length === 0 && <p className="text-red-600">This field is required. Write your full name</p>}
        </div>
        <div className="form-group flex flex-col mt-4">
          <label htmlFor="email" className="text-sm font-bold mb-2 text-black">Email</label>
          <input
            type="email"
            className="form-control w-full bg-gray-200 p-2 rounded-md border-gray-300 text-black"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            onBlur={handleEmailBlur}
            required
          />
          {emailTouched && email.length === 0 && <p className="text-red-600">This field is required. Write your email</p>}
        </div>
        <div className="form-group flex flex-col mt-4">
          <label htmlFor="password" className="text-sm font-bold mb-2 text-black">Password</label>
          <input
            type="password"
            className="form-control w-full bg-gray-200 p-2 rounded-md border-gray-300 text-black"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onBlur={handlePasswordBlur}
            required
          />
        </div>
        {passwordTouched && password.length < 8 && <p className="text-red-600">This field is required. 
type a password with 8 or more characters
</p>}
        <button type="submit" className="w-full h-12 btn btn-primary bg-black rounded-md mt-6">Register</button>
        <div className="flex my-6 space-x-48 text-lg">
            <Link href="/" className="btn btn-outline-primary text-black underline">Home</Link>
            <Link href="/login" className="btn btn-outline-primary text-black underline">Login</Link>
            <Link href="/faq" className="btn btn-outline-primary text-black underline">FAQ</Link>
        </div>
      </form>
      {success && (
        <div className="bg-green-500 p-4 rounded-md w-1/4 fixed z-50">
          <div className="flex justify-between items-center">
            <strong>¡Registro exitoso!</strong>
            <button className="btn btn-danger" onClick={() => setSuccess(false)}>Cerrar</button>
          </div>
          <p className="mt-4">El usuario se registró correctamente.</p>
        </div>
      )}
      {error && (
        <div className="bg-red-500 p-4 rounded-md w-1/4 fixed z-50">
          <div className="flex justify-between items-center">
            <strong>¡Error!</strong>
            <button className="btn btn-danger" onClick={() => setError(false)}>Cerrar</button>
          </div>
          <p className="mt-4">Hubo un error al registrar el usuario.</p>
        </div>
      )}
    </div>
  );
};

export default RegisterPage;