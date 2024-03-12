"use client";

import {
  Button,
  ButtonGroup,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  GridItem,
  Input,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Please enter your email"),
  firstName: Yup.string().required("Please enter your first name"),
  lastName: Yup.string().required("Please enter your last name"),
  address: Yup.string().required("Please enter your address"),
  city: Yup.string().required("Please enter your city"),
  phone: Yup.string()
    .matches(
      /^\+46\d{7,9}$|0\d{1,2}-?\d{2,3} ?\d{2} ?\d{2}$|^07\d{1}-?\d{3} ?\d{2} ?\d{2}$/,
      "Invalid phone number format"
    )
    .required("Please enter your phone number"),

  postalCode: Yup.string()
    .matches(/^(\d{3} \d{2}|\d{5})$/, "Invalid postal code format")
    .required("Please enter your postal code"),
});
export default function CheckoutForm() {
  return (
    <Container
      borderWidth='1px'
      rounded='lg'
      shadow='1px 1px 2px rgba(0,0,0,0.1)'
      width={{ base: "90%", md: "42%" }}
      p='5%'
      m='2rem auto'
    >
      <Formik
        initialValues={{
          email: "",
          firstName: "",
          lastName: "",
          address: "",
          city: "",
          phone: "",
          postalCode: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(props) => (
          <Form data-cy='customer-form'>
            <Field name='email'>
              {({ field, form }: any) => (
                <FormControl
                  mt='2%'
                  isInvalid={form.errors.email && form.touched.email}
                >
                  <FormLabel>Email address</FormLabel>
                  <Input
                    {...field}
                    placeholder='Email address'
                    data-cy='customer-email'
                    autoComplete='email'
                  />
                  <FormErrorMessage data-cy='customer-email-error'>
                    {form.errors.email}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Flex mt='2%'>
              <Field name='firstName'>
                {({ field, form }: any) => (
                  <FormControl
                    mr='5%'
                    isInvalid={form.errors.firstName && form.touched.firstName}
                  >
                    <FormLabel>First Name</FormLabel>
                    <Input
                      {...field}
                      placeholder='First name'
                      data-cy='customer-name'
                      autoComplete='name'
                    />
                    <FormErrorMessage data-cy='customer-name-error'>
                      {form.errors.firstName}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name='lastName'>
                {({ field, form }: any) => (
                  <FormControl
                    isInvalid={form.errors.lastName && form.touched.lastName}
                  >
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      {...field}
                      placeholder='Last name'
                      autoComplete='name'
                    />
                    <FormErrorMessage>{form.errors.lastName}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </Flex>
            <Field name='city'>
              {({ field, form }: any) => (
                <FormControl
                  as={GridItem}
                  colSpan={[6, 6, null, 2]}
                  isInvalid={form.errors.city && form.touched.city}
                >
                  <FormLabel
                    fontSize='sm'
                    fontWeight='md'
                    color='gray.700'
                    _dark={{
                      color: "gray.50",
                    }}
                    mt='2%'
                  >
                    City
                  </FormLabel>
                  <Input
                    {...field}
                    name='city'
                    autoComplete='address-level2'
                    focusBorderColor='brand.400'
                    shadow='sm'
                    size='sm'
                    w='full'
                    rounded='md'
                    data-cy='customer-city'
                  />
                  <FormErrorMessage data-cy='customer-city-error'>
                    {form.errors.city}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name='address'>
              {({ field, form }: any) => (
                <FormControl
                  as={GridItem}
                  colSpan={6}
                  isInvalid={form.errors.address && form.touched.address}
                >
                  <FormLabel
                    fontSize='sm'
                    fontWeight='md'
                    color='gray.700'
                    _dark={{
                      color: "gray.50",
                    }}
                    mt='2%'
                  >
                    Street address
                  </FormLabel>
                  <Input
                    {...field}
                    name='address'
                    autoComplete='street-address'
                    focusBorderColor='brand.400'
                    shadow='sm'
                    size='sm'
                    w='full'
                    rounded='md'
                    data-cy='customer-address'
                  />
                  <FormErrorMessage data-cy='customer-address-error'>
                    {form.errors.address}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name='phone'>
              {({ field, form }: any) => (
                <FormControl
                  as={GridItem}
                  colSpan={[6, 3, null, 2]}
                  isInvalid={form.errors.phone && form.touched.phone}
                >
                  <FormLabel
                    fontSize='sm'
                    fontWeight='md'
                    color='gray.700'
                    _dark={{
                      color: "gray.50",
                    }}
                    mt='2%'
                  >
                    Phone Number
                  </FormLabel>
                  <Input
                    {...field}
                    name='phone'
                    autoComplete='tel'
                    focusBorderColor='brand.400'
                    shadow='sm'
                    size='sm'
                    w='full'
                    rounded='md'
                    data-cy='customer-phone'
                  />
                  <FormErrorMessage data-cy='customer-phone-error'>
                    {form.errors.phone}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name='postalCode'>
              {({ field, form }: any) => (
                <FormControl
                  as={GridItem}
                  colSpan={[6, 3, null, 2]}
                  isInvalid={form.errors.postalCode && form.touched.postalCode}
                >
                  <FormLabel
                    fontSize='sm'
                    fontWeight='md'
                    color='gray.700'
                    _dark={{
                      color: "gray.50",
                    }}
                    mt='2%'
                  >
                    ZIP / Postal
                  </FormLabel>
                  <Input
                    {...field}
                    name='postalCode'
                    autoComplete='postal-code'
                    focusBorderColor='brand.400'
                    shadow='sm'
                    size='sm'
                    w='full'
                    rounded='md'
                    data-cy='customer-zipcode'
                  />
                  <FormErrorMessage data-cy='customer-zipcode-error'>
                    {form.errors.postalCode}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <ButtonGroup mt='5%' w='100%'>
              <Flex w='100%' justifyContent='space-between'>
                <Button
                  type='submit'
                  w='7rem'
                  bg='#E4A757'
                  _hover={{ bg: "#efdbc2" }}
                  variant='solid'
                  isLoading={props.isSubmitting}
                >
                  Submit
                </Button>
              </Flex>
            </ButtonGroup>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
