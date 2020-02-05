import * as Yup from "yup";

const YupValidate = Yup.object().shape({
    dilatation: Yup.number()
                    .required()
                    .min(0, "Hmnnn.. the vagina can't be negative")
                    .max(10, "Hmmnnnn.. Do you really expect more than 10cm?!!..."),
    effacement: Yup.number()
                    .required()
                    .min(0, "Hmnnn.. the vagina can't be negative")
                    .max(10, "Hmmnnnn.. Do you really expect more than 10cm?!!..."),
    position: Yup.number()
                    .required()
                    .min(0, "Hmnnn.. the vagina can't be negative")
                    .max(10, "Hmmnnnn.. Do you really expect more than 10cm?!!..."),
    station: Yup.number()
                    .required()
                    .min(0, "Hmnnn.. the vagina can't be negative")
                    .max(10, "Hmmnnnn.. Do you really expect more than 10cm?!!..."),
    descent: Yup.number()
                    .required()
                    .min(0, "Hmnnn.. the vagina can't be negative")
                    .max(10, "Hmmnnnn.. Do you really expect more than 10cm?!!..."),
    descent: Yup.string()
                    .required(),
    username: Yup.string()
                .required()
                    


});

export default YupValidate;
