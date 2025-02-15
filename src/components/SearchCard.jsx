import { Box, Input, Button, Text, HStack, Icon } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

export const SearchCard = ({ title, placeholder, buttons }) => {
    return (
        <Box
            p={6}
            borderRadius="lg"
            bg="white"
            boxShadow="md"
            minW="300px"
            m={4}
        >
            <Text fontSize="xl" fontWeight="bold" mb={4}>{title}</Text>
            <HStack mb={4}>
                <Input placeholder={placeholder} />
                <Button colorScheme="blue" px={8}>
                    <Icon as={FaSearch} />
                </Button>
            </HStack>
            <HStack spacing={4}>
                {buttons.map((btn, index) => (
                    <Button key={index} size="sm" variant="outline">
                        {btn}
                    </Button>
                ))}
            </HStack>
        </Box>
    );
};