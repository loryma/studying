import useTimeout from '../hooks/useTimeout';

function timerCb() {
  alert('Your 5secs are up!');
};

function Timer() {
  
  useTimeout(timerCb, 5000);

  return (
    <div>
      timeout is set for 5 secs
    </div>
  )
};

export default Timer;