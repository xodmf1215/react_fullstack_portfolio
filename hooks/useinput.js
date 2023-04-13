import { useState, useCallback } from 'react';

export default (initialValue = null) => {
  const [value, setValue ] = useState(initialValue);
  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  const getValue = () => {
    return value;
  }
  return [value, handler, getValue];
}