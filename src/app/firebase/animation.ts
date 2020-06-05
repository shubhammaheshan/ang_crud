import { trigger, state, animation, transition, style, animate, keyframes } from '@angular/animations';
export let slide = trigger('slide', [
    transition(':enter', [
        style({ transform: 'translateY(10px)' }),
        animate(500)
    ]),
    transition(':leave', [
   
        animate(500,style({ transform: 'translateX(100%)'}) )
    ])
])

export let keyframe = trigger('keyframe', [
    transition(':enter', [
        style({ transform: 'translateY(10px)' }),
        animate(500)
    ]),
    transition(':leave', [
   
        animate(500,keyframes([
            style({
                offset:.2,
                opacity:1,
                transform:'translateX(-20px)'
            }),
            style({
                offset:1,
                opacity:0,
                transform:'translateX(100%)'
            })
        ]))
    ])
])