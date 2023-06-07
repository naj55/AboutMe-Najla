import { ChakraProvider, Box, Card, CardBody, CardFooter, Stack, Heading, Text, Divider, ButtonGroup, Button, Image, Flex } from '@chakra-ui/react'
import Image1 from '../assets/work.png'
import Image2 from '../assets/develop.jpg'
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom"
import Nav from '../components/Nav'
export default function Card1() {

    const Navigate = useNavigate();
    const { id } = useParams()
    let fisrttext = "";
    let secondtext = "";
    console.log(id)


    if (id == 1) {
        fisrttext = "jpojupogrurepoguertoperutpero"
        secondtext = ""
    } else {
        secondtext = "nn"
        fisrttext = ""
    }

    return (
        <>
            <div>
                <Nav></Nav>
            </div>
            <ChakraProvider>
                <Flex justifyContent="center" mt="90px" gap="40px" id="flexCard" >
                    <Card maxW='sm'>
                        <CardBody>
                            <div id="bor">
                                <Image
                                    src={Image1}
                                    height="260"
                                    width="340px"
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                            </div>
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>Living room Sofa</Heading>
                                <Text>
                                    This sofa is perfect for modern tropical spaces, baroque inspired
                                    spaces, earthy toned spaces and for people who love a chic design with a
                                    sprinkle of vintage design.
                                </Text>

                            </Stack>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <ButtonGroup spacing='2'>
                                <Button variant='solid' bg='#385A64' color="gray.400" onClick={() => Navigate('/Cards/1')}>
                                    المزيد
                                </Button>

                            </ButtonGroup>
                        </CardFooter>
                        <Box>{fisrttext}</Box>
                    </Card>

                    <Card maxW='sm'>
                        <CardBody>
                            <div id="bor">
                                <Image
                                    src={Image2}
                                    height="260"
                                    width="340px"
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                            </div>
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>Living room Sofa</Heading>
                                <Text>
                                    This sofa is perfect for modern tropical spaces, baroque inspired
                                    spaces, earthy toned spaces and for people who love a chic design with a
                                    sprinkle of vintage design.
                                </Text>

                            </Stack>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <ButtonGroup spacing='2'>


                                <Button variant='solid' bg='#385A64' color="gray.400" onClick={() => Navigate('/Cards/2')}>
                                    المزيد

                                </Button>

                            </ButtonGroup>
                        </CardFooter>
                        <Box>{secondtext}</Box>
                    </Card>

                </Flex>
                <Flex justifyContent='center' alignItems="end" mt="70px">


                    <Button variant='solid' h="3em" w="9em" bg='#385A64' color="gray.400" onClick={() => Navigate('/AboutMe')}>
                        نبذة عني
                    </Button>



                </Flex>
            </ChakraProvider>
        </>
    )
}
