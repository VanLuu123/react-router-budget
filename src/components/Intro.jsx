import { Form } from "react-router-dom"

// library
import { UserPlusIcon } from "@heroicons/react/24/solid"

// assets
import illustration from "../assets/illustration.jpg"

const Intro = () => {
    return (
        <div className="intro">
            <div>
                <h1>
                    Start Budgeting your <span className="accent">Money</span>
                </h1>
                <p>
                    Personal budgeting is how you keep expenses in track. Start now. 
                </p>
                <Form method="post">
                    <input 
                    type="text"
                    name="userName"
                    required 
                    placeholder="What is your name?"
                    aria-label="Your Name" 
                    autoComplete="given-name"/>
                    <input type="hidden" name="_action" value="newUser" />
                    <button type="submit" className="btn btn--dark">
                        <span>Create Account</span>
                        <UserPlusIcon width={20} />
                    </button>
                </Form>
            </div>
            <img src={illustration} alt="Person with money" width={600} />
        </div>
    )
}
export default Intro