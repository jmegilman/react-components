import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import TabsExample from './components/Pixools/Tabs/TabsExample';

// TODO: colocate this with the Tabs component: see error when you try to do so
describe("Tabs Component", () => {
  const setup = () => render(<TabsExample />);

  test('renders the tabs example with at least one tab and one tabpanel', () => {
    // Arrange
    setup();
    const tabs = screen.getAllByRole("tab");
    const tabPanels = screen.getAllByRole("tabpanel");
    
    // Assert
    expect(tabs[0]).toBeInTheDocument()
    expect(tabPanels[0]).toBeInTheDocument()
    expect(tabPanels[0]).toHaveTextContent(/Nils Frahm is a German musician/i)
  });
  
  test('tabpanel content changes on tab click', () => {
    // Arrange
    setup();
    const tabs = screen.getAllByRole("tab");
    const tabPanels = screen.getAllByRole("tabpanel")
    
    // Act
    userEvent.click(tabs[1]);
    
    // Assert
    expect(tabPanels[1]).not.toHaveClass("is-hidden")
    expect(tabPanels[0]).toHaveClass("is-hidden")
  });
  
  test('tabs can be navigated using keyboard', () => {
    // Arrange
    setup();
    const tabs = screen.getAllByRole("tab");
    const tabPanels = screen.getAllByRole("tabpanel")
    // Think it would be better to use something like isVisible but this isn't working for me
    // Because the existence of a CSS className doesn't mean the user can't see the element (e.g. if the CSS is incorrect/not loaded)
    const isHiddenClass = "is-hidden"
    
    tabs[0].focus()
    
    expect(tabs[0]).toHaveFocus();
    expect(tabPanels[1]).toHaveClass(isHiddenClass)
    expect(tabPanels[2]).toHaveClass(isHiddenClass)
    
    userEvent.type(tabs[0], '{arrowRight}', {skipClick: true})
    
    expect(tabPanels[0]).toHaveClass(isHiddenClass)
    expect(tabPanels[1]).not.toHaveClass(isHiddenClass)
    
    userEvent.type(tabs[1], '{arrowRight}',)
    
    expect(tabPanels[1]).toHaveClass(isHiddenClass)
    expect(tabPanels[2]).not.toHaveClass(isHiddenClass)
    
    userEvent.type(tabs[2], '{home}')
    
    expect(tabPanels[0]).not.toHaveClass(isHiddenClass)
    expect(tabPanels[2]).toHaveClass(isHiddenClass)
    
    userEvent.type(tabs[0], '{end}')
    
    expect(tabPanels[2]).not.toHaveClass(isHiddenClass)
    expect(tabPanels[0]).toHaveClass(isHiddenClass)
    expect(tabPanels[1]).toHaveClass(isHiddenClass);
  });
})
