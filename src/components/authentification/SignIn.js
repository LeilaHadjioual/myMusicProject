import React from 'react';
import FormControl from "@material-ui/core/FormControl/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText/FormHelperText";
import Input from "@material-ui/core/Input/Input";
import Header from "../widget/Header";


class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    };


    render() {
        return (
            <div className="">
                <Header/>
                <div className="container">
                    <FormControl>
                        {/*<InputLabel htmlFor="my-input">Email address</InputLabel>*/}
                        <Input id="my-input" aria-describedby="my-helper-text" placeholder="Nom"/>
                        <Input id="my-input" aria-describedby="my-helper-text" placeholder="Prénom"/>
                        <Input id="my-input" aria-describedby="my-helper-text" placeholder="Email"/>
                        <Input id="my-input" aria-describedby="my-helper-text" placeholder="password"/>
                        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                    </FormControl>
                    <button type="submit">submit</button>
                </div>

            </div>
        )
    }
}

export default SignIn;