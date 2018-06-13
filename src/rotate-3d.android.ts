import { axisProperty, cameraDistanceProperty, Common } from './rotate-3d.common';
import { rotateProperty } from 'tns-core-modules/ui/styling/style-properties';
import { screen } from 'tns-core-modules/platform';

export class Rotate3D extends Common {
    [rotateProperty.setNative](value?: number) {
        if(this.android) {
            this.applyRotation(value);
        }
    }

    [axisProperty.setNative](value?: string) {
        if(value && this.android) {
            this.axis = value;
            this.applyRotation(this.rotate);
        }
    }

    [cameraDistanceProperty.setNative](value?: number) {
        if(value && this.android) {
            this.cameraDistance = value;
            this.applyRotation(this.rotate);
        }
    }

    applyRotation(value) {
        switch (this.axis.toUpperCase()) {
            case 'X':
                this.nativeViewProtected.setRotationX(float(value));
                break;
            case 'Y':
                this.nativeViewProtected.setRotationY(float(value));
                break;
            case 'Z':
                this.nativeViewProtected.setRotation(float(value));
                break;
        }

        this.applyCameraDistance();
    }

    applyCameraDistance() {
        let scale = screen.mainScreen.scale;
        this.nativeViewProtected.setCameraDistance(this.cameraDistance * scale);
    }

    public animateRotation() {
        // todo: add animation for all dimensions
    }
}
