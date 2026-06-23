import { countriesData } from "./data.js"


function GetTotlatPeople() {

	return countriesData.reduce((sum, c) => sum + c.population, 0);
}

function preparPopulObject() {

	return countriesData.map(country => {
		return {
			name: country.name,
			population: country.population
		};
	});

}

function SortPopulation() {
	return preparPopulObject().sort((a, b) => b.population - a.population);
}

function GetTopNCountryFromPopulation(N) {
	return SortPopulation().slice(0, N);
}

function CalcluateTotalLang() {

	return countriesData.reduce((acc, country) => {

		if (country.languages) {
			country.languages.forEach(langItem => {
				acc[langItem] = (acc[langItem] || 0) + 1;
			});
		}

		return acc;

	}, {});

}

function SortLang() {

	return Object.entries(CalcluateTotalLang())
		.map(([name, total]) => ({ name, total }))
		.sort((a, b) => b.total - a.total);
}

function GetTopLang(Max) {
	return SortLang().slice(0, Max);
}

function getTopNInPopulation(Max) {
	popul = [...countriesData]
		.sort((a, b) => b.population - a.population)
		.slice(0, Max);
}

function getEleUsingID(ID) {
	return document.getElementById(ID);
}

function CreateElement(name, className, id = null, textContent = "", father = null) {

	const element = document.createElement(name);
	element.classList.add(className);

	if (textContent !== "") {
		element.textContent = textContent;
	}

	if (id) {
		element.id = id;
	}

	if (father) {
		const parent = getEleUsingID(father);
		parent.appendChild(element);
	}
	else {
		document.body.appendChild(element);
	}

	return element;
}


function Display(isLang = true) {

	const EleSec = getEleUsingID("MainSec");
	EleSec.innerHTML = "";

	if (isLang) {
		let LangArray = GetTopLang(10);
		for (let index = 0; index < 10; index++) {
			CreateElement("div", `displayRow`, `displayRow-${index + 1}`, null, "MainSec")
			CreateElement("div", `MaxContant`, `fMaxContant-${index + 1}`, null, `displayRow-${index + 1}`);
			CreateElement("p", "reslttext", null, LangArray[index].name, `fMaxContant-${index + 1}`);
			CreateElement("div", "prograssbar", `prograssbar-${index + 1}`, null, `displayRow-${index + 1}`);
			let bar = CreateElement("p", "bar", null, '', `prograssbar-${index + 1}`);
			bar.style.width = `${LangArray[index].total}%`;
			CreateElement("div", `MaxContant`, `sMaxContant-${index + 1}`, null, `displayRow-${index + 1}`);
			CreateElement("p", "reslttext", null, LangArray[index].total, `sMaxContant-${index + 1}`);
		}

	}
	else {

		const NumbeofPe = GetTotlatPeople();

		let populArray = [{
			name: "World",
			population: NumbeofPe
		}];

		populArray.push(...GetTopNCountryFromPopulation(9));
		for (let index = 0; index < 10; index++) {
			CreateElement("div", `displayRow`, `displayRow-${index + 1}`, null, "MainSec")
			CreateElement("div", `MaxContant`, `fMaxContant-${index + 1}`, null, `displayRow-${index + 1}`);
			CreateElement("p", "reslttext", null, populArray[index].name, `fMaxContant-${index + 1}`);
			CreateElement("div", "prograssbar", `prograssbar-${index + 1}`, null, `displayRow-${index + 1}`);
			let bar = CreateElement("p", "bar", null, '', `prograssbar-${index + 1}`);
			bar.style.width = `${populArray[index].population / NumbeofPe * 100}%`;
			CreateElement("div", `MaxContant`, `sMaxContant-${index + 1}`, null, `displayRow-${index + 1}`);
			CreateElement("p", "reslttext", null, populArray[index].population, `sMaxContant-${index + 1}`);
		}
	}
}

document.addEventListener("DOMContentLoaded", () => {

	getEleUsingID("CountriesNumber").textContent = countriesData.length;
	const Popbtn = CreateElement("button", "but", "Population", "Population", "ButGroup");
	const Langbtn = CreateElement("button", "but", "Language", "Languages", "ButGroup");

	Popbtn.addEventListener("click", () => {
		Display(false);

		getEleUsingID("HelperText").textContent
			= "10 most populated countries in the world";
	});
	Langbtn.addEventListener("click", () => {
		Display();

		getEleUsingID("HelperText").textContent
			= "10 most spoken languages in the world";
	});

});



