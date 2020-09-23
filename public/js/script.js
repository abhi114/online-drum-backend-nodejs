// Drum Arrays
let kicks=[]
let snares=[]
let hiHats=[]
let rideCymbals=[]
for(let i=0;i<=15;i++){
    kicks[i]=false
    snares[i]=false
    hiHats[i]=false
    rideCymbals[i]=false
}
const toggleDrum =(str,ind)=>{
    if(ind>=0&&ind<=16){
        if(str==='kicks'){
            kicks[ind]=!kicks[ind]
        }else if(str==='snares'){
            snares[ind]=!snares[ind]
        }else if(str==='hiHats'){
            hiHats[ind]=!hiHats[ind]
        }else if(str==='rideCymbals'){
            rideCymbals[ind]=!rideCymbals[ind]
        }
    }
    
}
const clear=(arrayName)=>{
    if(arrayName==='kicks'){
        for(let i=0;i<kicks.length;i++){
            kicks[i]=false
        }
    }else if(arrayName==='snares'){
        for(let j=0;j<snares.length;j++){
            snares[j]=false
        }
    }else if(arrayName==='hiHats'){
        for(let k=0;k<hiHats.length;k++){
            hiHats[k]=false
        }
    }else if(arrayName==='rideCymbals'){
        for(let l=0;l<rideCymbals.length;l++){
            rideCymbals[l]=false
        }
    }
}
const invert=(arry)=>{
    if(arry==='kicks'){
        for(let i=0;i<kicks.length;i++){
            kicks[i]=!kicks[i]
        }
    }else if(arry==='snares'){
        for(let j=0;j<snares.length;j++){
            snares[j]=!snares[j]
        }
    }else if(arry==='hiHats'){
        for(let k=0;k<hiHats.length;k++){
            hiHats[k]=!hiHats[k]
        }
    }else if(arry==='rideCymbals'){
        for(let l=0;l<rideCymbals.length;l++){
            rideCymbals[l]=!rideCymbals[l]
        }
    }

}

const getNeighborPads=(x,y,size)=>{
   const neighborPads=[];
   if(x>=size||y>=size||x<0||y<0||size<1){
       return neighborPads
   }
   neighborPads.push([x-1,y])
   neighborPads.push([x,y-1])
   neighborPads.push([x+1,y])
   neighborPads.push([x,y+1])
   return neighborPads.filter((neighbor)=>{
       return neighborPads.every((val)=>{
           return val>=0 &&val<size;
       })
   })
    
}