import { FC } from "react"
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react"
import { useFormik } from "formik"

const ContactForm: FC<IContactForm> = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      subject: "",
      message: "",
    },
    onSubmit: (values) => {
      // check email and captcha
      onSubmit(values)
    },
  })

  return (
    <Flex
      flexDir="column"
      alignItems="center"
      p="1rem"
      mt="1rem"
      borderRadius="5px"
      bg="gray.200"
    >
      <Flex flexDir="column" p="1rem 0" gap="1rem">
        <form
          onSubmit={formik.handleSubmit}
          autoComplete="off"
          style={{ width: "45rem" }}
        >
          <FormControl>
            <FormLabel htmlFor="title">Subject</FormLabel>
            <Input
              id="subject"
              name="subject"
              type="text"
              color="green.600"
              borderColor="green.600"
              onChange={formik.handleChange}
              value={formik.values.subject}
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="description">Message</FormLabel>
            <Textarea
              id="message"
              name="message"
              color="green.600"
              borderColor="green.600"
              onChange={formik.handleChange}
              value={formik.values.message}
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="attachment">Email</FormLabel>
            <Input
              id="email"
              name="email"
              color="green.600"
              borderColor="green.600"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </FormControl>

          <FormControl>
            <Button
              bg="blackAlpha.200"
              borderRadius="32px"
              p="1rem 2rem"
              type="submit"
              mt=".5rem"
            >
              Send Message
            </Button>
          </FormControl>
        </form>
      </Flex>
    </Flex>
  )
}

export default ContactForm
