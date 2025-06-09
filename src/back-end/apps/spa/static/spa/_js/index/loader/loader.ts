import { gsap } from 'gsap'
import { DrawSVGPlugin } from 'gsap/all'

gsap.registerPlugin(DrawSVGPlugin)

const appLoaderElmt = document.getElementById('app-loader') as HTMLElement

const timeline = gsap.timeline({
    defaults: { ease: 'power1.inOut' },
    onComplete: () => {
        timeline.kill()
        appLoaderElmt.parentNode?.removeChild(appLoaderElmt)
    },
})

appLoaderElmt.querySelectorAll('svg > path').forEach((item) => {
    const color = item.getAttribute('stroke') as string
    const showLabel = 'show'
    const fillLabel = 'fill'

    timeline
        .to(
            item,
            {
                duration: 0,
                strokeOpacity: '.5',
            },
            showLabel,
        )
        .from(
            item,
            {
                duration: 2.5,
                drawSVG: '0%',
            },
            showLabel,
        )
        .to(
            item,
            {
                duration: 1,
                fill: color,
                strokeOpacity: 0,
            },
            fillLabel,
        )
})

timeline
    .to('#app-loader > svg', {
        ease: 'none',
        duration: 1,
        scale: '1.05',
    })
    .to(appLoaderElmt, {
        duration: 0.5,
        opacity: 0,
        display: 'none',
    })
