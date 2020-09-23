// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (req,inde,newPresetArray) => {
    retArray=[]
    if(req==='GET'||req==='PUT'){
        if(inde>=0&&inde<=presets.length-1){
            if(req==='GET'){
                retArray[0]=200
                retArray[1] =presets[inde]
            }else if(req==='PUT'){
                retArray[0]=200
                presets[inde]=newPresetArray
                retArray[1]=newPresetArray
            }else{
                retArray[0]=400
            }
        }else{
            retArray[0]=404
        }
    }else{
        retArray[0]=400
    }
    return retArray
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
