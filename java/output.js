
function Wattage()
{
    document.getElementById("outputwattage").innerHTML = (generateRandomwattage()) ;
}

function generateRandomwattage(min = 600, max = 1000){
    let difference = max - min;
    let rand = Math.random(); 
    rand = Math.floor( rand * difference);
    rand = rand + min;
    return rand;
}




const CPU = document.querySelector("#CPU");
const AMDsocket = document.querySelector("#AMDsocket");
const SocketAM4 = document.querySelector("#SocketAM4");
const SocketTR4 = document.querySelector("#SocketTR4");
const INTELSocket = document.querySelector("#INTELSocket");
const SocketLGA1700 = document.querySelector("#SocketLGA1700");
const SocketLGA1200 = document.querySelector("#SocketLGA1200");
const GPU = document.querySelector("#GPU");
const AMDGPU = document.querySelector("#AMDGPU");
const NVIDIAGPU = document.querySelector("#NVIDIAGPU");

CPU.addEventListener("change", function(){
        let CPUValue = CPU.options[CPU.selectedIndex].value;
        console.log(CPUValue);

        if (CPUValue == "AMD") {
            console.log(CPUValue);
            AMDsocket.removeAttribute("disabled");
        } else {
            AMDsocket.setAttribute("disabled", "");
        }
    });

AMDsocket.addEventListener("change", function(){
    let AMDsocketValue = AMDsocket.options[AMDsocket.selectedIndex].value;
    console.log(AMDsocketValue);

    if (AMDsocketValue == "SocketAM4") {
          console.log(AMDsocketValue);
          SocketAM4.removeAttribute("disabled");
    } else{
        SocketAM4.setAttribute("disabled", "");
    }
});

AMDsocket.addEventListener("change", function(){
    let AMDsocketValue = AMDsocket.options[AMDsocket.selectedIndex].value;
    console.log(AMDsocketValue);

    if (AMDsocketValue == "SocketTR4") {
          console.log(AMDsocketValue);
          SocketTR4.removeAttribute("disabled");
    } else{
        SocketTR4.setAttribute("disabled", "");
    }
});

CPU.addEventListener("change", function(){
    let CPUValue = CPU.options[CPU.selectedIndex].value;
    console.log(CPUValue);

    if (CPUValue == "INTEL") {
        console.log(CPUValue);
        INTELSocket.removeAttribute("disabled");
    } else {
        INTELSocket.setAttribute("disabled", "")
    }


})

INTELSocket.addEventListener("change", function(){
    let INTELSocketValue = INTELSocket.options[INTELSocket.selectedIndex].value;
    console.log(INTELSocketValue);

    if (INTELSocketValue == "SocketLGA1700") {
        console.log(INTELSocketValue);
        SocketLGA1700.removeAttribute("disabled");   
    } else{
        SocketLGA1700.setAttribute("disabled", "")
    }

})

INTELSocket.addEventListener("change", function(){
    let INTELSocketValue = INTELSocket.options[INTELSocket.selectedIndex].value;
    console.log(INTELSocketValue);

    if (INTELSocketValue == "SocketLGA1200") {
        console.log(INTELSocketValue);
        SocketLGA1200.removeAttribute("disabled");
    } else {
        SocketLGA1200.setAttribute("disabled", "");
    }
})

GPU.addEventListener("change", function(){
    let GPUValue = GPU.options[GPU.selectedIndex].value;
    console.log(GPUValue);

    if (GPUValue == "AMDGPU"){
        console.log(GPUValue);
        AMDGPU.removeAttribute("disabled");
    } else {
        AMDGPU.setAttribute("disabled","")
    }
})

GPU.addEventListener("change", function(){
    let GPUValue = GPU.options[GPU.selectedIndex].value;
    console.log(GPUValue);

    if (GPUValue == "NVIDIAGPU"){
        console.log(GPUValue);
        NVIDIAGPU.removeAttribute("disabled");
    } else {
        NVIDIAGPU.setAttribute("disabled","")
    }
})

