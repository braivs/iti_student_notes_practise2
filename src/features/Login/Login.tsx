import React from "react";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useFormik} from "formik";
// import { loginTC } from "./authReducer";
import {useDispatch, useSelector} from "react-redux";
// import { AppRootStateType } from "../../app/store";
import {Navigate} from "react-router-dom";
import {RootReducerType} from "../../app/store";
import {loginTC} from "./auth-reducer";

type FormikErrorType = {
    email?: string;
    password?: string;
    rememberMe?: boolean;
};

export const Login = () => {
    let dispatch = useDispatch();

    //подтягиваем значение из редюсера: залогинен/неЗалогинен
    let isLoggedIn = useSelector<RootReducerType, boolean>(
        (state) => state.auth.isLoggedIn
    );

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            rememberMe: false,
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = "Required";
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            ) {
                errors.email = "Invalid email address";
            }
            if (!values.password) {
                errors.password = "Поле пароль обязательно";
            } else if (values.password.length < 3) {
                errors.password = "Must be 3 characters or less";
            }
            return errors;
        },
        onSubmit: (values) => {
            dispatch(loginTC(values));
            // alert(JSON.stringify(values));
            formik.resetForm();
        },
    });

    //если залогинился переходи на главную страницу
    if (isLoggedIn) {
        return <Navigate to={"/"} />;
    }

    return (
        <Grid container justifyContent={"center"}>
            <Grid item justifyContent={"center"}>
                <form onSubmit={formik.handleSubmit}>
                    <FormControl>
                        <FormGroup>
                            <TextField
                                label="Email"
                                margin="normal"
                                {...formik.getFieldProps("email")}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div style={{ color: "red" }}>{formik.errors.email}</div>
                            ) : null}
                            <TextField
                                type="password"
                                label="Password"
                                margin="normal"
                                {...formik.getFieldProps("password")}
                            />
                            {formik.touched.password && formik.errors.password ? (
                                <div style={{ color: "red" }}>{formik.errors.password}</div>
                            ) : null}
                            <FormControlLabel
                                label={"Remember me"}
                                control={<Checkbox {...formik.getFieldProps("rememberMe")} />}
                            />
                            <Button type={"submit"} variant={"contained"} color={"primary"}>
                                Login
                            </Button>
                        </FormGroup>
                    </FormControl>
                </form>
            </Grid>
        </Grid>
    );
};