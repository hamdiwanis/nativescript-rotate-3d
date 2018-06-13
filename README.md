# NativeScript Rotate3D

This is a nativescript plugin to add 3d rotaion (i.e around X, Y and Z).

<img src="https://github.com/hamdiwanis/nativescript-rotate-3d/raw/master/screenshots/demo.png" height="364px" />

## Installation
```bash
tns plugin add nativescript-rotate-3d
```

### Example

```
<Rotate3D rotate="40" axis="Y" cameraDistance="2000">
     /* Whatever you want */
</Rotate3D>
```

### Angular
Add this to `app.module.ts` so you can use a `Gradient` tag in the view:

```typescript
import { registerElement } from "nativescript-angular";
registerElement("Rotate3D", () => require("nativescript-rotate-3d").Rotate3D);
```

## Usage

Since we're subclassing `StackLayout`, you can add `<Rotate3D>` to your view at any place where you'd otherwise use a `StackLayout`.

In addition to any properties you can already set on a `StackLayout` you should add:

|Param| Description | default|
|---|---|---|
|rotateAxis| the axis whic the view will rotate around (X, Y, Z)| Z
|cameraDistance| the distance between the view and view camera| 2000 |

## Next
- [x] implement rotaion in X, Y, Z.
- [ ] handel animation using view animate method.
- [ ] improve procpective relation between ios and android.

## Contribute
if you want to help improve the plugin you can consider it yours and make as PRs as you want :)

## Get Help
Please, use [github issues](https://github.com/hamdiwanis/nativescript-rotate-3d/issues) strictly for [reporting bugs](CONTRIBUTING.md#reporting-bugs) or [requesting features](CONTRIBUTING.md#requesting-new-features).

## Contact
Twitter: [hamdiwanis](https://twitter.com/hamdiwanis)  \
Email: hamdiwanis@hotmail.com