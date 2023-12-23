const express = require("express")
const app = express()
const cors = require("cors")
app.use(express.json())
app.use(cors("*"))
var accountTypes = [
    "ac1",
    "ac2",
    "ac3",
    "ac4",
    "ac5",
    "ac6",
]
var users = [
    { id: 1, email: "kavita@gmail.com", password: "kavita" },
    { id: 2, email: "dinesh@gmail.com", password: "dinesh" },
    { id: 3, email: "hari@gmail.com", password: "hari" },
    { id: 4, email: "akash@gmail.com", name: "akash", age: 45, password: "akash" },
    { id: 5, email: "vishwanath@gmail.com", name: "vishwanath", age: 24, password: "vishwanath" },

]
var accountDetails = [
    { acnumber: 1, userId: 1, email: "kavita1@gmail.com", name: "kavita1", age: 31, date: "2023-12-20T05:40:30.207Z", accountType: "ac1", status: "active" },
    { acnumber: 2, userId: 1, email: "kavita2@gmail.com", name: "kavita2", age: 32, date: "2023-12-20T05:40:30.207Z", accountType: "ac2", status: "active" },
    { acnumber: 3, userId: 1, email: "kavita3@gmail.com", name: "kavita3", age: 31, date: "2023-12-20T05:40:30.207Z", accountType: "ac3", status: "active" },
    { acnumber: 4, userId: 1, email: "kavita4@gmail.com", name: "kavita4", age: 32, date: "2023-12-20T05:40:30.207Z", accountType: "ac4", status: "active" },
    { acnumber: 5, userId: 1, email: "kavita5@gmail.com", name: "kavita5", age: 31, date: "2023-12-20T05:40:30.207Z", accountType: "ac5", status: "active" },
    { acnumber: 6, userId: 1, email: "kavita6@gmail.com", name: "kavita6", age: 32, date: "2023-12-20T05:40:30.207Z", accountType: "ac6", status: "active" },
    { acnumber: 7, userId: 2, email: "dinesh1@gmail.com", name: "dinesh1", age: 30, date: "2023-12-20T05:40:30.207Z", accountType: "ac1", status: "active" },
    { acnumber: 8, userId: 3, email: "hari1@gmail.com", name: "hari1", age: 41, date: "2023-12-20T05:40:30.207Z", accountType: "ac1", status: "active" },
    { acnumber: 9, userId: 3, email: "hari2@gmail.com", name: "hari2", age: 42, date: "2023-12-20T05:40:30.207Z", accountType: "ac2", status: "active" },
    { acnumber: 10, userId: 3, email: "hari3@gmail.com", name: "hari3", age: 43, date: "2023-12-20T05:40:30.207Z", accountType: "ac3", status: "active" }

]
var transactions = [
    { tid: 1, acnumber: 1, userId: 1, credit: 100, total: 1000 },
    { tid: 2, acnumber: 1, userId: 1, debit: 50, total: 950 },
    { tid: 3, acnumber: 1, userId: 1, credit: 100, total: 1050 },
    { tid: 4, acnumber: 1, userId: 1, credit: 100, total: 1150 },
    { tid: 5, acnumber: 1, userId: 1, credit: 100, total: 1250 },
]
app.post("/login", (req, res) => {
    let { email, password } = req.body
    console.log(email, password)
    let findUser = users.find((user) => user.email == email && user.password == password)
    if (findUser) {
        res.send(200, { data: findUser, status: true, message: "User Found", })
    } else {
        res.send(200, { data: null, status: false, message: "User not found" })
    }
})
app.post("/account/:userId", (req, res) => {
    let { userId } = req.params
    let { name, email, age, accountType } = req.body
    let findUser = users.find((user) => user.id == userId)
    if (findUser) {
        accountDetails.push({ acnumber: accountDetails.length + 1, userId, name, email, age, accountType, date: new Date(), status: "pending" })
    }
    res.send(201, { status: true, message: "success" })
})
app.get("/transactions/:userId/:accountId", (req, res) => {
    let { userId, accountId } = req.params
    let transactionResults = transactions.filter((transaction) => transaction.userId == userId && transaction.acnumber == accountId)
    if (transactionResults.length > 0) {
        return res.send(200, { data: transactionResults, status: true, message: "transactions found" })
    }
    res.send(200, { data: null })
})
app.get("/account/:userId", (req, res) => {
    let { userId } = req.params
    let accountResults = accountDetails.filter((account) => account.userId == userId)
    if (accountResults.length > 0) {
        return res.send(200, { data: accountResults, status: true, message: "account found" })
    }
    res.send(200, { data: null })
})

app.get("/accountTypes", (req, res) => {
    res.send(200, { data: accountTypes, status: true, message: "success" })
})

app.listen(4000)