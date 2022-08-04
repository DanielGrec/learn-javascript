// let myLeads = [];
// const inputEl = document.getElementById("input-el");
// const inputBtn = document.getElementById("input-btn");
// const ulEl = document.getElementById("ul-el");
// const deleteBtn = document.getElementById("delete-btn");
// const tabBtn = document.getElementById("tab-btn");

// const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
// if (leadsFromLocalStorage) {
// 	myLeads = leadsFromLocalStorage;
// 	render(myLeads);
// }

// function render(leads) {
// 	let listItems = "";
// 	for (let i = 0; i < leads.length; i++) {
// 		listItems += `
//             <li>
//                 <a target='_blank' href='${leads[i]}'>
//                     ${leads[i]}
//                 </a>
//             </li>
//         `;
// 	}
// 	ulEl.innerHTML = listItems;
// }

// inputBtn.addEventListener("click", function () {
// 	myLeads.push(inputEl.value);
// 	inputEl.value = "";
// 	localStorage.setItem("myLeads", JSON.stringify(myLeads));
// 	render(myLeads);
// });

// deleteBtn.addEventListener("dblclick", function () {
// 	localStorage.clear();
// 	myLeads = [];
// 	render(myLeads);
// });

// tabBtn.addEventListener("dblclick", function () {
// 	chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
// 		myLeads.push(tabs[0].URL);
// 		localStorage.setItem("myLeads", JSON.stringify(myLeads));
// 		render(myLeads);
// 	});
// });

// const player = "Per";
// const opponent = "Nick";
// const game = "AmazingFighter";
// let points = 0;
// let hasWon = false;

// points += 100;
// hasWon = false;

// if (hasWon) {
// 	console.log(`${player} got ${points} points and won the ${game} game!`);
// } else {
// 	console.log(`The winner is ${opponent}! ${player} lost the game!`);
// }

// let myCourses = [
// 	"Learn CSS Animations",
// 	"UI Design Fundamentals",
// 	"Intro to Clean Code",
// ];

// function logItems(arr) {
// 	for (i = 0; i < arr.length; i++) {
// 		console.log(arr[i]);
// 	}
// }

// let data = [
// 	{
// 		player: "Jane",
// 		score: 52,
// 	},
// 	{
// 		player: "Mark",
// 		score: 41,
// 	},
// ];

// const scoreBtn = document.getElementById("score");
// scoreBtn.addEventListener("click", function () {
// 	console.log(data[0].score);
// });

// function generateSentence(desc, arr) {
// 	let baseString = `The ${arr.length} ${desc} are `;
// 	const lastIndex = arr.length - 1;
// 	for (i = 0; i < arr.length; i++) {
// 		if (i === lastIndex) {
// 			baseString += arr[i];
// 		} else {
// 			baseString += arr[i] + ", ";
// 		}
// 	}
// 	return baseString;
// }

// const sentence = generateSentence("highest mountains", [
// 	"Mount Everest",
// 	"K2",
// ]);
// console.log(sentence);

const imgs = ["images/hip1.jpg", "images/hip2.jpg", "images/hip3.jpg"];
const containerEl = document.getElementById("container");
const imgEl = document.getElementsByClassName("team-img");

function renderImg() {
	let imgsDOM = "";
	for (i = 0; i < imgs.length; i++) {
		imgsDOM += `<img alt="Employee in the company" class="team-img" src="${imgs[i]}">`;
	}
	container.innerHTML = imgsDOM;
}
renderImg();
