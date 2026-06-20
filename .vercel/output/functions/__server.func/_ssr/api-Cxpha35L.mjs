//#region node_modules/.nitro/vite/services/ssr/assets/api-Cxpha35L.js
var types = [
	"Helmet",
	"Triple Riding",
	"Illegal Parking",
	"Signal Jump",
	"Wrong Lane"
];
var classes = [
	"Motorcycle",
	"Car",
	"Truck",
	"Bus",
	"Auto-rickshaw"
];
var statuses = [
	"Pending",
	"Verified",
	"Dismissed",
	"Notified"
];
var locations = [
	"MG Road Jn.",
	"Hi-Tec City",
	"Banjara Hills",
	"Kondapur Jn.",
	"Gachibowli Flyover",
	"Madhapur"
];
function rand(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}
function randomPlate() {
	const states = [
		"TS",
		"AP",
		"KA",
		"MH",
		"DL"
	];
	const letters = "ABCDEFGHJKLMNPQRSTUVWXYZ";
	return `${rand(states)}${String(Math.floor(10 + Math.random() * 89))}${letters[Math.floor(Math.random() * 24)]}${letters[Math.floor(Math.random() * 24)]}${String(Math.floor(1e3 + Math.random() * 8999))}`;
}
var violations = Array.from({ length: 48 }).map((_, i) => {
	const d = /* @__PURE__ */ new Date(Date.now() - i * 1e3 * 60 * 47);
	return {
		id: `VIO-${String(10234 + i)}`,
		type: rand(types),
		vehicleClass: rand(classes),
		plate: randomPlate(),
		confidence: Math.round((.72 + Math.random() * .27) * 100) / 100,
		timestamp: d.toISOString(),
		status: rand(statuses),
		location: rand(locations)
	};
});
var stats = {
	totalViolations: 12847,
	helmet: 4923,
	tripleRiding: 1872,
	illegalParking: 3214,
	ocrSuccessRate: .962,
	detectionAccuracy: .947
};
var violationsByType = types.map((t) => ({
	name: t,
	count: violations.filter((v) => v.type === t).length * 187 + Math.floor(Math.random() * 500)
}));
var dailyTrends = Array.from({ length: 14 }).map((_, i) => {
	const d = /* @__PURE__ */ new Date();
	d.setDate(d.getDate() - (13 - i));
	return {
		date: d.toLocaleDateString("en-US", {
			month: "short",
			day: "numeric"
		}),
		helmet: 120 + Math.floor(Math.random() * 220),
		parking: 80 + Math.floor(Math.random() * 180),
		triple: 30 + Math.floor(Math.random() * 110)
	};
});
var vehicleDistribution = classes.map((c) => ({
	name: c,
	value: 100 + Math.floor(Math.random() * 500)
}));
var ocrAccuracy = Array.from({ length: 12 }).map((_, i) => ({
	hour: `${String(i * 2).padStart(2, "0")}:00`,
	accuracy: 88 + Math.random() * 10
}));
var detectionPerf = Array.from({ length: 7 }).map((_, i) => ({
	day: [
		"Mon",
		"Tue",
		"Wed",
		"Thu",
		"Fri",
		"Sat",
		"Sun"
	][i],
	precision: 90 + Math.random() * 8,
	recall: 87 + Math.random() * 10
}));
/**
* API service layer.
*
* SWAP POINT: change `MOCK = false` and set VITE_API_BASE_URL once your
* FastAPI backend is reachable. All UI calls go through this module.
*/
async function delay(value, ms = 350) {
	return new Promise((r) => setTimeout(() => r(value), ms));
}
var api = {
	async login(email, _password) {
		return delay({
			token: "mock-jwt-token",
			user: {
				email,
				name: "Officer Demo"
			}
		});
	},
	async register(payload) {
		return delay({
			token: "mock-jwt-token",
			user: {
				email: payload.email,
				name: payload.name
			}
		});
	},
	async forgotPassword(email) {
		return delay({
			ok: true,
			email
		});
	},
	async getStats() {
		return delay(stats);
	},
	async getViolations() {
		return delay(violations);
	},
	async getViolation(id) {
		return delay(violations.find((v) => v.id === id));
	},
	async getAnalytics() {
		return delay({
			violationsByType,
			dailyTrends,
			vehicleDistribution,
			ocrAccuracy,
			detectionPerf
		});
	},
	async generateReport(_payload) {
		return delay({
			url: "#",
			filename: `report-${Date.now()}.${_payload.format}`
		});
	}
};
//#endregion
export { stats as n, api as t };
