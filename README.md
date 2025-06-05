# JSON Update Component Example

This repository demonstrates a simple component that updates the DOM based on JSON changes. Only the changed parts of the page are updated; elements that stay the same are not reloaded.

## Files

- `index.html` – demo page that loads the component and shows an automatic update after two seconds.
- `updateComponent.js` – contains the `JSONUpdater` class that uses `fast-json-patch` (included as `fast-json-patch.min.js`) to detect changes and update the DOM accordingly.

## Usage

Open `index.html` in a browser. The page will display a fruit list that gets partially updated after two seconds. Only the modified list items are replaced.

The component can be reused by calling `component.setState(newState)` with new JSON data.
