import React from "react"

function useAudioVisualizer({ amplitude = 1, player, isPlaying }) {
    const canvas = React.useRef()
    const [audioContext, setAudioContext] = React.useState(null)
    const [source, setSource] = React.useState(null)

    React.useEffect(() => {
        if (window.AudioContext) {
            if (isPlaying) {
                if (audioContext === null && source === null) {
                    const context = new window.AudioContext()
                    context.resume()
                    setAudioContext(context)
                    setSource(context.createMediaElementSource(player))
                }
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isPlaying, audioContext, source])

    React.useEffect(() => {
        if (audioContext !== null && source !== null) {
            if (!canvas.current) return
            if (!player) return

            let animationFrame = Number()

            const analyser = audioContext.createAnalyser()
            const context = canvas.current.getContext("2d")

            source.connect(analyser)
            analyser.connect(audioContext.destination)

            function render() {
                const frequencyBinCountArray = new Uint8Array(analyser.frequencyBinCount)
                const barCount = canvas.current?.width / 2

                analyser.getByteFrequencyData(frequencyBinCountArray)

                context.clearRect(0, 0, canvas.current.width, canvas.current.height)
                context.fillStyle = getComputedStyle(canvas.current).getPropertyValue("--primary")

                for (let i = 0; i < barCount; i++) {
                    const barPosition = i * 2.5
                    const barWidth = 2
                    // Negative so it goes to the top.
                    const barHeight = -(frequencyBinCountArray[i] / 2) * amplitude

                    context.fillRect(
                        barPosition,
                        canvas.current?.height,
                        barWidth,
                        barHeight
                    )
                }

                animationFrame = requestAnimationFrame(render)
            }

            render()

            return () => {
                cancelAnimationFrame(animationFrame)
                analyser.disconnect()
                source.disconnect()
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [audioContext, source])

    return { canvasRef: canvas }
}

export default useAudioVisualizer