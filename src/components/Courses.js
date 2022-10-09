import React from 'react'
import { useEffect } from 'react'
import { Routes, Route, NavLink, useLocation, useNavigate } from 'react-router-dom'
// import { CSS } from "./courses/CSS"
// import { JavaScript } from "./courses/JavaScript"
import { NotFound } from './NotFound'
import { HTMLCourses, CSSCourses, JSCourses } from "../data/courses"
import { CourseContainer } from "./courses/CourseContainer"

export const Courses = () => {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === "/courses") navigate("/courses/html")
  })

  return (
    < div className="main-content courses" >
      <div className="course-header group">
        <h2>Courses</h2>
        <ul className="course-nav">
          <li><NavLink to='/courses/html'>HTML</NavLink></li>
          <li><NavLink to='/courses/css'>CSS</NavLink></li>
          <li><NavLink to='/courses/javascript'>JavaScript</NavLink></li>
        </ul>
      </div>

      <Routes>
        <Route path="/html" element={ <CourseContainer data={ HTMLCourses } /> } />
        <Route path="/css" element={ <CourseContainer data={ CSSCourses } /> } />
        <Route path="/javascript" element={ <CourseContainer data={ JSCourses } /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </div >
  )
}
