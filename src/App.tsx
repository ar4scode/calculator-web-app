import './App.css';
import NumberButton from './components/NumberButton';

function App() {

  return (
    <>
      <div className='bg-white rounded-2xl shadow-2xl p-4'>
        <div className='shadow-md rounded-2xl bg-gray-100 flex justify-end text-5xl text-gray-400 px-5 py-2 mb-4'>
          0
        </div>
        <div className='grid grid-cols-3 gap-5 bg-white p-4'>
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
      </div>
    </>
  )
}

export default App
