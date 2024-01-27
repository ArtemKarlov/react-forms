export const sendFormData = (data: object) => {
  const response = new Promise<boolean>((resolve) => {
    setTimeout(() => {
      console.log(JSON.stringify(data, null, 2));
      resolve(true);
    }, 3000);
  });

  return response;
};
