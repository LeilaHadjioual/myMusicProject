import React from 'react';
import FormControl from "@material-ui/core/FormControl/FormControl";
import Input from "@material-ui/core/Input/Input";
import Header from "../widget/Header";


class LogIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    };

    render() {
        return (
            <div className="">
                <Header/>
                <FormControl>
                    {/*<InputLabel htmlFor="my-input">Email address</InputLabel>*/}
                    <Input id="my-input" aria-describedby="my-helper-text" placeholder="Email"/>
                    <Input id="my-input" aria-describedby="my-helper-text" placeholder="password"/>
                </FormControl>
                <button type="submit">Connexion</button>

            </div>
        )
    }
}

export default LogIn;