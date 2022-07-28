require("./../lib/swisscalc-lib/swisscalc.lib.format.js");
require("./../lib/swisscalc-lib/swisscalc.lib.operator.js");
require("./../lib/swisscalc-lib/swisscalc.lib.operatorCache.js");
require("./../lib/swisscalc-lib/swisscalc.lib.shuntingYard.js");
require("./../lib/swisscalc-lib/swisscalc.display.numericDisplay.js");
require("./../lib/swisscalc-lib/swisscalc.display.memoryDisplay.js");
require("./../lib/swisscalc-lib/swisscalc.calc.calculator.js");

import React from 'react';
import {StyleSheet ,View, PanResponder} from 'react-native';
import { CalcButton, CalcDisplay} from './../Components';


export default class CalculatorScreen extends React.Component{

    constructor(props){
        super(props);

        this.state={
         display:"0",
        };


        
        // Initialize calculator
        this.oc = global.swisscalc.lib.operatorCache;
        this.calc = new global.swisscalc.calc.calculator();

        // Initialize panResponder

        // this.panResponder = PanResponder.create=({

        //     onStartShouldSetPanResponder: (evt, gestureState) => true,
        //     onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
        //     onMoveShouldSetPanResponder: (evt, gestureState) => true,
        //     onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
        //     onPanResponderRelease: (evt, gestureState) => {
        //         if(Math.abs(gestureState.dx) >= 50){
        //             this.onBackSpacePress();
        //         }
        //       },
        // });
    }

    
    //When a numeric button is pressed -> add the digit to the main display
    onDigitPress=(digit)=>{
        this.calc.addDigit(digit);
        this.setState({display: this.calc.getMainDisplay()});
    }

    //when there is a swipe on the main display -> delete item
    // onBackSpacePress=()=>{
    //     this.calc.backspace();
    //     this.setState({display: this.calc.getMainDisplay()});
    // }

    //When C is pressed -> Clear all the items from the main display
    onClearPress=()=>{
        this.calc.clear();
        this.setState({display: this.calc.getMainDisplay()});
    }
    
    // When +/- is pressed -> change the sign (positive or negative)
    onPlusMinusPress=()=>{
        this.calc.negate();
        this.setState({display: this.calc.getMainDisplay()});
    }

    //When % button is pressed
    onUnaryOperatorPress=(op)=>{
        this.calc.addUnaryOperator(op);
        this.setState({display: this.calc.getMainDisplay()});
    }

    // When a binarry Operator button is pressed (+  -  /  x) -> call the funtion to operate
    onBinaryOperatorPress=(op)=>{
        this.calc.addBinaryOperator(op);
        this.setState({display: this.calc.getMainDisplay()});
    }

    //When the equal button is pressed -> call the equalPressed funtion and show the result on main display
    onEqualPress=()=>{
        this.calc.equalsPressed();
        this.setState({display: this.calc.getMainDisplay()});
    }

    render(){

        return(
            <View style={styles.container}>

                {/* add to view {...this.panResponder.panHandlers} */}
                <View style={styles.displayContainer} >

                    <CalcDisplay display = {this.state.display} />

                </View>

                

                    <View style = {styles.buttonContainer}>

                        <View style={styles.buttonRow}>
                            <CalcButton onPress = {this.onClearPress} title = "C" backgroundColor="#393E46" color="#3282B8"></CalcButton>
                            <CalcButton onPress = {this.onPlusMinusPress} title = "+/-" backgroundColor="#393E46" color="#3282B8"></CalcButton>
                            <CalcButton onPress={() => {this.onUnaryOperatorPress(this.oc.PercentOperator)}} title = "%" backgroundColor="#393E46" color="#3282B8"></CalcButton>
                            <CalcButton onPress = {() => {this.onBinaryOperatorPress(this.oc.DivisionOperator)}} title = "/" backgroundColor="#222831" color="#3282B8"></CalcButton>
                        </View>

                        <View style={styles.buttonRow}>
                            <CalcButton onPress= {()=>{this.onDigitPress("7")}} title = "7" backgroundColor="#EEEEEE" color="#3282B8"></CalcButton>
                            <CalcButton onPress= {()=>{this.onDigitPress("8")}} title = "8" backgroundColor="#EEEEEE" color="#3282B8"></CalcButton>
                            <CalcButton onPress= {()=>{this.onDigitPress("9")}} title = "9" backgroundColor="#EEEEEE" color="#3282B8"></CalcButton>
                            <CalcButton onPress = {() => {this.onBinaryOperatorPress(this.oc.MultiplicationOperator)}} title = "x" backgroundColor="#222831" color="#3282B8"></CalcButton>
                        </View>

                        <View style={styles.buttonRow}>
                            <CalcButton onPress= {()=>{this.onDigitPress("4")}} title = "4" backgroundColor="#EEEEEE" color="#3282B8"></CalcButton>
                            <CalcButton onPress= {()=>{this.onDigitPress("5")}} title = "5" backgroundColor="#EEEEEE" color="#3282B8"></CalcButton>
                            <CalcButton onPress= {()=>{this.onDigitPress("6")}} title = "6" backgroundColor="#EEEEEE" color="#3282B8"></CalcButton>
                            <CalcButton onPress = {() => {this.onBinaryOperatorPress(this.oc.SubtractionOperator)}} title = "-" backgroundColor="#222831" color="#3282B8"></CalcButton>
                        </View>

                        <View style={styles.buttonRow}>
                            <CalcButton onPress= {()=>{this.onDigitPress("1")}} title = "1" backgroundColor="#EEEEEE" color="#3282B8"></CalcButton>
                            <CalcButton onPress= {()=>{this.onDigitPress("2")}} title = "2" backgroundColor="#EEEEEE" color="#3282B8"></CalcButton>
                            <CalcButton onPress= {()=>{this.onDigitPress("3")}} title = "3" backgroundColor="#EEEEEE" color="#3282B8"></CalcButton>
                            <CalcButton onPress = {() => {this.onBinaryOperatorPress(this.oc.AdditionOperator)}} title = "+" backgroundColor="#222831" color="#3282B8"></CalcButton>
                        </View>

                        <View style={styles.buttonRow}>
                            <CalcButton onPress= {()=>{this.onDigitPress("0")}} title = "0" backgroundColor="#EEEEEE" color="#3282B8" style={{flex:2}}></CalcButton>
                            <CalcButton onPress= {()=>{this.onDigitPress(".")}} title = "." backgroundColor="#EEEEEE" color="#3282B8"></CalcButton>
                            <CalcButton onPress = {this.onEqualPress} title = "=" backgroundColor="#222831" color="#3282B8"></CalcButton>
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