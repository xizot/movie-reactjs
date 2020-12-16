// import {Form,Button,Grid,Segment,Header as SemanticHeader} from 'semantic-ui-react';
import React from 'react'
import { Link} from 'react-router-dom';

function pLogin() {
    return (
                <>
                {/* <Grid centered>
                <Grid.Column style={{ maxWidth: 550, marginTop: 150 }}>
                    <SemanticHeader>Login to your account</SemanticHeader>     
                    <Segment>
                    <Form>
                        <Form.Field>
                        <Form.Input

                            name="username"
                            placeholder="Username"
                            label="Username"
                        />
                        </Form.Field>      
                        <Form.Field>
                        <Form.Input                        
                            type="password"
                            name="password"
                            placeholder="Password"
                            label="Password"
                        />
                        </Form.Field>        
                        <Button
                        primary
                        type="submit"
                        >
                        Login
                        </Button>       
                        <Segment >
                            Need an account? <Link to="/auth/register"> Register</Link>
                        </Segment>
                    </Form>
                    </Segment>
                </Grid.Column>
                </Grid> */}
                </>
    )
}

export default pLogin