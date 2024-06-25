import './App.css'
import { Card } from './components/Card'

function App() {

  const cardProps = {
      title: 'Card title',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content',
      buttonText: 'Go somewhere'
  }

  return (
    <>
      <Card {...cardProps}></Card>
      <Card {...cardProps}>
        <img src='https://logos.flamingtext.com/Name-Logos/Cap-design-china-name.png'></img>
      </Card>

    </>
  )
}

export default App
