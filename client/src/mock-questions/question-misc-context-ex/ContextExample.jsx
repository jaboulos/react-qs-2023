import { useState } from "react";
import { useNavigate } from "react-router";

import { Login } from "./Login";

export const ContextExample = () => {
  const navigate = useNavigate()
  const goBack = () => navigate('/')
  return (
    <div>
      <button onClick={goBack}>Back</button>
      <Login />
    </div>
  )
}