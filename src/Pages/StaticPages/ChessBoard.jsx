import React from 'react';

const ChessBoard = () => {
  const rows = ['8', '7', '6', '5', '4', '3', '2', '1'];
  const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  return (
    <div className="flex flex-wrap justify-center">
      {rows.map((row) => (
        <div className="flex" key={row}>
          <div className="w-10 text-center font-bold">{row}</div>
          {columns.map((column) => (
            <div
              className={`w-10 h-10 bg-gray-400 border border-gray-600`}
              key={column}
            ></div>
          ))}
        </div>
      ))}
      <div className="flex w-64 mt-10">
        <div className="w-10"></div>
        {columns.map((column) => (
          <div className="w-10 text-center font-bold" key={column}>
            {column}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChessBoard;
