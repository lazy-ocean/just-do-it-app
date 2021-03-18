/* eslint-disable react/prop-types */
import React from "react";
import {
  Input,
  FormControl,
  FormLabel,
  Button,
  FormHelperText,
} from "@chakra-ui/react";

const Login = ({ errors, user, setUser }) => {
  const { commonErr } = errors;
  return (
    <>
      {commonErr ? <FormHelperText>{commonErr} </FormHelperText> : null}
      <FormControl id="username" isRequired>
        <FormLabel>Login</FormLabel>
        <Input
          name="username"
          value={user.name}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <Input
          name="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </FormControl>
      <Button colorScheme="blue" type="submit">
        Log in
      </Button>
    </>
  );
};

export default Login;
