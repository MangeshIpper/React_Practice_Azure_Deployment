import {useState} from 'react';


const Content = () => {
    const [name, setName] = useState("Mangesh")


    const handleNameChange = () => {
        const names = ['Mangesh', 'Sangesh', 'Akshay']
        const int = Math.floor(Math.random() * 3)
        setName(names[int]);
      };

      const handleClick = () => {
        console.log("Just clicked")
      }
      
      const handleClick2 = (name) => {
        console.log("Just clicked by", name)
      }
      
      const handleClick3 = (e) => {
        console.log("Just clicked by", e.target.innerText)
      }

    return (
        <main>
            <h1>Hello {name}!</h1>
            <button onClick={handleNameChange}>Click</button>
            <button onClick={() => handleClick2("Mangesh")}>Click it</button>
            <button onClick={(e) => handleClick3(e)}>Mangesh</button>
        </main>
    )
}

export default Content
