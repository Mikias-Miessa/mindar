import React, { useEffect } from 'react';
import './App.css';
import MindARViewer from './mindar-viewer';
import image from './assets/image1.png';

function App() {
  useEffect(() => {
    const videoElement = document.querySelector('video');
    if (videoElement) {
      videoElement.style.position = 'absolute';
      videoElement.style.top = '0';
      videoElement.style.left = '0';
      videoElement.style.zIndex = '10';
      videoElement.style.width = '100%';
      videoElement.style.height = '100%';
      videoElement.style.objectFit = 'cover';
    }
  }, []);

  return (
    <div className='bg-[#f9e8d6] h-screen w-full p-6'>
      <div className='flex justify-between mt-10'>
        <div>
          <h1 className='text-4xl font-bold tracking-tighter text-[#151547]'>
            SCAN QR TO
          </h1>
          <h1 className='text-4xl font-bold tracking-tighter text-[#151547]'>
            CONNECT
          </h1>
        </div>

        <div>
          <img src={image} alt='first page img' className='w-20 h-auto' />
        </div>
      </div>

      <div className='w-full h-2/3 flex justify-center items-center'>
        <div className='z-50 relative h-[400px] w-[400px]'>
          <MindARViewer />

          <video autoPlay muted playsInline></video>
        </div>
      </div>
    </div>
  );
}

export default App;
