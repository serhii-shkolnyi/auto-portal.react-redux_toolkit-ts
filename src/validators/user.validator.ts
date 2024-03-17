import Joi from "joi";
import {regexConstant} from "../constants";

const userValidator = Joi.object({

    userName: Joi.string().required().trim().messages({
        'string.empty': "поле не може бути пустим",
        'string.pattern.base': 'Це не email'
    }),
    email: Joi.string().regex(regexConstant.EMAIL).required().messages({
        'string.empty': "поле не може бути пустим",
        'string.pattern.base': 'Це не email'
    }),
    phone: Joi.string().regex(regexConstant.PHONE).required().messages({
        'string.empty': "поле не може бути пустим",
        'string.pattern.base': 'формат +38(077)777-77-77'
    }),
    password:Joi.string().regex(regexConstant.PASSWORD).required().messages({
        'string.empty': "поле не може бути пустим",
        'string.pattern.base': 'має бути хочаб одна заглавна літера та мінімум 8 літер'
    })
});

const userLogin = Joi.object({
    email: Joi.string().regex(regexConstant.EMAIL).required().messages({
        'string.empty': "поле не може бути пустим",
        'string.pattern.base': 'Це не email'
    }),
    password:Joi.string().regex(regexConstant.PASSWORD).required().messages({
        'string.empty': "поле не може бути пустим",
        'string.pattern.base': 'має бути хочаб одна заглавна літера та мінімум 8 літер'
    })
});
const userUpdate = Joi.object({
    userName: Joi.string().required().trim().messages({
        'string.empty': "поле не може бути пустим",
        'string.pattern.base': 'Це не email'
    }),

});

export {
    userValidator,
    userLogin,
    userUpdate
};
