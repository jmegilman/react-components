import { useTabsContext } from "./TabsContext";

const TabsContent = (props: {content: JSX.Element, id: string}) => {
  const {id, content} = props;
  const {selectedTabId} = useTabsContext()
  return (
    <div
      tabIndex={0}
      role="tabpanel"
      aria-labelledby={id}
      className={`${selectedTabId === id ? "" : "is-hidden"}`}>
      {content}
    </div>
  )
}

export default TabsContent;