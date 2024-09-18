import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>Hello rapper</h3> {count}
  <button onClick={()=> setCount(count+1)}>plus +</button>
    </>
  )
}

export default App
