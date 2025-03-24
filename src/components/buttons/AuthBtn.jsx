import React from 'react'
import { Link } from 'react-router-dom'

function AuthBtn() {
  return (
    <Link to="/auth">
    <span className="flex items-center text-gray-500 h-12">
      <img src="profile.svg" />
      <p className="mr-1 text-sm">دیوار من</p>
    </span>
  </Link>
  )
}

export default AuthBtn