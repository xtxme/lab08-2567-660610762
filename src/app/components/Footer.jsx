import React from 'react'

export default function Footer(props) {
  return (
    <div className="mt-3">
        <p className="text-secondary text-center">
          copyright © {props.year} {props.fullname} {props.studentid}
        </p>
      </div>
  )
}
