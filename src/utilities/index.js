function handleStudentName(studentName) {
  if (studentName.includes('(')) return studentName.split('(')[0].toUpperCase().slice(0, 19)
  else if (studentName.includes('9')) return studentName.split('9')[0].toUpperCase().slice(0, 19)
  else return studentName.slice(0, 19)
}

export { handleStudentName }
