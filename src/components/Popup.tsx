import { useEffect, useState } from 'react';
import '../style/popup.css';
export const Popup = ()=>{
  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {isOpen && (
        <div className="popup flex justify-center items-center ">
          <span className="text-red-950 text-6xl font-serif font-extrabold text-center">
            Game <br />
            started !
          </span>
        </div>
      )}
    </>
  );
}   