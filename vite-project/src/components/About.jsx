import { Flex, Box, Heading, Text, Spacer, VStack, Image, Button } from "@chakra-ui/react"
import Mylogo from '../assets/Logo.jpg'
import { useNavigate } from "react-router-dom";

export default function About() {
    const Navigate = useNavigate();
    return (
        <>


            <div id="navflex">

                <Flex as="nav" p="12px" bg="#fff" alignItems="center" gap="10px"  >
                    <VStack ml="40px">

                        <Heading as="h1" id="title" color="#385A64" >Najla Portfolio</Heading>
                        <Text id="welcome" color="#385A64">مرحبا بك في صفحتي</Text>
                        <Box>
                            <Button variant='solid' bg='#385A64' color="gray.400" onClick={() => Navigate('/')}>
                                الرئيسية

                            </Button>
                        </Box>
                    </VStack>
                    <Spacer />
                    <Box bg="gray.200" p="10px" mt="0%" mr="40px">
                        <Image id="mylogo" borderRadius='full' src={Mylogo} width="180" height="180" />
                    </Box>

                </Flex>
            </div>
            <div>About</div>
        </>

    )
}
