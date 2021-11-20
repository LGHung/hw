class bank{
    constructor(bankcode , bankname , cash){
        this.bankcode = bankcode,
        this.bankname = bankname,
        this.cash = cash
    }
    insert(cashinsert){
        if(cashinsert < 0 ){
            alert("invalid")
        }
        else{
            this.cash = this.cash -+- cashinsert
        }
    }
    draw(cashdraw){
        if(cashdraw < 0){
            alert("invalid")
        }
        else if(cashdraw > this.cash){
            alert("invalid")
        }
        else{
            this.cash = this.cash - cashdraw
        }
    }

    daohan(){
        const LAISUAt = 0.035
        this.cash = this.cash + this.cash*LAISUAt
    }

    sendcash( recieve , cashgive){
        if(cashgive < 0){
            alert("invalid")
        }
        else if(cashgive > this.cash){
            alert("invalid")
        }
        else{
            this.draw(cashgive)
            recieve.insert(cashgive)
        }
    }

    toString(){
        console.log(
            `
            code : ${this.bankcode}
            name : ${this.bankname}
            cash : ${this.cash}
            `
        )
    }
}


let group = []
let acc1 = new bank(0, 10, 10)
let acc2 = new bank(1, 20, 20)
group.push(acc1)
group.push(acc2)
console.log(group)

let accname = document.getElementById("yourname")
let acccode = document.getElementById("yourcode")
let acccash = document.getElementById("yourcash")
let number = ""

function changeaccount(x){
    accname.innerHTML = group[x].bankname
    acccode.innerHTML = group[x].bankcode
    acccash.innerHTML = group[x].cash
    number = x
}
function ruttien(){
    let tienrut = prompt("So tien rut")
    group[number].draw(tienrut)
    changeaccount(number)
}
function naptien(){
    let tiennap = prompt("So tien nap")
    group[number].insert(tiennap)
    changeaccount(number)
    console.log(group[number])
}
function chuyentien(){
    let codenhan = prompt("enter bank code")
    let tiengui = prompt("Lựa chọn tiền gửi")
    group[number].sendcash( group[codenhan], tiengui)
    changeaccount(number)
    changeaccount(codenhan)
}