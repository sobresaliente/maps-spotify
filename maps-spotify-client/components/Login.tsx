import styled from "styled-components/native";

const LoginView = styled.View`
    background: black;
`

const InputContainer = styled.View`
`;

const LoginInput = styled.TextInput`
    background: white;
    border-radius: 4px;
    width: 200px;
    height: 40px;
`;

const Label = styled.Text`
  color: white;
`;

export const Login = () => {
    return (
        <LoginView>
            <InputContainer>
                <Label>Email</Label>
                <LoginInput></LoginInput>
            </InputContainer>
            <InputContainer>
                <Label>Password</Label>
                <LoginInput></LoginInput>
            </InputContainer>
        </LoginView>
    )
}
