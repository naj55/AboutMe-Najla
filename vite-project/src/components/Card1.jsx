import { ChakraProvider, Box, Card, CardBody, CardFooter, Stack, Heading, Text, Divider, ButtonGroup, Button, Image, Flex } from '@chakra-ui/react'
import Image1 from '../assets/work.png'
import Image2 from '../assets/develop.jpg'
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom"
import Nav from '../components/Nav'
export default function Card1() {

    const Navigate = useNavigate();
    const { id } = useParams()

    let Titlefisrttext, Text2, Text3, Text4, Text5, Text6, Text7

    let secondtext, Text8, Text9, Text10
    console.log(id)


    if (id == 1) {
        Titlefisrttext = `التعليم`
        Text2 = ` مطورة واخصائية نظم معلومات حاسوبية *`
        Text3 = `جامعة الدمام `
        Text4 = `لغات البرمجة التي اتقنها`
        Text5 = "JavaScript-"
        Text6 = "Php-"
        Text7 = "Python-"
        secondtext = ""
        Text8 = ""
        Text9 = ""
        Text10 = ""

    } else {
        Titlefisrttext = ""
        Text2 = ``
        Text3 = ``
        Text4 = ``
        Text5 = ""
        Text6 = ""
        Text7 = ""
        Text8 = " ادارة الوقت*"
        Text9 = "العمل تحت الضغط*"
        Text10 = "التفكير الابداعي*"
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
                                <Heading id="title2" textAlign='right'>  التعليم و الخبرات</Heading>
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
                        <Box textAlign='right'>
                            <Text>{Titlefisrttext}</Text>
                            <Text>{Text2}</Text>
                            <Text>{Text3}</Text>
                            <Text>{Text4}</Text>
                            <Text>{Text5}</Text>
                            <Text>{Text6}</Text>
                            <Text>{Text7}</Text>
                        </Box>
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
                        <Box textAlign='right'>
                            <Text>{secondtext}</Text>
                            <Text>{Text8}</Text>
                            <Text>{Text9}</Text>
                            <Text>{Text10}</Text>

                        </Box>
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
