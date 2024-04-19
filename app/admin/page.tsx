'use client';

import { Product } from '@/data';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Link } from '@chakra-ui/next-js';
import {
  Button,
  Flex,
  IconButton,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useState } from 'react';
import { useAdmin } from '../contexts/AdminContext';

export default function AdminHomePage() {
  const { products, removeProduct } = useAdmin();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDeleteClick = (product: Product) => {
    setSelectedProduct(product);
    onOpen();
  };

  const confirmDelete = () => {
    if (selectedProduct) {
      removeProduct(selectedProduct);
      setSelectedProduct(null);
      onClose();
    }
  };

  return (
    <>
      <Flex justify='center' m='6'>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Delete Product</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {`Are you sure you want to delete this product?`}
            </ModalBody>

            <ModalFooter>
              <Button
                bg='green.400'
                color='white'
                onClick={onClose}
                _hover={{ bg: 'green.300 ' }}
                data-cy='confirm-delete-button'
              >
                Cancel
              </Button>
              <Button colorScheme='red' onClick={confirmDelete} ml={3}>
                Delete
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <NextLink href='/admin/product/new' data-cy='admin-add-product'>
          <Button
            color='black'
            fontSize='1.3rem'
            w={{ base: '200px', md: '300px' }}
            h='55px'
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}
          >
            ADD PRODUCT
          </Button>
        </NextLink>
      </Flex>

      <TableContainer style={{ width: '100%', overflowX: 'auto' }}>
        <Table>
          <Thead>
            <Tr>
              <Th>image</Th>
              <Th>id</Th>
              <Th>title</Th>
              <Th>description</Th>
              <Th>price</Th>
            </Tr>
          </Thead>
          <Tbody>
            {products.map((product) => (
              <Tr key={product.id} data-cy='product'>
                <Td display='flex' justifyContent='center' alignItems='center'>
                  <Image
                    src={product.image}
                    alt={product.title}
                    width='80px'
                    height='80px'
                  />
                </Td>
                <Td data-cy='product-id'>{product.id}</Td>
                <Td data-cy='product-title'>{product.title}</Td>
                <Td
                  style={{ whiteSpace: 'normal', width: '300px' }}
                  data-cy='product-description'
                >
                  {product.description.length > 100
                    ? `${product.description.slice(0, 50)}...`
                    : product.description}
                </Td>
                <Td data-cy='product-price'>{product.price}</Td>
                <Td>
                  <Flex
                    justify='center'
                    alignItems='center'
                    height='100%'
                    gap={3}
                  >
                    <Link
                      href={`admin/product/${product.id}`}
                      _hover={{ textDecoration: 'none' }}
                    >
                      <IconButton
                        aria-label='Remove Product'
                        data-cy='admin-remove-product'
                        size='sm'
                        _hover={{
                          transform: 'translateY(2px)',
                          boxShadow: 'lg',
                        }}
                        onClick={() => handleDeleteClick(product)}
                      >
                        <EditIcon fontSize={'1.5rem'} m={'5px'} />
                      </IconButton>
                    </Link>
                    <IconButton
                      aria-label='Remove Product'
                      data-cy='admin-remove-product'
                      color={'red'}
                      size='sm'
                      _hover={{
                        transform: 'translateY(2px)',
                        boxShadow: 'lg',
                      }}
                      onClick={() => handleDeleteClick(product)}
                    >
                      <DeleteIcon fontSize={'1.5rem'} />
                    </IconButton>
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
