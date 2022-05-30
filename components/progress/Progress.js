import { useNProgress } from "@tanem/react-nprogress";

import { Bar } from "./Bar";
import { Container } from "./Container";

export const Progress = ({ isAnimating }) => {
    const { animationDuration, isFinished, progress } = useNProgress({
        isAnimating,
    });
    console.log('ini progress progress.js ' + progress)
    return (
        <Container animationDuration={animationDuration} isFinished={isFinished}>
            <Bar animationDuration={animationDuration} progress={progress} />
        </Container>
    )
}