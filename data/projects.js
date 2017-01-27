projects = [
	{
		"name" : "Improve Diff Handling",
		"desc" : "Bears should be able to offer more than just one possible \
		 patch for an issue.",
		"requirements" : [
			"The proposal has to contain a clear concept.",
			"The applicant should have one patch accepted to the coala core."
		],
		"difficulty" : "low",
		"issues" : [
			"https://github.com/coala/coala/issues/1021"
		],
		"mentors" : [
			"sils",
			"jayvdb"
		],
		"initiatives" : ["GSoC", "RGSoC"],
		"tags" : ["Core", "CLI"],
		"markdown": "improve_diff_handling.md",
		"collaborating_projects" : ["coala"]
	},
	{
		"name" : "Create Jenkins Plugin",
		"desc" : "Jenkins users should be able to see coala results right in the \
		Jenkins UI.",
		"requirements" : [
			"Any patch to jenkins has been accepted.",
			"The applicant is familiar with the coala plugins.",
			"Any patch to any coala plugin has been accepted and merged."
		],
		"difficulty" : "low",
		"issues" : [
			"https://github.com/coala/coala/issues/2757"
		],
		"mentors" : [
			"Udayan12167",
			"uhafner"
		],
		"initiatives" : ["GSoC", "RGSoC"],
		"tags" : ["Plugins", "CI"],
		"markdown": "create_jenkins_plugin.md",
		"collaborating_projects" : ["coala", "jenkins"]
	}

]
