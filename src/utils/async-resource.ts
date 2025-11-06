import { setTracked } from "../helpers.ripple";
import { track } from "ripple";

/**
 * creates an async resource that manages loading state, data, and error handling.
 */
export function asyncResource<T>(fetcher: () => Promise<T>) {
  const data = track<T>();
  const isLoading = track(false);
  const error = track<Error>();

  async function run() {
    setTracked(data, undefined);
    setTracked(isLoading, true);
    setTracked(error, null);

    try {
      const res = await fetcher();
      setTracked(data, res);
    } catch (err: any) {
      setTracked(error, err);
    } finally {
      setTracked(isLoading, false);
    }
  }

  run();

  return {
    data,
    isLoading,
    error,
    refetch: run,
  };
}
