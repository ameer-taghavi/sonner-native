"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[963],{2514:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=s(4848),i=s(8453);const l={sidebar_position:2},a="toast()",o={id:"toast",title:"toast()",description:"toast() is used to display a toast message. It can be used outside of React.",source:"@site/docs/toast.md",sourceDirName:".",slug:"/toast",permalink:"/react-native-reanimated-toasts/toast",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Introduction",permalink:"/react-native-reanimated-toasts/"},next:{title:"Toaster",permalink:"/react-native-reanimated-toasts/Toaster"}},r={},c=[{value:"Basic toast",id:"basic-toast",level:2},{value:"Variations",id:"variations",level:2},{value:"Success Toast",id:"success-toast",level:3},{value:"Error",id:"error",level:3},{value:"Action",id:"action",level:3},{value:"Promises",id:"promises",level:3},{value:"Custom JSX",id:"custom-jsx",level:3},{value:"Other",id:"other",level:2},{value:"Updating existing toasts",id:"updating-existing-toasts",level:3},{value:"Callbacks",id:"callbacks",level:3},{value:"Infinite toasts",id:"infinite-toasts",level:3},{value:"Dismissing toasts",id:"dismissing-toasts",level:3},{value:"API Reference",id:"api-reference",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"toast",children:"toast()"})}),"\n",(0,n.jsx)(t.p,{children:"toast() is used to display a toast message. It can be used outside of React."}),"\n",(0,n.jsx)(t.h2,{id:"basic-toast",children:"Basic toast"}),"\n",(0,n.jsx)(t.p,{children:"To display a simple toast message, use the toast() function. You can pass a title and optional settings."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",children:"import { toast } from 'react-native-reanimated-toasts';\n\ntoast('This is a basic toast message.');\n"})}),"\n",(0,n.jsx)(t.p,{children:"Alternatively, you can pass an object as the second argument with additional options, which will override any options provided to the Toaster component if specified."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",children:"import { toast } from 'react-native-reanimated-toasts';\n\ntoast.success('Operation successful!', {\n  className: 'bg-green-500',\n  style: { backgroundColor: 'blue'\xa0}\n  description: 'Everything worked as expected.',\n  duration: 6000,\n  icon: <SomeIcon />\n});\n"})}),"\n",(0,n.jsx)(t.h2,{id:"variations",children:"Variations"}),"\n",(0,n.jsx)(t.h3,{id:"success-toast",children:"Success Toast"}),"\n",(0,n.jsx)(t.p,{children:"The toast.success() function allows you to display a success message. By default, it renders a checkmark icon in front of the message."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",children:"toast.success('My success toast');\n"})}),"\n",(0,n.jsx)(t.h3,{id:"error",children:"Error"}),"\n",(0,n.jsx)(t.p,{children:"Use the toast.error() function to display an error message. By default, it renders a X icon in front of the message."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",children:"toast.error('My error toast');\n"})}),"\n",(0,n.jsx)(t.h3,{id:"action",children:"Action"}),"\n",(0,n.jsxs)(t.p,{children:["Renders an action button with a callback function. The action object should contain a label and an ",(0,n.jsx)(t.code,{children:"onClick"})," function. The action and its label can be customized with the ",(0,n.jsx)(t.code,{children:"actionButtonStyles"})," and ",(0,n.jsx)(t.code,{children:"actionButtonTextStyles"})," params, respectively."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",children:"toast('My action toast', {\n  action: {\n    label: 'Action',\n    onClick: () => console.log('Action!'),\n  },\n});\n"})}),"\n",(0,n.jsx)(t.h3,{id:"promises",children:"Promises"}),"\n",(0,n.jsx)(t.p,{children:"The toast.promise function can be used to display a toast message while a promise is in progress, and update the message based on the promise's success or failure."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",children:"const fetchData = async () => {\n  try {\n    const data = await fetch('/api/data');\n    return data;\n  } catch (error) {\n    throw new Error('Failed to fetch data');\n  }\n};\n\nconst toastId = toast.promise(fetchData(), {\n  loading: 'Loading data...',\n  success: (data) => `Data loaded: ${data}`,\n  error: 'Error fetching data',\n});\n"})}),"\n",(0,n.jsx)(t.p,{children:'In this example, the toast.promise function will display a "Loading data..." message while the fetchData promise is in progress, and update the message to the success or error text based on the promise\'s outcome.'}),"\n",(0,n.jsx)(t.h3,{id:"custom-jsx",children:"Custom JSX"}),"\n",(0,n.jsx)(t.p,{children:"You can pass custom JSX elements to the toast function to render more complex content:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",children:'toast.custom(\n  <View>\n    <Text>Custom toast content</Text>\n    <Button title="Close" onPress={() => toast.dismiss()} />\n  </View>\n);\n'})}),"\n",(0,n.jsx)(t.h2,{id:"other",children:"Other"}),"\n",(0,n.jsx)(t.h3,{id:"updating-existing-toasts",children:"Updating existing toasts"}),"\n",(0,n.jsx)(t.p,{children:"You can update an existing toast by using the toast function, passing the toast ID in the options object:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",children:"const id = toast('Hello');\n\ntoast.success('Updated!', {\n  id,\n});\n"})}),"\n",(0,n.jsx)(t.h3,{id:"callbacks",children:"Callbacks"}),"\n",(0,n.jsxs)(t.p,{children:["There are two callbacks, ",(0,n.jsx)(t.code,{children:"onAutoClose"})," and ",(0,n.jsx)(t.code,{children:"onDismiss"}),", that can be used to execute code when the toast is auto-closed (after the duration timeout) or manually dismissed, respectively."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",children:"toast('Hello', {\n  onAutoClose: () => console.log('Auto-closed!'),\n  onDismiss: () => console.log('Manually dismissed!'),\n});\n"})}),"\n",(0,n.jsx)(t.h3,{id:"infinite-toasts",children:"Infinite toasts"}),"\n",(0,n.jsxs)(t.p,{children:["Pass ",(0,n.jsx)(t.code,{children:"duration"})," as ",(0,n.jsx)(t.code,{children:"Infinity"})," to make the toast stay until manually dismissed:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",children:"toast('Hello', {\n  duration: Infinity,\n});\n"})}),"\n",(0,n.jsx)(t.h3,{id:"dismissing-toasts",children:"Dismissing toasts"}),"\n",(0,n.jsx)(t.p,{children:"To dismiss a toast, call toast.dismiss with the toast ID:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",children:"const id = toast('Hello');\n\ntoast.dismiss(id);\n"})}),"\n",(0,n.jsx)(t.p,{children:"You can also dismiss all toasts by calling toast.dismiss() without an ID:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",children:"toast('Hello');\ntoast('World');\n\ntoast.dismiss();\n"})}),"\n",(0,n.jsx)(t.h2,{id:"api-reference",children:"API Reference"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Description"}),(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Default"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"description"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Toast's description, renders underneath the title."}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:(0,n.jsx)(t.code,{children:"-"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"closeButton"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Adds a close button."}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:(0,n.jsx)(t.code,{children:"false"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"invert"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Dark toast in light mode and vice versa."}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:(0,n.jsx)(t.code,{children:"false"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"important"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Control the sensitivity of the toast for screen readers"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:(0,n.jsx)(t.code,{children:"false"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"duration"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Time in milliseconds that should elapse before automatically closing the toast."}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:(0,n.jsx)(t.code,{children:"4000"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"position"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Position of the toast."}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:(0,n.jsx)(t.code,{children:"top-center"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"dismissible"}),(0,n.jsxs)(t.td,{style:{textAlign:"center"},children:["If ",(0,n.jsx)(t.code,{children:"false"}),", it'll prevent the user from dismissing the toast."]}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:(0,n.jsx)(t.code,{children:"true"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"icon"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Icon displayed in front of toast's text, aligned vertically."}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:(0,n.jsx)(t.code,{children:"-"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"action"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Renders a primary button, clicking it will close the toast."}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:(0,n.jsx)(t.code,{children:"-"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"id"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Custom id for the toast."}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:(0,n.jsx)(t.code,{children:"-"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"onDismiss"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"The function gets called when either the close button is clicked, or the toast is swiped."}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:(0,n.jsx)(t.code,{children:"-"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"onAutoClose"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Function that gets called when the toast disappears automatically after it's timeout (duration` prop)."}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:(0,n.jsx)(t.code,{children:"-"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"unstyled"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Removes the default styling, which allows for easier customization."}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:(0,n.jsx)(t.code,{children:"false"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"actionButtonStyles"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Styles for the action button"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:(0,n.jsx)(t.code,{children:"{}"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"cancelButtonStyles"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Styles for the cancel button"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:(0,n.jsx)(t.code,{children:"{}"})})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>o});var n=s(6540);const i={},l=n.createContext(i);function a(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);