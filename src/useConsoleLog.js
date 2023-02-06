import { useEffect } from "react";

function useConsoleLog(varName) {
  useEffect(() => {
    console.log(varName);
  });
}

export default useConsoleLog;