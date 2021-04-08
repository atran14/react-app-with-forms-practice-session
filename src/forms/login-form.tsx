import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

type LoginFormData = {
    username: string;
    password: string;
    rememberMe: boolean;
}

const USERNAME = "username";
const PASSWORD = "password";
const REMEMBER_ME = "rememberMe";

export function LoginForm() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<LoginFormData>();
    const onSubmit = (data: LoginFormData) => console.log(data);

    // console.log(watch(USERNAME)); // watch input value by passing the name of it

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="loginForm.UsernameInput">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="bob12345" {...register(USERNAME, {
                    required: true,
                    min: 5
                })} />
                {errors[USERNAME] && <span className="text-danger">Username must be at least 5 characters long</span>}
            </Form.Group>

            <Form.Group controlId="loginForm.PasswordInput">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" {...register(PASSWORD, {
                    required: true,
                    min: 10,
                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{10,})/i
                })} />
                {errors[PASSWORD] && <span className="text-danger">Password is required</span>}
            </Form.Group>

            <Form.Group controlId="loginForm.RememberMeCheckBox">
                <Form.Check type="checkbox" label="Remember Me" {...register(REMEMBER_ME)} />
            </Form.Group>

            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    );
}