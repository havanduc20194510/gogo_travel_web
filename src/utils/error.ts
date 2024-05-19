type CustomError = {
  code: number;
  message: string;
};

type ErrorWithResponse = {
  data: any;
  response: {
    [x: string]: any;
    message: string;
  };
};

// Type guard to check if the error is of type ErrorWithResponse
const isErrorWithResponse = (error: unknown): error is ErrorWithResponse => {
  return (
    typeof error === "object" &&
    error !== null &&
    "response" in error &&
    typeof (error as ErrorWithResponse).response.message === "string"
  );
};
