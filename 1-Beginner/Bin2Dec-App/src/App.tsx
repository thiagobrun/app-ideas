import React from "react";
import { useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

function App() {
  const [binaryNumber, setBinaryNumber] = useState("");
  const [decimalNumber, setDecimalNumber] = useState("");

  const convertBinaryNumber = () => {
    let binaryArray = Array.from(binaryNumber);
    let binaryNumberArray = [];
    let sum = 0;

    for (let i = 0; i < binaryArray.length; i++) {
      binaryNumberArray.push(parseInt(binaryArray[i]));
    }

    for (let j = binaryNumberArray.length - 1; j >= 0; j--) {
      sum += binaryNumberArray[j] * Math.pow(2, j);
    }

    setDecimalNumber(sum.toString());
  };

  const verifyInputNumber = (value: any) => {
    const splittedNumbers = value.split("");

    let isValid = true;

    splittedNumbers.forEach((element: any) => {
      if (Number(element) !== 0 && Number(element) !== 1) {
        isValid = false;
      }
    });

    console.log(isValid);
    return isValid;
  };

  return (
    <div className="m-10">
      <h1 className=" flex font-semibold text-3xl justify-center text-white">BIN2DEC Conversor</h1>
      <div className="justify-center flex mt-6">
        <div className="mt-1 flex rounded-md shadow-sm">
          <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
            Binary
          </span>
          <input
            type="text"
            maxLength={16}
            onChange={(e) => {
              verifyInputNumber(e.target.value) && setBinaryNumber(e.target.value);
            }}
            value={binaryNumber}
            className="rounded-none rounded-r-md border-gray-300 focus:border-gray-500 focus:ring-gray-500 text-2xl"
          />
        </div>

        <BsFillArrowRightCircleFill onClick={convertBinaryNumber} className="text-white text-3xl my-2 mx-5"/>

        <div className="mt-1 flex rounded-md shadow-sm">
          <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
            Decimal
          </span>
          <input
            type="text"
            value={decimalNumber}
            className="rounded-none rounded-r-md border-gray-300 focus:border-gray-500 focus:ring-gray-500 text-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
