import { FocusEvent, ReactNode } from 'react';
import { useTabsContext } from './TabsContext';

type TabListPropTypes = {
  children?: ReactNode;
  tabsName: string;
}

const TabsList = ({children, tabsName="Tabs"}: TabListPropTypes) => {
  const { orientation, selectedTabId } = useTabsContext();
  
  const onFocus = (event: FocusEvent<HTMLDivElement>) => {
    console.log(selectedTabId)
    // needs to see where the event has come from? if it's come from the tabs then what?
  }
  
  return (
    <div
      aria-label={tabsName}
      aria-orientation={orientation}
      role="tablist"
      // tabIndex={0}
      onFocus={onFocus}
    >
      {children}
    </div>
  );
}

export default TabsList;