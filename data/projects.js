projects = [
	{
		"name" : "Improve Blendyn",
		"desc" : "Upgrade the standalone post-processing graphical interface Blendyn",
		"requirements" : [
			"Entry test for Blendyn must be completed",
		],
		"difficulty" : "easy",
		"issues" : [
			"https://github.com/zanoni-mbdyn/blendyn/issues"
		],
		"mentors" : [
			"zanoni-mbdyn",
			"louisgag"
		],
		"initiatives" : ["GSoC"],
		"tags" : ["Python", "Blender"],
		"markdown": "improve_blendyn.md",
		"collaborating_projects" : ["MBDyn"]
	},
	{
		"name" : "Ground vehicle model development",
		"desc" : "Improve the existing ground vehile functionalities of MBDyn",
		"requirements" : [
			"Entry test for MBDyn must have been completed.",
			"The applicant as sucessfully run the semitrailer model.",
		],
		"difficulty" : "medium",
		"issues" : [
			"na"
		],
		"mentors" : [
			"louisgag",
			"zanoni-mbdyn"
		],
		"initiatives" : ["GSoC"],
		"tags" : ["c++", "modules"],
		"markdown": "improve_vehicle.md",
		"collaborating_projects" : ["MBDyn"]
	}

]
