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
            <Flex justifyContent="center" alignItems="center" bg="gray.200">
                <VStack textAlign="right">
                    <Text id="title2" color="#888888" mt="50px">
                        التحديات و الصعوبات التي واجهتها في اهم محطات حياتي
                    </Text>
                    <Text >
                        لكل انسان مبادئ يؤمن بها و تكون هي شرارة الشغفه و وقود انطلاقته لتحقيق اهداقه
                    </Text>
                    <Text >
                        من هذه المبادئ التي آمنت بها بعد كثير من الانكسارات و موجات الاحباط العاتيه التي كانت كفيلة بأن تكسر قارب سعي و عزيمتي لهذه الحياه
                    </Text>
                    <Text >
                        ان استمتع بكل تفاصيل رحلتي لتحقيق اهدافي ان اتقبل الفشل و اتعلم منه
                    </Text>
                    <Text >
                        وعندما نتحدث عن عن الاهداف و التحديات فرحلتي هنا قسمتها لعدة اهداف كل منها ملئ بالتحديات و الصعوبات
                    </Text>
                    <Text >
                        هدف الاستعداد و الاستحقاق للالتحاق بمعسكر طويق
                    </Text>
                    <Text >
                        هدف الالتحاق و القبول بمعسكر طويق
                    </Text>
                    <Text >
                        هدق النجاح بامتياز بمعسكر وطيق
                    </Text>
                    <Text >
                        هدف تحقيق الانجازات مابعد التخرج و النجاح
                    </Text>
                    <Text >
                        كل هذه الاهداف تحوي في طياتها جملة من الصعوبات والتحديات العنيدة واجهت بعضها كوني ببداية الطريق ونجحت بذلك ولازلت اصارع البعض والقادم اصعب ولكن كلي ثقة بأني اهل له باذن الله
                    </Text>
                    <Text >
                        واجهت اصعب التحديات وهو تحدي النفس( الثقة بالنفس )
                        هل انا استطيع ام لا؟
                        هل انا قادرة ؟
                        هل انا استحق ذلك ؟
                    </Text>
                    <Text >
                        وضعت السلبية والاراء المحبطة جانباً وبدأت رحلة التعلم الذاتي حتى ازدادت ثقتي بنفسي وعلمت اني استحق هذا المكان بل وان اكون الاحق والافضل به .
                    </Text>
                    <Text>
                        وصلت لتحدي الاختبار والقبول وهو ما سيترجم جميع جهودي الفترة السابقة وبفضل الله نجحت بالاختبار وحققت احد اهدافي الصغيرة برحلتي .
                    </Text>
                    <Text>
                        ثم اتى بعد ذلك تحدي الزمان والمكان
                        فلم يكن التوقيت يناسب ظروفي بل كان يعاكسها تماماً .
                    </Text>
                    <Text>
                        ادرت اموري ووقتي بصعوبة
                        اجلت جميع التزاماتي العمليةوالشخصية وتفرغت ذهنياً بشكل كامل وراهنت على نفسي بان احقق هدفي .
                    </Text>
                    <Text>
                        تحدي المكان ايضاً لم يكن اقل تعقيداً ففي وقت المعسكر كنت مستقرة بمدينة الخبر وليس بالرياض مكان المعسكر ، السفر وصعوباته المادية والسكن والمواصلات وغيرها كانت مرهقة جداً
                        حيث كنت مضطرة لظروفي ان اسافر كل خميس للخبر واعود فجر يوم الاحد من كل اسبوع .

                    </Text>
                    <Text>
                        ولا يقل عن جميع ماسبق صعوبة مواجهة الشخصيات والاراء السلبية المحبطة التي كانت تريد وأد هدفي وحلمي وهو في مهده .

                    </Text>
                    <Text>
                        مواجهة كل من قال انني لا استطيع
                        مواجهة كل من قال انني لست كفؤ لذلك
                        مواجهة كل من قال انني اضعف من ان اتحمل كل تلك التحديات .
                    </Text>
                    <Text>
                        كثيرة هي التحديات التي واجهتها خلال رحلتي التي لازلت في بدايتها ولكني اعتقد اني قد ذكرت اهمها وابرزها .
                    </Text>
                </VStack>
            </Flex>
        </>

    )
}
