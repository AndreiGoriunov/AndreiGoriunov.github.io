import { Button } from "@chakra-ui/react"
import { ReactNode, useCallback, useEffect, useRef } from "react"

interface SoundButtonProps {
    src: string,
    children: ReactNode,
}

function SoundButton({ src, children }: SoundButtonProps) {
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const onButtonClick = useCallback(() => {
        audioRef.current!.currentTime = 0
        audioRef.current?.play()
    }, [])
    useEffect(() => {
        audioRef.current!.volume = 0.2
    }, [])
    return (
        <Button onClick={onButtonClick}>
            {children}
            <audio ref={audioRef} src={src}></audio>
        </Button>
    )
}

export default SoundButton