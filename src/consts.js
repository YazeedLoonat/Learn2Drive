const PACKAGES = [
	{
		media: "permit.jpg",
		title: "Permit",
		cost: 39,
		name: "permit",
		listInfo: [
			"5 Hour Class (no charge if you select a driving package)",
			"Evaluation",
			"Insurance Certificate",
		]
	},
	{
		media: "2Hour.jpg",
		title: "2 Hour",
		cost: 199,
		name: "2hour",
		listInfo: [
			"5 Hour Class (Optional - no charge)",
			"Permit evaluation",
			"2 hours behind the wheel",
			"Driver license evaluation",
			"Insurance certificate",
		]
	},
	{
		media: "6Hour.jpg",
		title: "6 Hour",
		cost: 399,
		name: "6hour",
		listInfo: [
			"5 Hour Class (Optional - no charge)",
			"Permit evaluation",
			"6 hours behind the wheel",
			"Driver license evaluation",
			"Insurance certificate",
		]
	},
	{
		media: "10Hour.jpg",
		title: "10 Hour",
		cost: 699,
		name: "10hour",
		listInfo: [
			"5 Hour Class (Optional - no charge)",
			"Permit evaluation",
			"10 hours behind the wheel",
			"Driver license evaluation",
			"Insurance certificate",
			"Training Completion Certificate upon successfully passing our evaluation. This is the only package that will waive the Test at MVD",
		]
	}
];

const ABOUT_LIST_INFO = [
	"If you are looking for patient, calm and experienced trainers, you've come to the right place ",
	"Our Trainers have had extensive background checks and are MVD certified ",
	"Lessons are enjoyable yet educational ",
	"We will help you develop skills necessary to be safe and confident behind the wheel of your car ",
	"We proudly started our driving school in Tucson, Arizona ",
	"The school is locally owned and operated in Pima County ",
	"Areas we serve are: Tucson, Vail, Green Valley, Sahuarita, Oro Valley, Marana and surrounding areas ",
	"Contracted and Certified in the State of Arizona ",
	"Authorized Third Party Trainer Provider ",
];

const CLASSES_LIST_INFO_1 = [
	"This class is to help prepare you to take the permit test at MVD",
	"The curriculum focuses on giving you a complete understanding of the rules and regulations needed to get your learner's permit",
	"Upon completion of this class an insurance certificate will be issued"
];

const CLASSES_LIST_INFO_2 = [
	"This course will reinforce good driving habits, build confidence, and develop skills and understanding to make you a safe driver",
	"Upon completion of this course an insurance certificate will be issued"
];

const CLASSES_LIST_INFO_3 = [
	"5 hours of classroom instruction covering traffic laws and regulations and the principles of defensive driving",
	"10 hours of behind the wheel training (five 2 hour sessions)",
	"Insurance certificate which may qualify you for a discount on your insurance and a Training Completion Certificate (after successfully passing our test) that waives the test at MVD",
];

const SUBMIT = "submit";

const FORMS = {
	ContactUs: {
		actions: [
			{
				name: SUBMIT,
				label: "Send"
			}
		],
		rows: [
			[{
				name: "name",
				label: "Name",
				required: true,
				multiline: false,
				value: "",
				type: "text"
			}],
			[{
				name: "email",
				label: "Email",
				required: true,
				multiline: false,
				value: "",
				type: "email"
			}],
			[{
				name: "subject",
				label: "Subject",
				required: true,
				multiline: false,
				value: "",
				type: "text"
			}],
			[{
				name: "message",
				label: "Message",
				required: true,
				multiline: true,
				value: "",
				type: "text"
			}]
		]
	},
	Register: {
		actions: [
			{
				name: SUBMIT,
				label: "Send"
			}
		],
		rows: [
			[{
				name: "name",
				label: "Name",
				required: true,
				multiline: false,
				value: "",
				type: "text"
			}],
			[{
				name: "email",
				label: "Email",
				required: true,
				multiline: false,
				value: "",
				type: "email"
			}],
			[{
				name: "package",
				label: "Preferred Package",
				required: true,
				multiline: false,
				value: "",
				type: "select"
			}],
			[{
				name: "date",
				label: "Class Date",
				required: true,
				multiline: false,
				value: "",
				type: "date"
			}],
			[{
				name: "message",
				label: "Message",
				required: true,
				multiline: true,
				value: "",
				type: "text"
			}]
		]
	},
	Review: {
		actions: [
			{
				name: SUBMIT,
				label: "Comment"
			}
		],
		rows: [
			[{
				name: "name",
				label: "Name",
				required: true,
				multiline: false,
				value: "",
				type: "text"
			}],
			[{
				name: "message",
				label: "Comment",
				required: true,
				multiline: true,
				value: "",
				type: "text"
			}]
		]
	}
};

const HOME_LIST_INFO = [
	"Affordable all-inclusive packages",
	"High quality driving institution",
	"Positive reinforcement",
	"Online registration",
	"You make your own driving schedule",
	"A possibility of lower insurance rates",
	"Class and drive times are conveniently scheduled to accommodate student needs",
	"Training Completion Certificate after passing our test waives the driving test at MVD",
];

const NAVITEMS = [
	{
		name: "/home",
		label: "Home"
	},
	{
		name: "/about",
		label: "About"
	},
	{
		name: "/reviews",
		label: "Reviews"
	},
	{
		name: "/classes",
		label: "Classes"
	},
	{
		name: "/packages",
		label: "Packages"
	},
	{
		name: "/location",
		label: "Location"
	},
	{
		name: "/register",
		label: "Register"
	},
	{
		name: "/payment",
		label: "Payment"
	},
	{
		name: "/contactUs",
		label: "Contact Us"
	}
];

const PAYMENT_LIST_INFO_1 = [
	"Cash",
	"Personal Check",
	"Money Order",
	"Cashiers Check",
	"Debit/Credit Card"
];

const PAYMENT_LIST_INFO_2 = [
	"Packages are valid for one year from date of purchase",
	"All sales are final - No Refunds",
	"Unused time cannot be split or transferred to another student",
	"No Refunds issued for unused time",
	"Drive cancellations within 24hrs of a scheduled drive may be subject to a fee"
];

const REGISTER_LIST_INFO = [
	"December 5th"
];

const REQUIRED_MESSAGE = "This field is required";

const INVALID_EMAIL = "Please enter a valid email";

const IMAGE_HEIGHT = 120

module.exports = {
	PACKAGES,
	ABOUT_LIST_INFO,
	CLASSES_LIST_INFO_1,
	CLASSES_LIST_INFO_2,
	CLASSES_LIST_INFO_3,
	REQUIRED_MESSAGE,
	INVALID_EMAIL,
	SUBMIT,
	FORMS,
	HOME_LIST_INFO,
	NAVITEMS,
	IMAGE_HEIGHT,
	PAYMENT_LIST_INFO_1,
	PAYMENT_LIST_INFO_2,
	REGISTER_LIST_INFO,
};