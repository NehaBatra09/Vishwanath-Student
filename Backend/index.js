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
    { "userId": "id1", "id": "A2#fG7@9", email: "kavita1@gmail.com", name: "kavita1", age: 30, date: "2023-12-20T05:40:30.207Z", accountType: "ac1", status: "active" },
    { "userId": "id1", "id": "P1*oQ$5z", email: "kavita2@gmail.com", name: "kavita2", age: 31, date: "2023-12-20T05:40:30.207Z", accountType: "ac1", status: "active" },
    { "userId": "id1", "id": "mR@8bT3!", email: "kavita3@gmail.com", name: "kavita3", age: 32, date: "2023-12-20T05:40:30.207Z", accountType: "ac1", status: "active" },
    { "userId": "id1", "id": "X9!hD6*p", email: "kavita4@gmail.com", name: "kavita4", age: 33, date: "2023-12-20T05:40:30.207Z", accountType: "ac1", status: "active" },
    { "userId": "id1", "id": "K@7sF4#E", email: "kavita5@gmail.com", name: "kavita5", age: 34, date: "2023-12-20T05:40:30.207Z", accountType: "ac1", status: "active" },
    { "userId": "id1", "id": "L3$zA8*b", email: "kavita6@gmail.com", name: "kavita6", age: 35, date: "2023-12-20T05:40:30.207Z", accountType: "ac1", status: "active" },
    { "userId": "id2", "id": "N#6jK9@Q", email: "dinesh1@gmail.com", name: "dinesh1", age: 30, date: "2023-12-20T05:40:30.207Z", accountType: "ac1", status: "active" },
    { "userId": "id2", "id": "D7@pR2#Z", email: "dinesh2@gmail.com", name: "dinesh2", age: 31, date: "2023-12-20T05:40:30.207Z", accountType: "ac1", status: "active" },
    { "userId": "id2", "id": "B5*zP8@R", email: "dinesh3@gmail.com", name: "dinesh3", age: 32, date: "2023-12-20T05:40:30.207Z", accountType: "ac1", status: "active" },
    { "userId": "id2", "id": "H@4oQ7#E", email: "dinesh4@gmail.com", name: "dinesh4", age: 33, date: "2023-12-20T05:40:30.207Z", accountType: "ac1", status: "active" },
    { "userId": "id2", "id": "R6#tG3@K", email: "dinesh5@gmail.com", name: "dinesh5", age: 34, date: "2023-12-20T05:40:30.207Z", accountType: "ac1", status: "active" },
    { "userId": "id2", "id": "J8!vF5#X", email: "dinesh6@gmail.com", name: "dinesh6", age: 35, date: "2023-12-20T05:40:30.207Z", accountType: "ac1", status: "active" },
    { "userId": "id3", "id": "Q@2pR7#Y", email: "hari1@gmail.com", name: "hari1", age: 30, date: "2023-12-20T05:40:30.207Z", accountType: "ac1", status: "active" },
    { "userId": "id3", "id": "T5#wH9@L", email: "hari2@gmail.com", name: "hari2", age: 31, date: "2023-12-20T05:40:30.207Z", accountType: "ac1", status: "active" },
    { "userId": "id3", "id": "Z7*bM3@S", email: "hari3@gmail.com", name: "hari3", age: 32, date: "2023-12-20T05:40:30.207Z", accountType: "ac1", status: "active" },
    { "userId": "id3", "id": "E6@uQ1#V", email: "hari4@gmail.com", name: "hari4", age: 33, date: "2023-12-20T05:40:30.207Z", accountType: "ac1", status: "active" },
    { "userId": "id3", "id": "F4!gJ8#N", email: "hari5@gmail.com", name: "hari5", age: 34, date: "2023-12-20T05:40:30.207Z", accountType: "ac1", status: "active" },
    { "userId": "id3", "id": "W3#xK7@P", email: "hari6@gmail.com", name: "hari6", age: 35, date: "2023-12-20T05:40:30.207Z", accountType: "ac1", status: "active" },
    { "userId": "id4", "id": "G9#rT2@U", email: "akash1@gmail.com", name: "akash1", age: 30, date: "2023-12-20T05:40:30.207Z", accountType: "ac1", status: "active" },
    { "userId": "id4", "id": "U2@nZ5#O", email: "akash2@gmail.com", name: "akash2", age: 31, date: "2023-12-20T05:40:30.207Z", accountType: "ac1", status: "active" },
    { "userId": "id4", "id": "Y1#dL4@W", email: "akash3@gmail.com", name: "akash3", age: 32, date: "2023-12-20T05:40:30.207Z", accountType: "ac1", status: "active" },
    { "userId": "id4", "id": "I7!eH6#M", email: "akash4@gmail.com", name: "akash4", age: 33, date: "2023-12-20T05:40:30.207Z", accountType: "ac1", status: "active" },
    { "userId": "id4", "id": "C8!xN3#Q", email: "akash5@gmail.com", name: "akash5", age: 34, date: "2023-12-20T05:40:30.207Z", accountType: "ac1", status: "active" },
    { "userId": "id4", "id": "O4#yS1@D", email: "akash6@gmail.com", name: "akash6", age: 35, date: "2023-12-20T05:40:30.207Z", accountType: "ac1", status: "active" },
    { "userId": "id5", "id": "V3*zW8@I", email: "vishwanath1@gmail.com", name: "vishwanath1", age: 30, date: "2023-12-20T05:40:30.207Z", accountType: "ac1", status: "active" },
    { "userId": "id5", "id": "S5#tR7@F", email: "vishwanath2@gmail.com", name: "vishwanath2", age: 31, date: "2023-12-20T05:40:30.207Z", accountType: "ac1", status: "active" },
    { "userId": "id5", "id": "D6$pG2#X", email: "vishwanath3@gmail.com", name: "vishwanath3", age: 32, date: "2023-12-20T05:40:30.207Z", accountType: "ac1", status: "active" },
    { "userId": "id5", "id": "N8!jK4#R", email: "vishwanath4@gmail.com", name: "vishwanath4", age: 33, date: "2023-12-20T05:40:30.207Z", accountType: "ac1", status: "active" },
    { "userId": "id5", "id": "B9!vP3#E", email: "vishwanath5@gmail.com", name: "vishwanath5", age: 34, date: "2023-12-20T05:40:30.207Z", accountType: "ac1", status: "active" },
    { "userId": "id5", "id": "K@6sF2#A", email: "vishwanath6@gmail.com", name: "vishwanath6", age: 35, date: "2023-12-20T05:40:30.207Z", accountType: "ac1", status: "active" },
    { "userId": "id6", "id": "M7!lT1#Z", email: "nikhil1@gmail.com", name: "nikhil1", age: 30, date: "2023-12-20T05:40:30.207Z", accountType: "ac1", status: "active" },
    { "userId": "id6", "id": "R5#tG7@K", email: "nikhil2@gmail.com", name: "nikhil2", age: 31, date: "2023-12-20T05:40:30.207Z", accountType: "ac1", status: "active" },
    { "userId": "id6", "id": "Q9@pR4#Y", email: "nikhil3@gmail.com", name: "nikhil3", age: 32, date: "2023-12-20T05:40:30.207Z", accountType: "ac1", status: "active" },
    { "userId": "id6", "id": "L6$oA2#B", email: "nikhil4@gmail.com", name: "nikhil4", age: 33, date: "2023-12-20T05:40:30.207Z", accountType: "ac1", status: "active" },
    { "userId": "id6", "id": "F8!gJ3#N", email: "nikhil5@gmail.com", name: "nikhil5", age: 34, date: "2023-12-20T05:40:30.207Z", accountType: "ac1", status: "active" },
    { "userId": "id6", "id": "A8!gJ3#O", email: "nikhil6@gmail.com", name: "nikhil6", age: 35, date: "2023-12-20T05:40:30.207Z", accountType: "ac1", status: "active" },


]
var transactions = [
    { "tid": "txn1", "userId": "id1", "id": "A2#fG7@9", "credit": 150, "total": 320 },
    { "tid": "txn2", "userId": "id1", "id": "A2#fG7@9", "credit": 80, "total": 200 },
    { "tid": "txn3", "userId": "id1", "id": "A2#fG7@9", "credit": 120, "total": 300 },
    { "tid": "txn4", "userId": "id1", "id": "A2#fG7@9", "credit": 150, "total": 320 },
    { "tid": "txn5", "userId": "id1", "id": "A2#fG7@9", "credit": 300, "total": 500 },
    { "tid": "txn6", "userId": "id1", "id": "A2#fG7@9", "credit": 350, "total": 480 },
    { "tid": "txn15", "userId": "id1", "id": "P1*oQ$5z", "credit": 200, "total": 300 },
    { "tid": "txn16", "userId": "id1", "id": "P1*oQ$5z", "credit": 210, "total": 380 },
    { "tid": "txn17", "userId": "id1", "id": "P1*oQ$5z", "credit": 250, "total": 480 },
    { "tid": "txn18", "userId": "id1", "id": "P1*oQ$5z", "credit": 280, "total": 400 },
    { "tid": "txn19", "userId": "id1", "id": "P1*oQ$5z", "credit": 290, "total": 480 },
    { "tid": "txn20", "userId": "id1", "id": "P1*oQ$5z", "credit": 350, "total": 420 },
    { "tid": "txn21", "userId": "id1", "id": "mR@8bT3!", "credit": 450, "total": 480 },
    { "tid": "txn22", "userId": "id1", "id": "mR@8bT3!", "credit": 420, "total": 480 },
    { "tid": "txn23", "userId": "id1", "id": "mR@8bT3!", "credit": 90, "total": 180 },
    { "tid": "txn24", "userId": "id1", "id": "mR@8bT3!", "credit": 160, "total": 280 },
    { "tid": "txn25", "userId": "id1", "id": "mR@8bT3!", "credit": 180, "total": 320 },
    { "tid": "txn26", "userId": "id1", "id": "mR@8bT3!", "credit": 410, "total": 450 },
    { "tid": "txn27", "userId": "id1", "id": "mR@8bT3!", "credit": 380, "total": 450 },
    { "tid": "txn28", "userId": "id1", "id": "mR@8bT3!", "credit": 390, "total": 420 },
    { "tid": "txn29", "userId": "id1", "id": "mR@8bT3!", "credit": 280, "total": 480 },
    { "tid": "txn30", "userId": "id1", "id": "mR@8bT3!", "credit": 300, "total": 420 },
    { "tid": "txn31", "userId": "id1", "id": "X9!hD6*p", "credit": 320, "total": 450 },
    { "tid": "txn32", "userId": "id1", "id": "X9!hD6*p", "credit": 320, "total": 450 },
    { "tid": "txn33", "userId": "id1", "id": "X9!hD6*p", "credit": 320, "total": 450 },
    { "tid": "txn34", "userId": "id1", "id": "X9!hD6*p", "credit": 320, "total": 450 },
    { "tid": "txn35", "userId": "id1", "id": "X9!hD6*p", "credit": 320, "total": 450 },
    { "tid": "txn36", "userId": "id1", "id": "X9!hD6*p", "credit": 320, "total": 450 },
    { "tid": "txn37", "userId": "id1", "id": "X9!hD6*p", "credit": 320, "total": 450 },
    { "tid": "txn38", "userId": "id1", "id": "X9!hD6*p", "credit": 320, "total": 450 },
    { "tid": "txn39", "userId": "id1", "id": "X9!hD6*p", "credit": 320, "total": 450 },
    { "tid": "txn40", "userId": "id1", "id": "X9!hD6*p", "credit": 320, "total": 450 },
    { "tid": "txn41", "userId": "id1", "id": "K@7sF4#E", "credit": 320, "total": 450 },
    { "tid": "txn42", "userId": "id1", "id": "K@7sF4#E", "credit": 320, "total": 450 },
    { "tid": "txn43", "userId": "id1", "id": "K@7sF4#E", "credit": 320, "total": 450 },
    { "tid": "txn44", "userId": "id1", "id": "K@7sF4#E", "credit": 320, "total": 450 },
    { "tid": "txn45", "userId": "id1", "id": "K@7sF4#E", "credit": 320, "total": 450 },
    { "tid": "txn46", "userId": "id1", "id": "K@7sF4#E", "credit": 320, "total": 450 },
    { "tid": "txn47", "userId": "id1", "id": "K@7sF4#E", "credit": 320, "total": 450 },
    { "tid": "txn48", "userId": "id1", "id": "K@7sF4#E", "credit": 320, "total": 450 },
    { "tid": "txn49", "userId": "id1", "id": "K@7sF4#E", "credit": 320, "total": 450 },
    { "tid": "txn50", "userId": "id1", "id": "K@7sF4#E", "credit": 320, "total": 450 },
    { "tid": "txn51", "userId": "id1", "id": "L3$zA8*b", "credit": 320, "total": 450 },
    { "tid": "txn52", "userId": "id1", "id": "L3$zA8*b", "credit": 320, "total": 450 },
    { "tid": "txn53", "userId": "id1", "id": "L3$zA8*b", "credit": 320, "total": 450 },
    { "tid": "txn54", "userId": "id1", "id": "L3$zA8*b", "credit": 320, "total": 450 },
    { "tid": "txn55", "userId": "id1", "id": "L3$zA8*b", "credit": 320, "total": 450 },
    { "tid": "txn56", "userId": "id1", "id": "L3$zA8*b", "credit": 320, "total": 450 },
    { "tid": "txn57", "userId": "id1", "id": "L3$zA8*b", "credit": 320, "total": 450 },
    { "tid": "txn58", "userId": "id1", "id": "L3$zA8*b", "credit": 320, "total": 450 },
    { "tid": "txn59", "userId": "id1", "id": "L3$zA8*b", "credit": 320, "total": 450 },
    { "tid": "txn60", "userId": "id1", "id": "L3$zA8*b", "credit": 320, "total": 450 },
    { "tid": "txn61", "userId": "id2", "id": "N#6jK9@Q", "credit": 320, "total": 450 },
    { "tid": "txn62", "userId": "id2", "id": "N#6jK9@Q", "credit": 320, "total": 450 },
    { "tid": "txn63", "userId": "id2", "id": "N#6jK9@Q", "credit": 320, "total": 450 },
    { "tid": "txn64", "userId": "id2", "id": "N#6jK9@Q", "credit": 320, "total": 450 },
    { "tid": "txn65", "userId": "id2", "id": "N#6jK9@Q", "credit": 320, "total": 450 },
    { "tid": "txn66", "userId": "id2", "id": "N#6jK9@Q", "credit": 320, "total": 450 },
    { "tid": "txn67", "userId": "id2", "id": "N#6jK9@Q", "credit": 320, "total": 450 },
    { "tid": "txn68", "userId": "id2", "id": "N#6jK9@Q", "credit": 320, "total": 450 },
    { "tid": "txn69", "userId": "id2", "id": "N#6jK9@Q", "credit": 320, "total": 450 },
    { "tid": "txn70", "userId": "id2", "id": "N#6jK9@Q", "credit": 320, "total": 450 },
    { "tid": "txn71", "userId": "id2", "id": "D7@pR2#Z", "credit": 320, "total": 450 },
    { "tid": "txn72", "userId": "id2", "id": "D7@pR2#Z", "credit": 320, "total": 450 },
    { "tid": "txn73", "userId": "id2", "id": "D7@pR2#Z", "credit": 320, "total": 450 },
    { "tid": "txn74", "userId": "id2", "id": "D7@pR2#Z", "credit": 320, "total": 450 },
    { "tid": "txn75", "userId": "id2", "id": "D7@pR2#Z", "credit": 320, "total": 450 },
    { "tid": "txn76", "userId": "id2", "id": "D7@pR2#Z", "credit": 320, "total": 450 },
    { "tid": "txn77", "userId": "id2", "id": "D7@pR2#Z", "credit": 320, "total": 450 },
    { "tid": "txn78", "userId": "id2", "id": "D7@pR2#Z", "credit": 320, "total": 450 },
    { "tid": "txn79", "userId": "id2", "id": "D7@pR2#Z", "credit": 320, "total": 450 },
    { "tid": "txn80", "userId": "id2", "id": "D7@pR2#Z", "credit": 320, "total": 450 },
    { "tid": "txn81", "userId": "id2", "id": "B5*zP8@R", "credit": 320, "total": 450 },
    { "tid": "txn82", "userId": "id2", "id": "B5*zP8@R", "credit": 320, "total": 450 },
    { "tid": "txn83", "userId": "id2", "id": "B5*zP8@R", "credit": 320, "total": 450 },
    { "tid": "txn84", "userId": "id2", "id": "B5*zP8@R", "credit": 320, "total": 450 },
    { "tid": "txn85", "userId": "id2", "id": "B5*zP8@R", "credit": 320, "total": 450 },
    { "tid": "txn86", "userId": "id2", "id": "B5*zP8@R", "credit": 320, "total": 450 },
    { "tid": "txn87", "userId": "id2", "id": "B5*zP8@R", "credit": 320, "total": 450 },
    { "tid": "txn88", "userId": "id2", "id": "B5*zP8@R", "credit": 320, "total": 450 },
    { "tid": "txn89", "userId": "id2", "id": "B5*zP8@R", "credit": 320, "total": 450 },
    { "tid": "txn90", "userId": "id2", "id": "B5*zP8@R", "credit": 320, "total": 450 },
    { "tid": "txn91", "userId": "id2", "id": "H@4oQ7#E", "credit": 320, "total": 450 },
    { "tid": "txn92", "userId": "id2", "id": "H@4oQ7#E", "credit": 320, "total": 450 },
    { "tid": "txn93", "userId": "id2", "id": "H@4oQ7#E", "credit": 320, "total": 450 },
    { "tid": "txn94", "userId": "id2", "id": "H@4oQ7#E", "credit": 320, "total": 450 },
    { "tid": "txn95", "userId": "id2", "id": "H@4oQ7#E", "credit": 320, "total": 450 },
    { "tid": "txn96", "userId": "id2", "id": "H@4oQ7#E", "credit": 320, "total": 450 },
    { "tid": "txn97", "userId": "id2", "id": "H@4oQ7#E", "credit": 320, "total": 450 },
    { "tid": "txn98", "userId": "id2", "id": "H@4oQ7#E", "credit": 320, "total": 450 },
    { "tid": "txn99", "userId": "id2", "id": "H@4oQ7#E", "credit": 320, "total": 450 },
    { "tid": "txn100", "userId": "id2", "id": "H@4oQ7#E", "credit": 320, "total": 450 },
    { "tid": "txn101", "userId": "id2", "id": "R6#tG3@K", "credit": 320, "total": 450 },
    { "tid": "txn102", "userId": "id2", "id": "R6#tG3@K", "credit": 320, "total": 450 },
    { "tid": "txn103", "userId": "id2", "id": "R6#tG3@K", "credit": 320, "total": 450 },
    { "tid": "txn104", "userId": "id2", "id": "R6#tG3@K", "credit": 320, "total": 450 },
    { "tid": "txn105", "userId": "id2", "id": "R6#tG3@K", "credit": 320, "total": 450 },
    { "tid": "txn106", "userId": "id2", "id": "R6#tG3@K", "credit": 320, "total": 450 },
    { "tid": "txn107", "userId": "id2", "id": "R6#tG3@K", "credit": 320, "total": 450 },
    { "tid": "txn108", "userId": "id2", "id": "R6#tG3@K", "credit": 320, "total": 450 },
    { "tid": "txn109", "userId": "id2", "id": "R6#tG3@K", "credit": 320, "total": 450 },
    { "tid": "txn110", "userId": "id2", "id": "R6#tG3@K", "credit": 320, "total": 450 },
    { "tid": "txn111", "userId": "id2", "id": "J8!vF5#X", "credit": 320, "total": 450 },
    { "tid": "txn112", "userId": "id2", "id": "J8!vF5#X", "credit": 320, "total": 450 },
    { "tid": "txn113", "userId": "id2", "id": "J8!vF5#X", "credit": 320, "total": 450 },
    { "tid": "txn114", "userId": "id2", "id": "J8!vF5#X", "credit": 320, "total": 450 },
    { "tid": "txn115", "userId": "id2", "id": "J8!vF5#X", "credit": 320, "total": 450 },
    { "tid": "txn116", "userId": "id2", "id": "J8!vF5#X", "credit": 320, "total": 450 },
    { "tid": "txn117", "userId": "id2", "id": "J8!vF5#X", "credit": 320, "total": 450 },
    { "tid": "txn118", "userId": "id2", "id": "J8!vF5#X", "credit": 320, "total": 450 },
    { "tid": "txn119", "userId": "id2", "id": "J8!vF5#X", "credit": 320, "total": 450 },
    { "tid": "txn120", "userId": "id2", "id": "J8!vF5#X", "credit": 320, "total": 450 },
    { "tid": "txn121", "userId": "id3", "id": "Q@2pR7#Y", "credit": 320, "total": 450 },
    { "tid": "txn122", "userId": "id3", "id": "Q@2pR7#Y", "credit": 320, "total": 450 },
    { "tid": "txn123", "userId": "id3", "id": "Q@2pR7#Y", "credit": 320, "total": 450 },
    { "tid": "txn124", "userId": "id3", "id": "Q@2pR7#Y", "credit": 320, "total": 450 },
    { "tid": "txn125", "userId": "id3", "id": "Q@2pR7#Y", "credit": 320, "total": 450 },
    { "tid": "txn126", "userId": "id3", "id": "Q@2pR7#Y", "credit": 320, "total": 450 },
    { "tid": "txn127", "userId": "id3", "id": "Q@2pR7#Y", "credit": 320, "total": 450 },
    { "tid": "txn128", "userId": "id3", "id": "Q@2pR7#Y", "credit": 320, "total": 450 },
    { "tid": "txn129", "userId": "id3", "id": "Q@2pR7#Y", "credit": 320, "total": 450 },
    { "tid": "txn130", "userId": "id3", "id": "Q@2pR7#Y", "credit": 320, "total": 450 },
    { "tid": "txn131", "userId": "id3", "id": "T5#wH9@L", "credit": 320, "total": 450 },
    { "tid": "txn132", "userId": "id3", "id": "T5#wH9@L", "credit": 320, "total": 450 },
    { "tid": "txn133", "userId": "id3", "id": "T5#wH9@L", "credit": 320, "total": 450 },
    { "tid": "txn134", "userId": "id3", "id": "T5#wH9@L", "credit": 320, "total": 450 },
    { "tid": "txn135", "userId": "id3", "id": "T5#wH9@L", "credit": 320, "total": 450 },
    { "tid": "txn136", "userId": "id3", "id": "T5#wH9@L", "credit": 320, "total": 450 },
    { "tid": "txn137", "userId": "id3", "id": "T5#wH9@L", "credit": 320, "total": 450 },
    { "tid": "txn138", "userId": "id3", "id": "T5#wH9@L", "credit": 320, "total": 450 },
    { "tid": "txn139", "userId": "id3", "id": "T5#wH9@L", "credit": 320, "total": 450 },
    { "tid": "txn140", "userId": "id3", "id": "T5#wH9@L", "credit": 320, "total": 450 },
    { "tid": "txn141", "userId": "id3", "id": "Z7*bM3@S", "credit": 320, "total": 450 },
    { "tid": "txn142", "userId": "id3", "id": "Z7*bM3@S", "credit": 320, "total": 450 },
    { "tid": "txn143", "userId": "id3", "id": "Z7*bM3@S", "credit": 320, "total": 450 },
    { "tid": "txn144", "userId": "id3", "id": "Z7*bM3@S", "credit": 320, "total": 450 },
    { "tid": "txn145", "userId": "id3", "id": "Z7*bM3@S", "credit": 320, "total": 450 },
    { "tid": "txn146", "userId": "id3", "id": "Z7*bM3@S", "credit": 320, "total": 450 },
    { "tid": "txn147", "userId": "id3", "id": "Z7*bM3@S", "credit": 320, "total": 450 },
    { "tid": "txn148", "userId": "id3", "id": "Z7*bM3@S", "credit": 320, "total": 450 },
    { "tid": "txn149", "userId": "id3", "id": "Z7*bM3@S", "credit": 320, "total": 450 },
    { "tid": "txn150", "userId": "id3", "id": "Z7*bM3@S", "credit": 320, "total": 450 },
    { "tid": "txn151", "userId": "id3", "id": "E6@uQ1#V", "credit": 320, "total": 450 },
    { "tid": "txn152", "userId": "id3", "id": "E6@uQ1#V", "credit": 320, "total": 450 },
    { "tid": "txn153", "userId": "id3", "id": "E6@uQ1#V", "credit": 320, "total": 450 },
    { "tid": "txn154", "userId": "id3", "id": "E6@uQ1#V", "credit": 320, "total": 450 },
    { "tid": "txn155", "userId": "id3", "id": "E6@uQ1#V", "credit": 320, "total": 450 },
    { "tid": "txn156", "userId": "id3", "id": "E6@uQ1#V", "credit": 320, "total": 450 },
    { "tid": "txn157", "userId": "id3", "id": "E6@uQ1#V", "credit": 320, "total": 450 },
    { "tid": "txn158", "userId": "id3", "id": "E6@uQ1#V", "credit": 320, "total": 450 },
    { "tid": "txn159", "userId": "id3", "id": "E6@uQ1#V", "credit": 320, "total": 450 },
    { "tid": "txn160", "userId": "id3", "id": "E6@uQ1#V", "credit": 320, "total": 450 },
    { "tid": "txn161", "userId": "id3", "id": "F4!gJ8#N", "credit": 320, "total": 450 },
    { "tid": "txn162", "userId": "id3", "id": "F4!gJ8#N", "credit": 320, "total": 450 },
    { "tid": "txn163", "userId": "id3", "id": "F4!gJ8#N", "credit": 320, "total": 450 },
    { "tid": "txn164", "userId": "id3", "id": "F4!gJ8#N", "credit": 320, "total": 450 },
    { "tid": "txn165", "userId": "id3", "id": "F4!gJ8#N", "credit": 320, "total": 450 },
    { "tid": "txn166", "userId": "id3", "id": "F4!gJ8#N", "credit": 320, "total": 450 },
    { "tid": "txn167", "userId": "id3", "id": "F4!gJ8#N", "credit": 320, "total": 450 },
    { "tid": "txn168", "userId": "id3", "id": "F4!gJ8#N", "credit": 320, "total": 450 },
    { "tid": "txn169", "userId": "id3", "id": "F4!gJ8#N", "credit": 320, "total": 450 },
    { "tid": "txn170", "userId": "id3", "id": "F4!gJ8#N", "credit": 320, "total": 450 },
    { "tid": "txn171", "userId": "id3", "id": "W3#xK7@P", "credit": 320, "total": 450 },
    { "tid": "txn172", "userId": "id3", "id": "W3#xK7@P", "credit": 320, "total": 450 },
    { "tid": "txn173", "userId": "id3", "id": "W3#xK7@P", "credit": 320, "total": 450 },
    { "tid": "txn174", "userId": "id3", "id": "W3#xK7@P", "credit": 320, "total": 450 },
    { "tid": "txn175", "userId": "id3", "id": "W3#xK7@P", "credit": 320, "total": 450 },
    { "tid": "txn176", "userId": "id3", "id": "W3#xK7@P", "credit": 320, "total": 450 },
    { "tid": "txn177", "userId": "id3", "id": "W3#xK7@P", "credit": 320, "total": 450 },
    { "tid": "txn178", "userId": "id3", "id": "W3#xK7@P", "credit": 320, "total": 450 },
    { "tid": "txn179", "userId": "id3", "id": "W3#xK7@P", "credit": 320, "total": 450 },
    { "tid": "txn180", "userId": "id3", "id": "W3#xK7@P", "credit": 320, "total": 450 },
    { "tid": "txn181", "userId": "id4", "id": "G9#rT2@U", "credit": 320, "total": 450 },
    { "tid": "txn182", "userId": "id4", "id": "G9#rT2@U", "credit": 320, "total": 450 },
    { "tid": "txn183", "userId": "id4", "id": "G9#rT2@U", "credit": 320, "total": 450 },
    { "tid": "txn184", "userId": "id4", "id": "G9#rT2@U", "credit": 320, "total": 450 },
    { "tid": "txn185", "userId": "id4", "id": "G9#rT2@U", "credit": 320, "total": 450 },
    { "tid": "txn186", "userId": "id4", "id": "G9#rT2@U", "credit": 320, "total": 450 },
    { "tid": "txn187", "userId": "id4", "id": "G9#rT2@U", "credit": 320, "total": 450 },
    { "tid": "txn188", "userId": "id4", "id": "G9#rT2@U", "credit": 320, "total": 450 },
    { "tid": "txn189", "userId": "id4", "id": "G9#rT2@U", "credit": 320, "total": 450 },
    { "tid": "txn190", "userId": "id4", "id": "G9#rT2@U", "credit": 320, "total": 450 },
    { "tid": "txn191", "userId": "id4", "id": "U2@nZ5#O", "credit": 320, "total": 450 },
    { "tid": "txn192", "userId": "id4", "id": "U2@nZ5#O", "credit": 320, "total": 450 },
    { "tid": "txn193", "userId": "id4", "id": "U2@nZ5#O", "credit": 320, "total": 450 },
    { "tid": "txn194", "userId": "id4", "id": "U2@nZ5#O", "credit": 320, "total": 450 },
    { "tid": "txn195", "userId": "id4", "id": "U2@nZ5#O", "credit": 320, "total": 450 },
    { "tid": "txn196", "userId": "id4", "id": "U2@nZ5#O", "credit": 320, "total": 450 },
    { "tid": "txn197", "userId": "id4", "id": "U2@nZ5#O", "credit": 320, "total": 450 },
    { "tid": "txn198", "userId": "id4", "id": "U2@nZ5#O", "credit": 320, "total": 450 },
    { "tid": "txn199", "userId": "id4", "id": "U2@nZ5#O", "credit": 320, "total": 450 },
    { "tid": "txn200", "userId": "id4", "id": "U2@nZ5#O", "credit": 320, "total": 450 },
    { "tid": "txn201", "userId": "id4", "id": "Y1#dL4@W", "credit": 320, "total": 450 },
    { "tid": "txn202", "userId": "id4", "id": "Y1#dL4@W", "credit": 320, "total": 450 },
    { "tid": "txn203", "userId": "id4", "id": "Y1#dL4@W", "credit": 320, "total": 450 },
    { "tid": "txn204", "userId": "id4", "id": "Y1#dL4@W", "credit": 320, "total": 450 },
    { "tid": "txn205", "userId": "id4", "id": "Y1#dL4@W", "credit": 320, "total": 450 },
    { "tid": "txn206", "userId": "id4", "id": "Y1#dL4@W", "credit": 320, "total": 450 },
    { "tid": "txn207", "userId": "id4", "id": "Y1#dL4@W", "credit": 320, "total": 450 },
    { "tid": "txn208", "userId": "id4", "id": "Y1#dL4@W", "credit": 320, "total": 450 },
    { "tid": "txn209", "userId": "id4", "id": "Y1#dL4@W", "credit": 320, "total": 450 },
    { "tid": "txn210", "userId": "id4", "id": "Y1#dL4@W", "credit": 320, "total": 450 },
    { "tid": "txn211", "userId": "id4", "id": "I7!eH6#M", "credit": 320, "total": 450 },
    { "tid": "txn212", "userId": "id4", "id": "I7!eH6#M", "credit": 320, "total": 450 },
    { "tid": "txn213", "userId": "id4", "id": "I7!eH6#M", "credit": 320, "total": 450 },
    { "tid": "txn214", "userId": "id4", "id": "I7!eH6#M", "credit": 320, "total": 450 },
    { "tid": "txn215", "userId": "id4", "id": "I7!eH6#M", "credit": 320, "total": 450 },
    { "tid": "txn216", "userId": "id4", "id": "I7!eH6#M", "credit": 320, "total": 450 },
    { "tid": "txn217", "userId": "id4", "id": "I7!eH6#M", "credit": 320, "total": 450 },
    { "tid": "txn218", "userId": "id4", "id": "I7!eH6#M", "credit": 320, "total": 450 },
    { "tid": "txn219", "userId": "id4", "id": "I7!eH6#M", "credit": 320, "total": 450 },
    { "tid": "txn220", "userId": "id4", "id": "I7!eH6#M", "credit": 320, "total": 450 },
    { "tid": "txn221", "userId": "id4", "id": "C8!xN3#Q", "credit": 320, "total": 450 },
    { "tid": "txn222", "userId": "id4", "id": "C8!xN3#Q", "credit": 320, "total": 450 },
    { "tid": "txn223", "userId": "id4", "id": "C8!xN3#Q", "credit": 320, "total": 450 },
    { "tid": "txn224", "userId": "id4", "id": "C8!xN3#Q", "credit": 320, "total": 450 },
    { "tid": "txn225", "userId": "id4", "id": "C8!xN3#Q", "credit": 320, "total": 450 },
    { "tid": "txn226", "userId": "id4", "id": "C8!xN3#Q", "credit": 320, "total": 450 },
    { "tid": "txn227", "userId": "id4", "id": "C8!xN3#Q", "credit": 320, "total": 450 },
    { "tid": "txn228", "userId": "id4", "id": "C8!xN3#Q", "credit": 320, "total": 450 },
    { "tid": "txn229", "userId": "id4", "id": "C8!xN3#Q", "credit": 320, "total": 450 },
    { "tid": "txn230", "userId": "id4", "id": "C8!xN3#Q", "credit": 320, "total": 450 },
    { "tid": "txn231", "userId": "id4", "id": "O4#yS1@D", "credit": 320, "total": 450 },
    { "tid": "txn232", "userId": "id4", "id": "O4#yS1@D", "credit": 320, "total": 450 },
    { "tid": "txn233", "userId": "id4", "id": "O4#yS1@D", "credit": 320, "total": 450 },
    { "tid": "txn234", "userId": "id4", "id": "O4#yS1@D", "credit": 320, "total": 450 },
    { "tid": "txn235", "userId": "id4", "id": "O4#yS1@D", "credit": 320, "total": 450 },
    { "tid": "txn236", "userId": "id4", "id": "O4#yS1@D", "credit": 320, "total": 450 },
    { "tid": "txn237", "userId": "id4", "id": "O4#yS1@D", "credit": 320, "total": 450 },
    { "tid": "txn238", "userId": "id4", "id": "O4#yS1@D", "credit": 320, "total": 450 },
    { "tid": "txn239", "userId": "id4", "id": "O4#yS1@D", "credit": 320, "total": 450 },
    { "tid": "txn240", "userId": "id4", "id": "O4#yS1@D", "credit": 320, "total": 450 },

    { "tid": "txn247", "userId": "id5", "id": "V3*zW8@I", "credit": 320, "total": 450 },
    { "tid": "txn248", "userId": "id5", "id": "V3*zW8@I", "credit": 320, "total": 450 },
    { "tid": "txn249", "userId": "id5", "id": "V3*zW8@I", "credit": 320, "total": 450 },
    { "tid": "txn250", "userId": "id5", "id": "V3*zW8@I", "credit": 320, "total": 450 },
    { "tid": "txn251", "userId": "id5", "id": "S5#tR7@F", "credit": 320, "total": 450 },
    { "tid": "txn252", "userId": "id5", "id": "S5#tR7@F", "credit": 320, "total": 450 },
    { "tid": "txn253", "userId": "id5", "id": "S5#tR7@F", "credit": 320, "total": 450 },
    { "tid": "txn254", "userId": "id5", "id": "S5#tR7@F", "credit": 320, "total": 450 },
    { "tid": "txn255", "userId": "id5", "id": "S5#tR7@F", "credit": 320, "total": 450 },
    { "tid": "txn256", "userId": "id5", "id": "S5#tR7@F", "credit": 320, "total": 450 },
    { "tid": "txn257", "userId": "id5", "id": "S5#tR7@F", "credit": 320, "total": 450 },
    { "tid": "txn258", "userId": "id5", "id": "S5#tR7@F", "credit": 320, "total": 450 },
    { "tid": "txn259", "userId": "id5", "id": "S5#tR7@F", "credit": 320, "total": 450 },
    { "tid": "txn260", "userId": "id5", "id": "S5#tR7@F", "credit": 320, "total": 450 },
    { "tid": "txn261", "userId": "id5", "id": "D6$pG2#X", "credit": 320, "total": 450 },
    { "tid": "txn262", "userId": "id5", "id": "D6$pG2#X", "credit": 320, "total": 450 },
    { "tid": "txn263", "userId": "id5", "id": "D6$pG2#X", "credit": 320, "total": 450 },
    { "tid": "txn264", "userId": "id5", "id": "D6$pG2#X", "credit": 320, "total": 450 },
    { "tid": "txn265", "userId": "id5", "id": "D6$pG2#X", "credit": 320, "total": 450 },
    { "tid": "txn266", "userId": "id5", "id": "D6$pG2#X", "credit": 320, "total": 450 },
    { "tid": "txn267", "userId": "id5", "id": "D6$pG2#X", "credit": 320, "total": 450 },
    { "tid": "txn268", "userId": "id5", "id": "D6$pG2#X", "credit": 320, "total": 450 },
    { "tid": "txn269", "userId": "id5", "id": "D6$pG2#X", "credit": 320, "total": 450 },
    { "tid": "txn270", "userId": "id5", "id": "D6$pG2#X", "credit": 320, "total": 450 },
    { "tid": "txn271", "userId": "id5", "id": "N8!jK4#R", "credit": 320, "total": 450 },
    { "tid": "txn272", "userId": "id5", "id": "N8!jK4#R", "credit": 320, "total": 450 },
    { "tid": "txn273", "userId": "id5", "id": "N8!jK4#R", "credit": 320, "total": 450 },
    { "tid": "txn274", "userId": "id5", "id": "N8!jK4#R", "credit": 320, "total": 450 },
    { "tid": "txn275", "userId": "id5", "id": "N8!jK4#R", "credit": 320, "total": 450 },
    { "tid": "txn276", "userId": "id5", "id": "N8!jK4#R", "credit": 320, "total": 450 },
    { "tid": "txn277", "userId": "id5", "id": "N8!jK4#R", "credit": 320, "total": 450 },
    { "tid": "txn278", "userId": "id5", "id": "N8!jK4#R", "credit": 320, "total": 450 },
    { "tid": "txn279", "userId": "id5", "id": "N8!jK4#R", "credit": 320, "total": 450 },
    { "tid": "txn280", "userId": "id5", "id": "N8!jK4#R", "credit": 320, "total": 450 },
    { "tid": "txn281", "userId": "id5", "id": "B9!vP3#E", "credit": 320, "total": 450 },
    { "tid": "txn282", "userId": "id5", "id": "B9!vP3#E", "credit": 320, "total": 450 },
    { "tid": "txn283", "userId": "id5", "id": "B9!vP3#E", "credit": 320, "total": 450 },
    { "tid": "txn284", "userId": "id5", "id": "B9!vP3#E", "credit": 320, "total": 450 },
    { "tid": "txn285", "userId": "id5", "id": "B9!vP3#E", "credit": 320, "total": 450 },
    { "tid": "txn286", "userId": "id5", "id": "B9!vP3#E", "credit": 320, "total": 450 },
    { "tid": "txn287", "userId": "id5", "id": "B9!vP3#E", "credit": 320, "total": 450 },
    { "tid": "txn288", "userId": "id5", "id": "B9!vP3#E", "credit": 320, "total": 450 },
    { "tid": "txn289", "userId": "id5", "id": "B9!vP3#E", "credit": 320, "total": 450 },
    { "tid": "txn290", "userId": "id5", "id": "B9!vP3#E", "credit": 320, "total": 450 },
    { "tid": "txn291", "userId": "id5", "id": "K@6sF2#A", "credit": 320, "total": 450 },
    { "tid": "txn292", "userId": "id5", "id": "K@6sF2#A", "credit": 320, "total": 450 },
    { "tid": "txn293", "userId": "id5", "id": "K@6sF2#A", "credit": 320, "total": 450 },
    { "tid": "txn294", "userId": "id5", "id": "K@6sF2#A", "credit": 320, "total": 450 },
    { "tid": "txn295", "userId": "id5", "id": "K@6sF2#A", "credit": 320, "total": 450 },
    { "tid": "txn296", "userId": "id5", "id": "K@6sF2#A", "credit": 320, "total": 450 },
    { "tid": "txn297", "userId": "id5", "id": "K@6sF2#A", "credit": 320, "total": 450 },
    { "tid": "txn298", "userId": "id5", "id": "K@6sF2#A", "credit": 320, "total": 450 },
    { "tid": "txn299", "userId": "id5", "id": "K@6sF2#A", "credit": 320, "total": 450 },
    { "tid": "txn300", "userId": "id5", "id": "K@6sF2#A", "credit": 320, "total": 450 },
    { "tid": "txn301", "userId": "id6", "id": "M7!lT1#Z", "credit": 320, "total": 450 },
    { "tid": "txn302", "userId": "id6", "id": "M7!lT1#Z", "credit": 320, "total": 450 },
    { "tid": "txn303", "userId": "id6", "id": "M7!lT1#Z", "credit": 320, "total": 450 },
    { "tid": "txn304", "userId": "id6", "id": "M7!lT1#Z", "credit": 320, "total": 450 },
    { "tid": "txn305", "userId": "id6", "id": "M7!lT1#Z", "credit": 320, "total": 450 },
    { "tid": "txn306", "userId": "id6", "id": "M7!lT1#Z", "credit": 320, "total": 450 },
    { "tid": "txn307", "userId": "id6", "id": "M7!lT1#Z", "credit": 320, "total": 450 },
    { "tid": "txn308", "userId": "id6", "id": "M7!lT1#Z", "credit": 320, "total": 450 },
    { "tid": "txn309", "userId": "id6", "id": "M7!lT1#Z", "credit": 320, "total": 450 },
    { "tid": "txn310", "userId": "id6", "id": "M7!lT1#Z", "credit": 320, "total": 450 },
    { "tid": "txn311", "userId": "id6", "id": "R5#tG7@K", "credit": 320, "total": 450 },
    { "tid": "txn312", "userId": "id6", "id": "R5#tG7@K", "credit": 320, "total": 450 },
    { "tid": "txn313", "userId": "id6", "id": "R5#tG7@K", "credit": 320, "total": 450 },
    { "tid": "txn314", "userId": "id6", "id": "R5#tG7@K", "credit": 320, "total": 450 },
    { "tid": "txn315", "userId": "id6", "id": "R5#tG7@K", "credit": 320, "total": 450 },
    { "tid": "txn316", "userId": "id6", "id": "R5#tG7@K", "credit": 320, "total": 450 },
    { "tid": "txn317", "userId": "id6", "id": "R5#tG7@K", "credit": 320, "total": 450 },
    { "tid": "txn318", "userId": "id6", "id": "R5#tG7@K", "credit": 320, "total": 450 },
    { "tid": "txn319", "userId": "id6", "id": "R5#tG7@K", "credit": 320, "total": 450 },
    { "tid": "txn320", "userId": "id6", "id": "R5#tG7@K", "credit": 320, "total": 450 },
    { "tid": "txn321", "userId": "id6", "id": "Q9@pR4#Y", "credit": 320, "total": 450 },
    { "tid": "txn322", "userId": "id6", "id": "Q9@pR4#Y", "credit": 320, "total": 450 },
    { "tid": "txn323", "userId": "id6", "id": "Q9@pR4#Y", "credit": 320, "total": 450 },
    { "tid": "txn324", "userId": "id6", "id": "Q9@pR4#Y", "credit": 320, "total": 450 },
    { "tid": "txn325", "userId": "id6", "id": "Q9@pR4#Y", "credit": 320, "total": 450 },
    { "tid": "txn326", "userId": "id6", "id": "Q9@pR4#Y", "credit": 320, "total": 450 },
    { "tid": "txn327", "userId": "id6", "id": "Q9@pR4#Y", "credit": 320, "total": 450 },
    { "tid": "txn328", "userId": "id6", "id": "Q9@pR4#Y", "credit": 320, "total": 450 },
    { "tid": "txn329", "userId": "id6", "id": "Q9@pR4#Y", "credit": 320, "total": 450 },
    { "tid": "txn330", "userId": "id6", "id": "Q9@pR4#Y", "credit": 320, "total": 450 },
    { "tid": "txn331", "userId": "id6", "id": "L6$oA2#B", "credit": 320, "total": 450 },
    { "tid": "txn332", "userId": "id6", "id": "L6$oA2#B", "credit": 320, "total": 450 },
    { "tid": "txn333", "userId": "id6", "id": "L6$oA2#B", "credit": 320, "total": 450 },
    { "tid": "txn334", "userId": "id6", "id": "L6$oA2#B", "credit": 320, "total": 450 },
    { "tid": "txn335", "userId": "id6", "id": "L6$oA2#B", "credit": 320, "total": 450 },
    { "tid": "txn336", "userId": "id6", "id": "L6$oA2#B", "credit": 320, "total": 450 },
    { "tid": "txn337", "userId": "id6", "id": "L6$oA2#B", "credit": 320, "total": 450 },
    { "tid": "txn338", "userId": "id6", "id": "L6$oA2#B", "credit": 320, "total": 450 },
    { "tid": "txn339", "userId": "id6", "id": "L6$oA2#B", "credit": 320, "total": 450 },
    { "tid": "txn340", "userId": "id6", "id": "L6$oA2#B", "credit": 320, "total": 450 },
    { "tid": "txn341", "userId": "id6", "id": "F8!gJ3#N", "credit": 320, "total": 450 },
    { "tid": "txn342", "userId": "id6", "id": "F8!gJ3#N", "credit": 320, "total": 450 },
    { "tid": "txn343", "userId": "id6", "id": "F8!gJ3#N", "credit": 320, "total": 450 },
    { "tid": "txn344", "userId": "id6", "id": "F8!gJ3#N", "credit": 320, "total": 450 },
    { "tid": "txn345", "userId": "id6", "id": "F8!gJ3#N", "credit": 320, "total": 450 },
    { "tid": "txn346", "userId": "id6", "id": "F8!gJ3#N", "credit": 320, "total": 450 },
    { "tid": "txn347", "userId": "id6", "id": "F8!gJ3#N", "credit": 320, "total": 450 },
    { "tid": "txn348", "userId": "id6", "id": "F8!gJ3#N", "credit": 320, "total": 450 },
    { "tid": "txn349", "userId": "id6", "id": "F8!gJ3#N", "credit": 320, "total": 450 },
    { "tid": "txn350", "userId": "id6", "id": "F8!gJ3#N", "credit": 320, "total": 450 },
    { "tid": "txn351", "userId": "id6", "id": "A8!gJ3#O", "credit": 320, "total": 450 },
    { "tid": "txn352", "userId": "id6", "id": "A8!gJ3#O", "credit": 320, "total": 450 },
    { "tid": "txn353", "userId": "id6", "id": "A8!gJ3#O", "credit": 320, "total": 450 },
    { "tid": "txn354", "userId": "id6", "id": "A8!gJ3#O", "credit": 320, "total": 450 },
    { "tid": "txn355", "userId": "id6", "id": "A8!gJ3#O", "credit": 320, "total": 450 },
    { "tid": "txn356", "userId": "id6", "id": "A8!gJ3#O", "credit": 320, "total": 450 },
    { "tid": "txn357", "userId": "id6", "id": "A8!gJ3#O", "credit": 320, "total": 450 },
    { "tid": "txn358", "userId": "id6", "id": "A8!gJ3#O", "credit": 320, "total": 450 },
    { "tid": "txn359", "userId": "id6", "id": "A8!gJ3#O", "credit": 320, "total": 450 },
    { "tid": "txn360", "userId": "id6", "id": "A8!gJ3#O", "credit": 320, "total": 450 },
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
    let newObj = { ...req.body, status: "pending" }

    res.send(201, { status: true, message: "success", data: newObj })
})
app.post("/transactions/:userId", (req, res) => {
    let { userId } = req.params
    let { accountId } = req.body
    console.log(userId, accountId)
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


app.listen(5000)