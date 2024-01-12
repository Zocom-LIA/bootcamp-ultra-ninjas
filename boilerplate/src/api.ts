export interface ApiSubmission {
  data: object;
  method: string;
  link: string;
}

export async function submitToApi(data: object | undefined | number, method: string, link: string) {
  try {
    // const { data, method, link } = submission;

    const response = await fetch(`https://mv5azwzlp9.execute-api.eu-north-1.amazonaws.com${link}`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        // "Access-Control-Allow-Origin": "http://localhost:5173/",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log("RESULT:", result);

    return result;
  } catch (error) {
    console.error(error);
  }
}
