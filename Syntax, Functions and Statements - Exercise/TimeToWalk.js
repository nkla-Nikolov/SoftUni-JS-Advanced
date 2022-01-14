function solve(steps, footprint, kmh){

    let distance = steps * footprint;
    let rest = Math.floor(distance / 500);
    let speed = kmh * 1000 / 3600;

    let time = (distance / speed);
    let hours = Math.floor(time / 60).toString().padStart(2, '0');
    let minutes = Math.floor(time / 60 + rest).toString().padStart(2, '0');
    let seconds = (time % 60).toString().padStart(2, '0');

    console.log(`${hours}:${minutes}:${seconds}`);
}

solve(4000, 0.60, 5)