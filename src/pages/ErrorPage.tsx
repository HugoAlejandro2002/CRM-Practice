import React from 'react';
import loco from '../assets/simpsoncrazy404.jpg';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <h1>Error</h1>
      <div className="max-w-md mx-auto">
        <img src={loco} alt="Loco en Internet" className="w-full" />
      </div>
    </div>
  );
};

export default ErrorPage;
