const skillList = [
	{
		title: "Python for Data Analysis",
		per: 70,
		color: '#005760'
	},
	{
		title: "MySQL, PostgreSQL",
		per: 80,
		color: '#f3c940'
	},
	{
		title: "Data visualization with tableau/PowerBI",
		per: 80,
		color: '#96C5F7'
	},
	{
		title: "Microsoft Excel Advanced",
		per: 90,
		color: '#6C464F'
	},
	{
		title: "SAP MM",
		per: 80,
		color: '#700353'
	},
	{
		title: "Statistical Analysis",
		per: 70,
		color: '#EF767A'
	},
	{
		title: "Web scraping with Python",
		per: 50,
		color: '#4C1C00'
	}
];

// {
// 	title: "Adaptability",
// 		per: 40,
// 			color: '#832161'
// },
// {
// 	title: "Communication skills",
// 		per: 90,
// 			color: '#A1CF6B'
// },
// {
// 	title: "Critical thinking",
// 		per: 80,
// 			color: '#DA4167'
// },

const experienceList = [
	{
		title: "Customer Service Representative | Farm Boy Inc.",
		loc: 'Toronto|Ontario',
		duration: 'Sept 2023-Present',
		desc: "Worked on 'Enhanced customer communication' through regular interaction, ensuring personalized and effective service. Also developed proactive problem-solving techniques, resulting in a 10% reduction in customer complaints and increased satisfaction."
	},
	{
		title: "Junior Project Manager | Enactus George Brown ",
		loc: 'Greater Toronto Area, Canada',
		duration: 'Jun 2023-Present',
		desc: "Led 'Project Tenacity' and Project Bean, improving high school financial literacy by 20% and reducing environmental impact by 15% through innovative waste utilization. Also managed project budgets, optimizing costs for a 20% increase in cost-effectiveness, skillfully navigating limited budgets of $2500 CAD for each project."
	},
	{
		title: "Supply Chain Analyst | Carraro Technologies India Pvt. Ltd.",
		loc: 'Maharashtra, India',
		duration: 'May 2021–May 2022',
		desc: "Analyzed millions of data rows, identifying critical bottlenecks to ensure continuous production and significantly minimizing machine stoppages. Proactively recommended and implemented process improvements, leading to noticeable gains in operational efficiency and substantial cost savings."
	},
]

$(window).load(function () {
	$(".se-pre-con").fadeOut("slow");
});

let experiences = '';
experienceList.forEach((e, idx) => {
	const exp = `
		<div class="experience">
			<div class="serial">${idx + 1}.</div>
			<div class="content">
				<h4 class="title">${e.title}</h4>
				<h6><span>${e.loc}</span> &nbsp;&nbsp;&nbsp;&nbsp; <span>(${e.duration})</span></h6>
				<p>${e.desc}</p>
			</div>
		</div>
	`;
	experiences += exp;
});
$('#experienceContainer').html(experiences);

let skillSet = '';
skillList.forEach(e => {
	const skill = `
	<div class="skill">
		<p>${e.title}</p>
		<div class="skill-container">
			<div class="skills" style="width: ${e.per}%; background-color: #005760;">${e.per}%</div>
		</div>
	</div>
	`;
	skillSet += skill;
});
$('#skillsContainer').html(skillSet);


// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}