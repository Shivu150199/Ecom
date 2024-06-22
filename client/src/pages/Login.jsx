import { Form, Link } from "react-router-dom"
import FormInput from "../components/FormInput"

export const Login = () => {
    return <section className="h-screen grid place-items-center">
        <Form
            method="post"
            className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4 "
        >
            <h4 className="text-3xl font-bold text-center">Login</h4>
            <FormInput
                type="email"
                name="identifier"
                label="Email"
                defaultValue="testuser@test.com"
            />
            <FormInput
                type="password"
                name="password"
                label="password"
                defaultValue="secret"
            />
            <div className="mt-4">
                <button className="btn btn-primary btn-block">Submit</button>
            </div>
            <button className="btn btn-secondary btn-block">Guest user</button>
            <p className="text-center">
                Not a member yet?
                <Link
                    to="/signup"
                    className="ml-2 link link-hover link-primary capitalize"
                >
                    Register
                </Link>
            </p>
        </Form>
    </section>

}