import './App.css';
import NumberButton from './components/NumberButton';

function App() {

  return (
    <>
      <div className='grid grid-cols-3 gap-5'>
        <NumberButton number={7}/>
        <NumberButton number={8}/>
        <NumberButton number={9}/>
        <NumberButton number={4}/>
        <NumberButton number={5}/>
        <NumberButton number={6}/>
        <NumberButton number={1}/>
        <NumberButton number={2}/>
        <NumberButton number={3}/>
        <NumberButton number={0}/>
      </div>
    </>
  )
}

export default App
