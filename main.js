let raceNumber = Math.floor(Math.random() * 1000);
let earlyRunner = 'no';
let age = 10;
if (age > 18 && earlyRunner =='yes') {
	console.log (raceNumber + Math.floor(Math.random()+ 1000));
}
else if (age > 18 && earlyRunner !== 'yes)') {
	console.log (raceNumber);
}
else (age < 18);
	console.log (raceNumber);


if (age > 18 && earlyRunner =='yes') {
	console.log (`Runner ${raceNumber + 1000} will race at 9:30 am`);
}
else if (age > 18 && earlyRunner !== 'yes') {
	console.log (`Runner ${raceNumber} will race at 11:00 am`);
}
else if (age < 18 ) {
	console.log ( `Runner ${raceNumber} will race at 12:30 pm`);
}
