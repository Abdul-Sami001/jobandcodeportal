import { Box, Image, Button, Input, HStack, Flex, Text } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

// Free image URLs for demonstration
const RECRUITER_IMAGES = [
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=200&h=150&q=80',  // Company team
    'https://images.unsplash.com/photo-1560264357-8d9202250f21?auto=format&fit=crop&w=200&h=150&q=80',  // Office building
    'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=200&h=150&q=80',  // Business meeting
    'https://images.unsplash.com/photo-1573164574511-73c773193279?auto=format&fit=crop&w=200&h=150&q=80',  // Interview
    'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=200&h=150&q=80'   // Office lobby
];

const PROGRAMMER_IMAGES = [
    'https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?auto=format&fit=crop&w=200&h=150&q=80',  // Code screen
    'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=200&h=150&q=80',  // Developer working
    'https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&w=200&h=150&q=80',  // Laptop setup
    'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=200&h=150&q=80',  // Coding closeup
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=200&h=150&q=80'   // Pair programming
];

export const ProfileBox = ({ title, items }) => {
    const isRecruiter = title.toLowerCase().includes('recruiter');
    const imageSet = isRecruiter ? RECRUITER_IMAGES : PROGRAMMER_IMAGES;

    return (
        <Box py={8}>
            <Flex
                mb={6}
                px={4}
                direction={['column', 'row']}
                gap={4}
                alignItems="center"
            >
                <Input
                    placeholder={`Search ${title}`}
                    width={['100%', '300px']}
                    focusBorderColor="blue.500"
                />
                <Button
                    colorScheme="blue"
                    leftIcon={<FaSearch />}
                    px={8}
                    width={['100%', 'auto']}
                >
                    Search
                </Button>
            </Flex>

            <Flex
                px={4}
                gap={4}
                overflowX="auto"
                pb={4}
                sx={{
                    '&::-webkit-scrollbar': {
                        height: '6px',
                    },
                    '&::-webkit-scrollbar-track': {
                        background: 'gray.100',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: 'blue.500',
                        borderRadius: '4px',
                    },
                }}
            >
                {items.map((item, index) => (
                    <Box
                        key={index}
                        minW="200px"
                        h="250px"
                        borderRadius="xl"
                        bg="white"
                        boxShadow="lg"
                        overflow="hidden"
                        position="relative"
                        _hover={{
                            transform: 'translateY(-4px)',
                            boxShadow: 'xl',
                        }}
                        transition="all 0.2s"
                    >
                        <Image
                            src={imageSet[index]}
                            alt={item}
                            objectFit="cover"
                            h="150px"
                            w="full"
                        />
                        <Box p={4}>
                            <Text fontWeight="bold" mb={2} noOfLines={1}>
                                {item}
                            </Text>
                            <Button
                                size="sm"
                                colorScheme="blue"
                                w="full"
                                variant="outline"
                            >
                                View {isRecruiter ? 'Details' : 'Profile'}
                            </Button>
                        </Box>
                    </Box>
                ))}
            </Flex>
        </Box>
    );
};