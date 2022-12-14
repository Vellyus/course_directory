import React from 'react'
import { Course } from './Course'
import { HTMLCourses } from '../../data/courses'

export const CourseContainer = (props) => {
  let courses = props.data.map((course) => {
    return <Course title={ course.title }
      desc={ course.description }
      img={ course.img_src }
      key={ course.id } />
  })
  return (
    <div>
      <ul>
        { courses }
      </ul>
    </div>
  )
}