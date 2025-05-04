import './App.css';
import NumberButton from './components/NumberButton';

function App() {

  return (
    <>
      <div className='bg-white rounded-2xl shadow-2xl p-4'>
        <div className='shadow-md rounded-2xl bg-gray-100 flex justify-end text-5xl text-gray-400 px-5 py-2 my-8'>
          0
        </div>
        <div className='grid grid-cols-4 gap-4 bg-white p-2 md:p-4 md:gap-6'>
          <NumberButton label="clr"/>
          <NumberButton label="Del"/>
          <NumberButton label="%"/>
          <NumberButton label="/"/>

          <NumberButton label={7}/>
          <NumberButton label={8}/>
          <NumberButton label={9}/>
          <NumberButton label="*"/>

          <NumberButton label={4}/>
          <NumberButton label={5}/>
          <NumberButton label={6}/>
          <NumberButton label="-"/>

          <NumberButton label={1}/>
          <NumberButton label={2}/>
          <NumberButton label={3}/>
          <NumberButton label="+"/>

          <NumberButton label={0}/>
          <NumberButton label="."/>
          <NumberButton label="="/>
        </div>
      </div>
    </>
  )
}

export default App
