export const getAllTests = async (req, res) => {
  return res.json({
    success: true,
    tests: [
      {
        id: 45252,
        name: 'Test',
      },
    ],
  });
};

export const getTest = async (req, res) => {
  return res.json({
    success: true,
    test: {
      id: 45252,
      name: 'Test',
    },
  });
};
