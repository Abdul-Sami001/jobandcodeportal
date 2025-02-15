import { Box, Image, Button, Input, HStack } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

export const ProfileBox = ({ title, items }) => {
    return (
        <Box py={8}>
            <HStack mb={4} px={4}>
                <Input placeholder={`Search ${title}`} width="300px" />
                <Button colorScheme="blue" leftIcon={<FaSearch />}>
                    Search
                </Button>
            </HStack>
            <HStack spacing={4} px={4} overflowX="auto">
                {items.map((item, index) => (
                    <Box
                        key={index}
                        w="200px"
                        h="200px"
                        borderRadius="md"
                        bg="white"
                        boxShadow="md"
                        p={2}
                    >
                        <Image
                            src={`https://via.placeholder.com/200x150?text=${item}`}
                            borderRadius="md"
                            mb={2}
                        />
                        <Button size="sm" colorScheme="blue" w="full">
                            View Details
                        </Button>
                    </Box>
                ))}
            </HStack>
        </Box>
    );
};