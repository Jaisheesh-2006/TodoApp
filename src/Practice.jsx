

export const Practice = () => {
    const students=[1]
  return (
    <>
      <h1>Interview </h1>
      <p>{students.length===0 && "No students"}</p>
      <p>Number of students:{students.length} </p>
    </>
  )
}


