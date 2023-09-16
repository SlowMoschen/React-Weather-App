/* eslint-disable react/prop-types */

// Component to create a wrapper if needed
export default function Conatiner({children, className}) {
    return <div className={className}>{children}</div>
}