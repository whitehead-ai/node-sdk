test("answer API", async () => {
  const input = "Which fruits can be worn on top of a kimono?";
  const context = "Some fruits, like bananas, can be worn on top of a kimono.";

  const {
    callAnswer: { result },
  } = await client.api.answer({
    input,
    context,
  });

  expect(result).toBe("bananas");
});
