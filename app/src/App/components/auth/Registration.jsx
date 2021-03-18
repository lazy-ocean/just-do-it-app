/* eslint-disable react/prop-types */
import React from "react";
import {
  Input,
  FormControl,
  FormLabel,
  Button,
  FormHelperText,
} from "@chakra-ui/react";

const Registration = ({ errors, user, setUser }) => {
  return (
    <>
      <FormControl id="username" isRequired>
        <FormLabel>Create a username</FormLabel>
        <Input
          name="username"
          value={user.name}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        {errors.username ? (
          <FormHelperText>{errors.username} </FormHelperText>
        ) : null}
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Create a password</FormLabel>
        <Input
          name="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        {errors.password ? (
          <FormHelperText>{errors.password} </FormHelperText>
        ) : null}
        <FormHelperText>
          Can contain a minimum of 6 letters and at least one number
        </FormHelperText>
      </FormControl>
      <Button colorScheme="blue" type="submit">
        Create a new account
      </Button>
    </>
  );
};

export default Registration;
