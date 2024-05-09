export function groupBy(arr, keyFunc) {
  return arr.reduce((acc, item) => {
    const key = keyFunc(item);
    acc[key] = acc[key] || [];
    acc[key].push(item);
    return acc;
  }, {});
}

export const formatVehicleDataForAutoFilling = (vehiclesArray) => {
  return vehiclesArray.map((item) => {
    let vehicle = {};
    if (item.vehicleMake) vehicle.vehicleMake = item.vehicleMake;
    if (item.vehicleModel) vehicle.vehicleModel = item.vehicleModel;
    if (item.year) vehicle.year = item.year;
    if (vehicle.vin) vehicle.vin = item.vin;
    if (item.licenseNumber) {
      vehicle.licenseNumber = item.licenseNumber;
    }
    if (item.vehicleModelTrim) {
      vehicle.vehicleTrim = item.vehicleModelTrim;
    }
    if (item.vehicleTrim) {
      vehicle.vehicleTrim = item.vehicleTrim;
    }
    if (item.vin) {
      vehicle.vin = item.vin;
    }
    return vehicle;
  });
};
