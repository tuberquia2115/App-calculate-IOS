import {useRef, useState} from 'react';
enum Operators {
  sumar,
  restar,
  multiplicar,
  dividir,
}

export const useCalculate = () => {
  const [number, setNumber] = useState('0');
  const [subNumber, setSubNumber] = useState('0');
  const lastOperation = useRef<Operators>();

  const cleanUp = () => {
    setNumber('0');
    setSubNumber('0');
  };

  const buildNumber = (numberText: string) => {
    // no acpetar doble  punto
    if (number.includes('.') && numberText === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      // punto decimal

      if (numberText === '.') {
        setNumber(number + numberText);

        // evaluar si es otro cero y hay un punto
      } else if (numberText === '0' && number.includes('.')) {
        setNumber(number + numberText);

        // evaluar si es diferente de cero y no tiene un punto
      } else if (numberText !== '0' && !number.includes('.')) {
        setNumber(numberText);

        // evitar el 000000.0
      } else if (numberText === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + numberText);
      }
    } else {
      setNumber(number + numberText);
    }
  };

  const positiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else setNumber('-' + number);
  };

  const btnDel = () => {
    if (number.length === 1 || (number.length === 2 && number.includes('-'))) {
      return setNumber('0');
    }
    setNumber(number.slice(0, -1));
  };

  const changeNumberByPrevious = () => {
    if (number.endsWith('.')) {
      return setSubNumber(number.slice(0, -1));
    } else {
      setSubNumber(number);
    }

    setNumber('0');
  };
  const btnDividir = () => {
    changeNumberByPrevious();
    lastOperation.current = Operators.dividir;
  };

  const btnMultiplicar = () => {
    changeNumberByPrevious();
    lastOperation.current = Operators.multiplicar;
  };

  const btnRestar = () => {
    changeNumberByPrevious();
    lastOperation.current = Operators.restar;
  };

  const btnSumar = () => {
    changeNumberByPrevious();
    lastOperation.current = Operators.sumar;
  };

  const calculate = () => {
    const num1 = Number(number);
    const num2 = Number(subNumber);

    switch (lastOperation.current) {
      case Operators.sumar:
        setNumber(`${num1 + num2}`);
        break;
      case Operators.restar:
        setNumber(`${num2 - num1}`);
        break;

      case Operators.multiplicar:
        setNumber(`${num1 * num2}`);
        break;

      case Operators.dividir:
        if (subNumber !== '0') {
          setNumber(`${num2 / num1}`);
        }
        break;
    }

    setSubNumber('0');
  };

  return {
    number,
    subNumber,
    cleanUp,
    positiveNegative,
    btnDel,
    btnDividir,
    buildNumber,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calculate,
  };
};
