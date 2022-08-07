document.addEventListener("DOMContentLoaded", () =>{

let tbody = document.querySelector(".tbody")
let expenseDiv = document.querySelector(".expenseDiv")
let spentDiv = document.querySelector(".spentDiv")
let table = document.querySelector("table")
let body = document.querySelector("body")
let thead= document.querySelector("thead")
let thr= document.querySelector("tr")
let form = document.querySelector("form")
let addItemButton = document.querySelector("#addItem")
let name = document.querySelector("#description")
let amount = document.querySelector("#amount")
let date = document.querySelector("#date")
let amountBudgeted = document.querySelector("#amountBudgeted")
let clearItem = document.querySelector("#clearItem")
let spentArray = []
let expenseArray = []
let x = -1

function addItem(e) {
    e.preventDefault()
    table.style.visibility = "visible"
    //empty field alert
    if(name.value ==="" || amount.value ==="" || date.value ===""){
        let span = document.createElement("span")
        span.innerText = "Please enter field value"
        form.parentNode.insertBefore(span, form)
        setTimeout(() =>{
            span.remove()}, 1000)
    } else{
        x++
        let trow = document.createElement("tr")
        let tdata = document.createElement("td")
        let tdata2 = document.createElement("td")
        let tdata4 = document.createElement("td")
        let tdata3 = document.createElement("td")
        
        
        let deleteButton = document.createElement("button")
        let input = document.createElement("input")
        input.setAttribute("value", name.value)
        let input2 = document.createElement("input")
        input2.setAttribute("value", amount.value)
        let input4 = document.createElement("input")
        input4.setAttribute("value", amountBudgeted.value)
        let input3 = document.createElement("input")
        input3.setAttribute("value", date.value)
       
        let td  = document.createElement("td")
        let td2  = document.createElement("td")
        let td4  = document.createElement("td")
        let td3  = document.createElement("td")
        
        td.appendChild(input)
        td2.appendChild(input2)
        td4.appendChild(input4)
        td3.appendChild(input3)
        
       
        let amountBudgetedValue = amountBudgeted.value * 1
        spentArray.push(amountBudgetedValue)
        let spentReduce = spentArray.reduce((previousValue,currentValue) => previousValue + currentValue)
        spentDiv.innerHTML = `TOTAL AMOUNT BUDGETED: ${spentReduce}`
        let amountValue = amount.value * 1 
        expenseArray.push(amountValue)
        let expenseReduce = expenseArray.reduce((previousValue, currentValue) => previousValue + currentValue)
        expenseDiv.innerHTML = `TOTAL AMOUNT SPENT: ${expenseReduce}`
        console.log(expenseReduce)
        expenseDiv.style.backgroundColor="rgb(201, 177, 200)"
        expenseDiv.style.width="auto"
        expenseDiv.style.height="40px"
        expenseDiv.style.borderRadius="20px"
        expenseDiv.style.marginTop="20px"

        spentDiv.style.backgroundColor="rgb(201, 177, 200)"
        spentDiv.style.width="auto"
        spentDiv.style.height="40px"
        spentDiv.style.borderRadius="20px"
        spentDiv.style.marginTop="20px"
       
        
        tdata.innerHTML= name.value
        tdata2.innerHTML= amount.value
        tdata4.innerHTML= amountBudgeted.value
        tdata3.innerHTML= date.value
        trow.appendChild(tdata)
        trow.appendChild(tdata2)
        trow.appendChild(tdata4)
        trow.appendChild(tdata3)
        trow.appendChild(deleteButton)
        tbody.appendChild(trow)
        deleteButton.innerText= "Delete"
        deleteButton.setAttribute("class", "deleteItem")
        deleteButton.setAttribute("type", "button")
        deleteButton.setAttribute("id", x)
        input.setAttribute("id","inputId1")
        input.setAttribute("type","text")
        input2.setAttribute("id","inputId2")
        input2.setAttribute("type","number")
        input4.setAttribute("id","inputId4")
        input4.setAttribute("type","number")
        input3.setAttribute("id","inputId3")
        input3.setAttribute("type","date")
        name.value = ""
        amount.value =""
        date.value = ""
        amountBudgeted.value = ""
        //delete event handler
        deleteButton.addEventListener("click", () => {
            trow.remove()
            let deleteNo = deleteButton.getAttribute("id")
            spentArray.splice(deleteNo, 1)
            expenseArray.splice(deleteNo, 1)
            let spentReduce = spentArray.reduce((previousValue,currentValue) => previousValue + currentValue)
            spentDiv.innerHTML = `TOTAL AMOUNT BUDGETED: ${spentReduce}`
            let expenseReduce = expenseArray.reduce((previousValue, currentValue) => previousValue + currentValue)
            expenseDiv.innerHTML = `TOTAL AMOUNT SPENT: ${expenseReduce}`

           
        })
       //edit event handler
        trow.addEventListener("dblclick", () => {
            tdata.parentNode.replaceChild(td, tdata)
            tdata2.parentNode.replaceChild(td2, tdata2)
            tdata4.parentNode.replaceChild(td4, tdata4)
            tdata3.parentNode.replaceChild(td3, tdata3)
            let editButton = document.createElement("button")
            editButton.setAttribute("id", "editId")
            editButton.innerHTML = "Enter"
            trow.appendChild(editButton)
            deleteButton.parentNode.replaceChild(editButton, deleteButton)
            editButton.addEventListener("click", () => {

                let value = input.value
                let value2 = input2.value * 1
                let value4 = input4.value * 1
                let value3 = input3.value
                
                tdata.innerHTML = value
                tdata2.innerHTML = value2
                tdata4.innerHTML = value4
                tdata3.innerHTML = value3
                let deleteNo = deleteButton.getAttribute("id")
                
                spentArray.splice(deleteNo, 1, value4)
                expenseArray.splice(deleteNo, 1, value2)
                let spentReduce = spentArray.reduce((previousValue,currentValue) => previousValue + currentValue)
                spentDiv.innerHTML = `TOTAL AMOUNT BUDGETED: ${spentReduce}`
                let expenseReduce = expenseArray.reduce((previousValue, currentValue) => previousValue + currentValue)
                expenseDiv.innerHTML = `TOTAL AMOUNT SPENT: ${expenseReduce}`
                console.log(spentArray)
                console.log(expenseArray)
                console.log(spentReduce)
                console.log(expenseReduce)
                 //empty field alert
                if(value === ""||value2 ===""||value3 ===""||value4 ===""){
                    let span = document.createElement("span")
                    span.innerText = "Please enter field value"
                    form.parentNode.insertBefore(span, form)
                    setTimeout(() =>{
                        span.remove()}, 1000)
                } else{
                    td.parentNode.replaceChild(tdata,td)
                    td2.parentNode.replaceChild(tdata2, td2)
                    td4.parentNode.replaceChild(tdata4, td4)
                    td3.parentNode.replaceChild(tdata3, td3)
                    editButton.parentNode.replaceChild(deleteButton, editButton)
                }       
            })   
        })
        console.log(`spentArray: ${spentArray}`)
        console.log(`expenseArray: ${expenseArray}`)
 
    }
}
addItemButton.addEventListener("click", addItem)
//clear button event handler
function clearButton() {
    tbody.innerHTML=""
    expenseDiv.innerHTML=""
    spentDiv.innerHTML=""
    x = 0
    if(tbody.innerHTML ===""){
        expenseDiv.innerHTML="TOTAL AMOUNT SPENT: 0"
        spentDiv.innerHTML="TOTAL AMOUNT BUDGETED: 0"
        expenseArray=[0]
        spentArray=[0]
        let deleteNo = deleteButton.getAttribute("id")
        spentArray.splice(deleteNo, 1)
        expenseArray.splice(deleteNo, 1)
        let spentReduce = spentArray.reduce((previousValue,currentValue) => previousValue + currentValue)
        spentDiv.innerHTML = `TOTAL AMOUNT BUDGETED: ${spentReduce}`
        let expenseReduce = expenseArray.reduce((previousValue, currentValue) => previousValue + currentValue)
        expenseDiv.innerHTML = `TOTAL AMOUNT SPENT: ${expenseReduce}`
    }

}     
clearItem.addEventListener("click", clearButton)






































})