
import { useEffect, useState } from "react";

const MatrixRain = () => {
  const [columns, setColumns] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const createRain = () => {
      const screenWidth = window.innerWidth;
      const numberOfColumns = Math.floor(screenWidth / 20); // Adjust for density
      const newColumns: JSX.Element[] = [];
      
      for (let i = 0; i < numberOfColumns; i++) {
        const left = `${(i * 20) + Math.random() * 10}px`;
        const animationDuration = `${3 + Math.random() * 5}s`;
        const animationDelay = `${Math.random() * 2}s`;
        const character = Math.random() > 0.5 ? "1" : "0";
        
        newColumns.push(
          <div 
            key={i}
            className="matrix-column"
            style={{
              left,
              animationDuration,
              animationDelay,
              opacity: Math.random() * 0.5 + 0.1
            }}
          >
            {character}
          </div>
        );
      }
      
      setColumns(newColumns);
    };

    createRain();
    
    window.addEventListener("resize", createRain);
    return () => window.removeEventListener("resize", createRain);
  }, []);

  return <div className="matrix-wrapper">{columns}</div>;
};

export default MatrixRain;
