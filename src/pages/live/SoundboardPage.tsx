import { Button, VStack, Wrap, WrapItem } from '@chakra-ui/react'
import aughh from '../../assets/audio/soundboard/aughh.mp3'
import gigachad from '../../assets/audio/soundboard/gigachad.mp3'
import mmmmh from '../../assets/audio/soundboard/mmmmh.mp3'
import oh_my_god from '../../assets/audio/soundboard/oh_my_god.mp3'
import woo from '../../assets/audio/soundboard/woo.mp3'
import Card from '../../components/Card'
import SoundButton from '../../components/SoundButton'

const sounds = [
    { src: oh_my_god, title: 'Oh my god' },
    { src: aughh, title: 'Aughh' },
    { src: gigachad, title: 'Gigachad' },
    { src: mmmmh, title: 'Mmmmh' },
    { src: woo, title: 'Woo' },
]

function SoundboardPage() {
    return (
        <>
            <Card>
                <VStack align='flex-start' spacing='1rem'>
                    <Button bg='#aa0000' onClick={stopAllSounds}>Stop</Button>
                    <Wrap spacing='1rem'>
                        {sounds.map(({ src, title }) => (
                            <WrapItem>
                                <SoundButton src={src}>{title}</SoundButton>
                            </WrapItem>
                        ))}
                    </Wrap>
                </VStack>
            </Card>
        </>
    )
}

const stopAllSounds = () => {
    [...document.getElementsByTagName('audio')].forEach(audio => {
        audio.pause()
    })
}

export default SoundboardPage