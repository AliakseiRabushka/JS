const locations = [
  ['Park', [10, 5]],
  ['Sea', [1, 3]],
  ['Museum', [8, 4]],
];
const currentPoint = [5, 5];

const getDistance = ([x1, y1], [x2, y2]) => {
  const xs = x2 - x1;
  const ys = y2 - y1;

  return Math.sqrt(xs ** 2 + ys ** 2);
};


const getTheNearestLocation = (locations, currentPoint) => {
  if (locations.length === 0) {
    return null;
  }
  let result = locations[0];
  let nearestLocation = locations[0][1];
  let minDistance = getDistance(currentPoint, nearestLocation);
  for (let i = 0; i < locations.length; i++) {
    if (getDistance(currentPoint, locations[i][1]) < minDistance) {
      nearestLocation = locations[i][1];
      minDistance = getDistance(currentPoint, locations[i][1]);
      result = locations[i];
    }
    locations[i]
  }
  return result;
}


console.log(getTheNearestLocation(locations, currentPoint));

// Изначально, за ближайшую локацию взять первую локацию, а за минимальное расстояние-расстояние до первой локации. Затем в цикле сравнивать расстояние до текущей локации с минимальным. Если оно меньше, обновить минимальное расстояние и ближайшую локацию. В итоге после работы цикла вы получите ближайшую локацию

// // Если мест нет, то возвращается null
// getTheNearestLocation([], currentPoint); // null
 
// getTheNearestLocation(locations, currentPoint); // ['Museum', [8, 4]]

