import { createContext, ReactNode, useContext, useState } from 'react';

interface TabsContextDefaultValueType {
  addTriggerToContext(trigger: HTMLButtonElement | null): void;
  handleTriggerKeyDown(e: React.KeyboardEvent<HTMLButtonElement>): void;
  orientation: "horizontal" | "vertical" | undefined;
  selectedTabId?: string;
  setSelectedTabId(id: string): void;
}

const TabsContext = createContext<
  TabsContextDefaultValueType | undefined
>(undefined);

type TabsContextProviderPropTypes = {
  children?: ReactNode;
  defaultTabId?: string;
  orientation: "horizontal" | "vertical" | undefined;
}

const TabsContextProvider = (props: TabsContextProviderPropTypes) => {
  const { defaultTabId, orientation} = props;
  const [selectedTabId, setSelectedTabId] = useState(defaultTabId)
  const [triggers, setTriggers] = useState(new Array<HTMLButtonElement>());
  
  const addTriggerToContext = (trigger: HTMLButtonElement | null) => {
    const isDisabled = typeof trigger?.getAttribute('disabled') === 'string';
    if(trigger && !isDisabled) {
      setTriggers(triggers => [...triggers, trigger]);
    }
  }
  
  const handleTriggerKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    const trigger = e.currentTarget as HTMLButtonElement;
    const currentTriggerIndex = triggers.indexOf(trigger);
    
    if(triggers.length > 1 && currentTriggerIndex !== -1) {
      // @ts-nocheck
      const availableKeys = {
        'Home': 0,
        'End': triggers.length - 1
      }
      const directionToTriggerIndex = orientation === "vertical" ? 
        {
          ArrowUp: currentTriggerIndex - 1,
          ArrowDown: currentTriggerIndex + 1,
          ...availableKeys
        }
        :
        {
          ArrowLeft: currentTriggerIndex - 1,
          ArrowRight: currentTriggerIndex + 1,
          ...availableKeys
        };
      // @ts-ignore
      const nextTriggerIndex = directionToTriggerIndex[e.key];
      const nextTrigger = triggers[nextTriggerIndex];
      
      if(nextTrigger) {
        nextTrigger.focus(); 
      } else {
        // nextTrigger is before start or past end of triggers
        // Before start go to end
        // Past end go to the start
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        nextTriggerIndex > triggers.length - 1 ? triggers[0].focus() : nextTriggerIndex < 0 ? triggers[triggers.length - 1].focus() : null;
      }
    }
  }
  
  const value = {
    orientation,
    selectedTabId,
    setSelectedTabId,
    addTriggerToContext,
    handleTriggerKeyDown
  };
  
  return (
    <TabsContext.Provider value={value} {...props}></TabsContext.Provider>
  )
}

const useTabsContext = () => {
  const context = useContext(TabsContext);
  if(context === undefined) {
    throw new Error("useTabsContext must be used within the TabsContextProvider")
  }
  return context;
}

export {TabsContextProvider, useTabsContext}