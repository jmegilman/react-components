import { ReactNode } from 'react';
import TabsButton from './TabsButton'
import TabsContent from './TabsContent'
import TabsList from './TabsList'
import { TabsContextProvider } from './TabsContext'
import './Tabs.css'

// Tabs output and keyboard control as per https://www.w3.org/TR/wai-aria-practices-1.2/#tabpanel
// orientation available as prop - vertical uses up/down keys rather than left/right

// Possible Improvements:
// 1. Allow disabled tabs - currently if the first tab is disabled, you can't tab into the tabslist from the previous DOM element
// 2. Provide callback to control tabs on tab focus
// 3. Provide styled component example

type RootPropTypes = {
  children?: ReactNode;
  defaultTabId?: string;
  orientation?: "horizontal" | "vertical" | undefined;
};

const Root = ({defaultTabId, children, orientation="horizontal"}: RootPropTypes) => {
  
  return (
    <TabsContextProvider defaultTabId={defaultTabId} orientation={orientation}>
      {children}
    </TabsContextProvider>
  )
};

export {Root, TabsButton, TabsContent, TabsList};