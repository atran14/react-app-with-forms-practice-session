import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

type RegisterFormData = {
    username: string;
    firstName: string;
    lastName: string;
    emailAddress: string;
    password: string;
}

const USERNAME = "username";
const FIRST_NAME = "firstName";
const LAST_NAME = "lastName";
const EMAIL_ADDRESS = "emailAddress";
const PASSWORD = "password";

export function RegisterForm() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<RegisterFormData>();
    const onSubmit = (data: RegisterFormData) => console.log(data);

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

            <Form.Group controlId="loginForm.FirstNameInput">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Bob" {...register(FIRST_NAME, {
                    required: true,
                    max: 20
                })} />
                {errors[FIRST_NAME] && <span className="text-danger">First name must be at most 20 characters</span>}
            </Form.Group>

            <Form.Group controlId="loginForm.LastNameInput">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="McFarlain" {...register(LAST_NAME, {
                    required: true,
                    max: 20
                })} />
                {errors[LAST_NAME] && <span className="text-danger">Last name must be at most 20 characters</span>}
            </Form.Group>

            <Form.Group controlId="loginForm.EmailAddressInput">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="abc123@yahoo.com" {...register(EMAIL_ADDRESS, {
                    required: true,
                    max: 100
                })} />
                {errors[EMAIL_ADDRESS] && <span className="text-danger">Required</span>}
            </Form.Group>

            <Form.Group controlId="loginForm.PasswordInput">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" {...register(PASSWORD, {
                    required: true,
                    min: 10,
                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{10,})/i
                })} />
                {errors[PASSWORD] && <span className="text-danger">Password must be at least 10 characters long and must contain: at least 1 lowercase character, 1 uppercase character, and 1 of the following special characters: !@#\$%\^{'&'}\*</span>}
            </Form.Group>

            {/* <Form.Group controlId="loginForm.RememberMeCheckBox">
                <Form.Check type="checkbox" label="Remember Me" {...register(REMEMBER_ME)} />
            </Form.Group> */}

            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    );
}