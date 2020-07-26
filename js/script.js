const students = ["Саша", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

let pairs = document.getElementById('pairs');
let projects = document.getElementById('projects');
let estimate = document.getElementById('estimate');
let randomMark = document.getElementById('randomMark');


function getPairs() {
	let boys = [];
	let girls = [];
	let getPairs = [];
	for (student of students) {
		if (student.endsWith('на') || student.endsWith('ра')) {
			girls.push(student);
		} else {
			boys.push(student);
		}
	}
	for (let i = 0; i < (students.length)/2; i++) {
		getPairs.push([boys[i], girls[i]]);
	}
	return getPairs;
}
const newPairs = getPairs();
console.log(getPairs());


function getThemes() {
	let getThemes = [];
	for (let i = 0; i < themes.length; i++) {
		getThemes.push([newPairs[i].join(' та '), themes[i]]);
	}
	return getThemes;
}
const newThemes = getThemes();
console.log(getThemes());


function getMarks() {
	let getMarks = [];
	for (let i = 0; i < students.length; i++) {
		getMarks.push([students[i], marks[i]]);
	}
	return getMarks;
}
const newMarks = getMarks();
console.log(getMarks());


function getMarksForProject() {
	let getMarksForProject = [];
	for (let i = 0; i < newThemes.length; i++) {
		getMarksForProject.push([newPairs[i].join(' та '), themes[i], Math.ceil(Math.random()*5)]);
	}
	return getMarksForProject;
}
const randMarks = getMarksForProject();
console.log(getMarksForProject());


pairs.innerHTML = `<p>СТУДЕНТИ ПОДІЛЕНІ НА ПАРИ: ${newPairs}</p>`;
projects.innerHTML = `<p>ПАРАМ ПРИСВОЇЛИ ПРОЄКТ: ${newThemes}</p>`;
estimate.innerHTML = `<p>СТУДЕНТАМ ПРИСВОЇЛИ ОЦІНКИ: ${newMarks}</p>`;
randomMark.innerHTML = `<p>СТУДЕНТІВ ОЦІНИЛИ ЗА ПРОЄКТ: ${randMarks}</p>`;
