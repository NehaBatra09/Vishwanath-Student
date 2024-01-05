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
    "ac7",
    "ac8",

]
var users = [
    { id: "id1", email: "kavita@gmail.com", password: "kavita" },
    { id: "id2", email: "dinesh@gmail.com", password: "dinesh" },
    { id: "id3", email: "hari@gmail.com", password: "hari" },
    { id: "id4", email: "akash@gmail.com", name: "akash", age: 45, password: "akash" },
    { id: "id5", email: "vishwanath@gmail.com", name: "vishwanath", age: 24, password: "vishwanath" },

]
var accountDetails = [
    { id: "Anpds1238", userId: "id1", email: "kavita1@gmail.com", name: "kavita1", age: 31, date: "2023-12-20T05:40:30.207Z", accountType: "ac1", status: "active" },
    { id: "Klmhp23jk", userId: "id1", email: "kavita2@gmail.com", name: "kavita2", age: 32, date: "2023-12-20T05:40:30.207Z", accountType: "ac2", status: "active" },
    { id: "Rslknmrl2", userId: "id1", email: "kavita3@gmail.com", name: "kavita3", age: 31, date: "2023-12-20T05:40:30.207Z", accountType: "ac3", status: "active" },
    { id: "Toink235o", userId: "id1", email: "kavita4@gmail.com", name: "kavita4", age: 32, date: "2023-12-20T05:40:30.207Z", accountType: "ac4", status: "active" },
    { id: "Gkil30oop", userId: "id1", email: "kavita5@gmail.com", name: "kavita5", age: 31, date: "2023-12-20T05:40:30.207Z", accountType: "ac5", status: "active" },
    { id: "Nkfpu5o88", userId: "id1", email: "kavita6@gmail.com", name: "kavita6", age: 32, date: "2023-12-20T05:40:30.207Z", accountType: "ac6", status: "active" },
    { id: "Ltmp34qpr", userId: "id2", email: "dinesh1@gmail.com", name: "dinesh1", age: 30, date: "2023-12-20T05:40:30.207Z", accountType: "ac1", status: "active" },
    { id: "Sp99k020p", userId: "id3", email: "hari1@gmail.com", name: "hari1", age: 41, date: "2023-12-20T05:40:30.207Z", accountType: "ac1", status: "active" },
    { id: "MfgKLP3MM", userId: "id3", email: "hari2@gmail.com", name: "hari2", age: 42, date: "2023-12-20T05:40:30.207Z", accountType: "ac2", status: "active" },
    { id: "D1Polmne6", userId: "id3", email: "hari3@gmail.com", name: "hari3", age: 43, date: "2023-12-20T05:40:30.207Z", accountType: "ac3", status: "active" }

]
var transactions = [
    { tid: "TPN1", id: "Anpds1238", userId: "id1", credit: 100, total: 1000 },
    { tid: "TPN2", id: "Anpds1238", userId: "id1", debit: 50, total: 950 },
    { tid: "TPN3", id: "Anpds1238", userId: "id1", credit: 100, total: 1050 },
    { tid: "TPN4", id: "Anpds1238", userId: "id1", credit: 100, total: 1150 },
    { tid: "TPN5", id: "Anpds1238", userId: "id1", credit: 100, total: 1250 },
]
app.post("/login", (req, res) => {
    let { email, password } = req.body
    let findUser = users.find((user) => user.email == email && user.password == password)
    if (findUser) {
        res.send(200, { data: findUser, status: true, message: "User Found", })
    } else {
        res.send(200, { data: null, status: false, message: "User not found" })
    }
})
app.post("/account/:userId", (req, res) => {
    let { userId } = req.params
    console.log(userId)
    let { name, age, email, address, branch, id, date } = req.body
    let findUser = users.find((user) => user.id == userId)
    console.log(findUser)
    if (findUser) {
        accountDetails.push({ id, userId, name, age, email, address, branch, date, status: "pending" })
    }
    res.send(201, { status: true, message: "success", data: accountDetails })
})
app.get("/transactions/:userId/:accountId", (req, res) => {
    let { userId, accountId } = req.params
    let transactionResults = transactions.filter((transaction) => transaction.userId == userId && transaction.id == accountId)
    if (transactionResults.length > 0) {
        return res.send(200, { data: transactionResults, status: true, message: "transactions found" })
    }
    res.send(200, { data: null })
})
app.get("/account/:userId", (req, res) => {
    let { userId } = req.params
    let accountResults = accountDetails.filter((account) => account.userId == userId)
    accountResults = accountResults.map((account) => { return { ...account, isTransactions: transactions.find((transaction) => transaction.id == account.id) ? true : false } })
    if (accountResults.length > 0) {
        return res.send(200, { data: accountResults, status: true, message: "account found" })
    }
    res.send(200, { data: null })
})

app.get("/accountTypes", (req, res) => {
    res.send(200, { data: accountTypes, status: true, message: "success" })
})

// function generId() {
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
//     const idLength = 8; // Minimum length of the ID

//     let id = '';

//     while (id.length < idLength) {
//         const randomIndex = Math.floor(Math.random() * characters.length);
//         id += characters.charAt(randomIndex);
//     }

//     return id;
// }

app.listen(4000)