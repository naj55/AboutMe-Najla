import Eimage from '../assets/error.jpg'
import { Flex, Text, VStack, Image } from "@chakra-ui/react"
export default function MyCards() {
    return (
        <Flex justifyContent='center' alignItems="center" mt="12em">
            <VStack>
                <Text fontSize={{ base: '24px', md: '40px', lg: '56px' }}>
                    This is responsive text
                </Text>
                <Text fontSize={{ base: '40px', md: '50px' }} color='#FF4F5A' >Sorry Page Not Found!!</Text>
                <Image src={Eimage} w="40em" height={{
                    base: '100%', // 0-48em
                    md: '50%', // 48em-80em,
                    xl: '25%', // 80em+
                }}></Image>
            </VStack>

        </Flex>

    )
}
