import React from 'react'
import { connect } from 'react-redux'
import { decrement, increment } from '../redux/counter/actions'

const Counter = ({count, increment, decrement}) => {
  return (
    <div className=' bg-white p-10'>
        <h2 className='text-xl font-medium text-center'>{count}</h2>
        <div className='space-x-5 mt-10'>
            <button onClick={increment} className=' focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 hover:bg-indigo-700  bg-indigo-600 text-white text-base font-normal px-6 py-2 rounded-3xl' type='button'>Increment</button>
            <button onClick={decrement} className='focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 hover:bg-indigo-700  bg-indigo-600 text-white text-base font-normal px-6 py-2 rounded-3xl' type='button'>Decrement</button>
        </div>
    </div>
  )
}

const mapStatetoProps = (state) => {
       return {
         count: state.value,
       }
}


const mapDispatchToProps = (dispatch) => {
  return {
      increment: () => dispatch(increment()),
      decrement: () => dispatch(decrement())
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Counter);
