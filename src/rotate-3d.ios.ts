import { axisProperty, cameraDistanceProperty, Common } from './rotate-3d.common';
import { screen } from 'tns-core-modules/platform';

export class Rotate3D extends Common {
    _hasTransfrom;
    _suspendCATransaction;
    _suspendNativeUpdatesCount;

    updateNativeTransform() {
        const scaleX = this.scaleX || 1e-6;
        const scaleY = this.scaleY || 1e-6;
        let rotate = this.rotate || 0;
        let rotateAxis = {x: 0, y: 0, z: 0};

        switch (this.axis.toUpperCase()) {
            case 'X':
                rotateAxis.x = this.cameraDistance;
                break;
            case 'Y':
                rotateAxis.y = this.cameraDistance;
                break;
            case 'Z':
                rotateAxis.z = this.cameraDistance;
                break;
        }

        let scale = screen.mainScreen.scale;
        // todo: enhance this equation
        const perspective = this.cameraDistance / (2 * scale);
        let transform = CATransform3DIdentity;
        transform.m34 = -1 / perspective;
        transform = CATransform3DTranslate(transform, this.translateX, this.translateY, 0);
        transform = CATransform3DRotate(transform, Rotate3D.degToRad(rotate), rotateAxis.x, rotateAxis.y, rotateAxis.z);
        transform = CATransform3DScale(transform, scaleX, scaleY, 1);
        this.ios.layer.transform = transform;
        if (!CATransform3DEqualToTransform(this.ios.layer.transform, transform)) {
            const updateSuspended = this._isPresentationLayerUpdateSuspeneded();
            if (!updateSuspended) {
                CATransaction.begin();
            }
            this.ios.layer.transform = transform;
            this._hasTransfrom = this.nativeViewProtected && !CATransform3DEqualToTransform(this.nativeViewProtected.layer.transform, CATransform3DIdentity);
            if (!updateSuspended) {
                CATransaction.commit();
            }
        }
    }

     _isPresentationLayerUpdateSuspeneded() {
        return this._suspendCATransaction || this._suspendNativeUpdatesCount;
    }

    [axisProperty.setNative](value?: string) {
        if(value && this.ios) {
            this.axis = value;
            this.updateNativeTransform();
        }
    }

    [cameraDistanceProperty.setNative](value?: number) {
        if(value && this.ios) {
            this.cameraDistance = Math.abs(value);
            this.updateNativeTransform();
        }
    }

    public animateRotation() {
        // todo: add animation for all dimensions
    }
}
