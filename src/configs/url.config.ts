const registerUser = "/auth/signUp";
const registerUserVerify = "/auth/signUp/verify/";
const loginUser = "/auth/signIn"
const me = "user/me"
const updateMe = "user/updateMe"
const brands = "/brands"
const brandId = "/brands/id"
const models = "/models"
const modelId = "/models/id"
const oblasts = "/oblasts"
const currency = "/currency"
const createCare = "/car"
const car = "/car"
const carUser = "/car/userId"
const carId = "/car/carId";


const urlConfig = {
    user: {
        registerUser: registerUser,
        registerUserVerify: registerUserVerify,
        loginUser: loginUser,
        me: me,
        updateMe: updateMe,

    },
    brand: {
        brands: brands,
        brandId: brandId,
    },
    models: {
        models: models,
        modelId:modelId
    },
    oblast: {
        oblasts: oblasts,
    },
    currency: {
        currency:currency
    },
    car: {
        createCar: createCare,
        car: car,
        carUser: carUser,
        carId: carId

    }
};

export {
    urlConfig
};
