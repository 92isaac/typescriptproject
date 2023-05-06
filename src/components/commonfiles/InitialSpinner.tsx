import React from 'react';
import GridLoader from 'react-spinners/GridLoader';

type InitialSpinnerProps = {
  load: boolean;
};

const InitialSpinner: React.FC<InitialSpinnerProps> = ({ load }) => {
  const color = '#DC9402';

  return (
    <div className='h-screen flex justify-center align-middle'>
      <GridLoader color={color} loading={load} size={10} />
    </div>
  );
};

export default InitialSpinner;

