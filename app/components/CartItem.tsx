import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
  Square,
  Stack,
  Text,
} from "@chakra-ui/react";
import { MdClose } from "react-icons/md";

export default function CartItem() {
  return (
    <Card
      data-cy='cart-item'
      direction='row'
      overflow='hidden'
      variant='outline'
      justify='justify-between'
      align='center'
      p='0.5rem'
      gap={{ base: "1rem", md: "2rem" }}
      width={{ base: "100%", md: "60%" }}
    >
      <Box w='150px' h='150px'>
        <Image
          objectFit='cover'
          width='100%'
          height='100%'
          src='https://images.pexels.com/photos/3144581/pexels-photo-3144581.jpeg?auto=compress&cs=tinysrgb&w=800'
          alt='dining table'
        />
      </Box>
      <Square
        position='absolute'
        top='1rem'
        right='1rem'
        size='30px'
        fontSize='1.5rem'
        _hover={{ color: "brown", cursor: "pointer", transform: "scale(1.2)" }}
        onClick={() => {
          console.log("I was clicked");
        }}
      >
        <MdClose />
      </Square>

      <Stack>
        <CardBody flexDir='column' gap='3'>
          <Heading size='md'>Dining table</Heading>
          <Text py='2'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit,
            deleniti.
          </Text>
        </CardBody>

        <CardFooter
          flex='10'
          fontSize='1.3rem'
          justify='space-between'
          data-cy='total-price'
        >
          <Text color='blue'>Sek 200</Text>
          <Flex>
            <Square
              bg='#D9D9D9'
              size='30px'
              onClick={() => {
                console.log("I was clicked");
              }}
              data-cy='decrease-quantity-button'
            >
              <Text> -</Text>
            </Square>
            <Square bg='#f4f2f2' size='30px' data-cy='product-quantity'>
              <Text> 0</Text>
            </Square>
            <Square
              bg='#D9D9D9'
              size='30px'
              onClick={() => {
                console.log("I was clicked");
              }}
              data-cy='increase-quantity-button'
            >
              <Text>+</Text>
            </Square>
          </Flex>
        </CardFooter>
      </Stack>
    </Card>
  );
}
