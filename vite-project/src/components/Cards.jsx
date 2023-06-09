import { ChakraProvider, Box, Card, CardBody, CardFooter, Stack, Heading, Text, Divider, ButtonGroup, Button, Image, Flex } from '@chakra-ui/react'
import Image1 from '../assets/work.png'
import Image2 from '../assets/develop.jpg'
import { useNavigate } from "react-router-dom";
import Nav from '../components/Nav'
export default function Cards() {
    const Navigate = useNavigate();

    return (
        <>
            <div>
                <Nav></Nav>
            </div>
            <ChakraProvider>
                <Flex justifyContent="center" mt="90px" gap="40px" id="flexCard">
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
                                <Heading size='lg' id="title2" textAlign='right'>  التعليم و الخبرات</Heading>
                                <Box textAlign='right'>
                                    <Text>
                                        الخبرات
                                    </Text>
                                    <Text>
                                        موظفة في القسم التقني لمدة سنة*
                                    </Text>
                                    <Text>
                                        مدربة روبوت لمدة ٣ سنوات*
                                    </Text>
                                    <Text>
                                        مساعد إداري لمدة سنه *
                                    </Text>
                                </Box>


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
                                <Heading id="title2" textAlign='right' size='md'>المهارات التي اكتسبتها خلال تجربتي</Heading>
                                <Box textAlign='right'>
                                    <Text>
                                        المهارات الناعمة
                                    </Text>
                                    <Text>
                                        ضبط النفس و المرونة*
                                    </Text>
                                    <Text>
                                        العمل الجماعي و القدرة على تقريب وجهات النظر*
                                    </Text>
                                    <Text>
                                        التفكير المنطقي و حل المشكلات *
                                    </Text>
                                </Box>

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
