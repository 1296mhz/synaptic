import Synaptic = require('./synaptic');

// squashing functions

export function LOGISTIC(x: number, derivate?: boolean) {
	if (!derivate)
		return 1 / (1 + Math.exp(-x));
	var fx = LOGISTIC(x);
	return fx * (1 - fx);
}

export function TANH(x: number, derivate?: boolean) {
	if (derivate)
		return 1 - Math.pow(TANH(x), 2);
	var eP = Math.exp(x);
	var eN = 1 / eP;
	return (eP - eN) / (eP + eN);
}

export function IDENTITY(x: number, derivate?: boolean) {
	return derivate ? 1 : x;
}

export function RELU(x: number, derivate?: boolean) {
	if (derivate)
		return x <= 0 ? 0 : 1;
	return x <= 0 ? 0 : x;
}

export function LEAKY_RELU(x: number, derivate?: boolean) {
	if (derivate)
		return x <= 0 ? 0 : 1;
	return x <= 0 ? 0.01 * x : x;
}

export function SOFTPLUS(x: number, derivate?: boolean) {
	if (derivate)
		return 1 / (1 + Math.exp(-x));
	return Math.log(1 + Math.exp(x));
}

export function HLIM(x: number, derivate?: boolean) {
	return derivate ? 1 : +(x > 0);
}
