import { useState } from 'react';

const Matrix = () => {
  const [boxes, setBoxes] = useState([
    [{ color: 'white' }, { color: 'white' }, { color: 'white' }],
    [{ color: 'white' }, { color: 'white' }, { color: 'white' }],
    [{ color: 'white' }, { color: 'white' }, { color: 'white' }],
  ]);

  const handleClick = (row, col) => {
    const newBoxes = [...boxes];
    newBoxes[row][col].color = 'green';
    setBoxes(newBoxes);

    if (row === 2 && col === 2) {
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          setTimeout(() => {
            const newBoxes = [...boxes];
            newBoxes[i][j].color = 'orange';
            setBoxes(newBoxes);
          }, i * 300 + j * 100);
        }
      }
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', 
      }}
    >
      <div>
        {boxes.map((row, rowIndex) => (
          <div key={rowIndex} style={{ display: 'flex' }}>
            {row.map((box, colIndex) => (
              <div
                key={colIndex}
                style={{
                  width: 90,
                  height: 90,
                  backgroundColor: box.color,
                  border: '1px solid black',
                }}
                onClick={() => handleClick(rowIndex, colIndex)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Matrix;
