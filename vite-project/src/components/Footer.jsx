import { ChakraProvider, Flex, Box, Text, Spacer, VStack } from "@chakra-ui/react"
export default function Footer() {
    return (
        <ChakraProvider>

            <Flex as="nav" bg="#385A64" alignItems="center" gap="10px" mb="0px" id="footer" justifyContent="center">
                <VStack ml="40px">

                    <Text textalign="center" color="#fff">جميع الحقوق محفوظة</Text>
                </VStack>
                <Spacer />
                <Box bg="gray.200" p="10px" mt="0%" mr="40px">

                </Box>
            </Flex>
        </ChakraProvider>

    )
}
