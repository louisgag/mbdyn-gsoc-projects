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
		"areas" : ["User Interface Components"],
		"tags" : ["Python", "Blender"],
		"markdown": "improve_blendyn.md",
		"collaborating_projects" : [""]
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
		"areas" : ["Modeling Capabilities"],
		"tags" : ["c++", "modules", "MBDyn scripting", "vehicle mechanics"],
		"markdown": "improve_vehicle.md",
		"collaborating_projects" : [""]
	},
	{
		"name" : "Wheel4 (tire model) module improvements",
		"desc" : "Improve the existing SWIFT tire functionalities of MBDyn",
		"requirements" : [
			"Entry test for MBDyn must have been completed.",
			"The applicant as sucessfully run the wheel4 model.",
		],
		"difficulty" : "difficult",
		"issues" : [
			"na"
		],
		"mentors" : [
			"louisgag",
			"zanoni-mbdyn"
		],
		"areas" : ["Modeling Capabilities"],
		"tags" : ["tires", "c++", "modules", "vehicle mechanics"],
		"markdown": "improve_wheel4.md",
		"collaborating_projects" : [""]
	},
	{
		"name" : "Flight dynamics module",
		"desc" : "Develop a flight simulator that uses MBDyn to create a realistic flight experience",
		"requirements" : [
			"Entry test for MBDyn must have been completed.",
			"The applicant as sucessfully ran a aircraft/helicopter MBDyn model.",
		],
		"difficulty" : "medium/difficult",
		"issues" : [
			"na"
		],
		"mentors" : [
			"ando",
			"zanoni-mbdyn"
		],
		"areas" : ["Inter-Process Communication / Real-Time Simulation (IPC / RT)"],
		"tags" : ["flight simulator", "c++", "GUI"],
		"markdown": "flight_dyn.md",
		"collaborating_projects" : [""]
	},
	{
		"name" : "Improve coupling with other software",
		"desc" : "Implement or perfect the existing hooks to Matlab, Octave, Simulink, Scilab, and OpenFOAM",
		"requirements" : [
			"Entry test for MBDyn must have been completed.",
			"The applicant as sucessfully ran a coupled MBDyn model.",
		],
		"difficulty" : "medium/difficult",
		"issues" : [
			"na"
		],
		"mentors" : [
			"ando",
			"quaranta_giuseppe"
		],
		"areas" : ["Inter-Process Communication / Real-Time Simulation (IPC / RT)"],
		"tags" : ["c++", "Matlab", "Octave", "Scilab", "OpenFOAM", "Python"],
		"markdown": "coupling.md",
		"collaborating_projects" : [""]
	},
	{
		"name" : "Automatic differentiation",
		"desc" : "Improve the current automatic differentiation algorithms of MBDyn",
		"requirements" : [
			"Entry test for MBDyn must have been completed.",
			"The applicant as sucessfully ran a MBDyn model with automatic differentiation.",
		],
		"difficulty" : "easy/medium",
		"issues" : [
			"na"
		],
		"mentors" : [
			"marco_morandini"
		],
		"areas" : ["Miscellaneous"],
		"tags" : ["c++"],
		"markdown": "autodiff.md",
		"collaborating_projects" : [""]
	}

]
