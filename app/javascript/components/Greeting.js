import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreetingsAsync } from '../redux/greetings/greetings';

const Greeting = () => {

  const { greetings } = useSelector((state) => state.greetings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreetingsAsync());
  }, []);

  console.log(greetings);

  return (
    <div>
      <h2>Greetings from above</h2>
    </div>
  )
}

export default Greeting
