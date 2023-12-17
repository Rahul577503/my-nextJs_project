const GetRow = ({ title, label }: { title?: string; label?: string }) => {
  if (!title && !label) return null
  return (
    <div>
      {label && <b>{label}:</b>} {title}
    </div>
  )
}

export default GetRow
