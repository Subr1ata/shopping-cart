// Contact.js
import { useState } from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
  Text,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router";

interface Errors {
  name: string;
  email: string;
  message: string;
}

const initialFields = { email: "", name: "", message: "" };

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>(initialFields);
  const navigation = useNavigate();

  const validate = () => {
    let errors: Errors = initialFields;
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Handle form submission
      console.log("Form submitted:", formData);
      setFormData({ name: "", email: "", message: "" });
    } else {
      setErrors(validationErrors);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Box>
      <Button colorScheme="gray" size="sm" onClick={() => navigation(-1)}>
        <ArrowBackIcon />
      </Button>
      <Heading>Contact Us</Heading>
      <Box as="form" onSubmit={handleSubmit} mt={4}>
        <FormControl isInvalid={!errors.name} mb={4}>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
          />
          {errors.name && <Text color="red.500">{errors.name}</Text>}
        </FormControl>
        <FormControl isInvalid={!errors.email} mb={4}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
          />
          {errors.email && <Text color="red.500">{errors.email}</Text>}
        </FormControl>
        <FormControl isInvalid={!errors.message} mb={4}>
          <FormLabel>Message</FormLabel>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
          />
          {errors.message && <Text color="red.500">{errors.message}</Text>}
        </FormControl>
        <Button type="submit" colorScheme="teal">
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;
