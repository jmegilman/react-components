import * as Tabs from './';
// Example output is from https://w3c.github.io/aria-practices/examples/tabs/tabs-1/tabs.html

const TabsExample = () => {
  return (
    <Tabs.Root defaultTabId='nils'>
      <Tabs.TabsList tabsName="Example Tabs">
        <Tabs.TabsButton
          id="nils"
          text="Nils Frahm"
        />
        <Tabs.TabsButton
          id="agnes"
          text="Agnes Obel"
        />
        <Tabs.TabsButton
          id="joke"
          text="Joke"
        />
      </Tabs.TabsList>
      <Tabs.TabsContent
        content={<p>Nils Frahm is a German musician, composer and record producer based in Berlin. He is known for combining classNameical and electronic music and for an unconventional approach to the piano in which he mixes a grand piano, upright piano, Roland Juno-60, Rhodes piano, drum machine, and Moog Taurus.</p>}
        id="nils"
      />
      <Tabs.TabsContent
        content={<p>Agnes Caroline Thaarup Obel is a Danish singer/songwriter. Her first album, Philharmonics, was released by PIAS Recordings on 4 October 2010 in Europe. Philharmonics was certified gold in June 2011 by the Belgian Entertainment Association (BEA) for sales of 10,000 Copies.</p>}
        id="agnes"
      />
      <Tabs.TabsContent
        content={<div><p>Fear of complicated buildings:</p>
        <p>A complex complex complex.</p></div>}
        id="joke"
      />
    </Tabs.Root>
  )
}

export default TabsExample;