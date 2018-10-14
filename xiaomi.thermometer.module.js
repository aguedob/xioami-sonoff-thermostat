module.exports.init = function (config) {
  
    var state =         
    {
        temperature: 20.0,         // Current Temperature 
        tarTemperature: 25.2,      // Target Temperature 
        heatThreshold: 30.2,       // Heat Threshold 
        coolThreshold: 22.1,       // Cool Threshold 
        humidity: 23.3,            // Current Humidity
        units: 0,                  // 0 to SET Celsius 1 to SET Fahrenheit 
        currentState: 0,           // 0 OFF 1 HEAT 2 COOL
        targetState: 0,            // 0 OFF 1 HEAT 2 COOL 3 AUTO

    }

    return {

        getInfo: () => {
            return { "temperature": state.temperature, 
                        "tarTemperature": state.tarTemperature,
                        "heatThreshold": state.heatThreshold,
                        "coolThreshold": state.coolThreshold,
                        "humidity": state.humidity,
                        "units": state.units
                    }
        },

        getStatus: () => {
            return {
                    "currentState": state.currentState,
                    "targetState": state.targetState
            }
        },

        setTargetState: (targetState) => {
            state.targetState = parseInt(targetState);
            return true;
        },

        setTargetTemperature: (temperature) => {
            state.tarTemperature = parseFloat(temperature);
            return true;
        },

        setHeatThreshold: (temperature) => {
            state.heatThreshold = parseFloat(temperature);
            return true;
        },

        setCoolThreshold: (temperature) => {
            state.coolThreshold = parseFloat(temperature);
            return true;
        },



    }
}