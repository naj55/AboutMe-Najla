import { ChakraProvider, Flex, Box, Text, Spacer, VStack } from "@chakra-ui/react"
export default function Footer() {
    return (
        <ChakraProvider>

            <Flex as="nav" bg="#385A64" alignItems="end" gap="10px" mb="0px" id="footer">
                <VStack ml="40px">

                    <Text color="#FF4F5A">مرحبا بك في صفحتي</Text>
                </VStack>
                <Spacer />
                <Box bg="gray.200" p="10px" mt="0%" mr="40px">

                </Box>
            </Flex>
        </ChakraProvider>

    )
}
