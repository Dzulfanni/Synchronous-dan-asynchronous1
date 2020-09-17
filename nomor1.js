function newCallback(Adi,Yusuf,pulang){
console.log(Adi, Yusuf)
pulang()
}

function peluang(){
    console.log("pulang kampung")

}
newCallback("Adi", "Yusuf", peluang)

// document.write('tes')