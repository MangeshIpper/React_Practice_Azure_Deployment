const Content = () => {
    const handleNameChange = () => {
        const names = ['Mangesh', 'Sangesh', 'Akshay']
        const int = Math.floor(Math.random() * 3)
        return names[int]
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
            <h1>Hello {handleNameChange()}!</h1>
            <button onClick={handleClick}>Click</button>
            <button onClick={() => handleClick2("Mangesh")}>Click it</button>
            <button onClick={(e) => handleClick3(e)}>Mangesh</button>
        </main>
    )
}

export default Content
