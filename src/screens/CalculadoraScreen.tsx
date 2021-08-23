import React from 'react';
import {View, Text} from 'react-native';
import ButtomCalc from '../components/ButtomCalc';
import {useCalculate} from '../hooks/useCalculate';
import {styles} from '../theme/appTheme';

export const CalculadoraScreen = () => {
  const {
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
  } = useCalculate();

  return (
    <View style={styles.calculadoraContainer}>
      {subNumber !== '0' && (
        <Text style={styles.subResultado}>{subNumber}</Text>
      )}
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      {/** fila de botones */}
      <View style={styles.row}>
        <ButtomCalc text="C" color="grey" action={cleanUp} />
        <ButtomCalc text="+/-" color="grey" action={positiveNegative} />
        <ButtomCalc text="del" color="grey" action={btnDel} />
        <ButtomCalc text="%" color="naranja" action={btnDividir} />
      </View>
      {/** fila de botones */}
      <View style={styles.row}>
        <ButtomCalc text="7" action={buildNumber} />
        <ButtomCalc text="8" action={buildNumber} />
        <ButtomCalc text="9" action={buildNumber} />
        <ButtomCalc text="x" color="naranja" action={btnMultiplicar} />
      </View>
      {/** fila de botones */}
      <View style={styles.row}>
        <ButtomCalc text="4" action={buildNumber} />
        <ButtomCalc text="5" action={buildNumber} />
        <ButtomCalc text="6" action={buildNumber} />
        <ButtomCalc text="-" color="naranja" action={btnRestar} />
      </View>
      {/** fila de botones */}
      <View style={styles.row}>
        <ButtomCalc text="1" action={buildNumber} />
        <ButtomCalc text="2" action={buildNumber} />
        <ButtomCalc text="3" action={buildNumber} />
        <ButtomCalc text="+" color="naranja" action={btnSumar} />
      </View>
      {/** fila de botones */}
      <View style={styles.row}>
        <ButtomCalc text="0" btnWidth action={buildNumber} />

        <ButtomCalc text="." action={buildNumber} />
        <ButtomCalc text="=" color="naranja" action={calculate} />
      </View>
    </View>
  );
};
