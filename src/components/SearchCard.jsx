import { Box, Input, Button, Text, HStack, Icon } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

export const SearchCard = ({ title, placeholder, buttons }) => {
    return (
        <Box
            p={6}
            borderRadius="xl"
            bg="white"
            boxShadow="lg"
            minW="300px"
            m={4}
            transition="all 0.2s"
            _hover={{
                transform: 'translateY(-4px)',
                boxShadow: 'xl',
            }}
        >
            <Text fontSize="xl" fontWeight="bold" mb={4} color="blue.600">
                {title}
            </Text>
            <HStack mb={4}>
                <Input
                    placeholder={placeholder}
                    focusBorderColor="blue.500"
                    _placeholder={{ color: 'gray.400' }}
                />
                <Button
                    colorScheme="blue"
                    px={8}
                    aria-label="Search"
                >
                    <Icon as={FaSearch} />
                </Button>
            </HStack>
            <HStack spacing={4} flexWrap="wrap">
                {buttons.map((btn, index) => (
                    <Button
                        key={index}
                        size="sm"
                        variant="outline"
                        colorScheme="blue"
                        _hover={{ bg: 'blue.50' }}
                    >
                        {btn}
                    </Button>
                ))}
            </HStack>
        </Box>
    );
};