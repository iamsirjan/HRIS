export type ErrorResponse = {
  response: {
    data: {
      message: string;
      statusCode: number;
    };
  };
};

export type SuccessResponse<T> = {
  message: string;
  statusCode: number;
  data: T;
};
