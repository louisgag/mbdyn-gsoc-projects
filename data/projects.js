projects = [
	{
		"name" : "Convergence criteria",
		"desc" : "Improve the existing convergence criteria",
		"difficulty" : "intermediate",
		"mentors" : [
			"Marco Morandini",
                        "Pierangelo Masarati"
		],
		"category" : "Miscellaneous",
		"tags" : ["C++"],
                "priority" : "high",
		"markdown": "convergeance.md",
	},
	/*
	{
		"name" : "Improve Blendyn",
		"desc" : "Upgrade the standalone post-processing graphical interface Blendyn",
		"difficulty" : "beginner",
		"mentors" : [
			"Andrea Zanoni",
			"Louis Gagnon"
		],
		"category" : "User Interface",
		"tags" : ["Python", "Blender"],
                "priority" : "high",
		"markdown": "improve_blendyn.md"
	},
	{
		"name" : "Flight dynamics module",
		"desc" : "Develop a flight simulator that uses MBDyn to create a realistic flight experience",
		"difficulty" : "intermediate/advanced",
		"mentors" : [
			"Pierangelo Masarati",
			"Andrea Zanoni"
		],
		"category" : "IPC / RT",
		"tags" : ["flight simulator", "C++", "GUI"],
                "priority" : "high",
		"markdown": "flight_dyn.md"
	},
	*/
	{
		"name" : "Libraries update",
		"desc" : "The internal libraries used by MBDyn have a somewhat complicated configuration and could be simplified.",
		"difficulty" : "intermediate",
		"mentors" : [
			"Pierangelo Masarati",
                        "Marco Morandini",
		],
		"category" : "Miscellaneous",
		"tags" : ["C++"],
                "priority" : "high",
		"markdown": "librairies.md",
	},
	{
		"name" : "Couple MBDyn with OpenFOAM",
		"desc" : "Improve the flow domain-induced forces measured by MBDyn and the mesh movement and/or deformation within OpenFOAM by coupling the two software together.",
		"difficulty" : "intermediate-advanced",
		"mentors" : [
                        "Louis Gagnon",
                        "TBD"
		],
		"category" : "Modeling Capabilities",
		"tags" : ["C++", "aerodynamics", "fluid-structure interaction"],
                "priority" : "high",
		"markdown": "openfoamfsi.md",
	},
	{
		"name" : "Improve cycloidal rotor module",
		"desc" : "Keep improving the inflow modelling of the cycloidal rotors that was developped by Kuldeep Singh for GSoC 2016.",
		"difficulty" : "intermediate",
		"mentors" : [
                        "Louis Gagnon",
                        "Giuseppe Quaranta"
		],
		"category" : "Modeling Capabilities",
		"tags" : ["C++", "aeronautics"],
                "priority" : "medium",
		"markdown": "cycloidal.md",
	},
	{
		"name" : "Flexible element graphical interface",
		"desc" : "Add flexible superelement (\"modal\" joint) support to Blendyn",
		"difficulty" : "intermediate",
		"mentors" : [
			"Andrea Zanoni",
                        "Marco Morandini",
		],
		"category" : "User Interface",
		"tags" : ["Python", "Blender"],
                "priority" : "medium",
		"markdown": "flexGUI.md",
	},
	{
		"name" : "Friction in joints",
		"desc" : "Implement friction in joints that do not currently have it",
		"difficulty" : "intermediate",
		"mentors" : [
			"Marco Morandini",
		],
		"category" : "Modeling Capabilities",
		"tags" : ["C++", "mechanical friction"],
                "priority" : "medium",
		"markdown": "friction.md",
	},
	{
		"name" : "Package update",
		"desc" : "A number of modifications can be made to the MBDyn package to extend its usability and improve the user experience and learning curve.",
		"difficulty" : "beginner",
		"mentors" : [
			"Pierangelo Masarati",
                        "Louis Gagnon",
		],
		"category" : "Miscellaneous",
		"tags" : ["C++", "MBDyn scripting"],
                "priority" : "medium",
		"markdown": "package.md",
	},
	{
		"name" : "Configuration update",
		"desc" : "The configuration of MBDyn can benefit from some improvements which would make it easier to use by a greater number of users.",
		"difficulty" : "intermediate",
		"mentors" : [
			"Pierangelo Masarati",
		],
		"category" : "Miscellaneous",
		"tags" : ["autotools", "make", "Linux", "compilation"],
                "priority" : "medium",
		"markdown": "configuration.md",
	},
	{
		"name" : "Cascaded analysis",
		"desc" : "Add support for cascaded models and solutions.",
		"difficulty" : "intermediate/advanced",
		"mentors" : [
			"Pierangelo Masarati",
                        "Marco Morandini"
		],
		"category" : "Miscellaneous",
		"tags" : ["C++"],
                "priority" : "medium",
		"markdown": "cascaded.md",
	},
	{
		"name" : "Embedded optimization",
		"desc" : "Implement an integrated optimization module directly into MBDyn.",
		"difficulty" : "intermediate",
		"mentors" : [
                        "Andrea Zanoni",
                        "Louis Gagnon",
		],
		"category" : "Modeling Capabilities",
		"tags" : ["C++", "mathematics"],
                "priority" : "medium",
		"markdown": "optimization.md",
	},
	{
		"name" : "Improve FMI support",
		"desc" : "Improve de FMI model exchange and co-simulation standard implemented by Devyesh Tandon during GSoC 2016.",
		"difficulty" : "advanced",
		"mentors" : [
                        "Marco Morandini",
                        "Pierangelo Masarati"
		],
		"category" : "IPC / RT",
		"tags" : ["C++", "scripting"],
                "priority" : "low",
		"markdown": "fmi.md",
	},
	{
		"name" : "Ground vehicle model development",
		"desc" : "Improve the existing ground vehile functionalities of MBDyn",
		"difficulty" : "intermediate",
		"mentors" : [
			"Louis Gagnon",
			"Andrea Zanoni"
		],
		"category" : "Modeling Capabilities",
		"tags" : ["C++", "modules", "MBDyn scripting", "vehicle mechanics"],
                "priority" : "low",
		"markdown": "improve_vehicle.md"
	},
	{
		"name" : "Improve the tire model",
		"desc" : "Improve the existing SWIFT-like tire functionalities of MBDyn's wheel4 module",
		"difficulty" : "advanced",
		"mentors" : [
			"Louis Gagnon",
			"Andrea Zanoni"
		],
		"category" : "Modeling Capabilities",
		"tags" : ["tires", "C++", "modules", "vehicle mechanics"],
                "priority" : "low",
		"markdown": "improve_wheel4.md"
	},
	{
		"name" : "Improve coupling with other software",
		"desc" : "Implement or perfect the existing hooks to Matlab, Octave, Simulink, Scilab, and OpenFOAM",
		"difficulty" : "intermediate/advanced",
		"mentors" : [
			"Pierangelo Masarati",
			"Giuseppe Quaranta"
		],
		"category" : "IPC / RT",
		"tags" : ["C++", "Matlab", "Octave", "Scilab", "OpenFOAM", "Python"],
                "priority" : "low",
		"markdown": "coupling.md"
	},
	{
		"name" : "Automatic differentiation",
		"desc" : "Improve the current automatic differentiation algorithms of MBDyn",
		"difficulty" : "beginner/intermediate",
		"mentors" : [
			"Unassigned"
		],
		"category" : "Miscellaneous",
		"tags" : ["C++"],
                "priority" : "low",
		"markdown": "autodiff.md",
	},
	{
		"name" : "Improve the parser",
		"desc" : "Add additional preprocessing functionalities and driver options",
		"difficulty" : "intermediate",
		"mentors" : [
			"Pierangelo Masarati",
                        "Marco Morandini",
                        "Louis Gagnon"
		],
		"category" : "User Interface",
		"tags" : ["C++", "MBDyn scripting"],
                "priority" : "low",
		"markdown": "preproc.md",
	},
	{
		"name" : "Revamp modal joint",
		"desc" : "Implement a series of updates to the current modal joint",
		"difficulty" : "intermediate",
		"mentors" : [
			"Giuseppe Quaranta",
                        "Andrea Zanoni",
                        "Louis Gagnon"
		],
		"category" : "Modeling Capabilities",
		"tags" : ["C++", "linear algebra", "physics"],
                "priority" : "low",
		"markdown": "modal.md",
	},

]
