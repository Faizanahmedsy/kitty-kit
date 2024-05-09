import lodash from "lodash";

export const formatSocialSignUpPayload = (signUpData, selectedVehicle) => {
  const data = {};

  data.firstName = signUpData.firstName;
  data.lastName = signUpData.lastName;
  data.email = signUpData.email;
  data.phoneNumber = signUpData.phoneNumber.replace(/-/g, "");
  data.socialAuthId = signUpData.socialAuthId;
  data.loginType = signUpData.loginType;

  data.selectedVehicle = selectedVehicle;

  data.vehicle = signUpData.vehicles.map((vehicle) => {
    const newData = {
      year: vehicle.year,
      licenseNumber: vehicle.licenseNumber,
      vehicleMakeId: vehicle.vehicleMake._id,
      vehicleModelId: vehicle.vehicleModel._id,
    };

    if (vehicle.vehicleTrim) {
      newData.vehicleModelTrimId = vehicle.vehicleTrim._id;
    }

    if (vehicle.vin) {
      newData.vin = vehicle.vin;
    }

    return newData;
  });

  return data;
};

export const formatSelectedVehicle = (vehicle) => {
  const data = {};

  if (vehicle?.year) {
    data.year = vehicle.year.toString();
  }

  if (vehicle?.licenseNumber) {
    data.licenseNumber = vehicle.licenseNumber;
  }

  if (vehicle?.vehicleMake?._id) {
    data.vehicleMakeId = vehicle.vehicleMake._id;
  }

  if (vehicle?.vehicleModel?._id) {
    data.vehicleModelId = vehicle.vehicleModel._id;
  }

  if (vehicle?.vehicleTrim?._id) {
    data.vehicleModelTrimId = vehicle.vehicleTrim._id;
  } else if (vehicle?.vehicleModelTrim?._id) {
    data.vehicleModelTrimId = vehicle.vehicleModelTrim._id;
  } else {
  }

  if (vehicle?.vin) {
    data.vin = vehicle.vin;
  }

  return data;
};

export const formatVehiclePayload = (
  data,
  makeValue,
  modelValue,
  trimValue
) => {
  const addVehiclePayload = { ...data };
  if (makeValue) {
    data.vehicleMakeId = JSON.parse(makeValue).id;
    addVehiclePayload.vehicleMake = {
      _id: JSON.parse(makeValue).id,
      name: JSON.parse(makeValue).name,
    };
    delete addVehiclePayload["vehicleMakeId"];
  }
  if (modelValue) {
    data.vehicleModelId = JSON.parse(modelValue).id;
    addVehiclePayload.vehicleModel = {
      _id: JSON.parse(modelValue).id,
      name: JSON.parse(modelValue).name,
    };
    delete addVehiclePayload["vehicleModelId"];
  }
  if (trimValue) {
    data.vehicleModelTrimId = JSON.parse(trimValue).id;
    addVehiclePayload.vehicleTrim = {
      _id: JSON.parse(trimValue).id,
      name: JSON.parse(trimValue).name,
    };
    delete addVehiclePayload["vehicleModelTrimId"];
  }
  return addVehiclePayload;
};

export const formatVehiclesDataForPayload = (uglyData) => {
  const beautifulData = uglyData.map((vehicle) => {
    const item = {};

    if (vehicle?.vehicleMake?._id) {
      item.vehicleMakeId = vehicle.vehicleMake._id;
    }

    if (vehicle?.vehicleModel?._id) {
      item.vehicleModelId = vehicle.vehicleModel._id;
    }

    if (vehicle.licenseNumber) {
      item.licenseNumber = vehicle.licenseNumber;
    }

    if (vehicle?.year) {
      item.year = vehicle.year.toString();
    }

    if (vehicle?.vehicleTrim?._id) {
      item.vehicleModelTrimId = vehicle?.vehicleTrim?._id;
    } else if (vehicle?.vehicleModelTrim?._id) {
      item.vehicleModelTrimId = vehicle?.vehicleModelTrim?._id;
    } else {
    }

    if (vehicle?.vin) {
      item.vin = vehicle?.vin;
    }
    return item;
  });

  return beautifulData;
};

export const filterFinalPayload = (payload) => {
  return lodash.omitBy(payload, (a) => {
    return a === "" || a === undefined || a === null;
  });
};

export const formatCustomerRegisterPayload = ({
  data,
  updatedCase,
  formattedSelectedVehicle,
}) => {
  const payload = {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    phoneNumber: data.phoneNumber,
    password: data.password,
    confirmPassword: data.confirmPassword,
    case: updatedCase,
    selectedVehicle: formattedSelectedVehicle,
    vehicle: formatVehiclesDataForPayload(data.vehicles),
  };
  return payload;
};

let myArr = [
  {
    phoneNumber: "21341234",
    countryCode: null,
  },
  {
    email: "",
  },
];

export const filterFinalArray = (array) => {
  return array
    .map((obj) => {
      return lodash.omitBy(
        obj,
        (value) => value === "" || value === undefined || value === null
      );
    })
    .filter((a) => !lodash.isEmpty(a));
};

const foo = filterFinalArray(myArr);
