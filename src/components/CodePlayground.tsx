"use client";
import React from "react";
import { githubLight, nightOwl } from "@codesandbox/sandpack-themes";
import {
    SandpackProvider,
    SandpackLayout,
    SandpackCodeEditor,
    SandpackPreview,
} from "@codesandbox/sandpack-react";

import PreviewHeader from "./PreviewHeader";

type Props = {
  isWhite?: boolean;
  customFiles?: { [key: string]: { code: string } };
  dependencies?: { [key: string]: string };
  devDependencies?: { [key: string]: string };
};

const defaultFiles = {
  "/App.tsx": {
    code: `
      import React from 'react';

      function App() {
        return (
          <div>Hello World!</div>
        );
      }

      export default App;
    `,
  },
  "/index.tsx": {
    code: `
        import React from 'react';
        import { createRoot } from 'react-dom/client';
        import App from './App';

        const container = document.getElementById('root');
        const root = createRoot(container);

        root.render(
            <React.StrictMode>
                <App />
            </React.StrictMode>
        );
    `,
  },
};

const buttons = [
    {
        label: "Submit",
        handleClick: () => console.log("Submit code"),
        theme: "normal"
    }
]

const CodePlayground = (props: Props) => {
  const {
    isWhite = false,
    customFiles = {},
    dependencies = {},
    devDependencies = {}
  } = props;
  const files = { ...defaultFiles, ...customFiles };

  return (
    <div className="h-full w-full bg-black">
      <SandpackProvider
        theme={isWhite ? githubLight : nightOwl}
        template="react-ts"
        files={files}
        customSetup={{
          dependencies,
          devDependencies,
        }}
      >
        <SandpackLayout 
        >
          <SandpackCodeEditor
            showTabs
            showLineNumbers
          />
          <PreviewHeader
              buttons={buttons}
          />
          <SandpackPreview />
        </SandpackLayout>
      </SandpackProvider>
    </div>

  );
};

export default CodePlayground;
