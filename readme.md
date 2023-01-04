https://firstwhack.github.io/react-shadow-dnd-example/

### CSS sources
Non-shadow CSS included via standard import from [styles.css](./src/styles.css)

Shadow CSS included via style tag and importing CSS as a string to simulate styles fetched async at runtime (in real world this is an API call). These come from [Shadow.module.css](./src/Shadow.module.css)

### What is on my screen?
Both Blenders are `.blender`, neither's styles are applied to the other (some styles are duplicated for consistency). The Purple border is the `.blender` style from Shadow.module.css, it is visible only on the [Blender that lives in the shadow root](./src/Example.tsx#L20).

You may drag the Blenders onto each other even though one lives in normal DOM and one in our Shadow DOM.
