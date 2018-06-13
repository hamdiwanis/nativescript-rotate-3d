import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { Property } from 'tns-core-modules/ui/core/properties';
import { AnimationDefinition, AnimationPromise } from 'tns-core-modules/ui/animation';

export const axisProperty = new Property<Common, string>({
    name: "rotateAxis"
});

export const cameraDistanceProperty = new Property<Common, number>({
    name: "cameraDistance"
});

export class Common extends StackLayout {
    axis = 'Z';
    cameraDistance = 2000;

    static degToRad(deg) {
        return  deg * Math.PI / 180;
    }

    public animate(options: AnimationDefinition): AnimationPromise {
        // todo: extract rotate animation
        this.animateRotation();
        return super.animate(options);
    }

    public animateRotation() {
        // todo: add animation for all dimensions
    }
}

axisProperty.register(Common);
cameraDistanceProperty.register(Common);