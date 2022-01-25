import { useEffect, useRef, useState } from "react";

// 1. Allows custom serialize/deserialize options
// 2. Allows function as defaultValue for optimisation
// 3. Allow user to change the key

function useLocalStorageState(
  key,
  defaultValue = "",
  { serialize = JSON.stringify, deserialize = JSON.parse } = {} // 2. options object
) {
  const [state, setState] = useState(() => {
    const valueFromLocalStorage = window.localStorage.getItem(key);
    if (valueFromLocalStorage) {
      return deserialize(valueFromLocalStorage);
    }

    // 2.
    return typeof defaultValue === "function" ? defaultValue() : defaultValue;
  });

  // 3.
  const prevKeyRef = useRef(key);

  useEffect(() => {
    if (prevKeyRef.current !== key) {
      window.localStorage.remove(prevKeyRef.current);
    }

    prevKeyRef.current = key;
    window.localStorage.setItem(key, serialize(state));
  }, [serialize, state, key]);

  return [state, setState];
}

const ExampleUseLocalStorageState = () => {
  const [name, setName] = useLocalStorageState("name");

  return (
    <>
      <h2>
        Example using useLocalStorageState custom hook (inspect the Application
        &gt; Local Storage settings in the browser console)
      </h2>
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      <p>The value of name is: {name}</p>
    </>
  );
};

export { ExampleUseLocalStorageState, useLocalStorageState };
