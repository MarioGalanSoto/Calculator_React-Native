require("./../lib/swisscalc-lib/swisscalc.lib.format");
require("./../lib/swisscalc-lib/swisscalc.lib.operator");
require("./../lib/swisscalc-lib/swisscalc.lib.operatorCache");
require("./../lib/swisscalc-lib/swisscalc.lib.shuntingYard");
require("./../lib/swisscalc-lib/swisscalc.display.numericDisplay");
require("./../lib/swisscalc-lib/swisscalc.display.memoryDisplay");
require("./../lib/swisscalc-lib/swisscalc.calc.calculator");

import React from 'react';
import {StyleSheet ,View, Text} from 'react-native';
import { CalcButton } from '../Components';
import CalcDisplay from '../Components/CalcDisplay';


export default class CalculatorScreen extends React.Component{

    constructor(props){
        super(props);

        this.state={
            diplay:"0",
        };

        this.state

        // Initialize calculator
        this.oc = global.swisscalc.lib.operatorCache;
        this.calc = new global.swisscalc.calc.calculator();
            
        
    }

    render(){
        return(
            <View style={styles.container}>

                <View style={styles.displayContainer}>
                    <Text>Calculator Screen</Text>
                    <CalcDisplay display = {this.state.diplay}></CalcDisplay>
                </View>

                

                    <View>

                        <View style={styles.buttonRow}>
                            <CalcButton title = "C" backgroundColor="#393E46" color="#3282B8"></CalcButton>
                            <CalcButton title = "+/-" backgroundColor="#393E46" color="#3282B8"></CalcButton>
                            <CalcButton title = "%" backgroundColor="#393E46" color="#3282B8"></CalcButton>
                            <CalcButton title = "/" backgroundColor="#222831" color="#3282B8"></CalcButton>
                        </View>

                        <View style={styles.buttonRow}>
                            <CalcButton title = "7" backgroundColor="#EEEEEE" color="#3282B8"></CalcButton>
                            <CalcButton title = "8" backgroundColor="#EEEEEE" color="#3282B8"></CalcButton>
                            <CalcButton title = "9" backgroundColor="#EEEEEE" color="#3282B8"></CalcButton>
                            <CalcButton title = "x" backgroundColor="#222831" color="#3282B8"></CalcButton>
                        </View>

                        <View style={styles.buttonRow}>
                            <CalcButton title = "4" backgroundColor="#EEEEEE" color="#3282B8"></CalcButton>
                            <CalcButton title = "5" backgroundColor="#EEEEEE" color="#3282B8"></CalcButton>
                            <CalcButton title = "6" backgroundColor="#EEEEEE" color="#3282B8"></CalcButton>
                            <CalcButton title = "-" backgroundColor="#222831" color="#3282B8"></CalcButton>
                        </View>

                        <View style={styles.buttonRow}>
                            <CalcButton title = "1" backgroundColor="#EEEEEE" color="#3282B8"></CalcButton>
                            <CalcButton title = "2" backgroundColor="#EEEEEE" color="#3282B8"></CalcButton>
                            <CalcButton title = "3" backgroundColor="#EEEEEE" color="#3282B8"></CalcButton>
                            <CalcButton title = "+" backgroundColor="#222831" color="#3282B8"></CalcButton>
                        </View>

                        <View style={styles.buttonRow}>
                            <CalcButton title = "0" backgroundColor="#EEEEEE" color="#3282B8" style={{flex:2}}></CalcButton>
                            <CalcButton title = "." backgroundColor="#EEEEEE" color="#3282B8"></CalcButton>
                            <CalcButton title = "=" backgroundColor="#222831" color="#3282B8"></CalcButton>
                        </View>

                    </View>

            </View>
        )

    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'black',
    },
    displayContainer:{
        flex:1, 
        justifyContent: 'flex-end',
    },
    buttonContainer:{
        paddingBottom: 20,
    },
    buttonRow: {
        flexDirection:'row', 
        justifyContent:'space-between',
    },
});