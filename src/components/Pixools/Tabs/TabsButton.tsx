import { useEffect, useRef } from 'react';
import { useTabsContext } from './TabsContext'

type ButtonProps = {
  id: string;
  text: string;
}

const TabsButton: React.FC<ButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  id,
  text,
  ...props
}) => {
  const {
    addTriggerToContext,
    handleTriggerKeyDown,
    selectedTabId,
    setSelectedTabId,
  } = useTabsContext();
  
  const triggerRef = useRef<HTMLButtonElement>(null);
  const isSelected = selectedTabId === id;
  
  useEffect(() => {
    if(props.disabled && isSelected) {
      throw new Error("Pixools Tabs: A disabled tab can't be set as the defaultTabId for the Tabs.Root defaultTabId prop")
    }
  }, [isSelected, props.disabled]);
  
  useEffect(() => {
    addTriggerToContext(triggerRef.current);
  }, []);
  
  const onClickTab = () => {
    triggerRef?.current?.focus();
  }
  
  const onFocusTab = (e: React.FocusEvent<HTMLButtonElement>, id: string) => {
    e.stopPropagation();
    setSelectedTabId(id)
  }
  
  const onKeyDownTrigger = (
    e: React.KeyboardEvent<HTMLButtonElement> 
  ) => {
    handleTriggerKeyDown(e);
  }
  
  return (
    <button
      aria-selected={isSelected}
      aria-controls={id}
      onClick={onClickTab}
      onFocus={(e) => onFocusTab(e, id)}
      tabIndex={isSelected && !props.disabled ? 0 : -1}
      type="button"
      ref={triggerRef}
      role="tab"
      onKeyDown={(e) => onKeyDownTrigger(e)}
      className={`${isSelected ? 'is-selected' : ''} pixools-tab-button`}
      {...props}
    >
      {text}
    </button>
  )
}

export default TabsButton;