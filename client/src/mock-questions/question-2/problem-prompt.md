Question: Explain a scenario where useMemo and useCallback hooks would be useful and how they can help improve the performance of a React application. Can you illustrate your explanation with a code example?

Expected Answer:
useMemo and useCallback are hooks provided by React to help optimize performance for expensive calculations and functions that depend on specific props or state.

useMemo: This hook memoizes the result of a function and only re-computes the result if the dependencies of the function change.

useCallback: This hook returns a memoized version of the callback function that only changes if one of the dependencies has changed.

In both examples, using useMemo and useCallback help to avoid unnecessary computations or re-renders when other parts of the component update, which in turn helps to improve the performance of the application.


NOTE: need more clarity, better explanation.