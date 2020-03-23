# react-lazy-load-components
This is a demo app on how to lazy loading components in React

Using `React.lazy()` and `<Suspense />` you can lazy load components. Lazy loading components will make your apps more mobile friendly.
When you have two different versions of headers; one for desktop and one for mobile, you don't have to load the desktop header at all for mobile users.
If a user is visiting your app from a desktop, you can lazy load the desktop header component and render it.
