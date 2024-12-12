import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {


  const [mainData, setMainData] = useState([])

  useEffect(() => {
    const fetchData = async () => {

      const response = await fetch("https://jsonplaceholder.typicode.com/posts")
      const data = await response.json()


      setMainData(data);

    }
    fetchData()

  }, [])


  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">

        {mainData.map((element) => {
          return (
            <div key={element.id}>
              <Card id={element.id} title={element.title} body={element.body} />
            </div>
          )

        })}

      </div>
    </>
  )
}

export default App
