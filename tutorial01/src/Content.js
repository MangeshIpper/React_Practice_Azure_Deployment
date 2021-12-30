const Content = () => {
    const handleNameChange = () => {
        const names = ['Mangesh', 'Sangesh', 'Akshay']
        const int = Math.floor(Math.random() * 3)
        return names[int]
      }
    return (
        <main>
            <h1>Hello {handleNameChange()}!</h1>
        </main>
    )
}

export default Content
